"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "SaaSify has transformed how we operate. The AI-powered insights have helped us make data-driven decisions that increased our revenue by 40% in just 6 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The platform's scalability and performance are outstanding. We've grown from 10 to 500 users without any issues. The support team is incredibly responsive.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The analytics and reporting features are game-changing. We can now track every aspect of our campaigns and optimize in real-time. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "As a startup, we needed something that could grow with us. SaaSify delivered exactly that. The pricing is fair and the features are exactly what we needed.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "ScaleUp Inc",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "The team collaboration features have made our remote work seamless. The security features give us peace of mind, and the UI is intuitive for everyone.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "VP Engineering",
    company: "DataFlow",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The API integration was smooth and the documentation is excellent. We've been able to customize everything to our needs. The performance is consistently excellent.",
    rating: 5,
  },
]

const companies = [
  "TechFlow", "InnovateCorp", "GrowthLab", "StartupXYZ", "ScaleUp Inc", "DataFlow",
  "CloudTech", "DigitalFirst", "FutureCorp", "SmartScale", "NextGen", "EliteTech"
]

const stats = [
  { label: "Customer Satisfaction", value: "98%", suffix: "" },
  { label: "Average Response Time", value: "<2", suffix: " hours" },
  { label: "Uptime Guarantee", value: "99.9%", suffix: "" },
  { label: "Countries Served", value: "50+", suffix: "" },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Loved by businesses worldwide
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of satisfied customers who trust SaaSify to power their business growth.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
              >
                <div className="h-8 w-24 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    {company}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary-600 mb-4" />
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to join them?
            </h3>
            <p className="mb-6 text-primary-100">
              Start your free trial today and see why thousands of businesses choose SaaSify.
            </p>
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl">
              Start free trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}