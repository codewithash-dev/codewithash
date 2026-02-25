"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  message: z.string().min(1, "Message is required").min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { email: "", message: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, message: data.message }),
      });
      if (res.ok) {
        setStatus("sent");
        reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-transparent text-white pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 data-gsap="fade-up" className="text-4xl font-bold mb-2">Contact Us</h1>
        <p data-gsap="fade-up" data-gsap-delay="0.08" className="text-lg text-gray-300 mb-8">
          Connect with us for any questions or concerns.
        </p>
        <form
          data-gsap="fade-up"
          data-gsap-delay="0.12"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-left"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Your email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent disabled:opacity-50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-rose-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Your message:
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us what's on your mind..."
              {...register("message")}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent disabled:opacity-50"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-rose-400">{errors.message.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-animate w-full sm:w-auto gradient-cta text-white px-8 py-3 rounded-lg font-semibold disabled:opacity-50 transition hover:opacity-90 disabled:hover:opacity-50 disabled:transform-none"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-sm text-rose-400">Something went wrong. Please try again or email directly.</p>
          )}
        </form>
      </div>
    </main>
  );
}
