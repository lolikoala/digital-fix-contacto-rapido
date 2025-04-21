
import React from "react";

const BOTON1_URL = "https://wa.me/34625370710";
const BOTON2_URL = "https://wa.me/34625242647";

const WHATSAPP_GREEN = "#25D366";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#222222] font-inter px-2 sm:px-4">
      <section className="w-full max-w-lg sm:max-w-xl bg-white rounded-3xl shadow-2xl py-8 px-4 sm:py-12 sm:px-10 flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center w-full">
          <img
            src="/lovable-uploads/8866ba85-d991-4df1-93d0-62137e8987ce.png"
            alt="Logo Digital Fix"
            className="w-28 sm:w-36 mb-5 drop-shadow-2xl"
            style={{
              borderRadius: 24,
              background: "#fff",
              border: `3px solid ${WHATSAPP_GREEN}`,
              boxShadow: "0 4px 32px 0 rgba(34,34,34,0.13)",
              padding: 8,
            }}
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#0B141B] font-black mb-2 text-center tracking-tight">
          ¿Necesitas ayuda con tu dispositivo?
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-9 text-center">
          En Digital Fix reparamos y solucionamos todo tipo de problemas técnicos.
        </p>
        <div className="flex flex-col gap-6 w-full max-w-md">
          {/* Reparación de dispositivo */}
          <div className="flex flex-col gap-1 w-full">
            <span className="text-[1rem] text-gray-500 mb-2 text-center sm:text-base">
              ¿Tu móvil, tablet u ordenador tiene algún daño físico o no enciende?
            </span>
            <a
              href={BOTON1_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-4 rounded-xl bg-[#25D366] text-white hover:bg-[#1DB954] focus-visible:ring-2 focus-visible:ring-[#25D366] transition-all shadow-lg text-center w-full"
              style={{ minWidth: 0 }}
              aria-label="Contactar WhatsApp reparación"
            >
              <img
                src="/lovable-uploads/55eb0494-063f-47d1-808d-4f4d6337a556.png"
                alt="WhatsApp"
                className="h-7 w-7"
                style={{ filter: "drop-shadow(0 0 2px #ddd)" }}
                loading="lazy"
              />
              Reparación de dispositivo
            </a>
          </div>

          {/* Soluciones de software */}
          <div className="flex flex-col gap-1 w-full">
            <span className="text-[1rem] text-gray-500 mb-2 text-center sm:text-base">
              ¿Problemas con el sistema, lentitud, virus o necesitas asesoría técnica?
            </span>
            <a
              href={BOTON2_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-lg font-semibold px-6 py-4 rounded-xl border-2 border-[#25D366] text-[#222222] bg-white hover:bg-[#25D36615] hover:text-[#111] focus-visible:ring-2 focus-visible:ring-[#25D366] transition-all shadow-lg text-center w-full"
              style={{ minWidth: 0 }}
              aria-label="Contactar WhatsApp software"
            >
              <img
                src="/lovable-uploads/55eb0494-063f-47d1-808d-4f4d6337a556.png"
                alt="WhatsApp"
                className="h-7 w-7"
                style={{ filter: "drop-shadow(0 0 2px #ddd)" }}
                loading="lazy"
              />
              Soluciones de software
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
