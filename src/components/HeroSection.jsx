function HeroSection() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 2rem",
        backgroundColor: "#03203C",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Left Text Section */}
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Hello!
          <br />
          <span style={{ fontWeight: "bold", color: "#fff" }}>I Am Samson</span>
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginBottom: "2rem",
            lineHeight: "1.6",
            color: "#b0bec5",
          }}
        >
          I'm a full-stack developer skilled in React, TypeScript, Vite,
          Node.js, Express, Flutter, and Django. I love building fast,
          accessible, and well-designed web and mobile applications.
        </p>
        <a
          href="#projects"
          style={{
            padding: "0.75rem 1.5rem",
            border: "2px solid #fff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#03203C";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#fff";
          }}
        >
          SEE PORTFOLIO
        </a>
      </div>

      {/* Right Image Section */}
      <div style={{ flex: 1, textAlign: "right" }}>
        <img
          src="https://i.ibb.co/hxZgcbV6/IMG-20250414-WA0048.jpg"
          alt="Samson"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
