import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4 md:px-8"
    >
      {/* Dynamic Gradient Background - High Contrast */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-background transition-colors duration-500" />
        
        {/* Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/4 -left-1/4 w-full h-full bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -120, 80, 0],
              y: [0, 150, -100, 0],
              scale: [1, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 50, -100, 0],
              y: [0, 80, 120, 0],
              scale: [1, 1.1, 0.8, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px]"
          />
        </div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-40 dark:opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(circle at center, #8ba1b5 0%, #a3b1c6 50%, transparent 100%)",
            backgroundSize: "200% 200%"
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="text-center z-10 flex flex-col items-center max-w-5xl mx-auto mt-[-5vh]">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11vw] md:text-[7rem] lg:text-[9rem] leading-[0.85] font-medium tracking-tighter text-foreground uppercase flex flex-col items-center"
        >
          <span>SOFTWARE</span>
          <span className="italic font-light pr-4 md:pr-8 text-muted-foreground">ENGINEER</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-muted-foreground text-xs md:text-sm max-w-lg uppercase tracking-widest leading-relaxed font-medium"
        >
          Architecting scalable backend systems and crafting fluid, engaging frontend experiences. Building the digital infrastructure of tomorrow.
        </motion.p>
      </div>

      {/* Bottom Metadata */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest font-medium z-10"
      >
        <div className="flex gap-4">
          <span>Last updated</span>
          <span>{currentDate}</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <span>AVAILABLE FOR WORK</span>
          <div className="w-4 h-4 rounded-full border border-green-500/50 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
