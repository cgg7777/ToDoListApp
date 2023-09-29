import { create } from "zustand";

const useStore = create((set) => ({
    fullDate: new Date(),
    setFullDate: (newDate) => set(() => ({ fullDate: newDate })),
    email: "",
    setEmail: (newEmail) => set(() => ({ email: newEmail })),
    isLogined: false,
    setIsLogined: (trueOrFalse) => set(() => ({ isLogined: trueOrFalse })),
}));

export default useStore;
