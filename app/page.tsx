export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", backgroundColor: "#111", color: "#eee", padding: "30px" }}>
      
      <h1 style={{ color: "#ff6600" }}>G-Works</h1>
      <p>RC Upgrade Parts für die ASW 28 V2</p>

      <hr />

      <h2>Über das Projekt</h2>
      <p>
        Entwicklung von praxiserprobten Upgrade- und Ersatzteilen für RC-Segler.
        Fokus auf typische Schwachstellen der ASW 28 V2.
      </p>

      <img src="/images/Modell ASW 28 V2 Volantex.jpg" style={{ width: "500px", marginTop: "20px" }} />

      <hr />

      <h2>Produkte</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

        {/* Winglet */}
        <div style={{ width: "300px", border: "1px solid #333", padding: "10px" }}>
          <h3>Winglet System</h3>
          <img src="/images/Winglet mit Adapter.jpg" style={{ width: "100%" }} />
          <p>Schneller Austausch und verbesserte Stabilität</p>
        </div>

        {/* Haube */}
        <div style={{ width: "300px", border: "1px solid #333", padding: "10px" }}>
          <h3>Haubensicherung</h3>
          <img src="/images/Haubenbefestigung hinten.jpg" style={{ width: "100%" }} />
          <p>Mechanische Sicherung mit Federmechanik</p>
        </div>

        {/* Ruderhorn */}
        <div style={{ width: "300px", border: "1px solid #333", padding: "10px" }}>
          <h3>Ruderhorn</h3>
          <img src="/images/Ruderhornbefestigung.jpg" style={{ width: "100%" }} />
          <p>Verstärkte Befestigung für höhere Belastung</p>
        </div>

        {/* Spinner */}
        <div style={{ width: "300px", border: "1px solid #333", padding: "10px" }}>
          <h3>Spinner</h3>
          <img src="/images/Spinner mit Nase.jpg" style={{ width: "100%" }} />
          <p>Ersatz- und Designteil</p>
        </div>

        {/* Pins */}
        <div style={{ width: "300px", border: "1px solid #333", padding: "10px" }}>
          <h3>Canopy Pins</h3>
          <img src="/images/Canopystifte.jpg" style={{ width: "100%" }} />
          <p>Sollbruchstelle zum Schutz des Modells</p>
        </div>

      </div>

      <hr />

      <h2>Material</h2>
      <p>PETG-HF – hohe Zähigkeit und Belastbarkeit</p>

      <hr />

      <h2>Kooperation</h2>
      <p>
        Ziel ist eine Zusammenarbeit mit Vertriebspartnern für Zubehör- und Upgrade-Teile
        für die ASW 28 V2.
      </p>

    </div>
  );
}