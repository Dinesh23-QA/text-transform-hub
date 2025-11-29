import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Trash2, Type } from "lucide-react";
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
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    setCharCount(text.length);
    setWordCount(text.trim() === "" ? 0 : text.trim().split(/\s+/).length);
  }, [text]);

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
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    });
  };

  const clearText = () => {
    setText("");
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
      title: "1. UPPER CASE — The Shouting Giant",
      subtitle: "Texty spoke very loudly.",
      description: "Converts every letter into BIG letters.",
      example: { input: "hello world", output: "HELLO WORLD" },
    },
    {
      title: "2. lower case — The Whispering Elf",
      subtitle: "Texty spoke very quietly.",
      description: "Makes every letter small.",
      example: { input: "Hello World", output: "hello world" },
    },
    {
      title: "3. Title Case — The Fancy Prince",
      subtitle: "Texty dressed up and made each word look special.",
      description: "Capitalizes the first letter of every word.",
      example: { input: "hello world example", output: "Hello World Example" },
    },
    {
      title: "4. CamelCase — The Coding Ninja",
      subtitle: "Texty put the words together and made each new word start big.",
      description: "Joins all words with no spaces; every new word starts with a capital letter.",
      example: { input: "hello world example", output: "HelloWorldExample" },
    },
    {
      title: "5. lowerCamelCase — The Baby Ninja",
      subtitle: "Same as the Coding Ninja, but starts small.",
      description: "First word starts with lowercase, next words start with uppercase.",
      example: { input: "hello world example", output: "helloWorldExample" },
    },
    {
      title: "6. snake_case — The Sneaky Snake",
      subtitle: "Texty crawled on the ground and used underscores.",
      description: "Makes all letters lowercase and uses underscores between words.",
      example: { input: "hello world example", output: "hello_world_example" },
    },
    {
      title: "7. SCREAMING_SNAKE_CASE — The Angry Snake",
      subtitle: "Same as snake case, but shouting!",
      description: "Uppercase letters with underscores.",
      example: { input: "hello world example", output: "HELLO_WORLD_EXAMPLE" },
    },
    {
      title: "8. kebab-case — The Chef's Recipe",
      subtitle: "Texty used hyphens like ingredients in a list.",
      description: "Lowercase letters with hyphens between words.",
      example: { input: "hello world example", output: "hello-world-example" },
    },
    {
      title: "9. SCREAMING-KEBAB-CASE — The Loud Chef",
      subtitle: "The chef shouted the recipe!",
      description: "Uppercase letters with hyphens.",
      example: { input: "hello world example", output: "HELLO-WORLD-EXAMPLE" },
    },
    {
      title: "10. Sentence case — The School Teacher",
      subtitle: "Texty spoke like a normal sentence.",
      description: "Only the first word starts with a capital letter.",
      example: { input: "hello world example", output: "Hello world example" },
    },
    {
      title: "11. ConstantCase — The Wise Old Wizard",
      subtitle: "Texty looked like a magical constant that never changes.",
      description: "Same as SCREAMING_SNAKE_CASE — uppercase with underscores.",
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

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-9">
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
                  onChange={(e) => setText(e.target.value)}
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

          {/* Ad Spaces */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="shadow-medium border-border/50">
              <CardContent className="p-6">
                <div className="bg-muted rounded-lg h-[250px] flex items-center justify-center border-2 border-dashed border-border">
                  <p className="text-muted-foreground text-sm font-medium">Ad Space 1</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium border-border/50">
              <CardContent className="p-6">
                <div className="bg-muted rounded-lg h-[250px] flex items-center justify-center border-2 border-dashed border-border">
                  <p className="text-muted-foreground text-sm font-medium">Ad Space 2</p>
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

        {/* Bottom Ad Space */}
        <Card className="shadow-medium border-border/50 mt-12">
          <CardContent className="p-6">
            <div className="bg-muted rounded-lg h-[120px] flex items-center justify-center border-2 border-dashed border-border">
              <p className="text-muted-foreground text-sm font-medium">Bottom Ad Space</p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Text Case Converter. Transform your text with ease.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
