import { EventBadge } from "@/components/EventBadge";
import { LeadForm } from "@/components/LeadForm";
import tradingBg from "@/assets/trading-bg.jpg";
import presenterImg from "@/assets/presenter.jpg";
import promoImg from "@/assets/price-pro-promo.png";
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
        {/* Hero Section - Mobile First */}
        <main className="flex-1 flex items-center justify-center px-4 py-6">
          <div className="container max-w-md lg:max-w-7xl mx-auto">
            {/* Mobile Layout (Stack) */}
            <div className="flex flex-col items-center space-y-6 lg:hidden">
              {/* CTA Button */}
              <button 
                onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full max-w-sm bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-6 rounded-xl text-lg transition-all hover:shadow-[var(--shadow-glow)]"
              >
                Me inscrever agora →
              </button>

              {/* Benefit Points */}
              <div className="w-full max-w-sm space-y-3 text-left">
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">✗</span>
                  <p className="text-sm text-foreground/80">Não precisa de experiência</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">✗</span>
                  <p className="text-sm text-foreground/80">Não precisa mostrar o rosto</p>
                </div>
              </div>

              {/* Logo */}
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-wide text-primary mb-1">
                  PRICE PRO FX
                </h1>
              </div>

              {/* Headline */}
              <div className="space-y-3 text-center max-w-sm">
                <h2 className="text-xl font-bold leading-tight">
                  Depois que você conhecer o Price Pro, vai entender o que é operar como um verdadeiro{" "}
                  <span className="text-primary">PROFISSIONAL.</span>
                </h2>
                
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Pela primeira vez, vou revelar o método e o indicador que mudaram completamente meu resultado no mercado — e podem mudar o seu também.
                </p>
              </div>

              {/* Promo Image */}
              <div className="w-full max-w-sm">
                <img src={promoImg} alt="Método Price Pro Forex" className="w-full h-auto rounded-xl shadow-lg" />
              </div>

              {/* Form Section */}
              <div id="form-section" className="w-full max-w-sm pt-4">
                <LeadForm />
              </div>
            </div>

            {/* Desktop Layout (Side by Side) */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="flex flex-col items-center space-y-6">
                {/* Promo Image Desktop */}
                <div className="w-full max-w-lg">
                  <img src={promoImg} alt="Método Price Pro Forex" className="w-full h-auto rounded-xl shadow-lg" />
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="flex flex-col items-start space-y-6">
                <div className="text-left">
                  <h1 className="text-5xl font-bold tracking-wide text-primary mb-2">
                    PRICE PRO FX
                  </h1>
                </div>

                <EventBadge date="11 de novembro - 19h" isLive />

                <div className="space-y-4 text-left max-w-lg">
                  <h2 className="text-3xl xl:text-4xl font-bold leading-tight">
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

                <div className="w-full max-w-lg">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Benefits Section */}
        

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