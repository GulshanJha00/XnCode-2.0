import React from "react";
import { useRouter } from "next/router";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include", 
        });

        const data = await res.json();
        
        if (data.message === "Logged out") {
            // Redirect user to the homepage after logging out
            router.push("/"); 
        }
    };

    return (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
            Log Out
        </button>
    );
}
