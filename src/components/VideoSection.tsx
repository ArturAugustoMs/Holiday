import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Assista
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
              Veja a <span className="text-gradient">Magia</span> Acontecer
            </h2>
            <p className="text-lg text-muted-foreground">
              Confira um pouquinho de como são nossos eventos e atividades.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 bg-foreground/5">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster=""
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              {/* Add video source here */}
              <source src="" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-foreground/20 flex items-center justify-center transition-opacity duration-500 cursor-pointer ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              onClick={togglePlay}
            >
              <button
                className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300"
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>
            </div>

            {/* Subtle gradient border effect */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-border/20 pointer-events-none" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
