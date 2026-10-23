import subprocess, time
segs=[("main",0,374.10),("second",291.47,306.83),("main",374.10,422.90),("second",204.03,241.47),("second",369.63,437.10),
      ("main",422.90,492.07),("second",350.20,359.57),("main",492.07,532.60),("second",520.30,557.40)]
t0=time.time(); lst=[]
for i,(s,a,b) in enumerate(segs):
    d=b-a; vf="fps=30,format=yuv420p"
    if i==7: vf+=f",fade=t=out:st={d-0.4:.2f}:d=0.4"
    af=f"afade=t=in:d=0.02,afade=t=out:st={d-0.04:.2f}:d=0.04"
    o=f"out/seg/{i}.mkv"; lst.append(f"file 'seg/{i}.mkv'")
    subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y","-ss",f"{a}","-i",f"src/{s}.mp4","-t",f"{d:.3f}",
        "-vf",vf,"-af",af,"-c:v","libx264","-preset","medium","-crf","19","-g","60","-c:a","pcm_s16le","-ar","44100","-ac","1",o],check=True)
    print(f"seg {i} done {time.time()-t0:.0f}s",flush=True)
open("out/list.txt","w").write("\n".join(lst)+"\n")
subprocess.run(["ffmpeg","-hide_banner","-loglevel","error","-y","-f","concat","-safe","0","-i","out/list.txt",
    "-c:v","copy","-af","loudnorm=I=-16:TP=-1.5:LRA=11,aresample=44100","-c:a","aac","-b:a","128k","-ac","1",
    "-movflags","+faststart","out/combined.mp4"],check=True)
print(f"all done {time.time()-t0:.0f}s")
