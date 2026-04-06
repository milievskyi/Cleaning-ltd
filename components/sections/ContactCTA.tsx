"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { submitLead } from "@/services/leadService";
import type { LeadFormData } from "@/types";
import TactileButton from "@/components/ui/TactileButton";
import RevealWrapper from "@/components/ui/RevealWrapper";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Please enter a valid phone number"),
  serviceType: z.enum(["regular", "deep-clean", "move-in-out", "post-construction", "other"], {
    required_error: "Please select a service type",
  }),
  homeSize: z.enum(["studio", "1br", "2br", "3br", "4br-plus", "custom"], {
    required_error: "Please select your home size",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const inputBase =
  "w-full rounded-2xl px-5 py-4 text-[15px] font-light bg-surface-container-low dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 text-on-surface dark:text-white placeholder:text-on-surface-variant/40 dark:placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-primary-fixed/40 focus:border-primary/40 dark:focus:border-primary-fixed/40 transition-all duration-200";

const errorBase = "border-red-400/60 ring-2 ring-red-400/20";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      await submitLead(data as LeadFormData);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-6 md:px-8 bg-surface-container-lowest dark:bg-[#0d1f17]">
      <div className="max-w-3xl mx-auto">
        <RevealWrapper className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-primary-fixed/60 mb-3">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking mb-5 text-on-surface dark:text-white">
            Get Your Free Quote
          </h2>
          <p className="text-on-surface-variant dark:text-white/55 text-lg font-light editorial-tracking">
            Tell us about your home and we&apos;ll get back to you within a few hours.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="glass-elevated rounded-[2.5rem] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {submitted ? (
                // Success state
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center mb-6"
                  >
                    <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check
                    </span>
                  </motion.div>
                  <h3 className="text-2xl font-extrabold tight-tracking text-on-surface dark:text-white mb-3">
                    Request Received!
                  </h3>
                  <p className="text-on-surface-variant dark:text-white/55 font-light max-w-sm leading-relaxed">
                    We&apos;ll review your request and contact you within a few hours to confirm your booking.
                  </p>
                </motion.div>
              ) : (
                // Form state
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                >
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-semibold text-on-surface-variant dark:text-white/50 uppercase tracking-[0.15em] mb-2">
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Jane Smith"
                        className={`${inputBase} ${errors.name ? errorBase : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[12px] mt-1.5 font-light">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-on-surface-variant dark:text-white/50 uppercase tracking-[0.15em] mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+1 (780) 000-0000"
                        type="tel"
                        className={`${inputBase} ${errors.phone ? errorBase : ""}`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[12px] mt-1.5 font-light">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service type + Home size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-semibold text-on-surface-variant dark:text-white/50 uppercase tracking-[0.15em] mb-2">
                        Service Type
                      </label>
                      <select
                        {...register("serviceType")}
                        className={`${inputBase} ${errors.serviceType ? errorBase : ""}`}
                      >
                        <option value="">Select a service...</option>
                        <option value="regular">Regular Cleaning</option>
                        <option value="deep-clean">Deep Cleaning</option>
                        <option value="move-in-out">Move-In / Move-Out</option>
                        <option value="post-construction">Post-Construction</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-[12px] mt-1.5 font-light">
                          {errors.serviceType.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-on-surface-variant dark:text-white/50 uppercase tracking-[0.15em] mb-2">
                        Home Size
                      </label>
                      <select
                        {...register("homeSize")}
                        className={`${inputBase} ${errors.homeSize ? errorBase : ""}`}
                      >
                        <option value="">Select home size...</option>
                        <option value="studio">Studio / Bachelor</option>
                        <option value="1br">1 Bedroom</option>
                        <option value="2br">2 Bedrooms</option>
                        <option value="3br">3 Bedrooms</option>
                        <option value="4br-plus">4+ Bedrooms</option>
                        <option value="custom">Custom / Commercial</option>
                      </select>
                      {errors.homeSize && (
                        <p className="text-red-500 text-[12px] mt-1.5 font-light">
                          {errors.homeSize.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[12px] font-semibold text-on-surface-variant dark:text-white/50 uppercase tracking-[0.15em] mb-2">
                      Additional Notes{" "}
                      <span className="normal-case tracking-normal text-on-surface-variant/40">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Anything we should know — pets, specific areas, access instructions..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <TactileButton
                    type="submit"
                    size="lg"
                    className="w-full justify-center"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send My Request"
                    )}
                  </TactileButton>

                  <p className="text-center text-[12px] text-on-surface-variant/50 dark:text-white/30 font-light">
                    No spam. We&apos;ll only contact you about your quote.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
