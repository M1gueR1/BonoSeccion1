"use client";
import { useState, useMemo } from "react";

export default function AnalizadorDeTexto() {
  const [texto, setTexto] = useState("");

  const Estadistica = ({ label, valor }) => (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-2xl font-bold mt-1">{valor}</p>
    </div>
  );

    const estadisticas = useMemo(() => {
    const textoLimpio = texto.trim();
    const palabras = textoLimpio ? textoLimpio.split(/\s+/) : [];

    const oraciones = texto
      .split(/[.!?]/)
      .map(oracion => oracion.trim())
      .filter(Boolean);

    const parrafos = texto
      .split(/\n+/)
      .map(parrafo => parrafo.trim())
      .filter(Boolean);

    const caracteres = texto.length;

    let palabraMasLarga = "";
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }

    const tiempoLectura = palabras.length;

    return {
      palabras: palabras.length,
      oraciones: oraciones.length,
      parrafos: parrafos.length,
      caracteres,
      palabraMasLarga,
      tiempoLectura,
    };
  }, [texto]);

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col">

      <header className="flex justify-between items-center px-10 py-4 bg-black border-b border-gray-800">
        <h1 className="text-lg font-semibold">Analizador de Texto</h1>
        <div className="flex gap-4 text-gray-400 text-sm">
          <p>
            Sobre Nosotros
          </p>
          <p>
            Linkedin
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center flex-1 px-6 py-10">

        <div className="w-full max-w-4xl bg-black rounded-md p-6 grid grid-cols-4 text-center mb-6 border border-gray-800">
          <Estadistica label="Words" valor={estadisticas.palabras} />
          <Estadistica label="Characters" valor={estadisticas.caracteres} />
          <Estadistica label="Sentences" valor={estadisticas.oraciones} />
          <Estadistica label="Paragraphs" valor={estadisticas.parrafos} />
        </div>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full max-w-4xl h-64 bg-black border border-gray-800 rounded-md p-6 text-gray-200"
        />

        <div className="w-full max-w-4xl bg-black rounded-md p-6 mt-6 flex justify-between border border-gray-800 text-sm text-gray-400">
          <span>
            Tiempo de lectura aproximado:{" "}
            <span className="text-gray-200">
              {estadisticas.palabras > 0 ? `${estadisticas.tiempoLectura} min` : "-"}
            </span>
          </span>

          <span>
            Palabra más larga:{" "}
            <span className="text-gray-200">
              {estadisticas.palabraMasLarga || "-"}
            </span>
          </span>
        </div>
      </main>

      <footer className="px-10 py-4 bg-black border-t border-gray-800 text-sm text-gray-500">
        Creado por Miguel
      </footer>
    </div>
  );
}



