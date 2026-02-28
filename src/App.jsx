import { useMemo, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import { projects as projectsData } from "./data/projects";

export default function App() {
  const projects = useMemo(() => projectsData, []);
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = useMemo(() => {
    return projects.find((p) => p.id === selectedId) || null;
  }, [projects, selectedId]);

  function openProject(id) {
    setSelectedId(id);
  }

  function closeProject() {
    setSelectedId(null);
  }

  return (
    <>
      <Header />

      <main className={`${styles.main} container`}>
        <Hero />
        <Projects projects={projects} onOpenProject={openProject} />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </>
  );
}