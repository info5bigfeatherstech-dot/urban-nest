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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrandLogo } from "@/components/common/BrandLogo";
import { ShieldCheck } from "lucide-react";

export function AuthDialog() {
  const { isAuthModalOpen, setAuthModalOpen, authModalMode } = useUiStore();
  const [activeTab, setActiveTab] = useState<"login" | "signup">(authModalMode);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAuthModalOpen(false);
    }, 1200);
  };

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setAuthModalOpen}>
      <DialogContent className="sm:max-w-[420px] p-6">
        <DialogHeader className="items-center text-center space-y-2 pb-2">
          <BrandLogo />
          <DialogTitle className="text-xl font-bold">
            {activeTab === "login" ? "Welcome back" : "Join UrbanNest Realty"}
          </DialogTitle>
          <DialogDescription className="text-xs">
            Unlock verified owner numbers, save shortlists, and post free listings.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(val) => setActiveTab(val as "login" | "signup")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink">
                  Mobile Number / Email
                </label>
                <Input
                  placeholder="Enter 10-digit mobile or email"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink">
                  Password
                </label>
                <Input type="password" placeholder="••••••••" required />
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-1.5 text-muted cursor-pointer">
                  <input type="checkbox" className="rounded border-border text-primary" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

              <Button
                type="submit"
                variant="default"
                className="w-full h-11 font-semibold"
                disabled={submitted}
              >
                {submitted ? "Authenticating..." : "Continue with Mobile / OTP"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink">Full Name</label>
                <Input placeholder="e.g. Aditya Verma" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink">Mobile Number</label>
                <Input placeholder="+91 98765 43210" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink">I am a</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["Buyer", "Owner", "Agent"].map((role) => (
                    <label
                      key={role}
                      className="flex items-center justify-center p-2 rounded-lg border border-border cursor-pointer hover:bg-tint text-center font-medium"
                    >
                      <input type="radio" name="userRole" defaultChecked={role === "Buyer"} className="sr-only" />
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                variant="accent"
                className="w-full h-11 font-bold"
                disabled={submitted}
              >
                {submitted ? "Creating Profile..." : "Create Free Account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted pt-2 border-t border-border">
          <ShieldCheck className="h-4 w-4 text-success" />
          <span>Your information is protected with 256-bit encryption</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

