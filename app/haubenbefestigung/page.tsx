export default function HaubenbefestigungPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "40px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
          color: "#ff6a00",
        }}
      >
        Haubenbefestigung vorne & hinten
      </h1>

      <img
        src="/images/haubenbefestigung-hinten-und-vorne-v3.jpg"
        alt="Haubenbefestigung"
        style={{
          width: "100%",
          borderRadius: "18px",
          marginBottom: "30px",
          border: "1px solid #2a2a2a",
        }}
      />

      <div
        style={{
          padding: "24px",
          background: "#181818",
          borderRadius: "16px",
          border: "1px solid #2a2a2a",
        }}
      >
        <h2 style={{ color: "#ff6a00", marginTop: 0 }}>
          Haubenbefestigung mit Federmechanismus
        </h2>

        <p style={{ lineHeight: 1.7, color: "#ddd" }}>
          Die G-Works Haubenbefestigung sorgt für sicheren Halt deiner
          Kabinenhaube im Flug und ermöglicht gleichzeitig eine schnelle
          und werkzeuglose Bedienung.
        </p>

        <p style={{ lineHeight: 1.7, color: "#bbb" }}>
          Durch den integrierten Federmechanismus wird die Haube zuverlässig
          fixiert und bleibt dennoch servicefreundlich demontierbar.
        </p>

        <ul
          style={{
            marginTop: "24px",
            lineHeight: 2,
            color: "#ccc",
          }}
        >
          <li>Federmechanismus für sicheren Halt</li>
          <li>Werkzeuglose Bedienung</li>
          <li>Leicht & robust</li>
          <li>3D-gedruckt mit hochwertigem Filament</li>
          <li>Definierte Sollbruchstelle zum Schutz der Haube</li>
        </ul>
      </div>
    </main>
  );
}