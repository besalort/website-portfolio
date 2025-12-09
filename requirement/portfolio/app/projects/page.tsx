// app/projects/page.tsx
import Navbar from '../components/navbar';
import Link from 'next/link';

export default function Projects() {
    
    const handleSubmit = () => {
        
    };

    return (
        <main>
            <Navbar />
            <div>
                <h1>Mes projets</h1>
                <p>Voici une liste de mes projets.</p>
                <Link href="/projects/scrabbleHelper">
                    <button className='example'>Aller au Scrabble Helper</button>
                </Link>
            </div>
        </main>
    );
}