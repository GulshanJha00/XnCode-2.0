import { NextResponse } from "next/server";

const LANGUAGE_ID = {
    javascript : 63,
    python: 71,
    cpp: 54,
    java: 62,
}

const JUDGE0_API = process.env.RAPID_API_URL || "https://judge0-ce.p.rapidapi.com"
const RAPID_API_KEY = process.env.RAPID_API_KEY
const RAPID_API_HOST = process.env.RAPID_API_HOSTtestes
