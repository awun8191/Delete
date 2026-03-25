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
