import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        
        
        if (user.password !== password) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        
        const token = jwt.sign(
            {
                email: user.email,
                id: user._id,
            },
            "pprasoon", 
            { expiresIn: "15d" }
        );

        const response = NextResponse.json({ message: "Login successful", token: token, userId: user._id });
        response.cookies.set("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 15,
        });

        return response;
       
    } catch (error) {
        console.error("Error in login route:", error);
        return NextResponse.json(
            { error: "Error in login route" },
            { status: 500 }
        );
    }
}
