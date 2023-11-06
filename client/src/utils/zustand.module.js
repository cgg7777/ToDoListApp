import { create } from "zustand";

const useStore = create((set) => ({
    fullDate: new Date(),
    setFullDate: (newDate) => set(() => ({ fullDate: newDate })),

    calendarDate: new Date(),
    setCalendarDate: (newDate) => set(() => ({ calendarDate: newDate })),

    email: "",
    setEmail: (newEmail) => set(() => ({ email: newEmail })),

    isLogined: false,
    setIsLogined: (trueOrFalse) => set(() => ({ isLogined: trueOrFalse })),

    page: "main",
    setPage: (newPage) => set(() => ({ page: newPage })),
}));

export default useStore;
