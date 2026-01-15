import ClientLayout from "./client-layout";
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Gestion de Incidencias - Grupo Ollamani',
    description: 'Sistema moderno para la gestión de incidencias'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang='es'>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
