import { games, type Game } from "../types";
import { cn } from "../utils/cn";

const gameToTitleMap: Record<Game, string> = {
  poe1: "POE1",
  poe2: "POE2",
};

export function GamePicker({
  activeGame,
  setGame,
}: {
  activeGame: Game;
  setGame: (game: Game) => void;
}) {
  return (
    <div className="flex items-center font-bold  rounded overflow-hidden">
      {games.map((game) => (
        <button
          className={cn(
            "cursor-pointer hover:bg-gray-300 bg-white p-2 transition-colors",
            {
              "bg-gray-300": game === activeGame,
            },
          )}
          onClick={() => setGame(game)}
        >
          {gameToTitleMap[game]}
        </button>
      ))}
    </div>
  );
}
