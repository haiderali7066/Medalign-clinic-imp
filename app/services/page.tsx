'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
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

export default function Services() {
  const services = [
    {
      title: 'Post-Surgery Rehabilitation',
      image: '/h1.jpg',
      description: 'Comprehensive recovery programs designed to restore strength, mobility, and function after surgical procedures.',
      details: [
        'Pre and post-operative assessment',
        'Personalized exercise programs',
        'Wound care education',
        'Scar tissue management',
        'Progressive functional training',
      ],
    },
    {
      title: 'Sports Physiotherapy',
      image: '/h2.jpg',
      description: 'Specialized treatment for athletes and active individuals to prevent injuries and enhance performance.',
      details: [
        'Sports injury assessment and treatment',
        'Performance enhancement training',
        'Injury prevention programs',
        'Return to sport protocols',
        'Training load management',
      ],
    },
    {
      title: 'Pain Management',
      image: '/h3.jpg',
      description: 'Evidence-based approaches to treat both chronic and acute pain conditions effectively.',
      details: [
        'Manual therapy and mobilization',
        'Pain neuroscience education',
        'Therapeutic exercises',
        'Postural correction',
        'Ergonomic advice',
      ],
    },
    {
      title: 'Wellness & Prevention',
      image: '/8.jpeg',
      description: 'Preventive programs and lifestyle optimization to maintain optimal health and prevent injuries.',
      details: [
        'Postural assessment and training',
        'Core stability programs',
        'Flexibility and mobility work',
        'Ergonomic consultation',
        'Preventive exercise programs',
      ],
    },
  ]

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
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive physiotherapy solutions tailored to your specific needs and recovery goals.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                  }}
                  className={`relative h-96 ${idx % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover border border-border"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={itemVariants}
                  className={idx % 2 === 1 ? 'md:order-1' : ''}
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-4"
                  >
                    {service.title}
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-3 mb-8"
                  >
                    {service.details.map((detail, detailIdx) => (
                      <motion.div
                        key={detailIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: detailIdx * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground">{detail}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                  >
                    <Link href="/appointment">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(45, 138, 143, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-primary text-white font-bold flex items-center gap-2 hover:shadow-lg transition-shadow"
                      >
                        Book This Service <ArrowRight size={20} />
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6">
            Ready to Start Your Recovery?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-8 opacity-90">
            Schedule a consultation with our expert physiotherapists today.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/appointment">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-primary font-bold text-lg flex items-center gap-2 hover:shadow-xl transition-shadow mx-auto"
              >
                Book Appointment <ArrowRight size={24} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
