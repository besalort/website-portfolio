"use client";
// app/projects/scrabbleHelper/page.tsx
import {Navbar} from '../../components';
import {frenchWords} from '../../../public/dictionnary/fr';
import {useState} from 'react';

export default function ScrabbleHelper() {
    const [count, setCount] = useState(0); //Incrementeur test

    const [letters, setLetters] = useState("");
    const [length, setLength] = useState(""); 
    const [result, setResult] = useState<string[]>([]);

    const handleSubmit = () => {
        console.log("Lettres entrées : ", letters);
        const n = parseInt(length);
        if (isNaN(n) || n <= 0) {
            alert("Veuillez rentrer un nombre valide!");
        }
        const filtered = frenchWords.filter((word) => word.length === n);
        setResult(filtered);
    };

    console.log("Mots dans le dictionnaire fr: ", frenchWords.length);

    return (
        <main>
            <Navbar />
            <div>
                <h1>Test bouton incrementeur</h1>
                <p>Compteur : {count}</p>
                <button className="example" onClick={() => setCount(count + 1)}>Incrementer</button>
            </div>
            <div className="scrabbleDiv">
                <h1>Scrabble Helper</h1>
                <p>Entre la longueur du mot</p>
                <input className="background:444 text-black" type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder='3' />
                <button onClick={handleSubmit}>Valider</button>
                <p>Entre tes lettres</p>
                <input className="background:444" type="text" value={letters} onChange={(e) => setLetters(e.target.value)} placeholder='abcd' />
                <button onClick={handleSubmit}>Valider</button>
                <div>
                    <h2>Resultats</h2>
                    {result.length === 0 && <p>Aucun mot trouve</p>}
                    {result.map((word, index) => (
                        <p key={index}>{word}</p>
                    ))}
                </div>
            </div>
        </main>
    );
}