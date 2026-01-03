// app/page.tsx
// import Link from 'next/link';
import {Navbar} from './components';
import {BottomBar} from './components';

// export default function Home() {
//   return (
//     <main className="allpage min-h-screen flex flex-col">
//       <Navbar />
//       <header className="py-12"> 
//         <h1 className="red-title">Bienvenue sur mon portfolio</h1>
//       </header>
//       <section className="sectionHome">
//         <p className="pHome">Coucou texte de test</p>
//       </section>
//       <BottomBar />
//     </main>
//   )
// }


export default function Home() {
  return (
    <main className="allpage">
      <Navbar />

      <header className="homeHeader">
        <h1 className="navTitle">Bienvenue sur mon portfolio</h1>
        <p className="homeSubtitle">
          Découvrez mes projets, mon parcours et comment me contacter
        </p>
        <div className="homeButtons">
          <a
            href="/projects"
            className="homeBtn"
          >
            Mes Projets
          </a>
          <a
            href="/info"
            className="homeBtnSecondary"
          >
            En savoir plus
          </a>
        </div>
      </header>

      <section className="homeSection">
        <p className="pHome">Étudiant à l'école 42 Paris, passionné par le code propre et les projets qui font sens.</p>
        <p className="pHome">Je souhaite faire carriere dans le développement web et/ou applicatif.</p>
        <p className="pHome">Fullstack junior, codeur curieux et toujours prêt à relever le prochain challenge.</p>
      </section>

      <BottomBar />
    </main>
  );
}
