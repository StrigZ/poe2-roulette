import SlotCounter, {
  type SlotCounterProps,
  type SlotCounterRef,
} from "react-slot-counter";
import { useRef, useState } from "react";
import { ItemCard } from "./item-card";
import type { Game } from "../types";
import { useGetRandom } from "../hooks/use-get-random";

const slotSettings: SlotCounterProps = {
  duration: 3,
  value: "",
  dummyCharacterCount: 20,
};

export function Roulette({ game }: { game: Game }) {
  const { getRandomAscendancy, getRandomSkill } = useGetRandom({ game });
  const skillCounterRef = useRef<SlotCounterRef>(null);
  const ascendancyCounterRef = useRef<SlotCounterRef>(null);

  const [skillResult, setSkillResult] = useState(() => getRandomSkill());
  const [ascendancyResult, setAscendancyResult] = useState(() =>
    getRandomAscendancy(),
  );

  const handleClick = () => {
    setSkillResult(getRandomSkill());
    setAscendancyResult(getRandomAscendancy());

    skillCounterRef.current?.startAnimation();
    ascendancyCounterRef.current?.startAnimation();
  };

  const getDummySkills = () => {
    const res = [];
    for (let i = 0; i < 20; i++) {
      const skill = getRandomSkill();
      res.push(<ItemCard {...skill} />);
    }
    return res;
  };

  const getDummyAscendancies = () => {
    const res = [];
    for (let i = 0; i < 20; i++) {
      const skill = getRandomAscendancy();
      res.push(<ItemCard {...skill} />);
    }
    return res;
  };

  return (
    <div className="container mx-auto flex flex-col gap-5 border rounded p-5 max-w-3xl bg-purple-500/50 border-white shadow-lg">
      <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-10 items-center justify-center  place-items-center">
        <SlotCounter
          {...slotSettings}
          ref={skillCounterRef}
          startValueOnce
          autoAnimationStart={false}
          value={[<ItemCard {...skillResult} />]}
          dummyCharacters={getDummySkills()}
        />
        <SlotCounter
          {...slotSettings}
          ref={ascendancyCounterRef}
          startValueOnce
          autoAnimationStart={false}
          value={[<ItemCard {...ascendancyResult} />]}
          dummyCharacters={getDummyAscendancies()}
        />
      </div>
      <button
        onClick={handleClick}
        className="bg-blue-400 uppercase text-white font-bold text-xl rounded-xl p-4 cursor-pointer scale-100 active:scale-105 ring"
      >
        Крутим барабан
      </button>
    </div>
  );
}
