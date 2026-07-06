import "./globals.css";

export const metadata = {
  title: "Top Team KG — больше чем игра. Медиа-футбольный клуб Кыргызстана",
  description:
    "Официальная цифровая платформа Top Team KG: матч-центр, состав команды, новости, медиа-контент и партнерская программа медиа-футбольного клуба Кыргызстана.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Archivo+Expanded:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
