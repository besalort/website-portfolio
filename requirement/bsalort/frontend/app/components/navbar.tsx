import Link from "next/link";

export function ContactButton() {
    const email = "benjamin.salort@hotmail.com";
    const subject = "Contact depuis le portfolio";
    return (
        <button className="navBtn">
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className="flex items-center gap-2">
                <img src="/images/svg/mail.svg" alt="" className="navSvgBtn"/>
                Contactez moi
            </a>
        </button>
    );
}

export default function Navbar() {
  return (
    <nav className="navBar">
        <Link href="/">
        <button className="HomeBtn">
            <h1 className="navTitle">Benjamin Salort</h1>
        </button>
        </Link>
        <div className="navDivBtns">
            <Link href="/projects">
                <button className="navBtn">
                    <img src="/images/svg/gitBranch1.svg" alt="" className="navSvgBtn"/>
                    Projets
                </button>
            </Link>
            <Link href="/info">
                <button className="navBtn">
                    <img src="/images/svg/info.svg" alt="" className="navSvgBtn"/>
                    En savoir plus
                </button>
            </Link>
            <ContactButton />
        </div>
    </nav>
  );
}