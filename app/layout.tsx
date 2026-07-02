import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { getAllModules } from "@/lib/mdx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PyTorch Field Notes",
  description: "A dark-themed, technical reference site for learning PyTorch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const modules = getAllModules();
  
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased text-text-primary bg-background min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Sidebar modules={modules} />
          <main className="flex-1 min-w-0 max-w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
