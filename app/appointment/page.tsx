"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { value: "post-surgery-rehab", label: "Post-Surgery Rehabilitation" },
    { value: "sports-physio", label: "Sports Physiotherapy" },
    { value: "pain-management", label: "Pain Management" },
    { value: "wellness", label: "Wellness & Prevention" },
    { value: "consultation", label: "General Consultation" },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const getTodayDate = () => new Date().toISOString().split("T")[0];
  const getMaxDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 60);
    return d.toISOString().split("T")[0];
  };

  return (
    <div className="bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-muted text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground"
          >
            Share your details and we’ll contact you shortly to confirm your
            physiotherapy session.
          </motion.p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle size={80} className="mx-auto text-primary mb-6" />
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Request Submitted!
              </h2>
              <p className="text-muted-foreground">
                Thank you. Our team will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              action="https://usebasin.com/f/09c7e5171144"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-muted p-8 border border-border space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-4"
              >
                Personal Information
              </motion.h3>

              {/* Name & Phone (REQUIRED) */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border bg-white"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border bg-white"
                    placeholder="+92 3XX XXXXXXX"
                  />
                </motion.div>
              </div>

              {/* Optional Fields */}
              <motion.div variants={itemVariants}>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border bg-white"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block font-semibold mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  className="w-full px-4 py-3 border bg-white"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map((s) => (
                    <option key={s.value} value={s.label}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2 flex items-center gap-2">
                    <Calendar size={16} /> Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={getTodayDate()}
                    max={getMaxDate()}
                    className="w-full px-4 py-3 border bg-white"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2 flex items-center gap-2">
                    <Clock size={16} /> Preferred Time
                  </label>
                  <select
                    name="time"
                    className="w-full px-4 py-3 border bg-white"
                  >
                    <option value="">Select time (optional)</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block font-semibold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 border bg-white resize-none"
                  placeholder="Any pain, injury, or concern (optional)"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-primary text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                Submit Request <ArrowRight size={20} />
              </motion.button>
            </motion.form>
          )}

          {/* Info Cards */}
          {!submitted && (
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-muted p-6 border">
                <h4 className="font-bold mb-3">Clinic Hours</h4>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                  <li>Mon – Thu: 10:00 AM – 10:00 PM</li>
                  <li>Fri: 3:00 PM – 10:00 PM</li>
                  <li>Sat: 10:00 AM – 10:00 PM</li>
                  <li>Sun: Closed</li>
                </ul>
              </div>

              <div className="bg-muted p-6 border">
                <h4 className="font-bold mb-3">Contact</h4>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Landline: 051 2711346</p>
                  <p>WhatsApp: +92 326 0341216</p>
                  <p>Email: Medalign.physio@gmail.com</p>
                  <p>Bahria Town Phase 4, Islamabad</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
