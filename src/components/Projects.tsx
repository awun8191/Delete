import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Nexus E-Commerce Platform",
    description: "A high-performance, headless e-commerce platform built for scale. Features real-time inventory management, AI-powered recommendations, and seamless payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "DevFlow CI/CD Dashboard",
    description: "An intuitive dashboard for monitoring continuous integration pipelines. Aggregates data from GitHub Actions, GitLab CI, and Jenkins into a single unified view.",
    tech: ["React", "Node.js", "GraphQL", "Docker", "Redis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Aura Design System",
    description: "A comprehensive, accessible component library used across multiple enterprise applications. Includes dark mode support, complex data grids, and interactive documentation.",
    tech: ["React", "Storybook", "Framer Motion", "Radix UI"],
    image: "https://images.unsplash.com/photo-1507238692062-5409674152cb?q=80&w=2574&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Quantum Analytics Engine",
    description: "A real-time data processing engine capable of handling millions of events per second. Built with a microservices architecture and deployed on Kubernetes.",
    tech: ["Go", "Apache Kafka", "ClickHouse", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-24">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[7rem] leading-[0.85] font-medium tracking-tighter uppercase flex flex-col items-center text-foreground"
        >
          <span className="italic font-light pr-4 md:pr-8 text-muted-foreground">SELECTED</span>
          <span>PROJECTS</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-muted-foreground text-xs md:text-sm max-w-md uppercase tracking-widest leading-relaxed font-medium"
        >
          A showcase of recent software engineering work, spanning full-stack web applications, distributed systems, and open-source tools.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
