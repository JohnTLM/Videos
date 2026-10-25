import os, subprocess, time
SRC = "src/v2.mp4"  # the NotebookLM video, Carrierless_Continuity__Identity_Without_a_Bearer.mp4
END = 819.966
# (audio_in, audio_out, video_in): video_in > audio_in holds the first frame of the next shot over the gap
segs=[(0,224.00,0),(231.82,261.40,231.82),(268.60,743.90,268.60),(751.80,END,752.17)]
os.makedirs("out2/seg", exist_ok=True)
t0=time.time(); lst=[]
for i,(a,b,v) in enumerate(segs):
    d=b-a; pad=v-a; o=f"out2/seg/{i}.mkv"; lst.append(f"file 'seg/{i}.mkv'")
    vf="fps=30,format=yuv420p"+(f",tpad=start_mode=clone:start_duration={pad:.3f}" if pad>0 else "")
    af=f"afade=t=in:d=0.02,afade=t=out:st={d-0.04:.2f}:d=0.04"
    subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y",
        "-ss",f"{v}","-t",f"{d-pad:.3f}","-i",SRC,"-ss",f"{a}","-t",f"{d:.3f}","-i",SRC,
        "-map","0:v","-map","1:a","-vf",vf,"-af",af,"-c:v","libx264","-preset","medium","-crf","19","-g","60",
        "-c:a","pcm_s16le","-ar","44100","-ac","1",o],check=True)
    print(f"seg {i} {d:.2f}s done {time.time()-t0:.0f}s",flush=True)
open("out2/list.txt","w").write("\n".join(lst)+"\n")
subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y","-f","concat","-safe","0","-i","out2/list.txt",
    "-c:v","copy","-af","loudnorm=I=-16:TP=-1.5:LRA=11,aresample=44100","-c:a","aac","-b:a","128k","-ac","1",
    "-movflags","+faststart","out2/carrierless-continuity.mp4"],check=True)
print(f"all done {time.time()-t0:.0f}s")
