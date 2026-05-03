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
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({...formData, [name]: value })
  }


  const projects = [
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
  ];

  return (
    <>
      <Header />
      <main className="pt-20 px-4">
        <ProjectForm formData={formData} handleChange={handleChange} />
        <SearchBar />
        <ProjectList projects={projects} />
      </main>
    </>
  );
}

export default App;
