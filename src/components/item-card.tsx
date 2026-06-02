import type { Skill } from "../types";

export function ItemCard({ name, src }: Skill) {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={src}
        className="aspect-square h-20 object-cover rounded-sm border-white"
        alt={`иконка ${name}`}
      />
      <p className="font-bold text-lg text-white tracking-wide uppercase ">
        {name}
      </p>
    </div>
  );
}
