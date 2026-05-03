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
  ]);

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
        <SearchBar />
        <ProjectList projects={projects} handleDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
