import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  href: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  href,
}: ProjectCardProps) {
  return (
    <article className="py-12 border-b border-zinc-900">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {title}
          </h2>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-sm
                border
                border-zinc-800
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={href}
          target="_blank"
          className="
            w-fit
            text-cyan-400
            hover:text-cyan-300
            transition-colors
          "
        >
          Ver projeto →
        </Link>
      </div>
    </article>
  );
}