const products = [
  { title: "Winglet Schnellwechsel-System", text: "Servicefreundlicher Austausch nach Transport oder Beschädigung.", image: "/images/winglet-mit-adapter.jpg" },
  { title: "Haubensicherung hinten", text: "Mechanische Sicherung mit Federmechanik für zuverlässigen Halt.", image: "/images/haubenbefestigung-hinten.jpg" },
  { title: "Haubensicherung vorne", text: "Leichte Zusatzsicherung zum Aufkleben.", image: "/images/haubenbefestigung-vorne.jpg" },
  { title: "Ruderhorn-Befestigung", text: "Verstärkte Befestigung für bessere Kraftverteilung.", image: "/images/Ruderhornbefestigung.jpg" },
  { title: "Spinner mit Nase", text: "Ersatz- und Designteil mit markanter G-Works Optik.", image: "/images/spinner-mit-nase.jpg" },
  { title: "Canopy Pins", text: "Sicherheitsstifte mit Sollbruchstelle.", image: "/images/Canopystifte.jpg" },
];

const benefits = [
  ["Praxiserprobt", "Entwickelt direkt am Modell und getestet."],
  ["Erprobt", "Im realen Flugbetrieb getestet und optimiert."],
  ["Händlergeeignet", "Kleinserien und Sets möglich."],
  ["PETG-HF", "Zähes Material für funktionale Bauteile."],
];

const kits = [
  { title: "Basic Kit", image: "/images/basic-kit.jpg", items: ["Canopy Pins", "Ruderhorn", "Front-Haubensicherung"] },
  { title: "Performance Kit", image: "/images/performance-kit.jpg", items: ["Winglet System", "Haubensicherung hinten", "Canopy Pins"] },
  { title: "Full Kit", image: "/images/full-kit.jpg", items: ["Alle Komponenten kombiniert", "Maximale Verbesserung"] },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "#eee", minHeight: "100vh" }}>
      <div style={{ background: "#ff6600", color: "#000", textAlign: "center", padding: "10px", fontWeight: "bold" }}>
        Diese Seite befindet sich aktuell im Aufbau – Inhalte, Produktbilder und Sets werden laufend erweitert.
      </div>

      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 30px", borderBottom: "1px solid #222", background: "#0b0b0b" }}>
        <img src="/logo.png" alt="G-Works Logo" style={{ width: "150px" }} />
        <a href="#kontakt" style={{ background: "#ff6600", padding: "10px 14px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold", color: "#000" }}>
          Kontakt
        </a>
      </header>

      <section
        style={{
          padding: "80px 30px",
          backgroundImage:
            "linear-gradient(rgba(11,11,11,0.80), rgba(11,11,11,0.92)), url('/images/tech-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>Upgrade Parts für die ASW 28 V2</h1>
          <p style={{ fontSize: "20px", color: "#ff6600", fontWeight: "bold" }}>
            Speziell entwickelt zur Behebung typischer Schwachstellen
          </p>
          <p style={{ fontSize: "18px", color: "#bbb", maxWidth: "700px" }}>
            Praxiserprobte 3D-gedruckte Zubehörteile für bessere Haltbarkeit,
            einfachere Wartung und mehr Sicherheit.
          </p>

          <img
            src="/images/modell-asw-28-v2-volantex.jpg"
            alt="Volantex ASW 28 V2"
            style={{ width: "100%", maxWidth: "700px", marginTop: "40px", borderRadius: "14px", border: "1px solid #333", boxShadow: "0 30px 80px rgba(0,0,0,0.7)" }}
          />
        </div>
      </section>

      <section style={{ background: "#111", padding: "60px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>Warum G-Works?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "20px" }}>
            {benefits.map(([title, text]) => (
              <div key={title} style={{ background: "#181818", padding: "20px", borderRadius: "14px", border: "1px solid #2a2a2a" }}>
                <h3 style={{ color: "#ff6600" }}>{title}</h3>
                <p style={{ color: "#bbb" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px" }}>Produkte</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: "#181818", borderRadius: "14px", overflow: "hidden", border: "1px solid #2a2a2a" }}>
              <img src={p.image} alt={p.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3>{p.title}</h3>
                <p style={{ color: "#bbb" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 30px", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>Upgrade Sets</h2>
          <p style={{ color: "#bbb", maxWidth: "700px" }}>
            Die Komponenten können als abgestimmte Upgrade-Kits angeboten werden,
            um typische Schwachstellen gezielt zu verbessern.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "30px" }}>
            {kits.map((kit) => (
              <div key={kit.title} style={{ background: "#181818", borderRadius: "14px", overflow: "hidden", border: kit.title === "Performance Kit" ? "2px solid #ff6600" : "1px solid #2a2a2a" }}>
                <img src={kit.image} alt={kit.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                <div style={{ padding: "20px" }}>
                  <h3>{kit.title}</h3>
                  {kit.title === "Performance Kit" && <p style={{ color: "#ff6600", fontWeight: "bold" }}>Empfohlen</p>}
                  <ul style={{ color: "#bbb", paddingLeft: "20px" }}>
                    {kit.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "25px", color: "#ff6600", fontWeight: "bold", textAlign: "center", fontSize: "18px" }}>
            Preise & Händlerkonditionen auf Anfrage
          </p>
        </div>
      </section>

      <section id="kontakt" style={{ padding: "60px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px" }}>Händleranfrage</h2>
        <p style={{ color: "#bbb", maxWidth: "600px", margin: "0 auto" }}>
          Interesse an einer Zusammenarbeit oder Vertriebspartnerschaft?
          Kontaktieren Sie uns direkt.
        </p>
        <a href="mailto:gworks.rc@gmail.com" style={{ display: "inline-block", marginTop: "25px", padding: "14px 24px", background: "#ff6600", color: "#000", fontWeight: "bold", borderRadius: "10px", textDecoration: "none" }}>
          E-Mail senden
        </a>
      </section>
    </main>
  );
}