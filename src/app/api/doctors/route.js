const { NextResponse } = require("next/server");

const DOCTORS = [
  {
    name: "Dr. Emma Johnson",
    expertise: "Cardiology",
    city: "London, United Kingdom",
  },
  {
    name: "Dr. Aisha Khan",
    expertise: "Pediatrics",
    city: "Dubai, UAE",
  },
  {
    name: "Dr. Rajesh Gupta",
    expertise: "Orthopedics",
    city: "Mumbai, India",
  },
  {
    name: "Dr. Sarah Smith",
    expertise: "Dermatology",
    city: "Birmingham, United Kingdom",
  },
  {
    name: "Dr. Noor Al-Farsi",
    expertise: "Gynecology",
    city: "Abu Dhabi, UAE",
  },
  {
    name: "Dr. Priya Desai",
    expertise: "Neurology",
    city: "Delhi, India",
  },
  {
    name: "Dr. James Brown",
    expertise: "General Practice",
    city: "Manchester, United Kingdom",
  },
  {
    name: "Dr. Fatima Al-Mansoori",
    expertise: "Internal Medicine",
    city: "Sharjah, UAE",
  },
  {
    name: "Dr. Sunil Rao",
    expertise: "Oncology",
    city: "Bangalore, India",
  },
];

export async function GET(request) {
  return NextResponse.json({ doctors: DOCTORS });
}

