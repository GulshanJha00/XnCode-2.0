import connectDB from "@/lib/config/db";
import User from "@/lib/config/models/userModel";
import { NextRequest } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
    try {
      const { userId } = await req.json();
  
      
      const cleanedUserId = userId.replace(/"/g, "").trim();
  
      if (!cleanedUserId) {
        return new Response(
          JSON.stringify({ error: "User ID is required" }),
          { status: 400 }
        );
      }
  
      const user = await User.findById(cleanedUserId);
      if (!user) {
        return new Response(
          JSON.stringify({ error: "User not found" }),
          { status: 404 }
        );
      }
  
      return new Response(JSON.stringify({ user }), { status: 200 });
    } catch (error) {
      console.error("Error fetching user details:", error);
      return new Response(
        JSON.stringify({ error: "Error fetching user details" }),
        { status: 500 }
      );
    }
  }
  
