"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { GradientButton } from "../ui/gradient-button"
import { GlassCard } from "../ui/glass-card"
import { useState } from 'react';

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups",
    price: { monthly: 9, annual: 90 },
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic integrations",
      "Email support",
      "Mobile apps",
    ],
    popular: false,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: { monthly: 29, annual: 290 },
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced integrations",
      "Priority support",
      "Custom workflows",
      "Analytics dashboard",
    ],
    popular: true,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: { monthly: 99, annual: 990 },
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom integrations",
      "24/7 phone support",
      "Advanced security",
      "Dedicated success manager",
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-500",
  },
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="py-20 px-4 relative">
      {/* Dynamic Background Effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)`
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
            Choose Your Growth Plan
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Scale with confidence. Upgrade or downgrade at any time.
          </motion.p>

          <motion.div
            className="inline-flex items-center bg-white/10 rounded-full p-1 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual ? 'bg-white/20 text-white' : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isAnnual ? 'bg-white/20 text-white' : 'text-gray-400'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 px-2 py-1 rounded-full">Save 25%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 transform z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    <Star className="mr-1 h-3 w-3" />
                    Most Popular
                  </span>
                </motion.div>
              )}

              <GlassCard className={`p-8 text-center ${plan.popular ? 'ring-2 ring-orange-400/50 scale-105' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.2 + featureIndex * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <GradientButton
                  variant={plan.popular ? "accent" : "secondary"}
                  className="w-full"
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </GradientButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}