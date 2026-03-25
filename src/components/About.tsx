import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <div className="flex flex-col justify-between h-full">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[6rem] leading-[0.85] font-medium tracking-tighter uppercase"
          >
            <span className="italic font-light block opacity-70">ABOUT</span>
            <span>ME</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 md:mt-0 hidden md:block"
          >
            <p className="opacity-50 text-xs uppercase tracking-widest font-medium">
              Based in San Francisco, CA
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 text-lg md:text-2xl font-light leading-relaxed opacity-90">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            I am a software engineer dedicated to building high-quality, scalable, and user-centric applications. I bridge the gap between complex backend architecture and intuitive frontend design.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            With a strong foundation in computer science and years of experience in modern web technologies, I tackle challenging problems with clean, maintainable code and system design best practices.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether it's optimizing database queries, designing RESTful APIs, or crafting fluid animations, I am passionate about every layer of the stack.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
