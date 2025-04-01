import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "Hi, I'm Mikk, a 22-year-old student at the University of Tartu, currently in my second year, mainly focusing on web development.",
  creator: "Mikk Vahaste",
  keywords: ["mikk", "vahaste", "web", "development", "student", "tartu"],
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
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center">
            <div className="flex w-full flex-1 flex-col items-center">
              <Header />
              <div className="w-full max-w-3xl flex-grow p-4">{children}</div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
