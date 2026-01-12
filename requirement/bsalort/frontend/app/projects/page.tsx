// app/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';


export default function Projects() {
    
    const handleSubmit = () => {
        
    };

    return (
        <main>
            <div>
                <div className="projetHeader">
                    <h1 className="basicH1">Mes projets</h1>
                    <p className="basicP">Voici quelques exemples des projets que j'ai fait jusqu'ici.</p>
                </div>
                <div className="projetProjectsDiv">
{/* CUB3D */}
                    <div className="projetGenDesc">
                        <div className="projetDesc">
                            <div className="logo">
                                <img className="w-8" src="/images/42_Logo.png" alt="" />
                            </div>
                            <Link href="/projects/cub3d">
                                <button className='projetBtn'>Cub3D</button>
                            </Link>
                            <p className='basicP'>Reproduction d'un environnement 3D inspire de Wolfenstein3D uniquement avec du C et une librairie graphique.</p>
                        </div>
                        <div className="projetDesc">
                            <img className="projetImg" src="/images/cub3d/Game1.png" alt="Image environnement 3d, murs en brique bois et pierre"/>
                            <p className="basicP">Langage :</p>
                            <p>C</p>
                        </div>
                    </div>
                    <hr className="homeHr" />
{/* TRANSCENDENCE */}
                    <div className="projetGenDesc">
                        <div className="projetDesc">
                            <img className="projetImg" src="/images/transcendence/Online/3-2.png" alt="Image versus de pong sur page web"/>
                            <div>
                                <p className="basicP self-center">Langages :</p>
                                <p className="basicP self-start">NodeJs, TailwindCss, Fastify, SQL, Typescript</p>
                            </div>
                            <div>
                                <p className="basicP">Technologie :</p>
                                <p className="basicP self-start">Docker, Nginx</p>
                            </div>
                        </div>
                        <div className="projetDesc">
                            <div className="logo">
                                <img className="w-8" src="/images/42_Logo.png" alt="" />
                            </div>
                            <Link href="/projects/transcendence">
                                <button className='projetBtn'>Transcendence</button>
                            </Link>
                            <p className="basicP">Single page application comprenant un systeme d'authentification securise et un jeu multijoueur Pong avec suivi des statistiques des joueurs.</p>
                        </div>
                    </div>
                    <hr className="homeHr" />
{/* SO_LONG */}
{/* GODOT MINI PROJECTS */}
{/* SCRABBLE HELPER */}
                    <div className="projetGenDesc">
                        <div className="projetDesc">
                            <Link href="/projects/scrabbleHelper">
                                <button className='projetBtn'>Scrabble Helper</button>
                            </Link>
                            <p className="basicP">Mini projet web consistant a trouver dans un dictionnaire une liste de mot selon des criteres remplis par l'utilisateur.</p>
                        </div>
                        <div className="projetDesc"><img src="" alt="Image page Scrabble Helper" /></div>
                    </div>
{/* WEB MODELE 3D */}
                    {/* <Link href="/projects/model3d">
                        <button className='projetBtn'>Aller à la Modélisation 3D</button>
                    </Link> */}

                    <div className="projetFooter">
                        <p className="basicP">Ma page GitHub :</p>
                        <Link className="projectFooterBtn" href="https://github.com/besalort" target="_blank">
                            <img src="/images/svg/git.svg" alt="icone lien github besalort" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}