import SlotCounter, {
  type SlotCounterRef,
  type SlotCounterProps,
} from "react-slot-counter";
import { useGetRandom } from "./hooks/use-get-random";
import { ItemCard } from "./components/item-card";
import { useRef, useState } from "react";

const slotSettings: SlotCounterProps = {
  duration: 3,
  value: "",
  dummyCharacterCount: 20,
};

export function App() {
  const { getRandomAscendancy, getRandomSkill } = useGetRandom();
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
    <main className="flex items-center flex-col gap-10 px-2 bg-gray-300 h-screen justify-center">
      <div className="container mx-auto flex flex-col gap-5 border rounded p-5 max-w-[768px] bg-purple-500/50 border-white shadow-lg">
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
    </main>
  );
}
