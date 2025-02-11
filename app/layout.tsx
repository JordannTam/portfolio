import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Navbar } from "@/app/components/navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordan Tam",
  description: "Jordan Tam's personal website",
  icons: {
    icon: "/jt_logo.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // "from-30% to-30% via-40% bg-gradient-to-l from-gradient-start to-black"
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/jt_logo.ico" />
      </Head>
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`, `bg-gradient-to-l from-gradient-start to-black  h-screen`)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className={cn("pt-20")}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
