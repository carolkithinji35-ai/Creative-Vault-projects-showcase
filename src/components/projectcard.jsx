import { FaTrash } from "react-icons/fa";

export default function ProjectCard({ project, handleDelete }) {
  return (
    <div className="relative w-full sm:w-72 bg-white border border-rose-200 rounded-xl p-4 shadow-sm flex flex-col gap-3">
      {/* Top row */}
      <div className="flex justify-between items-center">
        {/* Category */}
        <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-md">
          {project.category}
        </span>

        {/* View Project */}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-rose-500 hover:text-rose-700 transition"
        >
          View Project
        </a>
      </div>

      {/* Project Name */}
      <h3 className="text-lg font-bold text-rose-700">{project.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{project.description}</p>

      {/* Tech Stack */}
      <p className="text-xs text-gray-500">
        <span className=" bg-rose-700 text-white py-1 px-1.5 rounded-full">
          Tech Stack:
        </span>{" "}
        {project.tech}
      </p>

      <button
        onClick={() => {
          handleDelete(project.id);
        }}
        className="absolute bottom-3 right-3 text-gray-300 hover:text-red-700 transition text-xs"
      >
        <FaTrash />
      </button>
    </div>
  );
}
