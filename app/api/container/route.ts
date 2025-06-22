import { NextResponse } from "next/server";

// Note: Ideally, keep the API key in an env variable (e.g., process.env.SHIPSGO_API_KEY).
// The fallback below is provided so the feature works out-of-the-box for testing.
const AUTH_CODE = process.env.SHIPSGO_API_KEY || "5a1f27d823ccd62177a9dc3ad3699e7f";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const containerNumber = searchParams.get("containerNumber");

  if (!containerNumber) {
    return NextResponse.json(
      { error: "containerNumber query param is required" },
      { status: 400 }
    );
  }

  const apiUrl = `https://shipsgo.com/api/v1.2/ContainerService/GetContainerInfo/?authCode=${AUTH_CODE}&containerNumber=${containerNumber}&mapPoint=true`;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) {
      // Forward error details from Shipsgo if available
      return NextResponse.json({ error: data?.message || "Shipsgo API error", status: res.status }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching container info:", error);
    return NextResponse.json(
      { error: "Failed to fetch container data" },
      { status: 500 }
    );
  }
}
