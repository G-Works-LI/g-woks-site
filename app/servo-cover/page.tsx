export default function ServoCoverPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        padding: "80px 20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* Bild */}
        <div>
          <img
            src="/images/servo-cover.jpg"
            alt="Servo Cover"
            style={{
              width: "100%",
              borderRadius: "20px",
              border: "1px solid rgba(255,102,0,0.2)",
              background: "#111",
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              color: "#ff6600",
              fontWeight: "bold",
              letterSpacing: "3px",
              marginBottom: "10px",
            }}
          >
            G-WORKS ENGINEERING
          </p>

          <h1
            style={{
              fontSize: "48px",
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Servo-Cover Set
          </h1>

          <p
            style={{
              color: "#ccc",
              lineHeight: 1.7,
              fontSize: "18px",
            }}
          >
            Aerodynamische Servo-Abdeckungen für die ASW 28 V2.
            Entwickelt für bessere Aerodynamik, saubere Integration
            und zusätzlichen Schutz der Servobereiche.
          </p>

          <div
            style={{
              marginTop: "35px",
              background: "#181818",
              border: "1px solid #2a2a2a",
              borderRadius: "16px",
              padding: "22px",
            }}
          >
            <h3 style={{ color: "#ff6600", marginTop: 0 }}>
              Eigenschaften
            </h3>

            <ul
              style={{
                color: "#ccc",
                lineHeight: 1.8,
                paddingLeft: "20px",
              }}
            >
              <li>Präzise Passform für die ASW 28 V2</li>
              <li>Verbesserte Aerodynamik</li>
              <li>Leichtes und stabiles Design</li>
              <li>Professionelle Optik</li>
              <li>3D-gedruckt mit hochwertigem Filament</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}