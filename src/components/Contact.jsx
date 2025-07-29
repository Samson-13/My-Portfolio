function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f0f4f8",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#222",
        }}
      >
        Contact Me
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "2rem",
          color: "#555",
        }}
      >
        I'm open to work, collaboration, or just a good conversation. Reach me
        here:
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: "1rem",
          color: "#333",
        }}
      >
        <li style={{ marginBottom: "1rem" }}>
          📧 Email:{" "}
          <a href="mailto:samson@example.com">samsonbadding@gmail.com</a>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          💻 GitHub:{" "}
          <a
            href="https://github.com/Samson-13?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Samson-13
          </a>
        </li>
        <li>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/m-samson-badding-1b76751b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/Samson
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
