import axios from "axios";
import { useEffect, useState } from "react";

export default function NextEvent() {

  const [event, setEvent] = useState([]);

useEffect(() => {
  async function fetchNextEvents() {
    try {
      const response = await axios.get(
        "https://api.progamers.com.br/public/event/next/events"
      );
      setEvent(response.data);
    } catch (error) {
      console.error("Erro ao buscar campeonatos:", error);
    }
  }

  fetchNextEvents();
}, []);

  return (
    <section className="bg-gaming-darker flex flex-col items-center justify-center">
      <div className="relative z-10 text-center px-4 py-15">
        <h1 className="text-center py-2 text-4xl  md:text-4xl font-bold  text-white">
          Proximos <span className="text-red-500">Eventos</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto ">
          Participe dos maiores torneios de e-sports e conquiste prêmios
          incríveis
        </p>
      </div>

      
    </section>
  );
}
