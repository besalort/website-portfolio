import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navBar">
        <h1 className="red-title">Porfolio besalort</h1>
        <div className="buttonsNav">
            <Link href="/">
                <button className="homeBtn">Home</button>
            </Link>
            <Link href="/projects">
                <button className="projectBtn">Projects</button>
            </Link>
        </div>
    </nav>
  );
}