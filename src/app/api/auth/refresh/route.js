import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

export async function POST(req) {
  const refreshToken = req.cookies.get('refreshToken');

  if (!refreshToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(refreshToken, SECRET_KEY);
    const newToken = jwt.sign({ id: decoded.id }, SECRET_KEY, { expiresIn: "1h" });

    return new Response(JSON.stringify({ token: newToken }), {
      status: 200,
      headers: {
        "Set-Cookie": `token=${newToken}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=3600`,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid refresh token" }), { status: 403 });
  }
}
