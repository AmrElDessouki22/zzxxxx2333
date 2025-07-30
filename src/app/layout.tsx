import '@/app/globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { NotesProvider } from '@/contexts/NotesContext';

export const metadata = {
  title: 'AI Generated Project',
  description: 'A comprehensive Next.js application',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
