const products = [
  { title: "Winglet Schnellwechsel-System", text: "Schneller Austausch nach Transport oder Beschädigung. Entwickelt als servicefreundliches Upgrade.", image: "/images/winglet-mit-adapter.jpg" },
  { title: "Haubensicherung hinten", text: "Mechanische Sicherung mit Federmechanik für zuverlässigen Halt der Kabinenhaube.", image: "/images/haubenbefestigung-hinten.jpg" },
  { title: "Haubensicherung vorne", text: "Leichte Zusatzsicherung zum Aufkleben für den vorderen Haubenbereich.", image: "/images/haubenbefestigung-vorne.jpg" },
  { title: "Ruderhorn-Befestigung", text: "Verstärkte Befestigungslösung für bessere Kraftverteilung.", image: "/images/Ruderhornbefestigung.jpg" },
  { title: "Spinner mit Nase", text: "Ersatz- und Designteil mit markanter G-Works Optik.", image: "/images/spinner-mit-nase.jpg" },
  { title: "Canopy Pins", text: "Sicherheitsstifte mit Sollbruchstelle, bis 3,5 kg erprobt.", image: "/images/Canopystifte.jpg" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0f0f0f", color: "#eee", minHeight: "100vh" }}>
      <section style={{ padding: "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "#ff6600", fontWeight: "bold", letterSpacing: "2px" }}>G-WORKS RC UPGRADE PARTS</p>
        <h1 style={{ fontSize: "52px", margin: "10px 0", lineHeight: 1.05 }}>
          Funktionale Upgrade-Teile für die Volantex ASW 28 V2
        </h1>
        <p style={{ fontSize: "20px", color: "#bbb", maxWidth: "760px" }}>
          Praxisnah entwickelte 3D-gedruckte Zubehörteile aus Bambu Lab PETG-HF – für bessere Haltbarkeit,
          einfachere Reparatur und mehr Sicherheit am Modell.
        </p>

        <img
          src="/images/modell-asw-28-v2-volantex.jpg"
          alt="Volantex ASW 28 V2"
          style={{ width: "100%", maxWidth: "760px", marginTop: "35px", borderRadius: "18px", border: "1px solid #333" }}
        />
      </section>

      <section style={{ background: "#181818", padding: "50px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>Warum G-Works?</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
            {[
              ["Praxiserprobt", "Teile entstehen direkt am Modell und werden funktional getestet."],
              ["Händlergeeignet", "Kleinserien, Zubehörpakete und Ersatzteil-Sets sind möglich."],
              ["Mehrere Farben", "Orange, Weiß, Rot, Blau und weitere Farben nach Absprache."],
              ["PETG-HF", "Zähes Material für funktionale RC-Bauteile."],
            ].map(([title, text]) => (
              <div key={title} style={{ background: "#111", padding: "22px", borderRadius: "14px", border: "1px solid #333" }}>
                <h3 style={{ color: "#ff6600" }}>{title}</h3>
                <p style={{ color: "#bbb" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "55px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px" }}>Mögliche Zubehörteile</h2>
        <p style={{ color: "#bbb", maxWidth: "760px" }}>
          Die folgenden Musterteile können einzeln oder als abgestimmtes Upgrade-Kit angeboten werden.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "22px", marginTop: "25px" }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: "#181818", borderRadius: "16px", overflow: "hidden", border: "1px solid #333" }}>
              <img src={p.image} alt={p.title} style={{ width: "100%", height: "230px", objectFit: "cover" }} />
              <div style={{ padding: "18px" }}>
                <h3>{p.title}</h3>
                <p style={{ color: "#bbb" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#181818", padding: "55px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px" }}>Weitere Ansichten</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
            <img src="/images/winglet-links-und-rechts.jpg" alt="Winglet Set" style={{ width: "320px", borderRadius: "14px" }} />
            <img src="/images/spinner-original-und-gworks.jpg" alt="Spinner Vergleich" style={{ width: "320px", borderRadius: "14px" }} />
            <img src="/images/canopybefestigung-komplett.jpg" alt="Canopybefestigung komplett" style={{ width: "320px", borderRadius: "14px" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 30px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px" }}>Kooperationsanfrage</h2>
        <p style={{ color: "#bbb", fontSize: "18px" }}>
          G-Works sucht den Austausch mit Händlern und Vertriebspartnern, die Zubehör- oder Upgrade-Teile
          für die ASW 28 V2 anbieten möchten.
        </p>
        <p style={{ marginTop: "25px", color: "#ff6600", fontWeight: "bold" }}>
          Musterteile, Paketvarianten und Kleinserien nach Absprache möglich.
        </p>
      </section>
    </main>
  );
}