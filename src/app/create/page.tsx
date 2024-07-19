"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NavBar } from "@/components/nav-bar";
import Footer from "@/components/footer";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user && user.org_id && user.org_id !== 'org_wvyPNK9y4HUrFBzV') {
            // Redirect to another page
            router.push('/');
        }
    }, [user, router]);

    if (user && user.org_id && user.org_id === 'org_wvyPNK9y4HUrFBzV') {
        return (
            <div>
                <nav className="z-10 sticky top-0 top">
                    <NavBar />
                </nav>
                <div className="items-center justify-between flex flex-col flex-wrap">
                    <h1 className="text-5xl">
                        Test
                    </h1>
                </div>

                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <nav className="z-10 sticky top-0 top">
                    <NavBar />
                </nav>
                <div className="flex justify-center items-center flex-row flex-wrap">
                    <h1 className="text-5xl">
                        Redirecting...
                    </h1>
                </div>
                <Footer />
            </div>
        );
    }
}