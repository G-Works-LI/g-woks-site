export default function HaubenhalterungPage() {
  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(38px, 8vw, 72px)",
            lineHeight: 1,
            marginBottom: "18px",
            fontWeight: 800,
          }}
        >
          Haubenhalterung <br />
          Vorne & Hinten
        </h1>

        <p
          style={{
            color: "#ff6a00",
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          Mit Federmechanismus
        </p>

        <p
          style={{
            color: "#d0d0d0",
            fontSize: "18px",
            maxWidth: "850px",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          Die G-Works Haubenhalterung vorne und hinten sorgt für einen sicheren
          und zuverlässigen Halt deiner Haube – im Alltag und im Flug.
          <br />
          <br />
          Durch einfaches Einstecken und die integrierte Feder wird die Haube
          sicher fixiert, lässt sich bei Bedarf aber schnell und werkzeuglos
          lösen.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#161616",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #2b2b2b",
            }}
          >
            <img
              src="/images/haubenhalterung-vorne.jpg"
              alt="Haubenhalterung vorne"
              style={{
                width: "100%",
                objectFit: "cover",
                background: "#111",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "#ff6a00",
                  marginTop: 0,
                  fontSize: "28px",
                }}
              >
                Vorne
              </h2>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Kompakte Federhalterung für die vordere Haubensicherung.
                Werkzeuglos bedienbar und passgenau entwickelt.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#161616",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid #2b2b2b",
            }}
          >
            <img
              src="/images/haubenhalterung-hinten.jpg"
              alt="Haubenhalterung hinten"
              style={{
                width: "100%",
                objectFit: "cover",
                background: "#111",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "#ff6a00",
                  marginTop: 0,
                  fontSize: "28px",
                }}
              >
                Hinten
              </h2>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                Sichere hintere Verriegelung mit Federmechanismus für schnellen
                Zugriff und zuverlässigen Halt im Flugbetrieb.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#121212",
            border: "1px solid #2a2a2a",
            borderRadius: "18px",
            padding: "28px",
          }}
        >
          <h2
            style={{
              color: "#ff6a00",
              marginTop: 0,
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            Eigenschaften
          </h2>

          <ul
            style={{
              color: "#d0d0d0",
              lineHeight: 2,
              paddingLeft: "20px",
              fontSize: "18px",
            }}
          >
            <li>Sicherer Halt durch Federmechanismus</li>
            <li>Einfache Bedienung</li>
            <li>Passgenau entwickelt</li>
            <li>Leicht & robust</li>
            <li>3D-gedruckt mit hochwertigem Filament</li>
            <li>Ideal als Ersatz- oder Upgrade-Teil</li>
          </ul>
        </div>
      </div>
    </main>
  );
}