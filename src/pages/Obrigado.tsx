import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Obrigado = () => {
  const navigate = useNavigate();
  const whatsappGroupUrl = "https://chat.whatsapp.com/LO9TRq060Nt7iR8oLXRY4U?mode=wwt";

  useEffect(() => {
    // Initialize Facebook Pixel if not already loaded
    if (typeof window !== 'undefined' && !(window as any).fbq) {
      (function(f: any, b: any, e: string, v: string, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);
    }

    // Track conversion event
    if ((window as any).fbq) {
      (window as any).fbq('init', '24849167944783903');
      (window as any).fbq('track', 'Lead');
    }

    // Redirect to WhatsApp after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = whatsappGroupUrl;
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.location.href = whatsappGroupUrl;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="space-y-4">
          <div className="text-6xl">🎉</div>
          <h1 className="text-4xl font-bold text-primary">
            Obrigado por se inscrever!
          </h1>
          <p className="text-xl text-foreground/80">
            Sua vaga está garantida para o evento ao vivo!
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-foreground/70">
            Você será redirecionado automaticamente para o grupo do WhatsApp em alguns segundos...
          </p>
          
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-primary-foreground font-semibold py-6 text-lg rounded-xl"
          >
            📱 Entrar no Grupo do WhatsApp Agora
          </Button>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full"
          >
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
