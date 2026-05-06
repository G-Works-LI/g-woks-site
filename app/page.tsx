"use client";

import { useEffect, useState } from "react";

const products = [
  { title: "Winglet Schnellwechsel-System", text: "Servicefreundlicher Austausch nach Transport oder Beschädigung.", image: "/images/winglet-mit-adapter-v2.jpg" },
  { title: "Haubensicherung hinten", text: "Mechanische Sicherung mit Federmechanik für zuverlässigen Halt.", image: "/images/haubenbefestigung-hinten-v2.jpg" },
  { title: "Haubensicherung vorne", text: "Leichte Zusatzsicherung zum Aufkleben.", image: "/images/haubenbefestigung-vorne-v3.jpg" },
  { title: "Ruderhorn-Befestigung", text: "Verstärkte Befestigung für bessere Kraftverteilung.", image: "/images/ruderhornbefestigung-v2.jpg" },
  { title: "Spinner mit Nase", text: "Ersatz- und Designteil mit markanter G-Works Optik.", image: "/images/spinner-mit-nase-v3.jpg" },
  { title: "Canopy Pins", text: "Sicherheitsstifte mit Sollbruchstelle.", image: "/images/canopystifte-v2.jpg" },
];

const benefits = [
  ["Praxiserprobt", "Entwickelt direkt am Modell und getestet."],
  ["Erprobt", "Im realen Flugbetrieb getestet und optimiert."],
  ["Händlergeeignet", "Kleinserien und Sets möglich."],
  ["PETG-HF", "Zähes Material für funktionale Bauteile."],
];

