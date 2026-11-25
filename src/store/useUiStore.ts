import { create } from "zustand";

interface UiState {
  isAuthModalOpen: boolean;
  authModalMode: "login" | "signup";
  isMobileMenuOpen: boolean;
  contactModalProject: { id: string; name: string; builderName: string } | null;
  setAuthModalOpen: (open: boolean, mode?: "login" | "signup") => void;
  setMobileMenuOpen: (open: boolean) => void;
  openContactModal: (project: { id: string; name: string; builderName: string }) => void;
  closeContactModal: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isAuthModalOpen: false,
  authModalMode: "login",
  isMobileMenuOpen: false,
  contactModalProject: null,

  setAuthModalOpen: (open, mode = "login") =>
    set({ isAuthModalOpen: open, authModalMode: mode }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  openContactModal: (project) => set({ contactModalProject: project }),
  closeContactModal: () => set({ contactModalProject: null }),
}));

