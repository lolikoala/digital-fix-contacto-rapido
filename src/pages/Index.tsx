
// Landing principal "Digital Fix" - sólo los elementos necesarios según petición

const BOTON1_URL = "https://wa.me/34625370710"; // Reparación de dispositivo
const BOTON2_URL = "https://wa.me/34625242647"; // Soluciones de software

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-grey-DEFAULT font-inter px-4">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-xl py-12 px-6 md:py-16 md:px-12 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4 text-center tracking-tight">
          ¿Necesitas ayuda con tu dispositivo?
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 text-center">
          En Digital Fix reparamos y solucionamos todo tipo de problemas técnicos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <a
            href={BOTON1_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-lg font-semibold px-6 py-4 rounded-xl bg-primary text-white hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-accent transition-all shadow-md text-center"
            style={{ minWidth: 0 }}
          >
            Reparación de dispositivo
          </a>
          <a
            href={BOTON2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-lg font-semibold px-6 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-accent transition-all shadow-md text-center bg-white"
            style={{ minWidth: 0 }}
          >
            Soluciones de software
          </a>
        </div>
      </section>
    </main>
  );
};

export default Index;
