import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: December 2025</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="shadow-medium border-border/50">
          <CardContent className="pt-6 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Text Case Converter ("we," "us," "our," or "Company"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Local Storage Data</h3>
                  <p className="text-muted-foreground">
                    We store visitor count information in your browser's local storage. This data is not transmitted to our servers and is used only to enhance your user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Text Input</h3>
                  <p className="text-muted-foreground">
                    The text you convert is processed entirely on your device. We do not store, transmit, or collect any of the text content you enter.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analytics</h3>
                  <p className="text-muted-foreground">
                    We may use analytics services to understand how users interact with our website. This may include anonymous usage data, browser type, and device information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and improve our services</li>
                <li>To understand user behavior and preferences</li>
                <li>To optimize website performance</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Third-Party Services</h2>
              <p className="text-muted-foreground">
                Our website may use third-party services such as analytics providers and CDN services. These third parties may collect information about your usage according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use local storage to enhance your experience. You can clear this data through your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Text Case Converter. All rights reserved.</p>
            <div className="flex gap-4 text-xs">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span>|</span>
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

export default PrivacyPolicy;
