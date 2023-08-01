import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const handleIniciar = () => {
    window.location.href = "/iniciar";
  }


  return (
    <div className="hero min-h-screen bg-image " >
      <div className="hero-content text-center">
        <div className="max-w-md">          
          <h1 className="text-5xl font-bold">Olá, Lazulete</h1>
          <p className="py-6">
            Bem Vindo ao Programa que soma os créditos e os débitos de 
            extratos dos bancos. É só clicar em iniciar e seguir os passos
          </p>
          <button onClick={handleIniciar}className="btn btn-secondary">Iniciar</button>
        </div>
      </div>
    </div>
  );
}
