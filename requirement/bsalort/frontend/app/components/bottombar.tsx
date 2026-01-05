export default function BottomBar() {
    return (
        <footer className="bottomBar">
            <div className="bottomBarDivBtn">
                <button>
                    <a href="https://www.linkedin.com/in/benjamin-salort">
                        <img src="/images/svg/linkedin.svg" alt="" className="bottomBarImg"/>
                    </a> 
                </button>
                <button>
                    <a href="https://github.com/besalort">
                        <img src="/images/svg/git.svg" alt="" className="bottomBarImg"/>
                    </a>
                </button>
            </div>
            <p>Site web realisé avec ❤︎ de 0 avec NextJS (React) + Tailwind-CSS + NestJS & hebergement personnel.</p>
            <p>© 2026 Benjamin Salort. Tous droits réservés.</p>
        </footer>
    );
}