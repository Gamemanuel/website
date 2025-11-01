import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font with variable support
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans", // This CSS variable is used by shadcn/ui
});


export const metadata: Metadata = {
    title: "CameronThrap.com",
    description: "Respectably, caring, and efficiently creating art and entertainment for others to enjoy",
    openGraph: {
        title: "CameronThrap.com",
        description: "Respectably, caring, and efficiently creating art and entertainment for others to enjoy",
        url: 'https://cameronthrap.rrappleye.com',
        siteName: 'CameronThrap.com',
        images: [
            {
                url: '/src/ContactImage.jpg', // Must be an absolute URL for social media to read correctly, which Next.js handles with metadataBase
                width: 1200,
                height: 630,
                alt: 'Cameron Thrap Website Banner Image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
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