import { EventBadge } from "@/components/EventBadge";
import { LeadForm } from "@/components/LeadForm";
import tradingBg from "@/assets/trading-bg.jpg";
import presenterImg from "@/assets/presenter.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${tradingBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
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
                    <img src={presenterImg} alt="Apresentador do Price Pro" className="w-full h-auto" />
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
                  <h1 className="text-3xl lg:text-5xl font-bold tracking-wide text-primary mb-2">
                    PRICE PRO
                  </h1>
                </div>

                {/* Event Badges */}
                <EventBadge date="11 de novembro - 19h" isLive />

                {/* Headline */}
                <div className="space-y-4 text-center lg:text-left max-w-lg">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                    Depois que você conhecer o Price Pro, vai entender o que é operar como um verdadeiro{" "}
                    <span className="text-primary">PROFISSIONAL.</span>
                  </h2>
                  
                  <p className="text-foreground/80 text-base leading-relaxed pt-2">
                    Pela primeira vez, vou revelar o método e o indicador que mudaram completamente meu resultado no mercado — e podem mudar o seu também.
                  </p>
                  <p className="text-primary font-semibold text-base pt-2">
                    👉 Clique abaixo e garanta sua vaga gratuita para assistir ao evento ao vivo!
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

        {/* Benefits Section */}
        <section className="relative z-10 py-12 px-4 bg-secondary/30">
          <div className="container max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Benefícios do <span className="text-primary">Price Pro</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground/80">
                  <strong>Não precisa de experiência prévia</strong> — o indicador mostra pontos claros de entrada e saída.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground/80">
                  <strong>Não precisa aparecer nem operar o dia inteiro</strong> — siga o método de forma prática e objetiva.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground/80">
                  <strong>Indicador 100% configurável</strong> — funciona direto no MetaTrader.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground/80">
                  <strong>Método testado e comprovado</strong> — comunidade ativa de traders aplicando diariamente.
                </p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2 justify-center">
                <span className="text-primary text-xl">✅</span>
                <p className="text-foreground/80">
                  <strong>Suporte individual</strong> — ajuda na instalação, configuração e primeiros trades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        

        {/* Legal Footer */}
        <footer className="relative z-10 py-8 px-4 border-t border-border/30">
          <div className="container max-w-6xl mx-auto">
            
          </div>
        </footer>
      </div>
    </div>;
};
export default Index;