"use client";
import { useState } from "react";

export function Triqui() {
  const [tableroDeJuego, setTableroJuego] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(1);

  const seleccionarCasilla = (index: any) => {
    if (tableroDeJuego[index]) return;

    const tableroActualizado = [...tableroDeJuego];
    if(turno % 2 === 0){
      tableroActualizado[index] = "O";
    } else {
        tableroActualizado[index] = "X";
    }
    setTableroJuego(tableroActualizado);
    setTurno(turno + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Ejercicio 3</h1>

      <div className="grid grid-cols-3">
        {tableroDeJuego.map((casilla, indiceTablero) => (
          <div
            key={indiceTablero}
            onClick={() => seleccionarCasilla(indiceTablero)}
            className="
              w-24 h-24
              flex items-center justify-center
              text-3xl font-bold
              border border-gray-800
              hover:bg-gray-200
            "
          >
            {casilla}
          </div>
        ))}
      </div>
    </div>
  );
}