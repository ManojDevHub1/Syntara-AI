import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Syntara AI — Turn repetitive work into intelligent workflows",
  description:
    "Syntara AI connects your tools, understands your processes, and automates repetitive work with intelligent workflows your team can build in minutes. Portfolio concept project by Manoj Kushwaha.",
  keywords: [
    "AI workflow automation",
    "Syntara AI",
    "SaaS workflow builder",
    "process automation",
    "AI orchestration",
  ],
  authors: [{ name: "Manoj Kushwaha" }],
  openGraph: {
    title: "Syntara AI — Intelligent Workflow Automation",
    description: "Turn repetitive work into intelligent workflows. Connect tools, understand processes, and orchestrate with AI.",
    siteName: "Syntara AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#fafbfe] text-zinc-900 selection:bg-brand-100 selection:text-brand-800 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
