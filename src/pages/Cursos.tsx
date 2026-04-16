import logoMoai from "@/assets/logo-moai-branca.png";
import { ArrowLeft, Calendar, Clock, MapPin, MessageCircle } from "lucide-react";

const Cursos = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 md:px-6 overflow-x-hidden">
      <div className="ambient-glow" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        <div className="h-10 md:h-20" />

        {/* Back + Logo */}
        <a href="/" className="self-start flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </a>

        <img src={logoMoai} alt="Moai Comunicação" className="w-36 md:w-48 mb-8 animate-fade-in" />

        {/* Course Card */}
        <div className="glass-card rounded-2xl p-8 md:p-12 w-full animate-fade-in-up delay-200">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Curso de Marketing
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Aprenda estratégias práticas de marketing para impulsionar sua empresa. 
            Um curso intensivo com conteúdo aplicável ao seu negócio, ministrado por profissionais 
            com experiência real de mercado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-foreground">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm">27 a 30 de Abril</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Clock className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm">4 dias de curso intensivo</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm">Online — link enviado no grupo de participantes</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://forms.gle/hTDo3KixM3t2ZbsP9"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button flex items-center justify-center gap-3 rounded-full px-8 py-4 font-display font-semibold text-sm md:text-base uppercase tracking-widest text-accent-foreground w-full text-center"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            <span>Inscreva-se agora</span>
          </a>
        </div>

        <div className="h-10 md:h-20" />
      </div>
    </main>
  );
};

export default Cursos;
