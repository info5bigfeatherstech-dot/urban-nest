"use client";

import React, { useState } from "react";
import { useUiStore } from "@/store/useUiStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Shield } from "lucide-react";

export function ContactModal() {
  const { contactModalProject, closeContactModal } = useUiStore();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeContactModal();
    }, 2000);
  };

  return (
    <Dialog
      open={!!contactModalProject}
      onOpenChange={(open) => !open && closeContactModal()}
    >
      <DialogContent className="sm:max-w-[420px] p-6">
        <DialogHeader className="space-y-1.5">
          <DialogTitle className="text-xl font-bold">
            Get Instant Callback
          </DialogTitle>
          <DialogDescription className="text-xs">
            Directly connect with{" "}
            <strong className="text-ink">
              {contactModalProject?.builderName}
            </strong>{" "}
            for{" "}
            <strong className="text-primary font-semibold">
              {contactModalProject?.name}
            </strong>
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
            <div className="h-12 w-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="font-heading text-lg font-bold text-ink">
              Inquiry Sent Successfully!
            </h4>
            <p className="text-xs text-muted max-w-xs">
              The builder relationship manager will reach out to you within 15 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink">Your Name</label>
              <Input
                placeholder="Aditya Sharma"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink">
                Phone Number
              </label>
              <Input
                placeholder="+91 98765 43210"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-ink">
                Preferred Site Visit Time
              </label>
              <select className="flex h-11 w-full rounded-lg border border-border bg-white px-3 py-2 text-xs text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>This Weekend (Saturday)</option>
                <option>This Weekend (Sunday)</option>
                <option>Within 2-3 Days</option>
                <option>Virtual Video Tour First</option>
              </select>
            </div>

            <Button
              type="submit"
              variant="accent"
              className="w-full h-11 font-bold"
            >
              Request Free Callback & Brochure
            </Button>

            <div className="flex items-center gap-1.5 text-[11px] text-muted pt-1 justify-center">
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span>Zero-Spam Assurance: Number shared only with this builder</span>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

