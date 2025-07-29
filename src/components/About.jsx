function About() {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#0a192f", // same as HeroSection background
        textAlign: "center",
        color: "#ccd6f6", // light text color
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#64ffda", // accent color for heading
        }}
      >
        About Me
      </h2>
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.1rem",
          lineHeight: 1.6,
          color: "#a8b2d1", // soft white for paragraph
        }}
      >
        I'm <strong style={{ color: "#ffffff" }}>Samson</strong>, a passionate
        full-stack developer who enjoys crafting responsive, performant, and
        user-centric applications. My experience spans both frontend and backend
        development using
        <strong> React</strong>, <strong> TypeScript</strong>,{" "}
        <strong> Vite</strong>,<strong> Node.js</strong>,{" "}
        <strong> Express</strong>, <strong> Flutter</strong>, and
        <strong> Django</strong>. I love bringing ideas to life through clean
        code and modern UI practices.
      </p>
    </section>
  );
}

export default About;
