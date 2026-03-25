import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "Go", "GraphQL", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Elasticsearch", "Supabase"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux", "Vercel"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 md:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[8vw] md:text-[5rem] leading-[0.85] font-medium tracking-tighter uppercase text-foreground"
            >
              <span className="italic font-light block text-muted-foreground">CORE</span>
              <span>SKILLS</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-muted-foreground text-xs md:text-sm uppercase tracking-widest leading-relaxed font-medium"
            >
              Technologies and tools I use to build robust, scalable, and performant applications.
            </motion.p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 border-b border-border pb-4">{category.title}</h3>
                <ul className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground/20 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
