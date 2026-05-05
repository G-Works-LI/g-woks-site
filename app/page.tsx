const products = [
  { title: "Winglet Schnellwechsel-System", text: "Servicefreundlicher Austausch nach Transport oder Beschädigung.", image: "/images/winglet-mit-adapter.jpg" },
  { title: "Haubensicherung hinten", text: "Mechanische Sicherung mit Federmechanik für zuverlässigen Halt.", image: "/images/haubenbefestigung-hinten.jpg" },
  { title: "Haubensicherung vorne", text: "Leichte Zusatzsicherung zum Aufkleben für den vorderen Haubenbereich.", image: "/images/haubenbefestigung-vorne.jpg" },
  { title: "Ruderhorn-Befestigung", text: "Verstärkte Befestigungslösung für bessere Kraftverteilung.", image: "/images/Ruderhornbefestigung.jpg" },
  { title: "Spinner mit Nase", text: "Ersatz- und Designteil mit markanter G-Works Optik.", image: "/images/spinner-mit-nase.jpg" },
  { title: "Canopy Pins", text: "Sicherheitsstifte mit Sollbruchstelle, bis 3,5 kg erprobt.", image: "/images/Canopystifte.jpg" },
];

const benefits = [
  ["Praxiserprobt", "Entwickelt direkt am Modell und auf Funktion geprüft."],
  ["Händlergeeignet", "Kleinserien, Zubehörpakete und Ersatzteil-Sets möglich."],
  ["PETG-HF", "Zähes Material für funktionale RC-Bauteile."],
  ["Farbauswahl", "Orange, Weiß, Rot, Blau und weitere Farben nach Absprache."],
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0b0b0b", color: "#eee", minHeight: "100vh" }}>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(11,11,11,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #222",
      }}>
        <div style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <img src="/logo.png" alt="G-Works Logo" style={{ width: "150px" }} />
          <nav style={{ display: "flex", gap: "22px", alignItems: "center" }}>
            <a href="#produkte" style={navLink}>Produkte</a>
            <a href="#vorteile" style={navLink}>Vorteile</a>
            <a href="#kontakt" style={buttonSmall}>Kontakt</a>
          </nav>
        </div>
      </header>

      <section style={{
        background: "radial-gradient(circle at top right, rgba(255,102,0,0.18), transparent 35%)",
        padding: "80px 28px 70px",
      }}>
        <div style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "45px",
          alignItems: "center",
        }}>
          <div>
            <p style={{ color: "#ff6600", fontWeight: "bold", letterSpacing: "2px", marginBottom: "14px" }}>
              G-WORKS RC UPGRADE PARTS
            </p>
            <h1 style={{ fontSize: "clamp(38px, 6vw, 64px)", lineHeight: 1.02, margin: 0 }}>
              Upgrade Parts für die Volantex ASW 28 V2
            </h1>
            <p style={{ fontSize: "20px", color: "#bdbdbd", lineHeight: 1.6, marginTop: "22px" }}>
              Praxiserprobte 3D-gedruckte Zubehörteile aus Bambu Lab PETG-HF – entwickelt für bessere Haltbarkeit,
              einfachere Wartung und mehr Sicherheit am Modell.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "30px" }}>
              <a href="#kontakt" style={buttonPrimary}>Händleranfrage starten</a>
              <a href="#produkte" style={buttonSecondary}>Produkte ansehen</a>
            </div>
          </div>

          <div style={{
            background: "#151515",
            border: "1px solid #2a2a2a",
            borderRadius: "24px",
            padding: "14px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}>
            <img
              src="/images/modell-asw-28-v2-volantex.jpg"
              alt="Volantex ASW 28 V2"
              style={{ width: "100%", borderRadius: "18px", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section id="vorteile" style={{ padding: "60px 28px", background: "#111" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Warum G-Works?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "18px", marginTop: "26px" }}>
            {benefits.map(([title, text]) => (
              <div key={title} style={benefitCard}>
                <h3 style={{ color: "#ff6600", marginTop: 0 }}>{title}</h3>
                <p style={{ color: "#bdbdbd", lineHeight: 1.55, marginBottom: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produkte" style={{ padding: "70px 28px", maxWidth: "1180px", margin: "0 auto" }}>
        <p style={eyebrow}>MUSTERTEILE & ZUBEHÖR</p>
        <h2 style={sectionTitle}>Mögliche Zubehörteile</h2>
        <p style={{ color: "#bdbdbd", maxWidth: "760px", lineHeight: 1.6 }}>
          Die gezeigten Teile können einzeln, als Ersatzteil-Set oder als abgestimmtes Upgrade-Kit angeboten werden.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "24px", marginTop: "32px" }}>
          {products.map((p) => (
            <article key={p.title} style={productCard}>
              <img src={p.image} alt={p.title} style={{ width: "100%", height: "235px", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "20px" }}>
                <h3 style={{ marginTop: 0 }}>{p.title}</h3>
                <p style={{ color: "#bdbdbd", lineHeight: 1.55 }}>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#111", padding: "65px 28px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={eyebrow}>DETAILS</p>
          <h2 style={sectionTitle}>Weitere Ansichten</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "22px", marginTop: "28px" }}>
            {[
              ["/images/winglet-links-und-rechts.jpg", "Winglet Set"],
              ["/images/spinner-original-und-gworks.jpg", "Spinner Vergleich"],
              ["/images/canopybefestigung-komplett.jpg", "Canopybefestigung komplett"],
            ].map(([src, alt]) => (
              <img key={src} src={src} alt={alt} style={{ width: "100%", borderRadius: "18px", border: "1px solid #2a2a2a" }} />
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" style={{ padding: "80px 28px", textAlign: "center" }}>
        <div style={{
          maxWidth: "850px",
          margin: "0 auto",
          background: "linear-gradient(135deg, #181818, #101010)",
          border: "1px solid #2a2a2a",
          borderRadius: "24px",
          padding: "45px 28px",
        }}>
          <p style={eyebrow}>KOOPERATION</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 46px)", margin: "10px 0" }}>Händleranfrage</h2>
          <p style={{ color: "#bdbdbd", fontSize: "18px", lineHeight: 1.65 }}>
            G-Works sucht den Austausch mit Händlern und Vertriebspartnern, die Zubehör- oder Upgrade-Teile
            für die ASW 28 V2 anbieten möchten.
          </p>
          <p style={{ color: "#ff6600", fontWeight: "bold" }}>
            Musterteile, Paketvarianten und Kleinserien nach Absprache möglich.
          </p>
          <a href="mailto:gworks.rc@gmail.com" style={buttonPrimary}>E-Mail senden</a>
        </div>
      </section>
    </main>
  );
}

const navLink = {
  color: "#ddd",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonSmall = {
  background: "#ff6600",
  color: "#000",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "10px 14px",
  borderRadius: "10px",
};

const buttonPrimary = {
  display: "inline-block",
  background: "#ff6600",
  color: "#000",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "14px 22px",
  borderRadius: "12px",
  marginTop: "12px",
};

const buttonSecondary = {
  display: "inline-block",
  border: "1px solid #444",
  color: "#eee",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "14px 22px",
  borderRadius: "12px",
};

const sectionTitle = {
  fontSize: "clamp(30px, 5vw, 42px)",
  margin: "8px 0",
};

const eyebrow = {
  color: "#ff6600",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontSize: "13px",
};

const benefitCard = {
  background: "#181818",
  border: "1px solid #2a2a2a",
  borderRadius: "18px",
  padding: "24px",
};

const productCard = {
  background: "#181818",
  borderRadius: "18px",
  overflow: "hidden",
  border: "1px solid #2a2a2a",
  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
};