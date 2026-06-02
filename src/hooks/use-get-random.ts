import skills from "../assets/poe2_skills.json";
import ascendancies from "../assets/poe2_ascendancies.json";
import { getRandom } from "../utils/get-random";

export function useGetRandom() {
  return {
    getRandomSkill: () => getRandom(skills),
    getRandomAscendancy: () => getRandom(ascendancies),
  };
}
