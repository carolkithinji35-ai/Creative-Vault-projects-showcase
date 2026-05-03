export default function ProjectForm() {
  return (
    <div className="bg-white border border-rose-200 rounded-xl shadow-sm max-w-3xl mx-auto py-3 px-4">
      {/* add project button */}

      <button className="mb-6 flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition">
        <span className="text-xl">+</span> Add Project
      </button>

      {/* form */}
      <form className="space-y-4">
        {/* project name */}
        <label htmlFor="project-name">
          Project Name
          <input
            type="text"
            placeholder="Project name"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* category */}
        <label htmlFor="project-name">
          Category
          <input
            type="text"
            placeholder="eg. Web App, Design"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* Project URL */}
        <label htmlFor="project-name">
          Project live url
          <input
            type="text"
            placeholder="Live Project URL"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* technologies usedd */}
        <label htmlFor="project-name">
          Tech Stack
          <input
            type="text"
            placeholder="eg. React Tailwind"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* Description */}
        <label htmlFor="project-name">
          Project Description
          <textarea
            rows={4}
            placeholder="Describe your project..."
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          ></textarea>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}
