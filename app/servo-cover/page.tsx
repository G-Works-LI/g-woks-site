export default function ServoCoverPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/servo-cover.jpg"
            alt="Servo Cover"
            className="rounded-2xl border border-orange-500/20"
          />
        </div>

        <div>
          <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
            G-Works Engineering
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Servo-Cover Set
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            Aerodynamische Servo-Abdeckungen für die ASW 28 V2.
            Entwickelt für besseren Schutz, saubere Optik
            und optimierte Aerodynamik.
          </p>

          <div className="text-4xl font-bold text-orange-500 mb-8">
            CHF 14.90
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </main>
  );
}