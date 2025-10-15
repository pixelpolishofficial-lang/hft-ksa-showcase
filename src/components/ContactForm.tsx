"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 lg:px-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block bg-mint/20 text-gray-900 dark:text-mint text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-mint/30"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight mb-6 text-gray-900 dark:text-gray-100"
          >
            Let's{" "}
            <span className="font-playfair italic font-normal text-[var(--color-mint)]">
              Connect
            </span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Ready to start your project? Get in touch and let's create something
            amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. We're here to
                answer your questions and discuss your project needs.
              </p>
            </div>

            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  Email
                </div>
                <a
                  href="mailto:hello@hft-ksa.com"
                  className="text-mint hover:underline"
                >
                  hello@hft-ksa.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  Phone
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-mint hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  Location
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Remote & On-site Available
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 dark:bg-gray-700 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-600"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-mint mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-mint transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-mint transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-mint transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-light-gray)] dark:border-[var(--color-dark-gray)] bg-white dark:bg-[var(--color-charcoal)] text-[var(--color-charcoal)] dark:text-[var(--color-off-white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mint)] transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}