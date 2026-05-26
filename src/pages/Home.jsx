import { useState } from "react";
import PlayerData from "../data/PlayerData";

function Home() {
  const [bgColor, setBgColor] = useState("bg-sky-300");
  const [showPlayers, setShowPlayers] = useState(false);
  const [visibleColor, setVisibleColor] = useState(null);

  const showColor = (id) => {
    setVisibleColor(visibleColor === id ? null : id);
  };

  return (
    <div
      className={`${bgColor} min-h-screen p-8 transition-all duration-500`}
    >
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Color Changer
      </h1>

      <div className="flex justify-center">
        <button
          onClick={() => setShowPlayers(!showPlayers)}
          className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Favourite Colors
        </button>
      </div>

      {showPlayers && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {PlayerData.map((player) => (
            <div
              key={player.id}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >


              <button
                onClick={() => showColor(player.id)}
                className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
              >
                 Color
              </button>

              {visibleColor === player.id && (
                <button
                  onClick={() => setBgColor(player.bgClass)}
                  className={`mt-4 font-bold ${player.textClass}`}
                >
                  {player.color}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;