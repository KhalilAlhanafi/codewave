import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeWave - Premium Full-Stack Development",
  description: "Transform your ideas into powerful digital experiences with our premium full-stack development services. We craft exceptional web and mobile applications that drive results.",
  keywords: ["CodeWave", "web development", "mobile apps", "full-stack", "UI/UX design", "cloud solutions", "React", "Next.js", "TypeScript"],
  authors: [{ name: "CodeWave Team" }],
  icons: {
    icon: "/img/codewave-icon.svg",
  },
  openGraph: {
    title: "CodeWave - Premium Full-Stack Development",
    description: "Transform your ideas into powerful digital experiences with our premium development services",
    url: "https://codewave.com",
    siteName: "CodeWave",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWave - Premium Full-Stack Development",
    description: "Transform your ideas into powerful digital experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
