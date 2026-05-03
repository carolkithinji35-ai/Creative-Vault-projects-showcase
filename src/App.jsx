import "./App.css";
import Header from "./components/header.jsx";
import ProjectForm from "./components/projectform.jsx";
import SearchBar from "./components/searchBar.jsx";
import ProjectList from "./components/projectlist.jsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    tech: "",
    url: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-commerce Platform",
      category: "Web App",
      description:
        "A full-stack e-commerce platform built with React and Node.js",
      tech: "React, Node.js, MongoDB",
      url: "https://example.com/project1",
    },
    {
      id: 2,
      name: "Portfolio Website",
      category: "Design",
      description: "A responsive portfolio website showcasing creative work",
      tech: "HTML, CSS, JavaScript",
      url: "https://example.com/project2",
    },
    {
      id: 3,
      name: "Task Tracker",
      category: "Productivity",
      description:
        "A task management app with drag-and-drop board functionality",
      tech: "React, TypeScript, Tailwind",
      url: "https://example.com/project3",
    },
    {
      id: 4,
      name: "Travel Blog",
      category: "Blog",
      description:
        "A travel blog with image galleries, maps, and journal posts",
      tech: "Gatsby, GraphQL, Sass",
      url: "https://example.com/project4",
    },
    {
      id: 5,
      name: "Fitness Dashboard",
      category: "Dashboard",
      description:
        "A fitness analytics dashboard for tracking workouts and progress",
      tech: "Vue, Chart.js, Firebase",
      url: "https://example.com/project5",
    },
    {
      id: 6,
      name: "Recipe Finder",
      category: "Utility",
      description:
        "A recipe search app that generates meal plans based on ingredients",
      tech: "Next.js, API, CSS Modules",
      url: "https://example.com/project6",
    },
    {
      id: 7,
      name: "Music Player",
      category: "Entertainment",
      description:
        "A modern music player UI with playlist support and audio controls",
      tech: "React, Context API, Styled Components",
      url: "https://example.com/project7",
    },
  ]);
  
  //  filter projects based on search term
  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.toLowerCase();
    return [
      project.name,
      project.category,
      project.description,
      project.tech,
    ].some((field) => field.toLowerCase().includes(query));
  });

  // handle form input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  //  handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      id: Date.now(),
      ...formData,
    };
    setProjects([...projects, newProject]);
    alert("Project added successfully!");

    // reset form after submission
    setFormData({
      name: "",
      category: "",
      description: "",
      url: "",
      tech: "",
    });
  };

  // delete project button
  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <>
      <Header />
      <main className="pt-20 px-4">
        <ProjectForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(event) => setSearchTerm(event.target.value)}
        />
        <ProjectList projects={filteredProjects} handleDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
