import { useState } from "react";
import { Roulette } from "./components/roulette";
import type { Game } from "./types";
import { GamePicker } from "./components/game-picker";

const DEFAULT_GAME: Game = "poe2";

export function App() {
  const [game, setGame] = useState<Game>(DEFAULT_GAME);

  return (
    <main className="flex items-center flex-col gap-10 px-2 bg-gray-300 h-screen justify-center">
      <GamePicker activeGame={game} setGame={(game) => setGame(game)} />
      <Roulette game={game} key={game} />
    </main>
  );
}
