import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Obrigado = () => {
  const navigate = useNavigate();
  const whatsappGroupUrl = "https://chat.whatsapp.com/LO9TRq060Nt7iR8oLXRY4U?mode=wwt";

  useEffect(() => {
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
