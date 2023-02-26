import { useState } from "react";
import Container from "./container";

const VideoPlayButton = () => (
     <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
      </svg>)

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700">
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
                <VideoPlayButton/>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
              // Put transparrent color on top of the video to make it look like a button
            <iframe src="https://www.youtube.com/embed/hGyJTcdfR1E?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          )}
        </div>
      </div>
    </Container>
  );
}
