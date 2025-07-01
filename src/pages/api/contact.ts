import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzDYpAKuq67cGI8DNETrmybDkp2etC308ddf1TkoiK5T01WfyLm4CHpN3rOnyaRGvQx/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao enviar para o Apps Script:", error);
    return res.status(500).json({ error: "Erro ao enviar o formulário" });
  }
}
