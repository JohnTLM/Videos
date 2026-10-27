import json,glob,subprocess
d=json.load(open("para-times.json")); ss=json.load(open("sent-sil.json"))
vid={"intro":"8d4279e2","S1":"578a9146","S2":"af84848d","S3":"55ec6994","S4":"36c40b86","S5":"7198900b","S6":"c23b2886","S7":"0539bcaa","S8":"18894b55"}
dur={k:float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",glob.glob(f"logic-videos/{v}*.mp4")[0]],capture_output=True,text=True).stdout) for k,v in vid.items()}
cut={"intro":set(range(19,47)),"S2":{1,16,17,18},"S3":{1,9},"S4":{1,14},"S5":{1,13,20},"S6":{1,16},"S7":{19},"S8":{1,14}}
trim={k:(v[0]+v[1][3][1]-0.12) for k,v in ss.items()}   # new start of the "This is the Nth step" paragraph
tp={"S1":3,"S2":3,"S3":3,"S4":2,"S5":3,"S6":3,"S7":2,"S8":2}
def ranges(k, paras, with_title, with_tail):
    P={x["p"]:x for x in d[k]}
    out=[]; last=None
    if with_title: out.append([0.0, P[1]["start"]-0.45]); last=0
    for p in paras:
        a=P[p]["start"]-0.45; b=P[p]["end"]+0.45
        if k in tp and p==tp[k]: a=trim[k]
        if with_tail and p==max(paras): b=dur[k]
        if out and last==p-1 and not (k in tp and p==tp[k]): out[-1][1]=b
        else: out.append([a,b])
        last=p
    return out
plan=[]
plan.append(("intro",ranges("intro",[p for p in range(1,19)],True,False)))
for i in range(1,9):
    k=f"S{i}"; keep=[x["p"] for x in d[k] if x["p"] not in cut.get(k,set())]
    plan.append((k,ranges(k,keep,True,i<8)))
plan.append(("intro",ranges("intro",[47,48],False,True)))
json.dump(plan,open("full-plan.json","w"),indent=1)
import os
os.makedirs("segs",exist_ok=True)
lst=[]; n=0
for bi,(k,rs) in enumerate(plan):
    f=glob.glob(f"logic-videos/{vid[k]}*.mp4")[0]
    for ri,(a,b) in enumerate(rs):
        L=b-a; vf=[]
        if ri==0 and bi>0 and a>0.5: vf.append("fade=in:st=0:d=0.4")
        if ri==len(rs)-1 and b<dur[k]-0.5: vf.append("fade=out:st=%.3f:d=0.4"%(L-0.4))
        af="afade=in:st=0:d=0.04,afade=out:st=%.3f:d=0.04"%(L-0.04)
        out=f"segs/{n:03d}.mp4"
        cmd=["ffmpeg","-y","-ss","%.3f"%a,"-i",f,"-t","%.3f"%L]+(["-vf",",".join(vf)] if vf else [])+["-af",af,"-c:v","libx264","-crf","22","-preset","medium","-pix_fmt","yuv420p","-r","30","-c:a","aac","-b:a","160k","-ar","48000","-ac","2",out]
        subprocess.run(cmd,check=True,stderr=subprocess.DEVNULL); lst.append(f"file '{out}'"); n+=1
open("segs.txt","w").write("\n".join(lst)+"\n")
tot=sum(b-a for _,rs in plan for a,b in rs); print(n,"segments, total",round(tot/60,2),"min")
subprocess.run(["ffmpeg","-y","-f","concat","-safe","0","-i","segs.txt","-c","copy","-movflags","+faststart","the-logic-full.mp4"],check=True,stderr=open("full-ffmpeg.log","w"))
print("done")
