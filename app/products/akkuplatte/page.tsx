export default function ServoCoverPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        padding: "50px 18px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "34px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="/images/akkuplatte.jpg"
            alt="akkuplatte"
            style={{
              width: "100%",
              borderRadius: "18px",
              border: "1px solid rgba(255,102,0,0.2)",
              background: "#111",
              padding: "10px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <p
            style={{
              color: "#ff6600",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "13px",
              marginBottom: "10px",
            }}
          >
            G-WORKS ENGINEERING
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 8vw, 48px)",
              lineHeight: 1.05,
              marginTop: 0,
              marginBottom: "20px",
            }}
          >
            Canopy Pins
          </h1>

          <p
            style={{
              color: "#ccc",
              lineHeight: 1.65,
              fontSize: "clamp(15px, 4vw, 18px)",
            }}
          >
            Akkuplatte für die ASW 28 V2.
            Entwickelt für anbringen eines zweiten Akkus hinter das Fahrwerk. Fahrwerk muss ausgebaut werden. Schlitze für Akkustripp vorgesehen.
          </p>

          <div
            style={{
              marginTop: "28px",
              background: "#181818",
              border: "1px solid #2a2a2a",
              borderRadius: "16px",
              padding: "20px",
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
                marginBottom: 0,
              }}
            >
              <li>Präzise Passform für die ASW 28 V2</li>
              <li>Verbesserte Aerodynamik</li>
              <li>Leichtes und stabiles Design</li>
              <li>Professionelle Optik</li>
              <li>3D-gedruckt mit hochwertigem Filament</li>
            </ul>
          </div>

          <a
            href="mailto:gworks.rc@gmail.com"
            style={{
              display: "block",
              marginTop: "26px",
              width: "100%",
              boxSizing: "border-box",
              textAlign: "center",
              background: "#ff6600",
              color: "#000",
              padding: "16px 22px",
              borderRadius: "12px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Anfrage senden
          </a>
        </div>
      </div>
    </main>
  );
}