import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team chat Application",
  description: "",
};

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={
            cn( inter.className,
            "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // forcedTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
            >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
