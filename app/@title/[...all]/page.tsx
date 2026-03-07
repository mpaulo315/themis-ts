"use client";

import { usePathname } from "next/navigation";

export default function TitleSlot() {
    const pathname = usePathname();
    return <>{pathname.split("/").filter(Boolean).join(" ")}</>;
}