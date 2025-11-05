import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20),
  consent: z.boolean().refine((val) => val === true, "Você deve aceitar para continuar"),
});

export const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = leadSchema.parse({ name, email, whatsapp, consent });
      
      setIsSubmitting(true);

      const { error } = await supabase.from("leads").insert({
        name: validatedData.name,
        email: validatedData.email,
        whatsapp: validatedData.whatsapp,
        produto: "Price Pro Fx",
      });

      if (error) throw error;

      toast({
        title: "Cadastro confirmado!",
        description: "Te aguardo na grande live! Você será redirecionado para o grupo...",
      });

      // Reset form
      setName("");
      setEmail("");
      setWhatsapp("");
      setConsent(false);

      // Redirect to WhatsApp group
      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/LO9TRq060Nt7iR8oLXRY4U?mode=wwt";
      }, 1500);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground/80">
          Seu nome*
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-input border-border/50 focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground/80">
          Seu e-mail*
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-input border-border/50 focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp" className="text-foreground/80">
          🇧🇷 +55 - Seu WhatsApp com DDD*
        </Label>
        <Input
          id="whatsapp"
          type="tel"
          placeholder="+55 11 99999-9999"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          className="bg-input border-border/50 focus:border-primary transition-colors"
        />
      </div>

      <div className="flex items-start space-x-3 pt-2">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked as boolean)}
          className="mt-1"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-primary-foreground font-semibold py-6 text-lg rounded-xl"
      >
        {isSubmitting ? "ENVIANDO..." : "🎯 ACESSAR EVENTO GRATUITO"}
      </Button>
    </form>
  );
};
