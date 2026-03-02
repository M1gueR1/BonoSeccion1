'use client'
import React, { useState } from 'react'

export const BarraProgreso = () => {
  const [porcentaje, setPorcentaje] = useState(0);

  const actualizarCambio = (e: any) => {
    let value = Number(e.target.value);
    if (value < 0){
         value = 0;
    }
    if (value > 100){
        value = 100;
    } 
    setPorcentaje(value);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="">Primer punto: barra de progreso</h2>

      <div className="w-full h-8 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 flex items-center justify-center text-white transition-all duration-500"
          style={{ width: `${porcentaje}%` }}
        >
          {porcentaje}%
        </div>
      </div>

      <div className="flex">
        <p className='p-4'>
            Valor del porcentaje:
        </p>
        <input
          type="number"
          min="0"
          max="100"
          value={porcentaje}
          onChange={actualizarCambio}
          className="border rounded-lg px-3 py-1 w-24 text-center p-4"
        />
      </div>
    </div>
  );
}