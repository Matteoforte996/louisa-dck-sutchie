"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
  useEffect,
} from "react";


type AudioContextType = {

  playing: boolean;

  currentTrack: string;

  currentTime: number;

  duration: number;

  playTrack: (track: string) => void;

  toggleAudio: () => void;

};



const AudioContext = createContext<AudioContextType | null>(null);



export function AudioProvider({

  children,

}: {

  children: ReactNode;

}) {


  const audioRef = useRef<HTMLAudioElement | null>(null);


  const [playing, setPlaying] = useState(false);


  const [currentTrack, setCurrentTrack] = useState(
    "/audio/voice-demo.MP3"
  );


  const [currentTime, setCurrentTime] = useState(0);


  const [duration, setDuration] = useState(0);





  useEffect(() => {


    const audio = audioRef.current;


    if (!audio) return;



    const updateTime = () => {

      setCurrentTime(audio.currentTime);

    };



    const updateDuration = () => {

      setDuration(audio.duration);

    };



    audio.addEventListener(
      "timeupdate",
      updateTime
    );


    audio.addEventListener(
      "loadedmetadata",
      updateDuration
    );



    return () => {

      audio.removeEventListener(
        "timeupdate",
        updateTime
      );


      audio.removeEventListener(
        "loadedmetadata",
        updateDuration
      );

    };


  }, []);






  function playTrack(track: string) {


    if (!audioRef.current) return;



    if (currentTrack === track && playing) {


      audioRef.current.pause();

      setPlaying(false);

      return;


    }




    if (currentTrack !== track) {


      audioRef.current.src = track;

      setCurrentTrack(track);


    }





    audioRef.current
      .play()
      .then(() => {

        setPlaying(true);

      })
      .catch(() => {

        setPlaying(false);

      });


  }





  function toggleAudio() {


    if (!audioRef.current) return;



    if (playing) {


      audioRef.current.pause();

      setPlaying(false);



    } else {


      audioRef.current
        .play()
        .then(() => {

          setPlaying(true);

        })
        .catch(() => {

          setPlaying(false);

        });


    }


  }





  return (

    <AudioContext.Provider

      value={{

        playing,

        currentTrack,

        currentTime,

        duration,

        playTrack,

        toggleAudio,

      }}

    >


      {children}



      <audio

        ref={audioRef}

        src={currentTrack}

        onEnded={() => {

          setPlaying(false);

          setCurrentTime(0);

        }}

      />



    </AudioContext.Provider>

  );

}





export function useAudio() {


  const context = useContext(AudioContext);



  if (!context) {

    throw new Error(
      "useAudio doit être utilisé dans AudioProvider"
    );

  }



  return context;

}