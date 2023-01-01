import fetch from "node-fetch";

export default async function handler(request, response) {
  // const data = await res.json();
  const data = { name: "blah" };
  return response.status(200).json({ data });
}
