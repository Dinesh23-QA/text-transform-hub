import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Trash2, Type, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type CaseType = 
  | "upper"
  | "lower"
  | "title"
  | "camel"
  | "lowerCamel"
  | "snake"
  | "screamingSnake"
  | "kebab"
  | "screamingKebab"
  | "sentence"
  | "constant";

const Index = () => {
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [hasConverted, setHasConverted] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Track visitor on component mount
    const visitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
    const newCount = visitCount + 1;
    localStorage.setItem("visitCount", newCount.toString());
    setVisitorCount(newCount);
  }, []);

  useEffect(() => {
    setCharCount(text.length);
    setWordCount(text.trim() === "" ? 0 : text.trim().split(/\s+/).length);
  }, [text]);

  const handleTextChange = (value: string) => {
    setText(value);
    setOriginalText(value);
    setHasConverted(false);
  };

  const convertCase = (type: CaseType) => {
    if (!text.trim()) return;

    let converted = text;
    
    switch (type) {
      case "upper":
        converted = text.toUpperCase();
        break;
      case "lower":
        converted = text.toLowerCase();
        break;
      case "title":
        converted = text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        break;
      case "camel":
        converted = text
          .toLowerCase()
          .split(/[\s_-]+/)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("");
        break;
      case "lowerCamel":
        converted = text
          .toLowerCase()
          .split(/[\s_-]+/)
          .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join("");
        break;
      case "snake":
        converted = text
          .trim()
          .toLowerCase()
          .replace(/[\s-]+/g, "_")
          .replace(/[^\w_]/g, "");
        break;
      case "screamingSnake":
        converted = text
          .trim()
          .toUpperCase()
          .replace(/[\s-]+/g, "_")
          .replace(/[^\w_]/g, "");
        break;
      case "kebab":
        converted = text
          .trim()
          .toLowerCase()
          .replace(/[\s_]+/g, "-")
          .replace(/[^\w-]/g, "");
        break;
      case "screamingKebab":
        converted = text
          .trim()
          .toUpperCase()
          .replace(/[\s_]+/g, "-")
          .replace(/[^\w-]/g, "");
        break;
      case "sentence":
        converted = text.toLowerCase().charAt(0).toUpperCase() + text.toLowerCase().slice(1);
        break;
      case "constant":
        converted = text
          .trim()
          .toUpperCase()
          .replace(/[\s-]+/g, "_")
          .replace(/[^\w_]/g, "");
        break;
    }
    
    setText(converted);
    setHasConverted(true);
  };

  const copyToClipboard = async () => {
    if (!text) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        toast({
          title: "Copied!",
          description: "Text copied to clipboard",
        });
        return;
      }

      // Fallback for older browsers: use execCommand
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast({
        title: "Copied!",
        description: "Text copied to clipboard",
      });
    } catch (error) {
      console.error("Copy failed:", error);
      toast({
        title: "Copy failed",
        description: "Unable to copy text to clipboard",
      });
    }
  };

  const clearText = () => {
    setText("");
    setOriginalText("");
    setHasConverted(false);
  };

  const revertText = () => {
    setText(originalText);
    setHasConverted(false);
    toast({
      title: "Reverted!",
      description: "Text reverted to original input",
    });
  };

  const caseButtons = [
    { label: "UPPER CASE", type: "upper" as CaseType },
    { label: "lower case", type: "lower" as CaseType },
    { label: "Title Case", type: "title" as CaseType },
    { label: "CamelCase", type: "camel" as CaseType },
    { label: "lowerCamelCase", type: "lowerCamel" as CaseType },
    { label: "snake_case", type: "snake" as CaseType },
    { label: "SCREAMING_SNAKE_CASE", type: "screamingSnake" as CaseType },
    { label: "kebab-case", type: "kebab" as CaseType },
    { label: "SCREAMING-KEBAB-CASE", type: "screamingKebab" as CaseType },
    { label: "Sentence case", type: "sentence" as CaseType },
    { label: "ConstantCase", type: "constant" as CaseType },
  ];

  const guides = [
    {
      title: "UPPER CASE Converter – Make All Letters Capital",
      subtitle: "Change your text to all capital letters easily.",
      description: "Paste your text, click 'UPPER CASE', and every letter will become a capital letter. This is great for headlines, titles, or making something stand out. No signup or download needed. Just copy your result and use it anywhere!",
      example: { input: "hello world", output: "HELLO WORLD" },
    },
    {
      title: "lower case Converter – Change All Letters to Small",
      subtitle: "Turn your text into all lowercase letters.",
      description: "Just paste your text and click 'lower case'. All capital letters will become small. This is perfect for emails, usernames, or making your writing look neat and simple. Copy the result and use it anywhere you want.",
      example: { input: "Hello World", output: "hello world" },
    },
    {
      title: "Title Case Converter – Capitalize Each Word Easily",
      subtitle: "Make every word start with a capital letter.",
      description: "Paste your text, click 'Title Case', and every word will start with a capital letter. Great for book titles, articles, or names. Simple and fast – copy your new text and use it anywhere!",
      example: { input: "hello world example", output: "Hello World Example" },
    },
    {
      title: "CamelCase Converter – Join Words with Capitals",
      subtitle: "Make each word start with a capital and remove spaces.",
      description: "Paste your text, click 'CamelCase', and all words will join together with each word starting with a capital letter. Perfect for programming, hashtags, or unique names. Copy and use your result instantly!",
      example: { input: "hello world example", output: "HelloWorldExample" },
    },
    {
      title: "lowerCamelCase Converter – Start Small, Then Capitalize",
      subtitle: "First word is small, next words start with a capital.",
      description: "Paste your text, click 'lowerCamelCase', and the first word will be lowercase, with each next word starting with a capital letter. Great for coding, app names, and more. Copy and use your new text right away!",
      example: { input: "hello world example", output: "helloWorldExample" },
    },
    {
      title: "snake_case Converter – Use Underscores for Spaces",
      subtitle: "All words are small and joined with underscores.",
      description: "Paste your text, click 'snake_case', and all spaces will become underscores. All letters will be lowercase. Perfect for Python, file names, and coding. Copy and use your result anywhere!",
      example: { input: "hello world example", output: "hello_world_example" },
    },
    {
      title: "SCREAMING_SNAKE_CASE Converter – All Caps with Underscores",
      subtitle: "Make every letter capital and join words with underscores.",
      description: "Paste your text, click 'SCREAMING_SNAKE_CASE', and all letters will be uppercase with words joined by underscores. Great for constants, coding, and settings. Copy and use your result instantly!",
      example: { input: "hello world example", output: "HELLO_WORLD_EXAMPLE" },
    },
    {
      title: "kebab-case Converter – Use Hyphens for Spaces",
      subtitle: "All words are small and joined with hyphens.",
      description: "Paste your text, click 'kebab-case', and all spaces will become hyphens. All letters will be lowercase. Perfect for URLs, CSS, and web projects. Copy and use your result anywhere!",
      example: { input: "hello world example", output: "hello-world-example" },
    },
    {
      title: "SCREAMING-KEBAB-CASE Converter – All Caps with Hyphens",
      subtitle: "Make every letter capital and join words with hyphens.",
      description: "Paste your text, click 'SCREAMING-KEBAB-CASE', and all letters will be uppercase with words joined by hyphens. Great for banners, labels, and web design. Copy and use your result instantly!",
      example: { input: "hello world example", output: "HELLO-WORLD-EXAMPLE" },
    },
    {
      title: "Sentence case Converter – Start with a Capital, Rest Small",
      subtitle: "Only the first word is capitalized, the rest are small.",
      description: "Paste your text, click 'Sentence case', and only the first word will start with a capital letter. The rest will be lowercase. Perfect for sentences, messages, and instructions. Copy and use your result anywhere!",
      example: { input: "hello world example", output: "Hello world example" },
    },
    {
      title: "ConstantCase Converter – All Caps with Underscores for Constants",
      subtitle: "Use for naming constants in code.",
      description: "Paste your text, click 'ConstantCase', and all letters will be uppercase with words joined by underscores. This is the standard for naming constants in programming. Copy and use your result in your code or anywhere you need!",
      example: { input: "hello world example", output: "HELLO_WORLD_EXAMPLE" },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-xl shadow-medium">
              <Type className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Text Case Converter
            </h1>
          </div>
          <p className="text-center text-muted-foreground mt-2 text-sm">
            Transform your text into any case format instantly
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div>
          {/* Main Content Area */}
          <div>
            {/* Text Input Card */}
            <Card className="shadow-medium border-border/50 mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Your Text</CardTitle>
                    <CardDescription>Type or paste your text below</CardDescription>
                  </div>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-secondary rounded-lg font-medium">
                      {charCount} chars
                    </span>
                    <span className="px-3 py-1 bg-secondary rounded-lg font-medium">
                      {wordCount} words
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={text}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Start typing or paste your text here..."
                  className="min-h-[300px] text-base resize-none shadow-soft border-input focus:border-primary transition-smooth font-mono"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="flex-1 shadow-soft hover:shadow-medium transition-smooth"
                    disabled={!text}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Text
                  </Button>
                  <Button
                    onClick={revertText}
                    variant="outline"
                    className="flex-1 shadow-soft hover:shadow-medium transition-smooth"
                    disabled={!hasConverted || !originalText}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Revert
                  </Button>
                  <Button
                    onClick={clearText}
                    variant="outline"
                    className="flex-1 shadow-soft hover:shadow-medium transition-smooth"
                    disabled={!text}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Text
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Buttons */}
            <Card className="shadow-medium border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Convert To</CardTitle>
                <CardDescription>Click any button to transform your text</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {caseButtons.map((button) => (
                    <Button
                      key={button.type}
                      onClick={() => convertCase(button.type)}
                      variant="outline"
                      className="h-auto py-4 px-4 text-sm font-semibold shadow-soft hover:shadow-medium hover:bg-primary hover:text-primary-foreground transition-smooth"
                      disabled={!text.trim()}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Text Transformation Guide */}
        <section className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Text Transformation Guide</h2>
            <p className="text-muted-foreground">Learn about each text case format</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="shadow-medium border-border/50 hover:shadow-strong transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription className="italic">{guide.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-foreground">{guide.description}</p>
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-2 border border-border/50">
                    <div className="text-sm">
                      <span className="font-semibold text-muted-foreground">Input:</span>
                      <code className="ml-2 text-foreground font-mono">{guide.example.input}</code>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-muted-foreground">Output:</span>
                      <code className="ml-2 text-primary font-mono font-bold">{guide.example.output}</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Text Case Converter. All rights reserved.</p>
            <p className="text-xs font-medium">
              👥 Total Visitors: <span className="text-primary font-bold">{visitorCount.toLocaleString()}</span>
            </p>
            <div className="flex gap-4 text-xs flex-wrap justify-center">
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

export default Index;
