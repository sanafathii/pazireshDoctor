import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";
import "./globals.css";
const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جست و جو دکتر و رزرو انلاین نوبت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
