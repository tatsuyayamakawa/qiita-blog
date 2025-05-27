import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/config";
import { getBaseURL } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseURL = new URL(getBaseURL());

const { title, description } = siteConfig;

export const metadata: Metadata = {
  metadataBase: baseURL,
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/", languages: { "ja-JP": "/ja-JP" } },
  title: {
    default: title,
    template: `%s | ${title}`,
    absolute: `${title} - ${description}`,
  },
  description,
  openGraph: {
    siteName: title,
    locale: "ja_JP",
    type: "website",
    title: title,
    description,
    url: getBaseURL(),
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
