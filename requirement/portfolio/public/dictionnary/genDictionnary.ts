import fs from "fs";
import path from "path";

// Chemin vers le fichier txt
const txtPath = path.join(process.cwd(), "francais.txt");

// Chemin vers le fichier TS à générer
const tsPath = path.join(process.cwd(), "fr.ts");

// Lire le fichier txt
const text = fs.readFileSync(txtPath, "utf-8");

// Séparer chaque ligne et nettoyer les éventuels espaces
const words = text
  .split("\n")
  .map((w) => w.trim())
  .filter((w) => w.length > 0);

// Créer le contenu du fichier TS
const tsContent = `export const frenchWords = ${JSON.stringify(words, null, 2)};\n`;

// Écrire le fichier TS
fs.writeFileSync(tsPath, tsContent);

console.log(`✅ Fichier TypeScript généré : ${tsPath}`);
