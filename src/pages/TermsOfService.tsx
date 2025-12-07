import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: December 2025</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="shadow-medium border-border/50">
          <CardContent className="pt-6 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of the Text Case Converter website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">1. Use License</h2>
              <p className="text-muted-foreground mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on Text Case Converter for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on Text Case Converter are provided on an 'as is' basis. Text Case Converter makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Text Case Converter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Text Case Converter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on Text Case Converter could include technical, typographical, or photographic errors. Text Case Converter does not warrant that any of the materials on its website are accurate, complete, or current. Text Case Converter may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Links</h2>
              <p className="text-muted-foreground">
                Text Case Converter has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Text Case Converter of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Modifications</h2>
              <p className="text-muted-foreground">
                Text Case Converter may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">7. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which the service provider operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-3">
                You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.
              </p>
              <p className="text-muted-foreground">
                Prohibited behavior includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Harassing or causing discomfort or inconvenience to any person</li>
                <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                <li>Attempting to gain unauthorized access to any portion of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">9. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us through our contact page.
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

export default TermsOfService;
