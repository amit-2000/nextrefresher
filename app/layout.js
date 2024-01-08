import "./globals.css";

export const metadata = {
  title: "NextJS App",
  description: "Your first NextJS app!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
