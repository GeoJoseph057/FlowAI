"use client"

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GradientButton } from '../ui/gradient-button';

export function Contact() {
  return (
    <section className="py-20 px-4 relative">
      {/* Dynamic Background Effect */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)
          `
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Workflow?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join thousands of teams already using FlowAI to boost their productivity.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GradientButton variant="accent" className="text-lg px-8 py-4">
            Start Your Free Trial
          </GradientButton>
          <GradientButton variant="secondary" className="text-lg px-8 py-4">
            Schedule a Demo
          </GradientButton>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400">hello@flowai.com</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-400">San Francisco, CA</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}