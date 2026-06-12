import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";

export default function FeaturedProjects({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">
      <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8B5CF6]">
            Featured Case Study
          </p>

          <h2 className="mt-4 text-5xl font-extralight tracking-[-0.05em] text-white md:text-7xl">
            Latest
            <br />

            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#C026D3] to-[#38BDF8] bg-clip-text font-black text-transparent">
              Launch
            </span>
          </h2>
        </div>

        <div className="mt-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}