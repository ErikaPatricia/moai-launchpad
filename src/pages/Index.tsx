import logoMoai from "@/assets/logo-moai-branca.png";
import logoEditora from "@/assets/logo-moai-editora.png";
import logoWeGo from "@/assets/logo-we-go.png";
import logoFullService from "@/assets/logo-full-service.png";
import { MessageCircle, MapPin } from "lucide-react";

const businessUnits = [
  {
    logo: logoEditora,
    title: "Moai Editora",
    description: "Livros, revistas e catálogos com qualidade editorial que transforma ideias em publicações memoráveis.",
    delay: "delay-200",
    logoHeight: "h-20",
  },
  {
    logo: logoWeGo,
    title: "We.Go",
    description: "Implementação de estratégias digitais e social media para acelerar sua presença online.",
    delay: "delay-400",
    logoHeight: "h-16",
  },
  {
    logo: logoFullService,
    title: "Full Service",
    description: "Serviços completos de comunicação, branding e estratégias de marca para posicionar seu negócio.",
    delay: "delay-600",
    logoHeight: "h-16",
  },
];

const Index = () => {
  return (
    <main className="relative h-screen flex flex-col items-center px-6 overflow-hidden">
      <div className="ambient-glow" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* Spacer top */}
        <div style={{ height: 120 }} />

        {/* Logo */}
        <div className="animate-fade-in">
          <img src={logoMoai} alt="Moai Comunicação" className="w-56 md:w-72" />
        </div>

        {/* Spacer between logo and boxes */}
        <div style={{ height: 120 }} />

        {/* Business Units */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {businessUnits.map((unit) => (
            <div
              key={unit.title}
              className={`glass-card rounded-2xl p-12 flex flex-col items-center text-center justify-center min-h-[260px] animate-fade-in-up ${unit.delay}`}
            >
              <div className="mb-6 flex items-center justify-center">
                <img
                  src={unit.logo}
                  alt={unit.title}
                  className={`${unit.logoHeight} w-auto object-contain`}
                />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground font-light">
                {unit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-fade-in-up delay-500">
          <a
            href="https://wa.me/5544999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button flex items-center gap-3 rounded-full px-10 py-4 font-display font-semibold text-base uppercase tracking-widest text-accent-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            Quero melhorar a comunicação da minha empresa
          </a>
        </div>

        {/* Address */}
        <p className="mt-8 flex items-center gap-2 text-sm text-foreground tracking-wide animate-fade-in-up delay-600">
          <MapPin className="h-4 w-4 shrink-0 text-primary" />
          Rua Mato Grosso, 1118 • Jd. Flórida • Campo Mourão • PR • CEP 87300-075
        </p>
      </div>
    </main>
  );
};

export default Index;
