import { useEffect } from "react";
// Removido o import do 'useNavigate' pois estava causando o erro
// import { useNavigate } from "react-router-dom"; 
import { Button } from "@/components/ui/button"; 

// Declara a função 'fbq' no escopo global para o TypeScript entender
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: any; // Para a verificação de !f._fbq
  }
}

/**
 * Componente da Página de Obrigado.
 * 1. Dispara o Pixel do Facebook (PageView e Lead).
 * 2. Redireciona para o WhatsApp após 3 segundos.
 * 3. Oferece um botão de fallback para o WhatsApp.
 */
const Obrigado = () => {
  // Removida a linha 'const navigate = useNavigate();'
  const whatsappGroupUrl = "https://chat.whatsapp.com/LO9TRq060Nt7iR8oLXRY4U?mode=wwt";

  useEffect(() => {
    // Bloco 1: Carrega o script do Pixel (Pixel Base Code)
    // Este código é o padrão do Facebook, adaptado para React/TS.
    if (typeof window !== 'undefined' && !window.fbq) {
      (function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
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
        // Adiciona uma verificação de segurança para s.parentNode
        if (s && s.parentNode) { 
          s.parentNode.insertBefore(t, s);
        }
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }

    // Bloco 2: Dispara os eventos de PageView e Lead
    // Este bloco é executado em toda montagem deste componente (página de obrigado).
    // Verificamos se a função 'fbq' já está definida (pelo Bloco 1)
    if (typeof window.fbq === 'function') {
      // Inicializa o seu pixel específico
      window.fbq('init', '24849167944783903');
      
      // Dispara o evento de PageView (Padrão e recomendado)
      window.fbq('track', 'PageView');
      
      // Dispara o evento de CONVERSÃO (Lead) - O mais importante!
      window.fbq('track', 'Lead');
    }

    // Bloco 3: Redirecionamento automático
    const timer = setTimeout(() => {
      window.location.href = whatsappGroupUrl;
    }, 3000); // 3 segundos

    // Limpa o timer se o componente for desmontado (boa prática do React)
    return () => clearTimeout(timer);
    
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

  // Handler para o botão de fallback
  const handleWhatsAppClick = () => {
    window.location.href = whatsappGroupUrl;
  };

  // Handler para o botão de voltar (agora usa window.location)
  const handleVoltarClick = () => {
    window.location.href = "/"; // Redireciona para a página inicial
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
            onClick={handleVoltarClick} // Alterado para usar a nova função
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
