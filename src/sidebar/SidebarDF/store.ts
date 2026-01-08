import { create } from "zustand";

type DrawerStoreType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    toggle: () => void;
}

export const sidebarStore = create<DrawerStoreType>((set, get) => ({
    open: false,
    setOpen: (open) => set({ open }),
    toggle: () => set({ open: !get().open }),
}));