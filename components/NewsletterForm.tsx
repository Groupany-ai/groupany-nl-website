"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle")

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState("sending")
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value

    try {
      const res = await fetch("https://dev.groupany.ai/api/crm/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-workspace-id": "cmm0zw66p0004fg22ukne3551",
        },
        body: JSON.stringify({
          email,
          name: email.split("@")[0],
          source: "groupany.ai newsletter",
          tags: ["newsletter"],
        }),
      })

      if (res.ok) {
        setState("sent")
        e.currentTarget.reset()
      } else {
        setState("error")
      }
    } catch {
      setState("error")
    }
  }

  if (state === "sent") {
    return (
      <div style={{background:"#F0FDF4", border:"1px solid #DCFCE7", borderRadius:8, padding:"12px 16px", marginTop:16, fontSize:"0.875rem", color:"#059669"}}>
        You are subscribed. Welcome aboard!
      </div>
    )
  }

  return (
    <>
      {state === "error" && (
        <div style={{background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:8, padding:"12px 16px", marginTop:16, fontSize:"0.875rem", color:"#dc2626"}}>
          Something went wrong. Please try again.
        </div>
      )}
      <form className="newsletter-form" onSubmit={handleNewsletter}>
        <input type="email" name="email" placeholder="Your email" required />
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </>
  )
}
