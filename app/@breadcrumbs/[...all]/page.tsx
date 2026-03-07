"use client";

import Breadcrumb from "@/components/Breadscrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbSlot() {
    const pathname = usePathname()
    
    return (
        <Breadcrumb data={pathname.split("/").filter(Boolean)} />
    );
}