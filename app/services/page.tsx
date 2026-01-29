"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const WHATSAPP_LINK = "https://wa.me/923260341216";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Services() {
  const services = [
    {
      title: "Sports Physiotherapy",
      image: "/s.jpg",
      description:
        "Injury prevention, performance optimization, and full rehabilitation for athletes at every level.",
    },
    {
      title: "Pain Management",
      image: "/h1.jpg",
      description:
        "Targeted treatment for acute and chronic pain to restore comfort, mobility, and daily function.",
    },
    {
      title: "Rehabilitation",
      image: "/s2.jpg",
      description:
        "Structured recovery programs after injury, surgery, or prolonged immobility to rebuild strength and independence.",
    },
    {
      title: "Posture & Spine Correction",
      image: "/h3.jpg",
      description:
        "Correction of spinal imbalances, scoliosis, and posture-related issues for long-term spine health.",
    },
    {
      title: "Orthopedic Physiotherapy",
      image: "/s3.jpg",
      description:
        "Specialized care for fractures, joint replacements, ligament injuries, and musculoskeletal conditions.",
    },
    {
      title: "Neurological Physiotherapy",
      image: "/h2.jpg",
      description:
        "Functional recovery for stroke, nerve injuries, Parkinson’s disease, and neurological disorders.",
    },
    {
      title: "Geriatric / Senior Care",
      image:
        "https://familytreecares.com/wp-content/uploads/2020/06/senior-care-backyard-smal.jpg",
      description:
        "Fall prevention, balance training, arthritis care, and mobility improvement for seniors.",
    },
    {
      title: "Women’s Health Physiotherapy",
      image: "/s5.jpg",
      description:
        "Pelvic floor rehab, postnatal recovery, and pregnancy-related pain management.",
    },
    {
      title: "Functional Training & Movement Optimization",
      image: "/s6.jpg",
      description:
        "Strength, balance, and coordination training for real-life movement efficiency.",
    },
    {
      title: "Ergonomic & Workplace Assessment",
      image: "/s7.jpg",
      description:
        "Workspace optimization and posture correction to prevent work-related pain.",
    },
  ];

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
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Expert physiotherapy care focused on recovery, mobility, and
            long-term results — personalized for every patient.
          </motion.p>
        </motion.div>
      </section>

      {/* Services */}
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
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8 },
                    },
                  }}
                  className={`relative h-96 ${
                    idx % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover border border-border"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={itemVariants}
                  className={idx % 2 === 1 ? "md:order-1" : ""}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  <Link href={WHATSAPP_LINK} target="_blank">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(45,138,143,0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-primary text-white font-bold flex items-center gap-2"
                    >
                      Book on WhatsApp <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Recovery?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg mb-8 opacity-90">
            Chat directly with our physiotherapists on WhatsApp.
          </motion.p>

          <Link href={WHATSAPP_LINK} target="_blank">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-primary font-bold text-lg flex items-center gap-2 mx-auto"
            >
              Chat on WhatsApp <ArrowRight size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
