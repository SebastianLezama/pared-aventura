import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/header";
import FooterSection from "@/components/footer";
import { getServerSession } from "next-auth";
import SessionProvider from "../utils/session-provider"
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const milksScript = localFont({
  src: [
    {path: "../../public/fonts/milks_script_regular.otf",
      weight: "200", style: "normal"
    }
  ],
  variable: "--font-milks-script"
});

const milksCasual = localFont({
  src: "../../public/fonts/milks_casual_pie.otf",
  variable: "--font-milks-casual"
});

export const metadata: Metadata = {
  title: "Pared Aventura",
  description: "Mini Boulder para Niños - Diversión y Seguridad en Cada Escalada",
};

export default async function RootLayout({
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {

  // const session = await getServerSession()
  // console.log(session)
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${milksCasual.variable} ${milksScript.variable} antialiased min-h-svh`}
      >
        {/* <SessionProvider session={session} > */}

        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            > */}
            <div className="flex flex-col min-h-svh">

            <Header />
            {children}
            <FooterSection />
          </div>
          {/* </ThemeProvider> */}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
