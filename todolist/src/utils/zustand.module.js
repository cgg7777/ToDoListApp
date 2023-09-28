import { create } from "zustand";

const useStore = create((set) => ({
    fullDate: new Date(),
    setFullDate: (newDate) => set(() => ({ fullDate: newDate })),
}));

export default useStore;
