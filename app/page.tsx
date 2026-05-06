"use client";

import { useEffect, useState } from "react";

const products = [
  { title: "Winglet Schnellwechsel-System", text: "Servicefreundlicher Austausch nach Transport oder Beschädigung.", image: "/images/winglet-mit-adapter-v2.jpg" },
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
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "#eee", minHeight: "100vh" }}>
      <div style={{ background: "#ff6600", color: "#000", textAlign: "center", padding: "10px", fontWeight: "bold", fontSize: isMobile ? "13px" : "15px" }}>
        Diese Seite befindet sich aktuell im Aufbau – Inhalte, Produktbilder und Sets werden laufend erweitert.
      </div>

      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "16px 20px" : "20px 30px", borderBottom: "1px solid #222", background: "#0b0b0b" }}>
        <img src="/logo.svg" alt="G-Works Logo" style={{ height: isMobile ? "34px" : "46px" }} />
        <a href="#kontakt" style={{ background: "#ff6600", padding: "10px 14px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold", color: "#000" }}>
          Kontakt
        </a>
      </header>

      <section
        style={{
          padding: isMobile ? "55px 20px" : "80px 30px",
          backgroundImage: "linear-gradient(rgba(11,11,11,0.80), rgba(11,11,11,0.92)), url('/images/tech-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: isMobile ? "34px" : "48px", marginBottom: "10px" }}>
            Upgrade Parts für die ASW 28 V2
          </h1>

          <p style={{ fontSize: isMobile ? "17px" : "20px", color: "#ff6600", fontWeight: "bold" }}>
            Speziell entwickelt zur Behebung typischer Schwachstellen
          </p>

          <p style={{ fontSize: isMobile ? "16px" : "18px", color: "#ccc", maxWidth: "700px", lineHeight: 1.5 }}>
            Praxiserprobte 3D-gedruckte Zubehörteile für bessere Haltbarkeit,
            einfachere Wartung und mehr Sicherheit.
          </p>

          <img
            src="/images/modell-asw-28-v2-volantex-v2.jpg"
            alt="Volantex ASW 28 V2"
            style={{ width: "100%", maxWidth: "700px", marginTop: "35px", borderRadius: "14px", border: "1px solid #333", boxShadow: "0 30px 80px rgba(0,0,0,0.7)" }}
          />
        </div>
      </section>

      <section style={{ background: "#111", padding: isMobile ? "45px 20px" : "60px 30px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "30px" : "34px" }}>Warum G-Works?</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginTop: "20px" }}>
            {benefits.map(([title, text]) => (
              <div key={title} style={{ background: "#181818", padding: "20px", borderRadius: "14px", border: "1px solid #2a2a2a" }}>
                <h3 style={{ color: "#ff6600" }}>{title}</h3>
                <p style={{ color: "#ccc" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "45px 20px" : "60px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: isMobile ? "30px" : "34px" }}>Produkte</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: isMobile ? "16px" : "20px", marginTop: "20px" }}>
          {products.map((p) => (
            <div key={p.title} style={{ background: "#181818", borderRadius: "14px", overflow: "hidden", border: "1px solid #2a2a2a" }}>
              <img src={p.image} alt={p.title} style={{ width: "100%", height: isMobile ? "190px" : "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3>{p.title}</h3>
                <p style={{ color: "#ccc" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "50px 20px" : "70px 30px", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "30px" : "34px" }}>Upgrade Sets</h2>

          <p style={{ color: "#ccc", maxWidth: "700px", lineHeight: 1.5 }}>
            Die Komponenten können als abgestimmte Upgrade-Kits angeboten werden,
            um typische Schwachstellen gezielt zu verbessern.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: isMobile ? "16px" : "20px", marginTop: "30px" }}>
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
                  <div style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#ff6600",
                    color: "#000",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 2,
                  }}>
                    Empfohlen
                  </div>
                )}

                <img
                  src={kit.image}
                  alt={kit.title}
                  style={{
                    width: "100%",
                    height: isMobile ? "190px" : "220px",
                    objectFit: "cover",
                    transform: hovered === kit.title && !isMobile ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h3>{kit.title}</h3>

                  <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
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
                padding: isMobile ? "16px 24px" : "14px 28px",
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

      <section style={{ padding: isMobile ? "50px 20px" : "70px 30px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: isMobile ? "30px" : "34px" }}>Montage & Bauanleitung</h2>

        <p style={{ color: "#ccc", maxWidth: "700px", lineHeight: 1.5 }}>
          Für alle G-Works Upgrade-Teile werden aktuell bebilderte Montageanleitungen erstellt.
          Ziel ist eine einfache, sichere und reproduzierbare Installation direkt am Modell.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: isMobile ? "16px" : "20px", marginTop: "30px" }}>
          {["Vorbereitung", "Montage", "Kontrolle"].map((title) => (
            <div key={title} style={{ background: "#181818", padding: "20px", borderRadius: "14px", border: "1px solid #2a2a2a" }}>
              <h3 style={{ color: "#ff6600" }}>{title}</h3>
              <ul style={{ color: "#ccc", paddingLeft: "20px" }}>
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

        <p style={{ marginTop: "30px", color: "#ff6600", fontWeight: "bold", textAlign: "center" }}>
          Detaillierte Einbauanleitungen und Beispielbilder werden aktuell erstellt.
        </p>
      </section>

      <section id="kontakt" style={{ padding: isMobile ? "50px 20px" : "60px 30px", textAlign: "center", background: "#111" }}>
        <h2 style={{ fontSize: isMobile ? "30px" : "34px" }}>Händleranfrage</h2>

        <p style={{ color: "#ccc", maxWidth: "600px", margin: "0 auto", lineHeight: 1.5 }}>
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