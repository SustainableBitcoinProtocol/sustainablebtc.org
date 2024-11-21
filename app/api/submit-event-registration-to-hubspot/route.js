import { NextResponse } from "next/server";

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/contacts";
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

export async function POST(request) {
   try {
      const contactData = await request.json(); // Parse the JSON body from the request

      // Make the request to HubSpot API
      const hubspotResponse = await fetch(HUBSPOT_API_URL, {
         method: "POST",
         headers: {
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
         },
         body: JSON.stringify(contactData),
      });

      if (!hubspotResponse.ok) {
         const errorData = await hubspotResponse.json();
         console.error("Error creating contact:", errorData);
         return NextResponse.json(errorData, { status: hubspotResponse.status });
      }

      return NextResponse.json({ message: "Contact created successfully" }, { status: 200 });
   } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ message: error.message}, { status: 500 });
   }
}
