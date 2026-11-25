import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { safeLocalStorage } from "./safeStorage";

interface WishlistState {
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistIds: ["proj-1", "prop-2"], // Default 2 items to showcase count badge immediately
      toggleWishlist: (id: string) => {
        const current = get().wishlistIds;
        if (current.includes(id)) {
          set({ wishlistIds: current.filter((item) => item !== id) });
        } else {
          set({ wishlistIds: [...current, id] });
        }
      },
      isInWishlist: (id: string) => get().wishlistIds.includes(id),
      clearWishlist: () => set({ wishlistIds: [] }),
    }),
    {
      name: "urbannest-wishlist",
      storage: createJSONStorage(() => safeLocalStorage),
    }
  )
);

