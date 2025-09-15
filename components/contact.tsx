"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-12 text-opacity-100"
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-opacity-80 mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out to me for any questions or opportunities.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-opacity-100">Email</h3>
                </div>
                <p className="text-opacity-80">rifat.fauzan8@gmail.com</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-opacity-100">Phone</h3>
                </div>
                <p className="text-opacity-80">+62 878-7508-7770</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="glass-card hover-glow transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-opacity-100">Location</h3>
                </div>
                <p className="text-opacity-80">Jakarta, Indonesia</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
