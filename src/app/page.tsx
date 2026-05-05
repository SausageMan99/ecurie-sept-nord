const inspections = [
  ["970–992", "Porsche modernes", "Lecture PIWIS, trains roulants, freinage, usage route / trackday."],
  ["964–993", "Air-cooled", "Contrôle corrosion, étanchéité, faisceaux, historique et points faibles."],
  ["981–718", "Cayman / Boxster", "Géométrie, température, freinage, pneus, préparation week-end."],
];

const workflow = [
  ["01", "Arrivée", "Photos, symptômes, historique, usage réel. On refuse le flou avant de lever la voiture."],
  ["02", "Scan", "Codes, valeurs, température, fuites, usure. Le diagnostic est lisible, pas mystique."],
  ["03", "Arbitrage", "À faire maintenant, à surveiller, à refuser. Le propriétaire décide avec preuves."],
  ["04", "Sortie", "Essai route, compte-rendu, prochaines échéances, trace claire pour la revente."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Écurie Sept-Nord",
  description: "Prototype portfolio fictif pour un atelier Porsche indépendant en Normandie.",
  url: "https://ecurie-sept-nord.vercel.app",
};

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="mono border border-[color:var(--line)] px-3 py-1 text-[10px] uppercase tracking-[.22em] text-[color:var(--fog)]">{children}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[color:var(--line)] bg-[#080a09cc] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 md:px-8">
          <a className="mono text-xs uppercase tracking-[.28em] text-[color:var(--acid)]" href="#top">Écurie Sept-Nord</a>
          <div className="hidden gap-8 text-sm text-[color:var(--fog)] md:flex">
            <a href="#scan">Scan</a><a href="#atelier">Atelier</a><a href="#brief">Brief</a>
          </div>
          <a href="#brief" className="bg-[color:var(--acid)] px-4 py-2 text-sm font-black uppercase tracking-[.14em] text-[color:var(--asphalt)]">Réserver un diagnostic</a>
        </nav>
      </header>

      <section id="top" className="telemetry relative min-h-screen px-4 pt-24 md:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-10 py-12 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div className="rev">
            <div className="flex flex-wrap gap-2"><Tag>Garage fictif</Tag><Tag>Normandie</Tag><Tag>Porsche indépendant</Tag></div>
            <h1 className="display mt-8 max-w-6xl text-[clamp(4.8rem,14vw,13rem)] uppercase leading-[.72] text-[color:var(--chalk)]">
              Le site d’un atelier qui ne vend pas du rêve. Il lit la machine.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[color:var(--fog)]">
              Prototype Hacker Studio pour une niche automotive premium : spécialistes Porsche, préparateurs route, detailing technique ou garages indépendants haut de gamme qui doivent inspirer confiance avant l’appel.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#scan" className="border border-[color:var(--acid)] px-6 py-4 text-center text-sm font-black uppercase tracking-[.16em] text-[color:var(--acid)] transition hover:bg-[color:var(--acid)] hover:text-[color:var(--asphalt)]">Voir le diagnostic</a>
              <a href="#brief" className="border border-[color:var(--line)] px-6 py-4 text-center text-sm font-black uppercase tracking-[.16em] text-[color:var(--chalk)] transition hover:border-[color:var(--chalk)]">Fiche véhicule</a>
            </div>
          </div>

          <aside className="scanline border border-[color:var(--line)] bg-[#0f130f] p-4 shadow-[0_40px_100px_rgba(0,0,0,.55)]">
            <div className="track relative min-h-[620px] overflow-hidden border border-[color:var(--line)] p-5">
              <div className="mono flex justify-between text-[10px] uppercase tracking-[.24em] text-[color:var(--fog)]"><span>Inspection bay 02</span><span>oil temp 89°</span></div>
              <div className="absolute left-1/2 top-24 h-[430px] w-[260px] -translate-x-1/2 rounded-[52%_48%_42%_58%] border-2 border-[color:var(--chalk)]/45" />
              <div className="absolute left-1/2 top-40 h-[260px] w-[170px] -translate-x-1/2 rounded-[50%] border border-[color:var(--acid)]/65" />
              <div className="absolute left-[20%] top-28 h-24 w-24 rounded-full border border-[color:var(--line)]" />
              <div className="absolute right-[20%] top-28 h-24 w-24 rounded-full border border-[color:var(--line)]" />
              <div className="absolute left-[18%] bottom-24 h-28 w-28 rounded-full border border-[color:var(--line)]" />
              <div className="absolute right-[18%] bottom-24 h-28 w-28 rounded-full border border-[color:var(--line)]" />
              <div className="absolute bottom-8 left-5 right-5 grid grid-cols-3 gap-3">
                {[["frein", "72%"], ["geo", "-0.14"], ["fuite", "non"]].map(([k,v]) => <div key={k} className="border border-[color:var(--line)] bg-black/30 p-3"><p className="mono text-[10px] uppercase tracking-[.2em] text-[color:var(--fog)]">{k}</p><p className="display text-4xl text-[color:var(--acid)]">{v}</p></div>)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="scan" className="border-y border-[color:var(--line)] bg-[color:var(--chalk)] px-4 py-24 text-[color:var(--asphalt)] md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <p className="mono text-xs uppercase tracking-[.28em] text-black/50">Ce que le site prouve immédiatement</p>
          <h2 className="display mt-6 max-w-6xl text-6xl uppercase leading-[.82] md:text-[9rem]">Pas de lifestyle Porsche. Des preuves mécaniques.</h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {inspections.map(([code, title, text]) => (
              <article key={code} className="min-h-[320px] border border-black/18 bg-[#f3eadc] p-5 transition hover:-translate-y-2 hover:bg-white">
                <p className="display text-7xl text-[color:var(--signal)]">{code}</p>
                <h3 className="mt-8 text-2xl font-black uppercase tracking-[-.04em]">{title}</h3>
                <p className="mt-4 leading-7 text-black/62">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="atelier" className="px-4 py-28 md:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[.78fr_1.22fr]">
          <div>
            <p className="mono text-xs uppercase tracking-[.28em] text-[color:var(--acid)]">Flux atelier</p>
            <h2 className="display mt-6 text-6xl uppercase leading-[.78] md:text-[8rem]">Chaque étape sort avec une trace.</h2>
          </div>
          <div className="grid gap-3">
            {workflow.map(([num, title, text]) => (
              <article key={num} className="grid gap-4 border border-[color:var(--line)] bg-white/[.035] p-5 md:grid-cols-[110px_1fr]">
                <p className="display text-6xl text-[color:var(--signal)]">{num}</p>
                <div><h3 className="text-3xl font-black uppercase tracking-[-.04em]">{title}</h3><p className="mt-2 leading-7 text-[color:var(--fog)]">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-[1.3fr_.7fr]">
          <div className="border border-[color:var(--line)] bg-[#0e110f] p-6 md:p-10">
            <p className="mono text-xs uppercase tracking-[.28em] text-[color:var(--acid)]">Différence business</p>
            <h2 className="display mt-8 text-6xl uppercase leading-[.8] md:text-[8rem]">Un template montre une voiture. Ce site vend la décision.</h2>
          </div>
          <div className="grid gap-3">
            {[
              "Demande qualifiée par modèle, année, symptômes, usage et horizon.",
              "Crédibilité construite par un protocole, pas par des superlatifs.",
              "Visuel radical : codes circuit, télémétrie, inspection, noir atelier.",
              "Aucune fausse photo client, aucun faux palmarès, aucun avis inventé.",
            ].map((x) => <p key={x} className="border-l border-[color:var(--acid)] bg-white/[.035] p-5 leading-7 text-[color:var(--fog)]">{x}</p>)}
          </div>
        </div>
      </section>

      <section id="brief" className="bg-[color:var(--signal)] px-4 py-24 text-[color:var(--asphalt)] md:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div><p className="mono text-xs uppercase tracking-[.28em] text-black/60">Fiche véhicule</p><h2 className="display mt-6 text-6xl uppercase leading-[.78] md:text-[8rem]">Réserver un diagnostic sérieux.</h2></div>
          <form className="grid gap-3 bg-[color:var(--asphalt)] p-4 text-[color:var(--chalk)] md:p-6">
            {["Nom", "Email", "Modèle / année", "Kilométrage", "Usage", "Symptôme principal"].map((label) => <label key={label} className="grid gap-2"><span className="mono text-[10px] uppercase tracking-[.24em] text-[color:var(--fog)]">{label}</span><input className="min-h-12 border border-[color:var(--line)] bg-transparent px-4 outline-none focus:border-[color:var(--acid)]" /></label>)}
            <button type="button" className="mt-3 bg-[color:var(--acid)] px-6 py-4 font-black uppercase tracking-[.16em] text-[color:var(--asphalt)]">Envoyer la fiche</button>
            <p className="text-sm text-[color:var(--fog)]">Prototype portfolio : formulaire non connecté.</p>
          </form>
        </div>
      </section>

      <footer className="px-4 py-8 text-sm text-[color:var(--fog)] md:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 border-t border-[color:var(--line)] pt-6 md:flex-row"><p>Écurie Sept-Nord — site fictif pour portfolio Hacker Studio.</p><p>Noindex, aucune preuve commerciale inventée.</p></div>
      </footer>
    </main>
  );
}
