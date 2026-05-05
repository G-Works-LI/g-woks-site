const products = [
  { title: "Winglet Schnellwechsel-System", text: "Schneller Austausch nach Transport oder Beschädigung.", image: "/images/winglet-mit-adapter.jpg" },
  { title: "Haubensicherung hinten", text: "Mechanische Sicherung mit Federmechanik.", image: "/images/haubenbefestigung-hinten.jpg" },
  { title: "Haubensicherung vorne", text: "Zusätzliche Sicherung zum Aufkleben.", image: "/images/haubenbefestigung-vorne.jpg" },
  { title: "Ruderhorn", text: "Verstärkte Befestigung für höhere Belastung.", image: "/images/Ruderhornbefestigung.jpg" },
  { title: "Spinner", text: "Ersatz- und Designteil.", image: "/images/spinner-mit-nase.jpg" },
  { title: "Canopy Pins", text: "Sollbruchstelle zum Schutz des Modells.", image: "/images/Canopystifte.jpg" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0f0f0f", color: "#eee", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 30px", borderBottom: "1px solid #222" }}>
        <img src="/logo.png" style={{ width: "160px" }} />
        <div>
          <a href="#kontakt" style={{ color: "#ff6600", textDecoration: "none", fontWeight: "bold" }}>
            Kontakt
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Upgrade Parts für die ASW 28 V2
        </h1>

        <p style={{ fontSize: "20px", color: "#bbb", maxWidth: "700px" }}>
          Praxiserprobte 3D-gedruckte Zubehörteile zur Verbesserung von Haltbarkeit,
          Wartung und Sicherheit.
        </p>

        <a href="#kontakt" style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "12px 20px",
          background: "#ff6600",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          Händleranfrage starten
        </a>

        <img
          src="/images/modell-asw-28-v2-volantex.jpg"
          style={{ width: "100%", maxWidth: "700px", marginTop: "40px", borderRadius: "14px" }}
        />
      </section>

      {/* PRODUKTE */}
      <section style={{ padding: "50px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px" }}>Produkte</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: "#181818", borderRadius: "12px", overflow: "hidden" }}>
              <img src={p.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3>{p.title}</h3>
                <p style={{ color: "#bbb" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: "60px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px" }}>Kooperation & Händleranfrage</h2>

        <p style={{ color: "#bbb", maxWidth: "600px", margin: "0 auto" }}>
          Interesse an einer Zusammenarbeit oder Vertriebspartnerschaft?
          Kontaktieren Sie uns direkt.
        </p>

        <a href="mailto:meine-mail@live.de" style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "14px 24px",
          background: "#ff6600",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "8px",
          textDecoration: "none"
        }}>
          E-Mail senden
        </a>
      </section>

    </main>
  );
}