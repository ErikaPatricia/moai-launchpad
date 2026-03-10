import logoMoai from "@/assets/logo-moai-2026.png";
import logoEditora from "@/assets/logo-moai-editora.png";
import logoWeGo from "@/assets/logo-we-go.png";
import logoFullService from "@/assets/logo-full-service.png";
import { MessageCircle, MapPin } from "lucide-react";

const businessUnits = [
  {
    logo: logoEditora,
    title: "Moai Editora",
    description: "Livros, revistas e catálogos com qualidade editorial que transforma ideias em publicações memoráveis.",
    delay: "animate-delay-200",
  },
  {
    logo: logoWeGo,
    title: "We.Go",
    description: "Programa de implementação de estratégias digitais e social media para acelerar sua presença online.",
    delay: "animate-delay-400",
  },
  {
    logo: logoFullService,
    title: "Full Service",
    description: "Serviços completos de comunicação, branding e estratégias de marca para posicionar seu negócio.",
    delay: "animate-delay-600",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Ato 1 - Hero */}
      <section className="flex min-h-screen items-center justify-center px-6">
        <img
          src={logoMoai}
          alt="Moai Comunicação"
          className="w-full max-w-md animate-fade-in"
        />
      </section>

      {/* Ato 2 - Business Units */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessUnits.map((unit) => (
            <div
              key={unit.title}
              className={`group rounded bg-card p-8 flex flex-col items-center text-center animate-fade-in-up ${unit.delay}`}
            >
              <div className="mb-6 flex h-20 items-center justify-center">
                <img
                  src={unit.logo}
                  alt={unit.title}
                  className="h-16 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground font-body">
                {unit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ato 3 - CTA + Endereço */}
      <section className="px-6 pb-20 pt-8">
        <div className="mx-auto max-w-md flex flex-col items-center gap-10">
          <a
            href="https://wa.me/5544999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded bg-accent px-10 py-4 font-display text-lg uppercase tracking-wider text-accent-foreground transition-transform duration-200 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Fale com a Moai
          </a>

          <p className="flex items-center gap-2 text-xs text-muted-foreground font-body tracking-wide">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            Rua Mato Grosso, 1118 — Jd. Flórida, Campo Mourão – PR
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
