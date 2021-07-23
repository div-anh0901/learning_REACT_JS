import { useRef,useEffect } from "react";
import useSound from 'use-sound';
import play from '../sounds/src_sounds_play.mp3';
export default function Start({setUsername}) {
  const inputRef = useRef();
  const [letsPlay] = useSound(play);
  const handleClick =()=>{
    inputRef.current.value &&  setUsername(inputRef.current.value);
  }

  return (
    <div className="start">
      <input
        placeholder="enter your username" 
        className="startInput" 
        ref={inputRef}
        />
      <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  );
}
