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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "post-surgery-rehab",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { value: "post-surgery-rehab", label: "Post-Surgery Rehabilitation" },
    { value: "sports-physio", label: "Sports Physiotherapy" },
    { value: "pain-management", label: "Pain Management" },
    { value: "wellness", label: "Wellness & Prevention" },
    { value: "consultation", label: "General Consultation" },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "post-surgery-rehab",
        date: "",
        time: "",
        notes: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  const getTodayDate = () => new Date().toISOString().split("T")[0];
  const getMaxDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 60);
    return d.toISOString().split("T")[0];
  };

  return (
    <div className="bg-white text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Schedule your physiotherapy session with our expert team. Available
            Monday to Saturday.
          </motion.p>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center mb-6"
              >
                <CheckCircle size={80} className="text-primary" />
              </motion.div>
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Booking Confirmed!
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Thank you for scheduling your appointment.
              </p>
              <p className="text-muted-foreground">
                We'll contact you shortly to confirm the details.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-muted p-8 border border-border space-y-6"
            >
              {/* Personal Information */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6">
                  Personal Information
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2">
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2">
                    Phone Number *
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                    placeholder="Your phone number"
                  />
                </motion.div>
              </div>

              {/* Optional Email */}
              <motion.div variants={itemVariants}>
                <label className="block font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Appointment Details */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 mt-8">
                  Appointment Details
                </h3>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block font-semibold mb-2">
                  Service Required
                </label>
                <motion.select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2 flex items-center gap-2">
                    <Calendar size={18} className="text-primary" /> Preferred
                    Date
                  </label>
                  <motion.input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getTodayDate()}
                    max={getMaxDate()}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block font-semibold mb-2 flex items-center gap-2">
                    <Clock size={18} className="text-primary" /> Preferred Time
                  </label>
                  <motion.select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block font-semibold mb-2">
                  Additional Notes
                </label>
                <motion.textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all resize-none bg-white"
                  placeholder="Any specific concerns or medical history?"
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(45, 138, 143, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
              >
                Confirm Booking <ArrowRight size={22} />
              </motion.button>
            </motion.form>
          )}

          {/* Info Cards */}
          {!submitted && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6 mt-12"
            >
              <motion.div
                variants={itemVariants}
                className="bg-muted p-6 border border-border"
              >
                <h4 className="font-bold text-lg mb-3">Hours</h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>Mon – Thu: 10:00 AM – 10:00 PM</p>
                  <p>Fri: 3:00 PM – 10:00 PM</p>
                  <p>Sat: 10:00 AM – 10:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-muted p-6 border border-border"
              >
                <h4 className="font-bold text-lg mb-3">Contact</h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>Phone: 051 2711346</p>
                  <p>Email: Medalign.physio@gmail.com</p>
                  <p>Location: Bahria Town Phase 4, Islamabad</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
