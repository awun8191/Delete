import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Nexus E-Commerce",
    description: "A high-performance, headless e-commerce platform built for scale. Features real-time inventory management, AI-powered recommendations, and seamless payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "DevFlow Dashboard",
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
    title: "Quantum Analytics",
    description: "A real-time data processing engine capable of handling millions of events per second. Built with a microservices architecture and deployed on Kubernetes.",
    tech: ["Go", "Apache Kafka", "ClickHouse", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "CloudSync Engine",
    description: "A distributed file synchronization service with end-to-end encryption. Optimized for low-latency updates and high availability across multiple regions.",
    tech: ["Rust", "gRPC", "S3", "Terraform"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    link: "#",
  }
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-32 bg-card border-t border-border overflow-hidden">
      <div className="px-4 md:px-8 max-w-7xl mx-auto mb-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[7rem] leading-[0.85] font-medium tracking-tighter uppercase text-foreground"
        >
          <span className="italic font-light pr-4 md:pr-8 text-muted-foreground">SELECTED</span>
          <span>PROJECTS</span>
        </motion.h2>
      </div>

      <div className="relative group">
        {/* Fading Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-20 md:px-40 no-scrollbar snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="min-w-[85vw] md:min-w-[45vw] snap-center">
              <ProjectCard {...project} index={index} />
            </div>
          ))}
          {/* Spacer for end scroll */}
          <div className="min-w-[10vw]" />
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto mt-8 flex justify-between items-center">
        <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold opacity-40">
          Scroll to explore
        </p>
        <div className="flex gap-2">
          <div className="w-12 h-0.5 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-foreground"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
