"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

console.log('main section ')
export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}