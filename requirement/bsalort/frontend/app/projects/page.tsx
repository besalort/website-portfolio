// app/projects/page.tsx
import Navbar from '../components/navbar';
import Link from 'next/link';
import {BottomBar} from '../components';


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
                <Link href="/projects/model3d">
                    <button className='example'>Aller à la Modélisation 3D</button>
                </Link>
            </div>
            <BottomBar />
        </main>
    );
}