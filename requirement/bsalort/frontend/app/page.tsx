import {Navbar} from './components';
import {BottomBar} from './components';

export default function Home() {
  return (
    <main className="allpage">
      <header className="homeHeader">
        <h1 className="homeH1">Bonjour ! Moi c'est Benjamin,</h1>
        <div className="homeDivIntro">
          <p className="homeP">Etudiant en preparation d'un diplome d'architechte en informatique a l'<a className="basicLink" href="https://42.fr/">ecole 42</a> (Paris),</p>
          <p className="homeP">disponible des maintenant pour un stage dans le developpement applicatif ou web.</p>
        </div>
        <p className="homeP">Venez me decouvrir :</p>
        <div className="homeButtons">
          <button className="homeBtn">
            <a href="/projects">Mes Projets</a>
          </button>
          <button className="homeBtn">
            <a href="/info">En savoir plus</a>
          </button>
        </div>
        <div className="homeDlCvDiv">
        <a className="homeDlCvA" href="/CV/Canva/CV.pdf" download >
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12V20M12 20L9.5 17.5M12 20L14.5 17.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Telecharger mon CV
        </a>
      </div>
      </header>
      <hr className="homeHr" />
      <div className="homeDivDesc">

        <div className="homeSectionDiv">
          <section className="homeSection">
            <h2 className="homeH2">Technologies pratiquées</h2>
            <p className="homeP">Les langages auquels je suis familier concernant le developpement applicatif sont C/C++,</p>
            <p className="homeP">mais j'utilise egalement d'autres langages comme le Python, le Java ou encore le SQL.</p>
            <p className="homeP">Concernant le web, je suis fullstack, en front du TailwindCss, NextJs (react), Javascript et Typescript. En back du Fastify ou du NestJs.</p>
          </section>
        </div>
        <div className="homeSectionDiv">
          <section className="homeSection">
            <h2 className="homeH2">À mon propos</h2>
            <p className="homeP">Passionné par le code propre et les projets qui font sens,</p>
            <p className="homeP">je suis tres enthousiaste a l'idee d'apprendre en relevant de nouveaux defis.</p>
            <p className="homeP">Rigoureux et attentif, j'ai l'esprit critique et la capacite a m'adapter et travailler en equipe.</p>
            <p className="homeP">Je serais ravi de pouvoir travailler avec vous !</p>
          </section>
        </div>
      </div>
      <hr className="homeHr" />
    </main>
  );
}
