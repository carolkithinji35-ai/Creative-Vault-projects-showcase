export default function ProjectForm({ formData, handleChange, handleSubmit }) {
  return (
    <div className="bg-white border border-rose-200 rounded-xl shadow-sm max-w-3xl mx-auto py-3 px-4 ">
      {/* add project button */}

      <button className="mb-6 flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition">
        New Project
      </button>

      {/* form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* project name */}
        <label htmlFor="project-name">
          Project Name
          <input
            id="project-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Project name"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* category */}
        <label htmlFor="project-category">
          Category
          <input
            id="project-category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            placeholder="eg. Web App, Design"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* Project URL */}
        <label htmlFor="project-url">
          Project live url
          <input
            id="project-url"
            name="url"
            type="text"
            value={formData.url}
            onChange={handleChange}
            placeholder="Live Project URL"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* technologies used */}
        <label htmlFor="project-tech">
          Tech Stack
          <input
            id="project-tech"
            name="tech"
            type="text"
            value={formData.tech}
            onChange={handleChange}
            placeholder="eg. React Tailwind"
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </label>
        {/* Description */}
        <label htmlFor="project-description">
          Project Description
          <textarea
            id="project-description"
            name="description"
            rows={4}
            placeholder="Describe your project..."
            className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}
