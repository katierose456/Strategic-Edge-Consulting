"use client"

import { useState } from "react"
import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(417) 217-5633",
    href: "tel:+14172175633",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "400 N Main St #101, Rolla, MO 65401",
    subtext: "Located in: Phelps County Casa",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Opens 9 AM Tuesday",
  },
]

const helpOptions = [
  "Business Plan",
  "Market Research",
  "Marketing Strategy",
  "Advertising & Algorithms",
  "Branding Support",
  "Other",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    help: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will be in touch soon.")
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            {"Let's Build Your Next Move"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded bg-secondary flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                    {info.subtext && (
                      <p className="text-sm text-muted-foreground mt-1">{info.subtext}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Business Name</Label>
                <Input
                  id="business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="help">What do you need help with?</Label>
                <Select
                  value={formData.help}
                  onValueChange={(value) => setFormData({ ...formData, help: value })}
                >
                  <SelectTrigger id="help">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {helpOptions.map((option) => (
                      <SelectItem key={option} value={option.toLowerCase()}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your business and what you're looking to achieve..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Request a Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
