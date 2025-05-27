"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (error) {
      alert("Une erreur est survenue. Merci de réessayer.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto px-6 pt-30 pb-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Contactez-nous
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Une question, une suggestion ou besoin d'aide ? Écrivez-nous via ce
          formulaire, nous vous répondrons rapidement.
        </p>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-md text-center shadow">
            Merci ! Votre message a bien été envoyé. Nous reviendrons vers vous
            au plus vite.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-6 rounded-lg shadow"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}
