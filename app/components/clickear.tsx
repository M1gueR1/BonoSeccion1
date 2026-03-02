'use client'
import React, { useEffect, useState } from 'react'

export const Clickear = () => {
    const [contador, setContador] = React.useState(0);
    const [tiempo, setTiempo] = React.useState(0);
    const [estaEnJuego, setActivado] = useState(true);

    useEffect(() => {
        if (!estaEnJuego){
            return;
        } 

        if (tiempo === 0) {
        setActivado(false);
        return;
        }

        const interval = setInterval(() => {
            const valorAnterior = tiempo;
            setTiempo(valorAnterior - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, 
    [tiempo, estaEnJuego]);

    const hacerClick = () => {
        if (estaEnJuego) {
            const valorAnteriorConteo = contador;
            setContador(valorAnteriorConteo + 1);
        }
    };

    const iniciarJuego = () => {
        setContador(0);
        setTiempo(10);
        setActivado(true);
    };

    return (
        <div className="bg-orange-300 p-8 rounded-xl text-center">
        <h2 className=" mb-4 font-bold">
            No of Clicks until timer expires
        </h2>

        <div className="text-5xl font-bold mb-4">{contador}</div>

        <div className="text-lg mb-6">
            Time left: {tiempo} seconds
        </div>

        <button
            onClick={hacerClick}
            disabled={!estaEnJuego}
            className="bg-white"
        >
            +
        </button>

        {!estaEnJuego && (
            <div className="mt-6">
            <button
                onClick={iniciarJuego}
                className="bg-black text-white px-4 py-2 rounded"
            >
                Restart
            </button>
            </div>
        )}
        </div>
    );
}
