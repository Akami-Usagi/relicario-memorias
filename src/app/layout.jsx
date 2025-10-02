export const metadata = {
  title: "Relicario de Memorias",
  description: "Revive el sus vidas",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/aframe/build/aframe-ar.js"></script>
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
