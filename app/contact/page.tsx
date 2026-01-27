'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-white text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl max-w-2xl leading-relaxed">
            Have questions? We're here to help. Reach out to our team and we'll respond as soon as possible.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: MapPin, label: 'Address', value: 'Bahria Town Phase 4, Islamabad' },
              { icon: Phone, label: 'Phone', value: '+92 (326) 034-1216' },
              { icon: Mail, label: 'Email', value: 'info@medalign.pk' },
              { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM-7PM' },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(45, 138, 143, 0.15)' }}
                    className="bg-muted p-8 border border-border hover:border-primary transition-colors"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">{contact.label}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Find Us On Map</h2>
            <div className="bg-muted h-96 overflow-hidden border border-border shadow-lg">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="MedAlign Physiotherapy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.2854348886706!2d72.80215!3d33.82015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe03a8c3c1c7%3A0x1234567890abcdef!2sBahria%20Town%20Phase%204%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1234567890123"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Send Us A Message
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you shortly.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-border shadow-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl mb-4"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will contact you soon.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <label className="block font-semibold mb-2">Full Name</label>
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

                  <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2">Email</label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.02 }}
                        className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Phone</label>
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
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block font-semibold mb-2">Message</label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all resize-none bg-white"
                      placeholder="Tell us about your inquiry..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(45, 138, 143, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-primary text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    Send Message <Send size={20} />
                  </motion.button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
