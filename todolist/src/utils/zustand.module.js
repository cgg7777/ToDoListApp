import { create } from "zustand";

const useStore = create((set) => ({
    fullDate: new Date(),
    setFullDate: (newDate) => set(() => ({ fullDate: newDate })),
    token: "",
    setToken: (newToken) => set(() => ({ token: newToken })),
    email: "",
    setEmail: (newEmail) => set(() => ({ email: newEmail })),
}));

export default useStore;
