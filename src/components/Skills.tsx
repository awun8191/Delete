import { motion } from "motion/react";
import { Code2, Database, Layout, Server, Terminal, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" }
    ]
  },
  {
    title: "Backend",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Django", level: "Advanced" },
      { name: "Go", level: "Intermediate" },
      { name: "GraphQL", level: "Advanced" }
    ]
  },
  {
    title: "Database",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Prisma", level: "Expert" },
      { name: "Elasticsearch", level: "Intermediate" },
      { name: "Supabase", level: "Advanced" }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[7rem] leading-[0.85] font-medium tracking-tighter uppercase text-foreground"
          >
            <span className="italic font-light pr-4 md:pr-8 text-muted-foreground">CORE</span>
            <span>SKILLS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="flex flex-col gap-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className={`p-8 rounded-[2.5rem] border ${category.color} flex items-center gap-4`}
              >
                {category.icon}
                <h3 className="text-2xl font-bold tracking-tight uppercase">{category.title}</h3>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 rounded-3xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground opacity-60">{skill.level}</span>
                    </div>
                    <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${category.color.split(' ')[1].replace('500/10', '500')}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
