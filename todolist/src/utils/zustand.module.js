import { create } from "zustand";

// set method로 상태 변경 가능
const useStore = create((set) => ({
    fullDate: new Date(),
    setFullDate: (newDate) => set(() => ({ fullDate: newDate })),
}));

export default useStore;
