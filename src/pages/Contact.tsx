import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
// Get this from https://dashboard.emailjs.com/admin/account
const EMAILJS_PUBLIC_KEY = "OH3j7cUbWaF65kKX3";
const EMAILJS_SERVICE_ID = "service_ilo0gzn";
const EMAILJS_TEMPLATE_ID = "template_w5988fw";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize EmailJS
    if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY_HERE") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY_HERE") {
        toast({
          title: "Info",
          description: "Email service not configured. Contact form data logged to console.",
        });
        console.log("Form data:", formData);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground mt-2">Get in touch with our team</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-medium border-border/50">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>We'll respond as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      support@textmagictool.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground text-sm">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Online Service
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">FAQs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Is my data secure?</h4>
                  <p className="text-muted-foreground">
                    Yes, all text conversions are processed locally in your browser. We don't store any data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Is the tool free?</h4>
                  <p className="text-muted-foreground">
                    Yes, Text Case Converter is completely free to use!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Do you need signup?</h4>
                  <p className="text-muted-foreground">
                    No signup required. Start converting text instantly!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Text Case Converter. All rights reserved.</p>
            <div className="flex gap-4 text-xs">
              <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
