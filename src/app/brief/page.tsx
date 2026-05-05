import Link from "next/link";

export default function BriefPage() {
  return <main className="min-h-screen bg-[color:var(--signal)] px-4 py-10 text-[color:var(--asphalt)] md:px-8"><div className="mx-auto max-w-[1200px]"><Link href="/" className="mono text-xs uppercase tracking-[.28em]">← Écurie Sept-Nord</Link><h1 className="display mt-16 text-7xl uppercase leading-[.78] md:text-[11rem]">Fiche véhicule.</h1><p className="mt-8 max-w-2xl text-xl leading-8 text-black/70">Un formulaire qualifiant pensé pour éviter les demandes vagues : modèle, année, symptômes, usage, échéance et objectif.</p></div></main>;
}
