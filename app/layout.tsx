import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ScrollShadow } from "@heroui/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Themis",
    description: "Political data billboard",
};

export default function RootLayout({
    breadcrumbs,
    filters,
    children,
    title,
}: {
    breadcrumbs: React.ReactNode;
    filters: React.ReactNode;
    children: React.ReactNode;
    title: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <main className="w-screen h-screen px-4 py-4 flex flex-col">
                        <div className="flex justify-between w-full h-10">
                            {breadcrumbs}
                            {filters}
                        </div>
                        <div className="pb-3 text-xl font-bold text-foreground capitalize">
                            {title}
                        </div>
                        <div className="flex-1 min-h-0 overflow-auto pt-2">
                            {children}
                        </div>
                    </main>
                </Providers>
            </body>
        </html>
    );
}
