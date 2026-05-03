import ProjectCard from "./projectcard";


const ProjectList = ({ projects, handleDelete }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="mb-5 text-2xl text-rose-950 font-semibold text-center">Featured Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
