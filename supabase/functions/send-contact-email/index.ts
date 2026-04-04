import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "@supabase/supabase-js/cors";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const BodySchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1).max(500),
  message: z.string().min(1).max(5000),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) {
    return new Response(
      JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ error: "RESEND_API_KEY is not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    const parsed = BodySchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #d4a853; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">Name:</td>
            <td style="padding: 10px; color: #333;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 10px; color: #333;">${email}</td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 10px; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 10px; color: #333;">${phone}</td>
          </tr>` : ""}
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Subject:</td>
            <td style="padding: 10px; color: #333;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
          <h3 style="color: #555; margin-top: 0;">Message:</h3>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
          Sent from ERAMR Global website contact form
        </p>
      </div>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "ERAMR Global Private Limited <onboarding@resend.dev>",
        to: ["info@eramr.com"],
        subject: `Contact Form: ${subject}`,
        html: htmlContent,
        reply_to: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", JSON.stringify(data));
      throw new Error(`Resend API call failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
