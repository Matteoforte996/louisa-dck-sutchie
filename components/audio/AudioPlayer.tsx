"use client";

import { Pause, Play } from "lucide-react";
import { useAudio } from "./AudioContext";


function formatTime(time: number) {

  if (!time || Number.isNaN(time)) {
    return "00:00";
  }


  const minutes = Math.floor(time / 60);

  const seconds = Math.floor(time % 60);


  return `${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

}



export default function AudioPlayer() {


  const {
    playing,
    currentTrack,
    currentTime,
    duration,
    toggleAudio,
  } = useAudio();




  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;




  const trackName =
    currentTrack
      .split("/")
      .pop()
      ?.replace(".MP3", "")
      ?.replace("-", " ") || "Voice Reel";





  return (

    <div className="
      rounded-2xl
      border
      border-neutral-800
      p-8
      bg-neutral-950
    ">


      <div className="flex items-center justify-between gap-6">


        <div>


          <p className="text-sm text-neutral-500 uppercase tracking-wider">
            Lecture
          </p>


          <p className="mt-2 text-xl font-medium capitalize">
            {trackName}
          </p>


        </div>




        <button

          onClick={toggleAudio}

          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            transition
            hover:scale-105
          "

        >

          {playing ? (
            <Pause size={22}/>
          ) : (
            <Play size={22}/>
          )}

        </button>


      </div>





      <div className="mt-8">


        <div className="
          h-1
          w-full
          overflow-hidden
          rounded-full
          bg-neutral-800
        ">


          <div

            className="
              h-full
              bg-white
              transition-all
            "

            style={{
              width: `${progress}%`,
            }}

          />


        </div>




        <div className="
          mt-3
          flex
          justify-between
          text-sm
          text-neutral-500
        ">


          <span>
            {formatTime(currentTime)}
          </span>


          <span>
            {formatTime(duration)}
          </span>


        </div>


      </div>



    </div>

  );

}