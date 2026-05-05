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

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "#eee", minHeight: "100vh" }}>
{/* HINWEIS */}
<div style={{
  background: "#ff6600",
  color: "#000",
  textAlign: "center",
  padding: "10px",
  fontWeight: "bold"
}}>
  Diese Seite befindet sich aktuell im Aufbau – Inhalte, Produkte und Fotos werden laufend erweitert.
</div>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
        borderBottom: "1px solid #222"
      }}>
        <img src="/logo.png" style={{ width: "150px" }} />
        <a href="#kontakt" style={{
          background: "#ff6600",
          padding: "10px 14px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          color: "#000"
        }}>
          Kontakt
        </a>
      </header>

      {/* HERO */}
      <section style={{ padding: "70px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Upgrade Parts für die ASW 28 V2
        </h1>

        <p style={{ fontSize: "20px", color: "#ff6600", fontWeight: "bold" }}>
          Speziell entwickelt zur Behebung typischer Schwachstellen
        </p>

        <p style={{ fontSize: "18px", color: "#bbb", maxWidth: "700px" }}>
          Praxiserprobte 3D-gedruckte Zubehörteile für bessere Haltbarkeit,
          einfachere Wartung und mehr Sicherheit.
        </p>

        <img
          src="/images/modell-asw-28-v2-volantex.jpg"
          style={{ width: "100%", maxWidth: "700px", marginTop: "40px", borderRadius: "14px" }}
        />
      </section>

      {/* VORTEILE */}
      <section style={{ background: "#111", padding: "60px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>Warum G-Works?</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "20px" }}>
            {benefits.map(([title, text]) => (
              <div key={title} style={{ background: "#181818", padding: "20px", borderRadius: "14px" }}>
                <h3 style={{ color: "#ff6600" }}>{title}</h3>
                <p style={{ color: "#bbb" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUKTE */}
      <section style={{ padding: "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px" }}>Produkte</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "20px" }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: "#181818", borderRadius: "14px", overflow: "hidden" }}>
              <img src={p.image} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3>{p.title}</h3>
                <p style={{ color: "#bbb" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SETS */}
      <section style={{ padding: "70px 30px", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>Upgrade Sets</h2>

          <p style={{ color: "#bbb", maxWidth: "700px" }}>
            Die Komponenten können als abgestimmte Upgrade-Kits angeboten werden,
            um typische Schwachstellen gezielt zu verbessern.
          </p>

          {/* SET FOTO */}
          <img
            src="/images/upgrade-kit-set.jpg"
            alt="Upgrade Sets"
            style={{
              width: "100%",
              maxWidth: "800px",
              marginTop: "30px",
              borderRadius: "18px"
            }}
          />

<p style={{
  marginTop: "25px",
  color: "#ff6600",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "18px"
}}>
  Preise & Händlerkonditionen auf Anfrage
</p>


          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "30px" }}>

            <div style={{ background: "#181818", padding: "20px", borderRadius: "14px" }}>
              <h3>Basic Kit</h3>
              <ul style={{ color: "#bbb" }}>
                <li>Canopy Pins</li>
                <li>Ruderhorn</li>
                <li>Front-Haubensicherung</li>
              </ul>
            </div>

            <div style={{ background: "#181818", padding: "20px", borderRadius: "14px" }}>
              <h3>Performance Kit</h3>
              <ul style={{ color: "#bbb" }}>
                <li>Winglet System</li>
                <li>Haubensicherung hinten</li>
                <li>Canopy Pins</li>
              </ul>
            </div>

            <div style={{ background: "#181818", padding: "20px", borderRadius: "14px" }}>
              <h3>Full Kit</h3>
              <ul style={{ color: "#bbb" }}>
                <li>Alle Komponenten kombiniert</li>
                <li>Maximale Verbesserung</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ padding: "60px 30px", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px" }}>Händleranfrage</h2>

        <p style={{ color: "#bbb", maxWidth: "600px", margin: "0 auto" }}>
          Interesse an einer Zusammenarbeit oder Vertriebspartnerschaft?
          Kontaktieren Sie uns direkt.
        </p>

        <a href="mailto:gworks.rc@gmail.com" style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "14px 24px",
          background: "#ff6600",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "10px",
          textDecoration: "none"
        }}>
          E-Mail senden
        </a>
      </section>

    </main>
  );
}