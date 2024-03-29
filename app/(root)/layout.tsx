
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google"
import "../globals.css"
import Topbar from "@/components/shared/Topbar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import Bottombar from "@/components/shared/Bottombar"
import NextNProgress from 'nextjs-progressbar';
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
        <html lang="en" >
            <body className={`${inter.className}  bg-dark-1`} style={{color:"white"}}>
              <Topbar/>
              
              <main className="flex flex-row">

                <LeftSidebar/>
                <section className="main-container">
                  <div className="w-full max-w-4xl">
                <Providers> {children}</Providers>
                 
                 </div>

                </section>
                <RightSidebar/>
              </main>
              <Bottombar/>
              <Analytics />
             </body>
        </html>

    </ClerkProvider>
    
    )}