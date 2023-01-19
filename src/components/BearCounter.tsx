import { ReactElement } from "react";

import { useBearPopulation } from "../store/counterStore";

export function BearCounter(): ReactElement<string, string> {
  const { bears } = useBearPopulation((state) => state)
  return (
    <div className="text-center bg-amber-900 w-[100%] rounded-md">The amount of bears is: <span className="font-bold underline text-xl pl-3">{bears}</span></div>
  )
}