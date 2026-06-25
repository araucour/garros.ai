"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setError("");

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Échec de l'envoi.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-copper/30 bg-copper/5 p-8 text-center">
        <p className="font-display text-xl font-semibold text-espresso">
          Message envoyé. Merci.
        </p>
        <p className="mt-2 text-espresso/75">
          Je vous réponds rapidement, généralement sous 24 à 48 heures.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-espresso/15 bg-cream px-4 py-3 text-espresso placeholder:text-espresso/40 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-espresso">
            Nom *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-espresso">
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="vous@entreprise.fr" />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-espresso">
          Entreprise
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} placeholder="Votre entreprise" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-espresso">
          Message *
        </label>
        <textarea id="message" name="message" required rows={5} className={fieldClass} placeholder="Décrivez votre contexte et votre besoin en quelques lignes." />
      </div>

      {status === "error" && (
        <p className="text-sm text-copper-dark" role="alert">
          {error || "L'envoi a échoué. Réessayez ou écrivez directement à contact@garros.ai."}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
