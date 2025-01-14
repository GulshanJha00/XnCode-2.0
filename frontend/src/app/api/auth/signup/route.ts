import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";

connectDB();

export async function POST(req: NextRequest) {
    try {
        
        const { username, name, email, password } = await req.json();

        
        if (!username || !name || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Create a new user
        const newUser = new User({
            username,
            name,
            email,
            password,
        });

        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            {
                email: newUser.email,
                id: newUser._id,
            },
            "pprasoon", 
            { expiresIn: "15d" } 
        );

        
        return NextResponse.json(
            {
                message: "User created successfully",
                token,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error in signup route:", error);
        return NextResponse.json(
            { error: "Error in signup route" },
            { status: 500 }
        );
    }
}
