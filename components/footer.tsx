'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Instagram } from 'lucide-react'

export default function Footer() {
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

  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-4">MedAlign</h3>
            <p className="text-sm opacity-90 leading-relaxed">Rehab. Realign. Restore.</p>
            <p className="text-sm opacity-80 mt-3">Expert physiotherapy care dedicated to your recovery and wellness.</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p>Shop 1, Lower Ground</p>
                  <p>Building #39, Civic Centre</p>
                  <p>Bahria Town Phase 4</p>
                  <p>Islamabad, 46000</p>
                </div>
              </div>
              <motion.div
                className="flex gap-3 items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5" />
                <a href="tel:+923260341216" className="hover:underline transition-all">
                  0326 0341216
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <div className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Book Appointment', href: '/appointment' },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={link.href} className="block hover:underline transition-all">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://instagram.com/medalign.physio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:underline transition-all"
                whileHover={{ x: 5 }}
              >
                <Instagram className="w-4 h-4" />
                Follow on Instagram
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-primary-foreground/30 origin-left"
        />

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="pt-8 text-center text-sm opacity-80"
        >
          <p>&copy; {new Date().getFullYear()} MedAlign Physiotherapy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
