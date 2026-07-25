export type Skill = {
  name: string;
  imageSrc: string | null;
};

export const games = ["poe1", "poe2"] as const;
export type Game = (typeof games)[number];
