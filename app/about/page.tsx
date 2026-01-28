'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
    transition: { duration: 0.8 },
  },
}

export default function About() {
  const team = [
    {
      name: 'Dr. Samir Khan',
      role: 'Lead Physiotherapist',
      specialty: 'Sports Injury & Rehabilitation',
      image: '/hero-physio.jpg',
    },
    {
      name: 'Aisha Ahmed',
      role: 'Senior Therapist',
      specialty: 'Orthopedic Rehabilitation',
      image: '/clinic-interior.jpg',
    },
    {
      name: 'Hassan Ali',
      role: 'Sports Specialist',
      specialty: 'Chronic Pain Management',
      image: '/sports-physio.jpg',
    },
  ]

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in clinical practice and patient care.',
    },
    {
      icon: Users,
      title: 'Compassion',
      description: 'Every patient receives personalized attention and empathetic support.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We use cutting-edge techniques and technology for optimal outcomes.',
    },
  ]

  return (
    <div className="bg-white text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl text-amber-50 font-bold mb-6">
            About MedAlign
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Dedicated to excellence in physiotherapy care and recovery.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <Image
              src="/2.jpeg"
              alt="Our clinic"
              fill
              className="object-cover border border-border"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide evidence-based physiotherapy care that empowers patients to achieve their recovery goals and optimize their physical health.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading physiotherapy clinic in the region, recognized for clinical excellence, patient satisfaction, and innovative treatment approaches.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8">
            Our Story
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-6">
            MedAlign Physiotherapy was founded on the belief that every patient deserves access to world-class physiotherapy care. Located in the heart of Bahria Town Phase 4, Islamabad, we've helped hundreds of patients recover from injuries, surgeries, and chronic conditions.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
            Our team of experienced physiotherapists combines traditional knowledge with modern clinical techniques to deliver results. From athletes returning to their sport to patients recovering from surgery, we're here to support your journey to wellness.
          </motion.p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
              Core Values
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              What drives us every day
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
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
                    whileHover={{ y: -10 }}
                    className="bg-muted p-8 border border-border hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your care
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.1, duration: 0.6 },
                  },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-border overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.specialty}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Happy Patients', value: '2000+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Expert Team', value: '10+' },
              { label: 'Success Rate', value: '98%' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">State-of-the-Art Facility</h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-4"
            >
              {[
                'Modern physiotherapy equipment',
                'Advanced therapeutic technologies',
                'Clean and welcoming treatment rooms',
                'Private consultation areas',
                'Accessible facility with parking',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-3 items-start"
                >
                  <span className="text-2xl text-primary flex-shrink-0">✓</span>
                  <p className="text-lg text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <Image
              src="/6.jpeg"
              alt="Clinic facility"
              fill
              className="object-cover border border-border"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
