// app/page.tsx
// import Link from 'next/link';
import {Navbar} from './components';

export default function Home() {
  return (
    <main className="allpage min-h-screen flex flex-col">
      <Navbar />
      <header className="py-12"> 
        <h1 className="red-title">Bienvenue sur mon portfolio</h1>
      </header>
      <section className="sectionHome">
        <button className="example">Test coucou</button>
        <p className="pHome">Coucou texte de test</p>
        <div className="h-[2000px]"></div>
        <p className="pHome">Coucou texte de test</p>
        <p className="pHome">Coucou texte de test</p>
        <p className="pHome">Coucou texte de test</p>
        <p className="pHome">Coucou texte de test</p>
      </section>
    </main>
  )
}
