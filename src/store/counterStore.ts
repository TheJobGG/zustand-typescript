import { create } from "zustand";
import { BearsControls } from "../models/interfaces";

export const useBearPopulation = create<BearsControls>((set) => ({
  bears: 2,
  bearsFamilyName: '',
  updateFamilyName: (familyName) => set((state) => ({bearsFamilyName: familyName})),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  resetBears: () => set({ bears: 2 }),
}))