"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Shield,
  Zap,
  BarChart3,
  Users,
  Globe,
  Clock,
  Target,
  MessageSquare,
  Star
} from "lucide-react"
import { GlassCard } from "../ui/glass-card"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Intelligent workflows that learn from your patterns and automate repetitive tasks, saving hours every day.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Real-time Collaboration",
    description: "Seamless team communication with smart notifications and context-aware suggestions.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into team performance with predictive analytics and custom dashboards.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC2, GDPR, and industry standards.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Smart Team Management",
    description: "AI-driven team matching and workload optimization for maximum efficiency.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Star,
    title: "Custom Integrations",
    description: "Connect with 1200+ tools through our powerful API and no-code integration builder.",
    gradient: "from-teal-500 to-green-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section className="py-20 px-4 relative">
      {/* Dynamic Background Effect */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 90% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Teams Choose{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FlowAI
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of productivity with AI-powered features that understand your workflow
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-8 text-center group">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to get started?
            </h3>
            <p className="mb-6 text-gray-300">
              Join thousands of businesses already using our platform to grow and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}