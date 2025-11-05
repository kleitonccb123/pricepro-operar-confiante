import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
const leadSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20)
});
export const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = leadSchema.parse({
        name,
        email,
        whatsapp
      });
      setIsSubmitting(true);
      const {
        error
      } = await supabase.from("leads").insert({
        name: validatedData.name,
        email: validatedData.email,
        whatsapp: validatedData.whatsapp,
        produto: "Price Pro Fx"
      });
      if (error) throw error;
      toast({
        title: "Cadastro confirmado!",
        description: "Te aguardo na grande live!"
      });

      // Reset form
      setName("");
      setEmail("");
      setWhatsapp("");

      // Redirect to thank you page
      setTimeout(() => {
        navigate("/obrigado");
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground/80">
          Seu nome*
        </Label>
        <Input id="name" type="text" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required className="bg-input border-border/50 focus:border-primary transition-colors" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground/80">
          Seu e-mail*
        </Label>
        <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="bg-input border-border/50 focus:border-primary transition-colors" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp" className="text-foreground/80">
          🇧🇷 +55 - Seu WhatsApp com DDD*
        </Label>
        <Input id="whatsapp" type="tel" placeholder="+55 11 99999-9999" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required className="bg-input border-border/50 focus:border-primary transition-colors" />
      </div>

      

      <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-primary-foreground font-semibold py-6 text-lg rounded-xl">
        {isSubmitting ? "ENVIANDO..." : "🎯 ACESSAR EVENTO GRATUITO"}
      </Button>
    </form>;
};