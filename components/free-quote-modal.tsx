"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface FreeQuoteModalProps {
  buttonText?: string
  buttonVariant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  buttonSize?: "default" | "sm" | "lg" | "icon"
  className?: string
  buttonClassName?: string
  fullWidth?: boolean
}

export function FreeQuoteModal({
  buttonText = "Get a Free Quote",
  buttonVariant = "default",
  buttonSize = "default",
  className = "",
  buttonClassName = "",
  fullWidth = false,
}: FreeQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "1-3 months",
  })

  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, timeline: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    // Show success message or redirect
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
    setOpen(false) // Close the modal after submission
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={`${className} ${buttonClassName} ${fullWidth ? "w-full" : ""}`}
          style={{ opacity: 1 }} // Ensure button is always visible
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Free Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will provide you with a detailed project estimate within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType">Project Type</Label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="" disabled>
                Select a project type
              </option>
              <option value="structural">Structural Engineering</option>
              <option value="transportation">Transportation Engineering</option>
              <option value="geotechnical">Geotechnical Engineering</option>
              <option value="water">Water Resources Engineering</option>
              <option value="construction">Construction Management</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Please provide details about your project requirements..."
              value={formData.description}
              onChange={handleChange}
              className="min-h-[120px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget (Optional)</Label>
            <Input
              id="budget"
              name="budget"
              placeholder="$10,000 - $50,000"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label>Project Timeline</Label>
            <RadioGroup defaultValue="1-3 months" onValueChange={handleRadioChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Less than 1 month" id="less-than-1" />
                <Label htmlFor="less-than-1">Less than 1 month</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-3 months" id="1-3-months" />
                <Label htmlFor="1-3-months">1-3 months</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-6 months" id="3-6-months" />
                <Label htmlFor="3-6-months">3-6 months</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="6+ months" id="6-plus-months" />
                <Label htmlFor="6-plus-months">6+ months</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
