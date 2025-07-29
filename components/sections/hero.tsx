"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react"
import { GradientButton } from "../ui/gradient-button"
import { GlassCard } from "../ui/glass-card"

const stats = [
  { label: "Active Teams", value: "50K+", icon: Users },
  { label: "Uptime", value: "99.9%", icon: Zap },
  { label: "Rating", value: "4.9/5", icon: Star },
]

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Dynamic Background Effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm">Trusted by 50,000+ teams worldwide</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Workflow
              </span>
              <br />
              Into Pure Magic ✨
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI-powered workspace that adapts to how your team actually works.
              Boost productivity by 300% with intelligent automation and seamless collaboration.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GradientButton variant="primary" className="text-lg px-8 py-4">
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </GradientButton>
              <GradientButton variant="secondary" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" /> Watch Demo
              </GradientButton>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-green-400" />
                50k+ teams
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                4.9/5 rating
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                30% faster
              </div>
            </motion.div>
          </div>

          {/* 3D Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-8 transform hover:rotate-1 transition-transform duration-500">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Project Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">Website Redesign</span>
                    <span className="text-xs bg-green-500 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">Mobile App Launch</span>
                    <span className="text-xs bg-blue-500 px-2 py-1 rounded">Planning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm">AI Integration</span>
                    <span className="text-xs bg-orange-500 px-2 py-1 rounded">Review</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span>Team Productivity</span>
                    <span className="text-green-400">+23%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}