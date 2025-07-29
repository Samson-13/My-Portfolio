function Header() {
  return (
    <header
      style={{
        padding: "1.5rem 2rem",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Samson
      </h1>
      <nav>
        <a
          href="#about"
          style={{
            marginRight: "1.5rem",
            textDecoration: "none",
            color: "#555",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#0070f3")}
          onMouseOut={(e) => (e.target.style.color = "#555")}
        >
          About
        </a>
        <a
          href="#projects"
          style={{
            marginRight: "1.5rem",
            textDecoration: "none",
            color: "#555",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#0070f3")}
          onMouseOut={(e) => (e.target.style.color = "#555")}
        >
          Projects
        </a>
        <a
          href="#contact"
          style={{
            textDecoration: "none",
            color: "#555",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#0070f3")}
          onMouseOut={(e) => (e.target.style.color = "#555")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
