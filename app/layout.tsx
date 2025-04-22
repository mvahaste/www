import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { availableThemes, defaultTheme } from "@/components/theme-switcher";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mvahaste.dev",
  description:
    "Hi, I'm Mikk — a front-end-focused web developer and informatics student at the University of Tartu. Sometimes I get lost and end up in the back-end.",
  openGraph: {
    type: "website",
    url: "https://mvahaste.dev",
    siteName: "mvahaste.dev",
    images: [
      {
        url: "https://mvahaste.dev/images/avatar.jpg",
        alt: "mvahaste.dev",
      },
    ],
  },
  creator: "Mikk Vahaste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          themes={availableThemes}
          defaultTheme={defaultTheme}
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center">
            <div className="flex w-full flex-1 flex-col items-center">
              <Header />
              <div className="flex w-full max-w-3xl flex-grow flex-col p-4">
                {children}
              </div>
            </div>
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
