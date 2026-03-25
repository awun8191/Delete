import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  index: number;
  key?: number | string;
}

export function ProjectCard({ title, description, tech, image, link, github, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col w-full rounded-3xl overflow-hidden bg-card border border-border"
    >
      {/* Image Container */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-[16/10] overflow-hidden bg-muted block">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Content - "Visit site" button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-black dark:text-white font-medium shadow-xl">
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>
      </a>

      {/* Project Info */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-foreground font-semibold text-2xl tracking-tight">{title}</h3>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
