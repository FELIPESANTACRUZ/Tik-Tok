import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://webapp-va.tiktok.com/668f75458b588610aec87cd241b33567/642522fd/tos-useast2a-pve-0068/ogjfECAUIdIkQduC3tCskUmZypBz3zPYEKhoAg?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=1852&bt=926&cs=0&ds=6&ft=Ap6JtBiTq8Zmo2KeCc_vj~v_8AhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmNTo1OjM3OWY1ZWY8PDc7ZUBpMzY4ZzU6ZjRmajMzNzczM0BTbGt2aXFEOmpoXitiK2p0OiMzYTI1XmBhNS0xXi8zNTQ2YSMvNm9qcjRfcWZgLS1kMTZzcw%3D%3D&l=2023032923494389835D99F38F0A806D39&btag=80000&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNzE4MzU0NjQ0NTUwNDA1NDI3NyJ9"
      ></video>
    </div>
  );
}

export default Video;
