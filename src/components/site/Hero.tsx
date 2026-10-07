import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      video.playbackRate = 0.5;
      if (motion.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };
    sync();
    video.addEventListener("loadedmetadata", sync);
    motion.addEventListener("change", sync);
    return () => {
      video.removeEventListener("loadedmetadata", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="relative flex min-h-[630px] items-center overflow-x-clip border-b border-border sm:min-h-[605px] lg:min-h-[713px]">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-transparent to-background" />
      </div>

      <div className="container relative @container py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
            {SITE.location} · Institutional RWA engineering
          </p>
          <h1 className="mt-5 font-display text-[clamp(0.85rem,5.9cqw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
            Tokenize real assets
            <br />
            <span className="text-gradient">
              Ship rails institutions
              <br />
              can operate
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Yooventure designs, audits, and deploys production tokenization stacks for funds,
            fintechs, and operators — from compliant issuance to custody, NAV, and secondary
            settlement.
          </p>
        </div>
      </div>
    </section>
  );
};
