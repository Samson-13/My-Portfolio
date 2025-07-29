function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      description: "A React-based task manager with local storage support.",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Vite and hosted on GitHub Pages.",
    },
    {
      title: "Weather Dashboard",
      description:
        "A dashboard that fetches live weather data using public APIs.",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#222",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              maxWidth: "300px",
              textAlign: "left",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem", color: "#333" }}>
              {project.title}
            </h3>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
