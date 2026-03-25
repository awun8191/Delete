import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-32 px-4 md:px-8 bg-foreground text-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              style={{ x, rotate }}
              className="text-[12vw] md:text-[8rem] font-black leading-none uppercase tracking-tighter opacity-10 absolute -top-20 -left-10 pointer-events-none select-none"
            >
              CREATIVE
            </motion.div>
            
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-[6rem] leading-[0.85] font-medium tracking-tighter uppercase relative z-10"
            >
              <span className="italic font-light block opacity-70">ABOUT</span>
              <span>ME</span>
            </motion.h2>

            {/* Laptop SVG with Terminal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 relative w-full max-w-[400px]"
            >
              <svg viewBox="0 0 800 500" className="w-full h-auto drop-shadow-2xl">
                {/* Laptop Screen */}
                <rect x="100" y="50" width="600" height="380" rx="20" fill="#2a2a2a" stroke="#444" strokeWidth="4" />
                <rect x="115" y="65" width="570" height="350" rx="10" fill="#000" />
                
                {/* Terminal Window Header */}
                <rect x="115" y="65" width="570" height="30" rx="10" fill="#333" />
                <circle cx="135" cy="80" r="5" fill="#ff5f56" />
                <circle cx="155" cy="80" r="5" fill="#ffbd2e" />
                <circle cx="175" cy="80" r="5" fill="#27c93f" />
                
                {/* Terminal Text Lines */}
                <g className="font-mono text-[14px]">
                  <motion.rect 
                    initial={{ width: 0 }}
                    whileInView={{ width: 150 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    x="130" y="115" height="12" rx="2" fill="#50fa7b" opacity="0.8" 
                  />
                  <motion.rect 
                    initial={{ width: 0 }}
                    whileInView={{ width: 280 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    x="130" y="145" height="12" rx="2" fill="#f8f8f2" opacity="0.6" 
                  />
                  <motion.rect 
                    initial={{ width: 0 }}
                    whileInView={{ width: 200 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    x="130" y="175" height="12" rx="2" fill="#bd93f9" opacity="0.8" 
                  />
                  <motion.rect 
                    initial={{ width: 0 }}
                    whileInView={{ width: 320 }}
                    transition={{ duration: 1.2, delay: 2.8 }}
                    x="130" y="205" height="12" rx="2" fill="#f8f8f2" opacity="0.6" 
                  />
                  
                  {/* Blinking Cursor */}
                  <motion.rect
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    x="130" y="235" width="10" height="18" fill="#50fa7b"
                  />
                </g>

                {/* Laptop Base */}
                <path d="M50 430 L750 430 L780 470 L20 470 Z" fill="#333" stroke="#444" strokeWidth="2" />
                <rect x="350" y="430" width="100" height="10" rx="5" fill="#222" />
              </svg>
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            {[
              "I am a software engineer dedicated to building high-quality, scalable, and user-centric applications. I bridge the gap between complex backend architecture and intuitive frontend design.",
              "With a strong foundation in computer science and years of experience in modern web technologies, I tackle challenging problems with clean, maintainable code and system design best practices.",
              "Whether it's optimizing database queries, designing RESTful APIs, or crafting fluid animations, I am passionate about every layer of the stack."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-3xl font-light leading-snug opacity-90 hover:opacity-100 hover:translate-x-2 transition-all duration-300 cursor-default"
              >
                {text}
              </motion.p>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex gap-8 mt-4"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2 font-bold">Location</span>
                <span className="text-sm uppercase tracking-widest">San Francisco, CA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2 font-bold">Experience</span>
                <span className="text-sm uppercase tracking-widest">5+ Years</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
