import type { Skill } from "../types";

export function getRandom(array: Skill[]) {
  return array[Math.floor(Math.random() * array.length)];
}
