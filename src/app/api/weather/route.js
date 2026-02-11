import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  

  if (!token) { 
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return Response.json({ message: "Invalid token" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return Response.json({ message: "City required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API}&units=metric`,
      { cache: "no-store" } 
    );

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ error: data.message }, { status: 400 });
    }

    return Response.json(data);

  } catch (err) {
    
    return Response.json({ error: "Weather fetch failed" }, { status: 500 });
  }
}
