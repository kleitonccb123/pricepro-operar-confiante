import { EventBadge } from "@/components/EventBadge";
import { LeadForm } from "@/components/LeadForm";
import tradingBg from "@/assets/trading-bg.jpg";
import presenterImg from "@/assets/presenter.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${tradingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 py-8 lg:py-12">
          <div className="container max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Video/Image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                    <img
                      src={presenterImg}
                      alt="Apresentador do Price Pro"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg">
                      <p className="text-white text-sm font-medium">
                        Depois você vai ouvir
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="flex flex-col items-center lg:items-start space-y-6">
                {/* Logo */}
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl lg:text-4xl font-bold tracking-wider text-primary mb-1">
                    MILIONÁRIO
                  </h1>
                  <p className="text-sm tracking-[0.3em] text-foreground/60 font-light">
                    RÁPIDO
                  </p>
                </div>

                {/* Event Badges */}
                <EventBadge date="11 de novembro - 19h" isLive />

                {/* Headline */}
                <div className="space-y-3 text-center lg:text-left max-w-lg">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                    Pela primeira vez eu vou{" "}
                    <span className="text-primary">te contar</span> o que realmente mudou{" "}
                    <span className="text-primary">minha vida</span> e vai{" "}
                    <span className="text-primary">mudar a sua.</span>
                  </h2>
                  <p className="text-foreground/70 text-base">
                    Clique no botão abaixo e garanta seu ingresso.
                  </p>
                </div>

                {/* Form */}
                <div className="w-full max-w-lg">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Legal Footer */}
        <footer className="relative z-10 py-8 px-4 border-t border-border/30">
          <div className="container max-w-6xl mx-auto">
            <div className="space-y-6 text-center">
              <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                Aviso Legal
              </h3>
              
              <div className="space-y-4 text-xs text-foreground/50 leading-relaxed max-w-4xl mx-auto">
                <p>
                  Este site não é afiliado ao Facebook, Inc. ou ao Google/Alphabet Inc. e não é
                  endossado por essas empresas de nenhuma forma. Facebook é uma marca registrada do
                  Facebook, Inc. e Google são marcas comerciais independentes de suas respectivas
                  proprietárias.
                </p>
                
                <p>
                  O objetivo deste site é oferecer informações e treinamentos em formatos digitais.
                  Não há garantia de ganhos financeiros de qualquer natureza. Da mesma forma, o
                  desempenho apresentado reflete experiências individuais, que podem variar de forma
                  individual de acordo com o contexto e as ações de cada pessoa.
                </p>
                
                <p>
                  Não nos comprometemos seus dados com terceiros sem o seu consentimento. Você pode
                  cancelar sua inscrição a qualquer momento. Para isso, basta clicar como instruído
                  no rodapé de qualquer e-mail que nós enviemos. Consulte nossa{" "}
                  <a 
                    href="/politica-privacidade" 
                    className="text-primary hover:underline transition-colors"
                  >
                    Política de Privacidade
                  </a>
                  {" "}para mais informações sobre como processamos seus dados pessoais.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="/politica-privacidade"
                  className="text-primary text-sm hover:underline transition-colors font-medium"
                >
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
