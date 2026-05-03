import "./App.css";
import Header from "./components/header.jsx";
import ProjectForm from "./components/projectform.jsx";
import SearchBar  from "./components/searchBar.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 px-4">
        <ProjectForm />
        <SearchBar/>
      </main>
    </>
  );
}

export default App;
