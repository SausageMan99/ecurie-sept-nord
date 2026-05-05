import Link from "next/link";

export default function AtelierPage() {
  return <main className="min-h-screen px-4 py-10 md:px-8"><div className="mx-auto max-w-[1200px]"><Link href="/" className="mono text-xs uppercase tracking-[.28em] text-[color:var(--acid)]">← Écurie Sept-Nord</Link><h1 className="display mt-16 text-7xl uppercase leading-[.78] md:text-[11rem]">Protocole atelier.</h1><p className="mt-8 max-w-2xl text-xl leading-8 text-[color:var(--fog)]">Page secondaire volontairement sèche : arrivée, scan, arbitrage, sortie. Le contenu réel serait remplacé par les procédures confirmées de l’atelier.</p></div></main>;
}
