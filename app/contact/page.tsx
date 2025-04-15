"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  console.log("Details",formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      const data = await response.json()
  
      if (response.ok) {
        console.log("✅ Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        console.log("❌ Failed to send message: " + data.message)
      }
    } catch (error) {
      console.error("Submission error:", error)
      console.log("❌ An error occurred while sending your message.")
    }

    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
    // You could also add a success message here
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32"
                />
              </div>
              <Button type="submit" className="w-full bg-[#b39b7d] hover:bg-[#a08a6c] text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
            <div className="space-y-6">
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#b39b7d] mr-4" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-gray-600">+91 98247 54224</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#b39b7d] mr-4" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-600">fusionartswork@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

