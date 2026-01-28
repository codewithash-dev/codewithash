import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "react-cookie-consent";

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
  title: 'Code with Ash - Full Stack Developer Portfolio',
  description: 'Portfolio showcasing full-stack development projects and learning paths',
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Deny"
          enableDeclineButton
          cookieName="codewithash-cookie-consent"
          style={{ background: "#000", borderTop: "1px solid #333" }}
          buttonStyle={{ 
            background: "linear-gradient(to right, #9333ea, #ec4899)", 
            color: "#fff", 
            borderRadius: "0.5rem",
            padding: "0.75rem 2rem",
            fontWeight: "600"
          }}
          declineButtonStyle={{
            background: "#374151",
            color: "#fff",
            borderRadius: "0.5rem",
            padding: "0.75rem 2rem",
            fontWeight: "600"
          }}
          expires={365}
        >
          Our website uses cookies to give you the best and most relevant experience. By clicking on accept, you give your consent to the use of cookies as per our privacy policy.
        </CookieConsent>
      </body>
    </html>
  );
}