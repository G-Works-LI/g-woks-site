const products = [
  {
    title: "Winglet System",
    text: "Schneller Austausch und verbesserte Stabilität",
    image: "/images/winglet-mit-adapter.jpg",
  },
  {
    title: "Haubensicherung hinten",
    text: "Mechanische Sicherung mit Federmechanik",
    image: "/images/haubenbefestigung-hinten.jpg",
  },
  {
    title: "Haubensicherung vorne",
    text: "Zusätzliche Sicherung zum Aufkleben",
    image: "/images/haubenbefestigung-vorne.jpg",
  },
  {
    title: "Ruderhorn",
    text: "Verstärkte Befestigung für höhere Belastung",
    image: "/images/ruderhornbefestigung.jpg",
  },
  {
    title: "Spinner",
    text: "Ersatz- und Designteil",
    image: "/images/spinner-mit-nase.jpg",
  },
  {
    title: "Canopy Pins",
    text: "Sollbruchstelle zum Schutz des Modells",
    image: "/images/canopystifte.jpg",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", backgroundColor: "#111", color: "#eee", padding: "30px", minHeight: "100vh" }}>
      <h1 style={{ color: "#ff6600", fontSize: "42px" }}>G-Works</h1>
      <p>RC Upgrade Parts für die Volantex ASW 28 V2</p>

      <hr />

      <h2>Über das Projekt</h2>
      <p>
        Entwicklung von praxiserprobten Upgrade- und Ersatzteilen für RC-Segler.
        Fokus auf typische Schwachstellen der ASW 28 V2.
      </p>

      <img
        src="/images/modell-asw-28-v2-volantex.jpg"
        alt="Volantex ASW 28 V2 Modell"
        style={{ width: "100%", maxWidth: "600px", marginTop: "20px", borderRadius: "10px" }}
      />

      <hr />

      <h2>Produkte</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.title} style={{ width: "300px", border: "1px solid #333", padding: "12px", borderRadius: "10px", backgroundColor: "#1a1a1a" }}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "8px" }}
            />
            <p>{product.text}</p>
          </div>
        ))}
      </div>

      <hr />

      <h2>Weitere Details</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <img
          src="/images/winglet-links-und-rechts.jpg"
          alt="Winglet links und rechts"
          style={{ width: "300px", borderRadius: "10px" }}
        />

        <img
          src="/images/spinner-original-und-gworks.jpg"
          alt="Spinner Vergleich Original und G-Works"
          style={{ width: "300px", borderRadius: "10px" }}
        />

        <img
          src="/images/canopybefestigung-komplett.jpg"
          alt="Canopybefestigung komplett"
          style={{ width: "300px", borderRadius: "10px" }}
        />
      </div>

      <hr />

      <h2>Material</h2>
      <p>PETG-HF – hohe Zähigkeit und Belastbarkeit, praxiserprobt.</p>

      <hr />

      <h2>Kooperation</h2>
      <p>
        Ziel ist eine Zusammenarbeit mit Vertriebspartnern für Zubehör- und Upgrade-Teile
        für die ASW 28 V2.
      </p>
    </main>
  );
}