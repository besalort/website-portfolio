"use client";
// app/projects/scrabbleHelper/page.tsx
import {Navbar} from '../../components';
import {frenchWords} from '../../../public/dictionnary/fr';
import {useState} from 'react';

function countLetters(str: string) {
    const map: Record<string, number> = {};
    for (let char of str.toLowerCase()) {
        map[char] = (map[char] || 0) + 1;
    }
    return map;
}

export default function ScrabbleHelper() {
    const [count, setCount] = useState(0); //Incrementeur test

    const [letters, setLetters] = useState(""); //Input des lettres
    const [length, setLength] = useState(""); //Input de la longueur
    const [result, setResult] = useState<string[]>([]); //resultat

    const handleSubmit = () => {
        // if (letters.length  != 0)
        //     console.log("Lettres entrées : ", letters);
        // if (length != "")
        //     console.log("Longueur entrée : ", length);
        // Handle letters
        const lettersLow = letters.toLowerCase(); 
        const n = parseInt(length);
        // console.log("n =", n);

        const filteredW = frenchWords.filter((word) => { //tableau des mots filtres
            if (n)
                if (word.length !== n) //si la longueur correspond pas -> faux
                    return false;

            const countInput = countLetters(lettersLow); // eel -> {e:2, l:1}
            const countWord = countLetters(word); //elle -> {e:2, l:2}

            for (let char in countInput) {
                if (!countWord[char] || countWord[char] < countInput[char]) {
                    return false;
                }
            }
            // for (let char of available.toLowerCase()) {
            //     if (!word.toLowerCase().includes(char))
            //         return false;
            // }
            return true;
        })

        // Handle length only
        const filtered = frenchWords.filter((word) => word.length === n);
        if (letters.length != 0)
            setResult(filteredW);
        else
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