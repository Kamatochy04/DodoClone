import { create } from "zustand";

type State = {
  activeId: number;
  setActiveId: (active: number) => void;
};

export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
