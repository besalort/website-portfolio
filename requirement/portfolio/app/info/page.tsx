"use client";
import {Navbar} from '../components';
import {BottomBar} from '../components';

export default function Info() {
  return (
    <main className="infoPage">
      <Navbar />

      <div className="infoContainer">
        <h1 className="infoTitle">Informations personnelles</h1>

        <p className="infoText">Étudiant à l'école 42 Paris.</p>
        <a href="https://42.fr/">
            <img src="/42_Logo.png" alt="Logo 42" className="infoLogo" />
        </a>
        <p className="infoText">Retrouvez mon CV ici-dessous :</p>

        <div className="linksContainer">
          <a
            href="https://www.linkedin.com/in/benjamin-salort"
            target="_blank"
            rel="noopener noreferrer"
            className="infoLink"
          >
            Mon LinkedIn
          </a>
          <a
            href="https://github.com/benjamin-salort"
            target="_blank"
            rel="noopener noreferrer"
            className="infoLink"
          >
            Mon GitHub
          </a>
        </div>

        <div className="cvContainer">
          <iframe src="/CV/Canva/CV.pdf" className="cvFrame"></iframe>
        </div>
      </div>

      <BottomBar />
    </main>
  );
}
