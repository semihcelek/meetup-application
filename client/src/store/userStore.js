import create from "zustand";
import { devtools } from "zustand/middleware";
import { getLocalUser } from "../services/user-service";

const useUserStore = create(
  devtools((set) => ({
    // calling a function to initialize the state feels wrong, search for it.
    user: getLocalUser(),
    setUser: (user) => set((state) => ({ ...state, user: user })),
    removeUser: () => set({ user: {} }),
  }))
);

export { useUserStore };
