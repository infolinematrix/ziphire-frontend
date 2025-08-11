import { create } from "zustand";
import { persist } from "zustand/middleware";

interface JobStore {
  // --- State ---
  user: null;
  job: null;
  isAgree: boolean;
  coverLetter: null;
  // --- Actions ---
  setUser: (user: any) => void;
  setJob: (job: any) => void;
  setCoverLetter: (letter: any) => void;
}
export const useJobStore = create<JobStore>()(
  persist(
    (set) => ({
      // --- Initial State ---
      user: null,
      job: null,
      isAgree: false,
      coverLetter: null,
      // --- Actions ---
      setUser: (user: any) => {
        set({ user });
      },

      setJob: (job: any) => {
        set({ job: job });
      },
      setCoverLetter: (letter: any) => {
        set({ coverLetter: letter });
      },
    }),
    {
      name: "job-store", // localStorage key
      partialize: (state: any) => ({ user: state.user }), // only store user
    }
  )
);

// const useJobStore2 = create((set) => ({
//   bears: 0,
//   increasePopulation: () =>
//     set((state: { bears: number }) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears: number) => set({ bears: newBears }),
// }));
