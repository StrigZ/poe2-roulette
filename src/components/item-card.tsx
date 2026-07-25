import { ImageOff } from "lucide-react";
import type { Skill } from "../types";

export function ItemCard({ name, imageSrc }: Skill) {
  return (
    <div className="flex flex-col items-center gap-5">
      {imageSrc ? (
        <img
          src={imageSrc}
          className="aspect-square h-20 object-cover rounded-sm border-white"
          alt={`иконка ${name}`}
        />
      ) : (
        <div className="border-white border p-2 rounded">
          <ImageOff size={48} className="stroke-white" />
        </div>
      )}
      <p className="font-bold text-lg text-white tracking-wide uppercase ">
        {name}
      </p>
    </div>
  );
}
