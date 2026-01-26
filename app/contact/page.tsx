"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <ScrollReveal className="border-b border-border/40 bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">Contact Us</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Get in touch with the RoboGenAI team for collaborations, inquiries, or media requests
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Content */}
        <ScrollReveal className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-left text-2xl font-bold">Visit Us</h2>
            <div className="grid gap-8 lg:grid-cols-2">

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Email</div>
                        <a
                          href="mailto:robogenku@gmail.com"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          robogenku@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <div className="text-sm font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          Khalifa University
                          <br />
                          P.O. Box 127788
                          <br />
                          Abu Dhabi, UAE
                        </div>
                      </div>
                    </div>                    
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-primary/10">
                  <CardHeader>
                    <CardTitle>Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Interested in collaborating on underwater robotics research? We welcome partnerships with academic
                      institutions, research centers, and industry.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-secondary/15">
                  <CardHeader>
                    <CardTitle>Media Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For press and media inquiries, please contact our communications team at media@robogenai.eu
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="overflow-hidden border-border/50">
                <div className="relative aspect-video w-full h-full bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.098707658264!2d54.39232851157072!3d24.44736046157114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e686120c31b23%3A0x5d25df2e9ffa142e!2sKhalifa%20University!5e0!3m2!1sen!2sae!4v1768886564032!5m2!1sen!2sae"
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Project Location Map"
                  />
                </div>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}
