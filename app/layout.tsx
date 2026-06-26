import './globals.css';

export const metadata = {
  title: 'Daniel Alao | Campaign Headquarters',
  description: 'Building a premium, scalable blueprint for collective representation and technological growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}