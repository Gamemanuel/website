import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font with variable support
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans", // This CSS variable is used by shadcn/ui
});

export const metadata: Metadata = {
    title: "My Glassmorphism Site",
    description: "A site with shadcn/ui and glassmorphism",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.variable}>
        {children}
        </body>
        </html>
    );
}