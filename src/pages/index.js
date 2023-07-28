import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">          
          <h1 className="text-5xl font-bold">Olá, Lazulito</h1>
          <p className="py-6">
            Bem Vindo ao Programa que soma os créditos e os débitos de 
            extratos dos bancos. É só clicar em inicar e seguir os passos
          </p>
          <button className="btn btn-primary">Iniciar</button>
        </div>
      </div>
    </div>
  );
}