const kits = [
  { title: "Basic Kit", image: "/images/basic-kit-v2.jpg", items: ["Winglets mit Adapter", "Canopy Pins", "Canopysicherung vorne und hinten"] },
  { title: "Performance Kit", image: "/images/performance-kit-v2.jpg", items: ["Winglet System", "Haubensicherung hinten", "Canopy Pins"] },
  { title: "Full Kit", image: "/images/full-kit-v2.jpg", items: ["Alle Komponenten kombiniert", "Maximale Verbesserung"] },
];

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallMobile(window.innerWidth < 480);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "#eee", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ background: "#ff6600", color: "#000", textAlign: "center", padding: isSmallMobile ? "9px 14px" : "10px", fontWeight: "bold", fontSize: isSmallMobile ? "12px" : isMobile ? "13px" : "15px", lineHeight: 1.35 }}>
        Diese Seite befindet sich aktuell im Aufbau – Inhalte, Produktbilder und Sets werden laufend erweitert.
      </div>

      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px", padding: isSmallMobile ? "14px 16px" : isMobile ? "16px 20px" : "20px 30px", borderBottom: "1px solid #222", background: "#0b0b0b" }}>
        <img src="/logo.svg" alt="G-Works Logo" style={{ height: isSmallMobile ? "30px" : isMobile ? "34px" : "46px" }} />
        <a href="#kontakt" style={{ background: "#ff6600", padding: isSmallMobile ? "9px 12px" : "10px 14px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold", color: "#000", fontSize: isSmallMobile ? "13px" : "14px" }}>
          Kontakt
        </a>
      </header>

      <section
        style={{
          padding: isSmallMobile ? "42px 16px" : isMobile ? "52px 20px" : "80px 30px",
          backgroundImage: "linear-gradient(rgba(11,11,11,0.80), rgba(11,11,11,0.92)), url('/images/tech-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: isSmallMobile ? "30px" : isMobile ? "34px" : "48px", lineHeight: 1.1, marginBottom: "12px" }}>
            Upgrade Parts für die ASW 28 V2
          </h1>

          <p style={{ fontSize: isSmallMobile ? "15px" : isMobile ? "17px" : "20px", color: "#ff6600", fontWeight: "bold", lineHeight: 1.35 }}>
            Speziell entwickelt zur Behebung typischer Schwachstellen
          </p>

          <p style={{ fontSize: isSmallMobile ? "15px" : isMobile ? "16px" : "18px", color: "#ccc", maxWidth: "700px", lineHeight: 1.55 }}>
            Praxiserprobte 3D-gedruckte Zubehörteile für bessere Haltbarkeit,
            einfachere Wartung und mehr Sicherheit.
          </p>

          <img
            src="/images/modell-asw-28-v2-volantex-v3.jpg"
            alt="Volantex ASW 28 V2"
            style={{
              width: "100%",
              maxWidth: isMobile ? "100%" : "700px",
              marginTop: isMobile ? "26px" : "35px",
              borderRadius: isMobile ? "12px" : "14px",
              border: "1px solid #333",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
            }}
          />
        </div>
      </section>

      <section style={{ background: "#111", padding: isSmallMobile ? "38px 16px" : isMobile ? "45px 20px" : "60px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isSmallMobile ? "26px" : isMobile ? "30px" : "34px" }}>Warum G-Works?</h2>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))", gap: isMobile ? "14px" : "18px", marginTop: "20px" }}>
            {benefits.map(([title, text]) => (
              <div key={title} style={{ background: "#181818", padding: isMobile ? "17px" : "20px", borderRadius: "14px", border: "1px solid #2a2a2a" }}>
                <h3 style={{ color: "#ff6600", marginTop: 0, fontSize: isMobile ? "16px" : "18px" }}>{title}</h3>
                <p style={{ color: "#ccc", marginBottom: 0, lineHeight: 1.5 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isSmallMobile ? "38px 16px" : isMobile ? "45px 20px" : "60px 30px", background: "#0b0b0b" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            background: "linear-gradient(135deg, rgba(255,102,0,0.14), rgba(24,24,24,1))",
            border: "1px solid rgba(255,102,0,0.35)",
            borderRadius: isMobile ? "14px" : "16px",
            padding: isSmallMobile ? "20px" : isMobile ? "24px" : "34px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <h2 style={{ fontSize: isSmallMobile ? "23px" : isMobile ? "26px" : "30px", color: "#ff6600", marginTop: 0, marginBottom: "10px", lineHeight: 1.2 }}>
            STL-Dateien zum Selbstdruck
          </h2>

          <div
            style={{
              display: "inline-block",
              background: "rgba(255,102,0,0.18)",
              border: "1px solid rgba(255,102,0,0.35)",
              color: "#ff6600",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: "bold",
              marginBottom: "14px",
            }}
          >
            DIGITAL STL FILES
          </div>

          <p style={{ color: "#ddd", lineHeight: 1.6, maxWidth: "850px", fontSize: isMobile ? "14px" : "16px" }}>
            Viele G-Works Designs sind auch als STL-Dateien erhältlich. Diese eignen sich
            für Kunden, die die Teile selbst drucken möchten.
          </p>

          <div
            style={{
              marginTop: "18px",
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,102,0,0.25)",
              borderRadius: "14px",
              padding: isMobile ? "16px" : "18px",
              maxWidth: "850px",
            }}
          >
            <h3 style={{ color: "#ff6600", marginTop: 0, fontSize: isMobile ? "15px" : "17px" }}>
              Wichtiger Hinweis zu STL-Dateien
            </h3>

            <p style={{ color: "#ccc", lineHeight: 1.6, marginBottom: "10px", fontSize: isMobile ? "13px" : "15px" }}>
              Die STL-Dateien enthalten keine optimierten Druckprofile,
              Slicer-Einstellungen oder unsere produktionsspezifischen
              Verstärkungs-Setups.
            </p>

            <p style={{ color: "#aaa", lineHeight: 1.6, marginBottom: 0, fontSize: isMobile ? "13px" : "15px" }}>
              Verstärkende Rippen und Stabilitätsoptimierungen sind Teil unseres
              eigenen Druckprozesses. Die finale Stabilität hängt von Drucker,
              Material, Druckausrichtung und Slicer-Einstellungen ab. Für maximale
              Stabilität empfehlen wir unsere fertig gedruckten G-Works Teile.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: isSmallMobile ? "38px 16px" : isMobile ? "45px 20px" : "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: isSmallMobile ? "26px" : isMobile ? "30px" : "34px" }}>Produkte</h2>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: isMobile ? "16px" : "20px", marginTop: "20px" }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: "#181818", borderRadius: "14px", overflow: "hidden", border: "1px solid #2a2a2a" }}>
              <img
  src={p.image}
  alt={p.title}
  style={{
    width: "100%",
    height: isSmallMobile ? "210px" : isMobile ? "240px" : "200px",
    objectFit: "contain",
    background: "#111",
    padding: "10px",
  }}
/>
              <div style={{ padding: isMobile ? "16px" : "15px" }}>
                <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: isMobile ? "17px" : "18px" }}>{p.title}</h3>
                <p style={{ color: "#ccc", marginBottom: 0, lineHeight: 1.45, fontSize: isMobile ? "14px" : "15px" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: isSmallMobile ? "42px 16px" : isMobile ? "50px 20px" : "80px 30px",
          background: "#0b0b0b",
          borderTop: "1px solid #1d1d1d",
          borderBottom: "1px solid #1d1d1d",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: isMobile ? "16px" : "24px",
              border: "1px solid rgba(255,102,0,0.18)",
              boxShadow: "0 30px 90px rgba(0,0,0,0.6)",
            }}
          >
            <img
  src="/images/engineering-cad-hero.jpg"
  alt="G-Works CAD Engineering"
  style={{
    width: "100%",
    maxWidth: "100%",
    display: "block",
    transform: "none",
  }}
/>

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0.02))",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: isSmallMobile ? "42px 16px" : isMobile ? "50px 20px" : "70px 30px", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isSmallMobile ? "26px" : isMobile ? "30px" : "34px" }}>Upgrade Sets</h2>

          <p style={{ color: "#ccc", maxWidth: "700px", lineHeight: 1.5, fontSize: isMobile ? "15px" : "16px" }}>
            Die Komponenten können als abgestimmte Upgrade-Kits angeboten werden,
            um typische Schwachstellen gezielt zu verbessern.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))", gap: isMobile ? "16px" : "20px", marginTop: "30px" }}>
            {kits.map((kit) => (
              <div
                key={kit.title}
                onMouseEnter={() => setHovered(kit.title)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  background: "#181818",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: kit.title === "Performance Kit" ? "2px solid #ff6600" : "1px solid #2a2a2a",
                  transition: "all 0.25s ease",
                  transform: hovered === kit.title && !isMobile ? "translateY(-6px)" : "translateY(0)",
                  boxShadow:
                    hovered === kit.title && !isMobile
                      ? kit.title === "Performance Kit"
                        ? "0 20px 50px rgba(255,102,0,0.35)"
                        : "0 20px 40px rgba(0,0,0,0.6)"
                      : kit.title === "Performance Kit"
                      ? "0 0 25px rgba(255,102,0,0.18)"
                      : "none",
                }}
              >
                {kit.title === "Performance Kit" && (
                  <div style={{ position: "absolute", top: "10px", right: "10px", background: "#ff6600", color: "#000", padding: "5px 10px", borderRadius: "8px", fontSize: "12px", fontWeight: "bold", zIndex: 2 }}>
                    Empfohlen
                  </div>
                )}

                <img
                  src={kit.image}
                  alt={kit.title}
                  style={{
                    width: "100%",
                    height: isSmallMobile ? "210px" : isMobile ? "240px" : "220px",
                    objectFit: "cover",
                    transform: hovered === kit.title && !isMobile ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />

                <div style={{ padding: isMobile ? "18px" : "20px" }}>
                  <h3 style={{ marginTop: 0 }}>{kit.title}</h3>

                  <ul style={{ color: "#ccc", paddingLeft: "20px", lineHeight: 1.6 }}>
                    {kit.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "25px", color: "#ff6600", fontWeight: "bold", textAlign: "center", fontSize: isMobile ? "17px" : "18px" }}>
            Jetzt Händler werden oder direkt anfragen
          </p>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              href="#kontakt"
              style={{
                display: "inline-block",
                width: isMobile ? "100%" : "auto",
                boxSizing: "border-box",
                padding: isMobile ? "16px 22px" : "14px 28px",
                background: "#ff6600",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "12px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 10px 30px rgba(255,102,0,0.3)",
              }}
            >
              Händleranfrage starten
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: isSmallMobile ? "42px 16px" : isMobile ? "50px 20px" : "70px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: isSmallMobile ? "26px" : isMobile ? "30px" : "34px" }}>Montage & Bauanleitung</h2>

        <p style={{ color: "#ccc", maxWidth: "700px", lineHeight: 1.5, fontSize: isMobile ? "15px" : "16px" }}>
          Für alle G-Works Upgrade-Teile werden aktuell bebilderte Montageanleitungen erstellt.
          Ziel ist eine einfache, sichere und reproduzierbare Installation direkt am Modell.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(260px, 1fr))", gap: isMobile ? "16px" : "20px", marginTop: "30px" }}>
          {["Vorbereitung", "Montage", "Kontrolle"].map((title) => (
            <div key={title} style={{ background: "#181818", padding: isMobile ? "18px" : "20px", borderRadius: "14px", border: "1px solid #2a2a2a" }}>
              <h3 style={{ color: "#ff6600", marginTop: 0 }}>{title}</h3>
              <ul style={{ color: "#ccc", paddingLeft: "20px", lineHeight: 1.6 }}>
                {title === "Vorbereitung" && (
                  <>
                    <li>Bauteile auf Beschädigungen prüfen</li>
                    <li>Kontaktflächen reinigen</li>
                    <li>Passung vor Montage trocken testen</li>
                  </>
                )}
                {title === "Montage" && (
                  <>
                    <li>Bauteile spannungsfrei einsetzen</li>
                    <li>Keine Gewalt anwenden</li>
                    <li>Ggf. Kleber oder Schrauben nach Anleitung verwenden</li>
                  </>
                )}
                {title === "Kontrolle" && (
                  <>
                    <li>Sitz und Funktion prüfen</li>
                    <li>Bewegliche Teile testen</li>
                    <li>Vor jedem Flug Sichtkontrolle durchführen</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "30px", color: "#ff6600", fontWeight: "bold", textAlign: "center", lineHeight: 1.5 }}>
          Detaillierte Einbauanleitungen und Beispielbilder werden aktuell erstellt.
        </p>
      </section>

      <section
  style={{
    padding: isSmallMobile ? "60px 16px" : isMobile ? "70px 20px" : "90px 30px",
    background: "#0f0f0f",
    borderTop: "1px solid #1d1d1d",
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <h2 style={{ fontSize: isSmallMobile ? "26px" : isMobile ? "30px" : "34px" }}>
      CAD Design & Sonderlösungen
    </h2>

    <p
      style={{
        color: "#ccc",
        maxWidth: "760px",
        lineHeight: 1.6,
        fontSize: isMobile ? "15px" : "16px",
      }}
    >
      Neben unseren eigenen Upgrade-Teilen entwickeln wir auch individuelle
      CAD-Lösungen für andere RC-Modelle und spezielle Anwendungen.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
        gap: isMobile ? "16px" : "20px",
        marginTop: "28px",
      }}
    >
      {[
        "Nicht mehr lieferbare Ersatzteile",
        "Krallenkupplungen & Mechaniken",
        "Modellspezifische Anpassungen",
        "Kleinserien & Sonderanfertigungen",
      ].map((item) => (
        <div
          key={item}
          style={{
            background: "#181818",
            border: "1px solid #2a2a2a",
            borderRadius: "14px",
            padding: isMobile ? "18px" : "22px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            transition: "all 0.25s ease",
          }}
        >
          <h3
            style={{
              color: "#ff6600",
              margin: 0,
              fontSize: isMobile ? "16px" : "18px",
            }}
          >
            {item}
          </h3>
        </div>
      ))}
    </div>

    <p
      style={{
        marginTop: "28px",
        color: "#aaa",
        lineHeight: 1.6,
        maxWidth: "760px",
        fontSize: isMobile ? "14px" : "15px",
      }}
    >
      Ziel ist die Entwicklung funktionaler, langlebiger und praxisgerechter
      Lösungen für den realen RC-Einsatz – von Ersatzteilen bis hin zu
      kompletten Sonderkonstruktionen.
    </p>
  </div>
</section>

      <section id="kontakt" style={{ padding: isSmallMobile ? "42px 16px" : isMobile ? "50px 20px" : "60px 30px", textAlign: "center", background: "#111" }}>
        <h2 style={{ fontSize: isSmallMobile ? "26px" : isMobile ? "30px" : "34px" }}>Händleranfrage</h2>

        <p style={{ color: "#ccc", maxWidth: "600px", margin: "0 auto", lineHeight: 1.5, fontSize: isMobile ? "15px" : "16px" }}>
          Interesse an einer Zusammenarbeit oder Vertriebspartnerschaft?
          Kontaktieren Sie uns direkt.
        </p>

        <a
          href="mailto:gworks.rc@gmail.com"
          style={{
            display: "inline-block",
            width: isMobile ? "100%" : "auto",
            boxSizing: "border-box",
            marginTop: "25px",
            padding: "14px 24px",
            background: "#ff6600",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          E-Mail senden
        </a>
      </section>
    </main>
  );
}