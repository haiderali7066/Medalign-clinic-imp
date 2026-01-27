'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Services from "@/components/home-services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  const ref = useRef(null)

  const services = [
    {
      title: 'Rehabilitation',
      description: 'Post-surgical and injury recovery programs tailored to your needs',
      icon: '🏥',
    },
    {
      title: 'Sports Therapy',
      description: 'Performance enhancement and injury prevention for athletes',
      icon: '⚽',
    },
    {
      title: 'Pain Management',
      description: 'Advanced techniques for acute and chronic pain relief',
      icon: '💪',
    },
    {
      title: 'Wellness Care',
      description: 'Preventive care and lifestyle optimization programs',
      icon: '🎯',
    },
  ]

  const features = [
    { title: 'Expert Team', description: 'Highly qualified physiotherapists' },
    { title: 'Personalized', description: 'Custom treatment plans for you' },
    { title: 'Modern Facility', description: 'State-of-the-art equipment' },
    { title: 'Flexible Hours', description: 'Appointments that suit your schedule' },
  ]

  return (
    <div className="bg-white text-foreground overflow-hidden">
      <Header />
      
      {/* Scroll Progress */}
      <motion.div
        ref={ref}
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top z-40"
        style={{ scaleY }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="text-sm font-medium text-primary">Welcome to MedAlign</span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mt-4 leading-tight"
            >
              Rehab. Realign. Restore.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mt-6 leading-relaxed"
            >
              Experience world-class physiotherapy care designed to accelerate your recovery and restore your quality of life.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8"
            >
              <Link href="/appointment">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(45, 138, 143, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white font-bold flex items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  Book Appointment <ArrowRight size={20} />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full"
          >
            <Image
              src="/hero-physio.jpg"
              alt="Physiotherapy treatment"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Why Choose Us
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Excellence in every aspect of care
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1, duration: 0.6 },
                  },
                }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 border border-border hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services></Services>
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            {/* <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Our Services
            </motion.h2> */}
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Comprehensive physiotherapy solutions for all your needs
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -30 : 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: idx * 0.1, duration: 0.6 },
                  },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-border p-8 flex gap-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/clinic-interior.jpg"
                alt="Clinic interior"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
                About MedAlign
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-4">
                Located in Bahria Town, Islamabad, MedAlign Physiotherapy is dedicated to providing evidence-based treatment with a patient-first approach.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-6">
                Our team of certified physiotherapists combines clinical expertise with cutting-edge technology to ensure you receive the best possible care.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <p>Specialized treatment programs</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <p>Modern equipment and technology</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <p>Personalized care plans</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Get In Touch
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Ready to start your recovery journey?
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, label: 'Phone', value: '+92 (300) 123-4567' },
              { icon: Mail, label: 'Email', value: 'info@medalign.pk' },
              { icon: MapPin, label: 'Location', value: 'Bahria Town, Islamabad' },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: idx * 0.1, duration: 0.6 },
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 text-center border border-border hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-bold text-lg mb-2">{contact.label}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(45, 138, 143, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white font-bold text-lg hover:shadow-lg transition-shadow"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
