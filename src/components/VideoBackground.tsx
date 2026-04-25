import { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frameId: number;

    const handleLoop = () => {
      if (!video) return;

      const currentTime = video.currentTime;
      const duration = video.duration;

      if (!duration) {
        frameId = requestAnimationFrame(handleLoop);
        return;
      }

      // Fade in (0.5s)
      if (currentTime < 0.5) {
        setOpacity(currentTime / 0.5);
      } 
      // Fade out (0.5s before end)
      else if (currentTime > duration - 0.5) {
        setOpacity((duration - currentTime) / 0.5);
      } 
      // Fully visible
      else {
        setOpacity(1);
      }

      frameId = requestAnimationFrame(handleLoop);
    };

    const onEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(e => console.error("Video play failed:", e));
        }
      }, 100);
    };

    video.addEventListener('ended', onEnded);
    frameId = requestAnimationFrame(handleLoop);

    return () => {
      video.removeEventListener('ended', onEnded);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div 
      className="absolute z-0 overflow-hidden left-0 right-0 bottom-0" 
      style={{ top: '300px' }}
    >
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        className="w-full h-full object-cover"
        muted
        autoPlay
        playsInline
        style={{ opacity, transition: 'opacity 0.1s linear' }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  );
};

export default VideoBackground;

