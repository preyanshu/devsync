

import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"
import { Analytics } from '@vercel/analytics/react';

import NextNProgressClient from "@/components/shared/Progressbar";
import Providers from "@/components/shared/Progressbar";

export const metadata={
    title:'DevSync',
    description:'Social media for developers',
}
const inter=Inter({subsets:['latin']})

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
    <ClerkProvider>
        <html lang="en" className={`${inter.className}  bg-dark-1`}>
            <body
             >
                     <Providers> {children}</Providers>
                {/* {children} */}
             <Analytics /></body>
        </html>

    </ClerkProvider>
    
    )}