import './globals.css';

export const metadata = {
  title: 'Candidate Name | Campaign Headquarters',
  description: 'Building a premium, scalable blueprint for collective representation and technological growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}