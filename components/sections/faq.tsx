"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"
import { Input } from "../ui/input"

const faqs = [
  {
    question: "What is SaaSify and how does it work?",
    answer: "SaaSify is an all-in-one platform that helps businesses automate their operations, analyze data, and scale efficiently. It combines AI-powered analytics, team collaboration tools, and enterprise-grade security in one comprehensive solution. The platform is designed to grow with your business, from startup to enterprise.",
  },
  {
    question: "How much does SaaSify cost?",
    answer: "We offer three pricing tiers: Starter ($29/month), Professional ($99/month), and Enterprise ($299/month). All plans include a 14-day free trial, and annual plans come with a 20% discount. You can upgrade, downgrade, or cancel at any time with no long-term contracts.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial on all plans with full access to all features. No credit card required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including email support for all plans, priority support for Professional and Enterprise plans, and 24/7 phone support for Enterprise customers. We also offer dedicated account managers for Enterprise clients.",
  },
  {
    question: "Can I integrate SaaSify with my existing tools?",
    answer: "Absolutely! SaaSify offers extensive integration capabilities with popular tools like Slack, Zapier, Salesforce, HubSpot, and many more. We also provide a robust API for custom integrations. Our Professional and Enterprise plans include advanced integration features.",
  },
  {
    question: "How secure is my data on SaaSify?",
    answer: "Security is our top priority. We use bank-level encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. All data is encrypted in transit and at rest, and we maintain strict access controls and monitoring.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees or penalties. You'll continue to have access to your account until the end of your current billing period.",
  },
  {
    question: "Do you offer custom solutions for enterprise clients?",
    answer: "Yes! Our Enterprise plan includes custom solutions, dedicated account management, SLA guarantees, and tailored features to meet your specific business requirements. Contact our sales team to discuss your needs.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Can't find the answer you're looking for? Reach out to our customer support team.
          </motion.p>
        </div>

        {/* Search */}
        <motion.div
          className="mx-auto mt-12 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="mb-6 text-primary-100">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl">
                Contact support
              </button>
              <button className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-white/10">
                Schedule a call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}