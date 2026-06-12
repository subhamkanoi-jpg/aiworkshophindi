import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe,
  Sparkles,
  Users,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Rocket,
  MessageCircle,
  Mail,
  Palette,
  Server,
  BadgeCheck,
  Menu,
  X,
  Linkedin,

} from "lucide-react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    const message = `Hi! Main 28 June 2026 ko The AI Workshop ke liye register karna chahta/chahti hoon.%0A%0A*Naam:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}`;
    window.open(`https://wa.me/919830715557?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const workshopTopics = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Domain Kharidna",
      desc: "Apne brand ya business ke liye perfect domain name choose karna aur kharidna seekhiye.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Vibe Coding se Website Banana",
      desc: "AI-powered vibe coding se ek beautiful website design kijiye — traditional coding ki koi zaroorat nahi.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Vercel par Free Hosting",
      desc: "Apni website Vercel ke powerful platform se internet par bilkul free mein deploy kijiye.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Going Live",
      desc: "Apna domain connect kijiye, deploy dabaiye, aur dekhiye apni site puri duniya ke liye live hote hue.",
    },
  ];

  const whoIsThisFor = [
    "Chhote business owners jo online presence banana chahte hain",
    "Freelancers jo apna portfolio bana rahe hain",
    "Students jo AI aur web tech explore kar rahe hain",
    "Creatives & artists jo apna kaam showcase karna chahte hain",
    "Koi bhi jise AI ke baare mein curiosity hai — tech background ki zaroorat nahi",
  ];

  const whatYouGet = [
    "Hands-on, instructor-led workshop",
    "Khud banayi hui live website ke saath ghar jaayein",
    "Printed cheat sheets & resources",
    "Workshop ke baad WhatsApp support group",
    "Certificate of completion",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">The AI Workshop</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Humare Baare Mein</button>
              <button onClick={() => scrollTo("workshop")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Workshop</button>
              <button onClick={() => scrollTo("team")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Hosts se Miliye</button>
              <button onClick={() => scrollTo("faq")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</button>
              <Button onClick={() => scrollTo("register")} size="sm">
                Humare Saath Seekhiye <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <button onClick={() => scrollTo("about")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2">Humare Baare Mein</button>
              <button onClick={() => scrollTo("workshop")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2">Workshop</button>
              <button onClick={() => scrollTo("team")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2">Hosts se Miliye</button>
              <button onClick={() => scrollTo("faq")} className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2">FAQ</button>
              <Button onClick={() => scrollTo("register")} size="sm" className="w-full">
                Humare Saath Seekhiye <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8">
              <MapPin className="h-4 w-4" />
              Kolkata mein Offline Workshop
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              AI hai{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sabke Liye
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Humara maanna hai ki AI ki samajh sirf engineers aur coders tak simit nahi rehni chahiye —
              yeh har kisi ka haq hai. Isi soch ke saath hum Kolkata mein hands-on workshops karte hain,
              khaas un logon ke liye jinka <strong className="text-foreground">koi technical background nahi</strong> hai.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => scrollTo("register")} className="text-base px-8 py-6">
                Workshop ke liye Register Karein <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("workshop")} className="text-base px-8 py-6">
                Dekhiye Aap Kya Seekhenge
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>28 June 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>3 Ghante</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Batch Size: 20</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              AI ko Sabke Liye Accessible Banana
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hum koi badi edtech company nahi hain. Hum Kolkata ke log hain, ek simple si soch ke saath:
              AI ki samajh sirf tech walon tak nahi rukni chahiye. Apne level par, ek-ek workshop karke,
              hum yahi badlav laane ki koshish kar rahe hain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Non-Techies ke Liye",
                desc: "Koi coding prerequisite nahi. Agar aap WhatsApp use kar sakte hain, toh yeh bhi seekh sakte hain.",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Karke Seekhiye",
                desc: "Har workshop hands-on hai. Aap kuch real banakar hi ghar jaate hain.",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Offline & In-Person",
                desc: "Real human connection. Aise instructors ke saath face-to-face seekhiye jo genuinely care karte hain.",
              },
            ].map((item, i) => (
              <Card key={i} className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 border-y border-border bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-10 tracking-wide uppercase">
            AI Tools jin par hum Trust karte hain & Sikhate hain
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {/* ChatGPT */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#10a37f]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#10a37f"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">ChatGPT</span>
            </div>

            {/* Gemini */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4285f4]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#4285f4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Gemini</span>
            </div>

            {/* Claude */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d97757]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#d97757"><circle cx="12" cy="12" r="10"/><path d="M8 12l2-6 2 6m-3.5-2h3" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Claude</span>
            </div>

            {/* Vercel */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 1L24 22H0z"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Vercel</span>
            </div>

            {/* Cursor */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c3aed]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#7c3aed"><path d="M5.5 3l13 9-13 9V3z"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Cursor</span>
            </div>

            {/* Copilot */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0078d4]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0078d4"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 014 1.5V8h-2v1h2v2h1v2h-1v2h-2v1h2v2.5A8 8 0 0112 20a8 8 0 01-4-1V17h2v-1H8v-2H7v-2h1V10h2V9H8V5.5A8 8 0 0112 4z"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Copilot</span>
            </div>

            {/* Midjourney */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d47a1]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0d47a1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Midjourney</span>
            </div>

            {/* Llama */}
            <div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0668E1]/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0668E1"><circle cx="9" cy="7" r="2"/><circle cx="15" cy="7" r="2"/><path d="M12 12c-4 0-7 2-7 5v2h14v-2c0-3-3-5-7-5z"/></svg>
              </div>
              <span className="text-base font-semibold text-foreground">Llama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshop" className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              <Rocket className="h-4 w-4" />
              Workshop #1
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Apni Website Banayein & Host Karein
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Zero se internet par live website tak — sirf 3 ghante mein. Koi coding experience ki zaroorat nahi.
            </p>
          </div>

          {/* Workshop Details Card */}
          <Card className="mb-12 overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Aap Kya Seekhenge</h3>
                  <div className="space-y-6">
                    {workshopTopics.map((topic, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {topic.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{topic.title}</h4>
                          <p className="text-sm text-muted-foreground mt-0.5">{topic.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-primary/5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Workshop Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Sunday, 28 June 2026</p>
                          <p className="text-sm text-muted-foreground">Subah ka session</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">3 Ghante</p>
                          <p className="text-sm text-muted-foreground">Hands-on training</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Kolkata</p>
                          <p className="text-sm text-muted-foreground">Venue details registration par milengi</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Batch Size: 20</p>
                          <p className="text-sm text-muted-foreground">Hum jaan-bujhkar sirf 20 logon ka batch rakhte hain, taaki har insaan par poora dhyaan de sakein</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => scrollTo("register")} className="mt-8 w-full" size="lg">
                    Register Karein <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Who is this for + What you get */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Yeh Kiske Liye Hai?</h3>
                <ul className="space-y-3">
                  {whoIsThisFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Aapko Kya Milega</h3>
                <ul className="space-y-3">
                  {whatYouGet.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Apne Workshop Hosts se Miliye
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Teen bhai jinka maanna hai ki AI sabke liye hona chahiye — sirf engineers ke liye nahi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Subham */}
            <Card className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-full aspect-square overflow-hidden bg-muted">
                <img
                  src="/subham.png"
                  alt="Subham Kanoi"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-5 pb-6 px-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">Subham Kanoi</h3>
                <p className="text-sm font-medium text-primary mt-1">The Instigator</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Xavier's grad aur Urban Rasoi ke founder — Kolkata ka apna cloud kitchen for gourmet house parties aur B2B corporate catering. Woh non-techie jisne pure FOMO ke chalte yeh sab shuru kiya. Agar The AI Workshop ka koi pehla beta tester hai, toh woh yahi hain.
                </p>
                <a
                  href="https://www.linkedin.com/in/subhamkanoi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>

            {/* Yogesh */}
            <Card className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-full aspect-square overflow-hidden bg-muted">
                <img
                  src="/yogesh.png"
                  alt="Yogesh Kanoi"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-5 pb-6 px-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">Yogesh Kanoi</h3>
                <p className="text-sm font-medium text-primary mt-1">The Backbone</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  LTI mein AI/ML engineer, 2020 se deep learning ka half-decade ka experience. Woh architect hain — jo "kya hum yeh kar sakte hain?" ko ek working system mein badal dete hain. Har workshop ka blueprint pehle unhi se hokar guzarta hai.
                </p>
                <a
                  href="https://www.linkedin.com/in/yogesh-kanoi-37219a63/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>

            {/* Neeraj */}
            <Card className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-full aspect-square overflow-hidden bg-muted">
                <img
                  src="/neeraj.png"
                  alt="Neeraj Kanoi"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-5 pb-6 px-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">Neeraj Kanoi</h3>
                <p className="text-sm font-medium text-primary mt-1">The Growth Guy</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Bangalore ka techie jisne safe IT job chhodkar Wokelo AI naam ke AI startup mein Growth Lead ka role choose kiya. Woh jaante hain ki zero se scale tak jaane mein kya lagta hai — aur wahi energy yahan la rahe hain.
                </p>
                <a
                  href="https://www.linkedin.com/in/neeraj-kanoi-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sawaal hain? Humare paas jawaab hain.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Kya mujhe coding experience chahiye?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Bilkul nahi. Yeh workshop shuruaat se hi un logon ke liye banayi gayi hai jinka zero technical background hai. Agar aap browser use kar sakte hain aur type kar sakte hain, toh aap humare saath website bana sakte hain. Yahi toh poori baat hai.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Mujhe kya laana hoga?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Bas apna laptop aur seekhne ki willingness. Baaki sab kuch hum guide karenge — free tools set up karne se lekar aapki site deploy karne tak. Pehle se koi software install karne ki zaroorat nahi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Kya workshop ke end tak meri website sach mein live hogi?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Haan! 3 ghante poore hone tak aapki khud banayi hui real website internet par live hogi. Aap kuch tangible lekar jaayenge — sirf theory nahi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Kya hosting sach mein free hai?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Haan. Hum aapko Vercel ke free tier par deploy karna sikhayenge, jo personal sites, portfolios aur small business pages ke liye more than enough hai. Koi hidden costs nahi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Workshop ke baad help chahiye ho toh?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Aapko humare post-workshop WhatsApp support group ka access milega, jahan aap kabhi bhi sawaal pooch sakte hain. Hum ek community bana rahe hain, sirf ek one-off event nahi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Kolkata mein workshop kahan hogi?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Venue details registered participants ke saath date ke kareeb share ki jayengi. Rest assured, yeh Kolkata ki ek comfortable, well-connected location hogi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                Kya iske baad aur workshops hongi?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                Haan, yeh humare liye ek lambi journey ki pehli seedhi hai. Hum alag-alag AI topics par workshops ki series plan kar rahe hain — sab non-technical logon ke liye. Yeh humara long-term mission hai, ek one-off event nahi. Jo log judte hain, unke saath hum aage bhi seekhte-sikhate rahenge.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-12 bg-[#25D366]/5 border-y border-[#25D366]/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-foreground">Humari WhatsApp Community Join Kijiye</h3>
              <p className="text-sm text-muted-foreground">Workshops, tips aur AI ki kaam ki baatein. Koi shor nahi — bas ek dusre se seekhne wali community.</p>
            </div>
            <a
              href="https://chat.whatsapp.com/DNIePdAGNfL2cs1LDIs0DG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors"
            >
              Join Karein <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Humare Saath Seekhne Aaiye
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hum batch jaan-bujhkar chhota rakhte hain, taaki har seekhne wale ko poora dhyaan mil sake.
              Aap aana chahte hain, toh bas apna naam bhej dijiye — baaki hum sambhal lenge.
            </p>

            <Card className="mt-10">
              <CardContent className="pt-8 pb-6 px-6">
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Bas Ek Step Baaki!</h3>
                    <p className="text-muted-foreground">
                      Aapki details ke saath ek WhatsApp chat khul gayi hai. Bas send dabaiye — hum aapki seat confirm kar denge!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-foreground">Poora Naam</label>
                      <Input
                        placeholder="Apna naam likhiye"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full mt-2">
                      Workshop ke liye Register Karein <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Register karne par aapko workshop updates milenge. Spam kabhi nahi.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-28 sm:pb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:pr-20">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">The AI Workshop</span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="mailto:theaiworkshop.in@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                theaiworkshop.in@gmail.com
              </a>
              <a
                href="https://chat.whatsapp.com/DNIePdAGNfL2cs1LDIs0DG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#25D366] hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                Community
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://chat.whatsapp.com/DNIePdAGNfL2cs1LDIs0DG"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe57] hover:scale-110 transition-all duration-200"
        aria-label="WhatsApp Community Join Kijiye"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.056 31.17l5.998-1.924C9.592 30.924 12.66 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.314 22.61c-.39 1.1-1.932 2.014-3.168 2.28-.844.18-1.948.324-5.662-1.216-4.754-1.97-7.814-6.788-8.054-7.104-.232-.316-1.932-2.574-1.932-4.908s1.222-3.482 1.654-3.956c.432-.474.944-.592 1.26-.592.316 0 .632.004.908.016.292.014.684-.112 1.068.816.39.94 1.33 3.248 1.448 3.482.118.236.196.512.04.828-.158.316-.236.512-.472.79-.236.276-.498.618-.71.828-.236.236-.482.49-.206.962.276.474 1.226 2.024 2.632 3.278 1.81 1.612 3.336 2.112 3.81 2.35.474.236.75.196 1.028-.118.276-.316 1.186-1.382 1.502-1.856.316-.474.632-.394 1.068-.236.434.158 2.754 1.3 3.228 1.536.474.236.79.354.908.55.118.196.118 1.126-.272 2.226z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
