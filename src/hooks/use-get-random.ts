import poe2Skills from "../assets/poe2_skills.json";
import poe1Skills from "../assets/poe1_skills.json";
import poe2Ascendancies from "../assets/poe2_ascendancies.json";
import poe1Ascendancies from "../assets/poe2_ascendancies.json";
import { getRandom } from "../utils/get-random";
import type { Game } from "../types";

function getData(game: Game) {
  switch (game) {
    case "poe1": {
      return { skills: poe1Skills, ascendancies: poe1Ascendancies };
    }
    case "poe2":
      return { skills: poe2Skills, ascendancies: poe2Ascendancies };

    default:
      throw new Error("getData: Wrong game");
  }
}

export function useGetRandom({ game }: { game: Game }) {
  const { skills, ascendancies } = getData(game);

  return {
    getRandomSkill: () => getRandom(skills),
    getRandomAscendancy: () => getRandom(ascendancies),
  };
}
