import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-muted-foreground text-xs uppercase tracking-widest font-medium"
        >
          © {new Date().getFullYear()} Software Engineer. All rights reserved.
        </motion.div>

        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((social, i) => (
            <motion.a
              key={social}
              href="#"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-foreground text-xs uppercase tracking-widest font-medium hover:text-muted-foreground transition-colors"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
