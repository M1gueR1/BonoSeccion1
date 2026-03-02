import Image from "next/image";
import { BarraProgreso } from "./components/barraProgreso";
import { Clickear } from "./components/clickear";
import { Triqui } from "./components/triqui";
import ClaroOscuro from "./components/claroOscuro";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <BarraProgreso/>
        <Clickear/>
        <Triqui></Triqui>
        <ClaroOscuro></ClaroOscuro>
      </main>
    </div>
  );
}
