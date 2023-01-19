import { FormEvent } from "react";
import { Controls } from "./Controls";
import { Inputs } from "./Inputs";
import { useBearPopulation } from "../store/counterStore";
import { BearFamily, SetStateProp } from "../models/interfaces";

export function Form({ setFamilies }: SetStateProp) {
  const { resetBears, bears, bearsFamilyName } = useBearPopulation((state) => state)

  const addNewFamily = (newFamily: BearFamily) => setFamilies((actualFamilies: BearFamily[]) => [...actualFamilies, newFamily])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!bearsFamilyName ) return;
    addNewFamily({familyName: `${bearsFamilyName}'s Family`, quantity: bears})
    resetBears();
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Inputs />
      <Controls />
    </form>
  )
}

