"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const segments = useSelectedLayoutSegments();

    return (
        <main className="w-screen h-screen">
            <p>Pathname: {pathname}</p>
            <p>Segments: {JSON.stringify(segments)}</p>
            <Breadcrumbs aria-label="breadcrumb">
                {segments.map((segment, index) => (
                    <BreadcrumbItem>{segment}</BreadcrumbItem>
                ))}
            </Breadcrumbs>
            {children}
        </main>
    );
}
