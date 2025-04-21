
import { MessageSquare } from "lucide-react";

const BOTON1_URL = "https://wa.me/34625370710"; // Reparación de dispositivo
const BOTON2_URL = "https://wa.me/34625242647"; // Soluciones de software

const whatsappColor = "#25D366";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-grey-DEFAULT font-inter px-4">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-xl py-8 px-4 sm:py-12 sm:px-8 flex flex-col items-center">
        {/* Logo */}
        <img
          src="/lovable-uploads/7c5dff4d-f3c5-4bfc-8a83-bd374cd00da7.png"
          alt="Logo Digital Fix"
          className="w-32 sm:w-36 mb-4 drop-shadow-xl"
          style={{ borderRadius: 16 }}
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-black mb-2 text-center tracking-tight">
          ¿Necesitas ayuda con tu dispositivo?
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 text-center">
          En Digital Fix reparamos y solucionamos todo tipo de problemas técnicos.
        </p>
        <div className="flex flex-col gap-5 w-full">
          {/* Reparación de dispositivo */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-base text-gray-500 pl-1 mb-1 text-left sm:text-center">
              ¿Tu móvil, tablet u ordenador tiene algún daño físico o no enciende?
            </span>
            <a
              href={BOTON1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-4 rounded-xl bg-primary text-white hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-accent transition-all shadow-md text-center w-full"
              style={{ minWidth: 0 }}
              aria-label="Contactar WhatsApp reparación"
            >
              <MessageSquare size={27} color={whatsappColor} strokeWidth={2.5} />
              Reparación de dispositivo
            </a>
          </div>
          {/* Soluciones de software */}
          <div className="flex flex-col gap-2 w-full">
            <span className="text-base text-gray-500 pl-1 mb-1 text-left sm:text-center">
              ¿Problemas con el sistema, lentitud, virus o necesitas asesoría técnica?
            </span>
            <a
              href={BOTON2_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-accent transition-all shadow-md text-center w-full bg-white"
              style={{ minWidth: 0 }}
              aria-label="Contactar WhatsApp software"
            >
              <MessageSquare size={27} color={whatsappColor} strokeWidth={2.5} />
              Soluciones de software
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
