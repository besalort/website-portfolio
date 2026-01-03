import Link from "next/link";

export function ContactButton() {
    const email = "benjamin.salort@hotmail.com";
    const subject = "Contact depuis le portfolio";
    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className="projectBtn"> Contactez moi</a>
    );
}

export default function Navbar() {
  return (
    <nav className="navBar">
        <h1 className="navTitle">Benjamin Salort</h1>
        <div className="buttonsNav">
            <Link href="/">
                <button className="projectBtn">Home</button>
            </Link>
            <Link href="/projects">
                <button className="projectBtn">Projects</button>
            </Link>
            <Link href="/info">
                <button className="projectBtn">En savoir plus</button>
            </Link>
            <ContactButton />
        </div>
    </nav>
  );
}