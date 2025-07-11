"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-green-600/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600/10 to-green-400/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form
            action="https://formsubmit.co/bae2064e95b84f191637791a97d9ff0b "
            method="POST"
            className="space-y-6"
          >
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-green-600 focus:ring-green-400/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-green-600 focus:ring-green-400/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-green-600 focus:ring-green-400/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-green-600 focus:ring-green-400/20"
              />
            </div>

            {/* Hidden options for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-400 hover:to-green-600 border-0"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
