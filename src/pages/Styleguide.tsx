const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-16">
    <h2 className="text-ivory font-montserrat text-xs uppercase tracking-[0.3em] mb-6 border-b border-border pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Swatch = ({ name, cssVar, className }: { name: string; cssVar: string; className: string }) => (
  <div className="flex items-center gap-4">
    <div className={`w-16 h-16 rounded border border-border ${className}`} />
    <div>
      <p className="text-ivory text-sm font-montserrat">{name}</p>
      <p className="text-muted-foreground text-xs font-mono">{cssVar}</p>
    </div>
  </div>
);

const Styleguide = () => {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16 max-w-5xl mx-auto">
      <h1 className="text-cinematic-lg text-ivory mb-4">STYLEGUIDE</h1>
      <p className="font-serif-display text-ivory/60 text-lg italic mb-16">
        Guía de estilo para mantener coherencia visual en Traje Negro.
      </p>

      {/* COLORS */}
      <Section title="Paleta de Colores">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Swatch name="Background (Negro)" cssVar="--background: 0 0% 0%" className="bg-background" />
          <Swatch name="Ivory (Texto)" cssVar="--ivory: 36 47% 94%" className="bg-ivory" />
          <Swatch name="Gold (Acento)" cssVar="--gold: 38 45% 58%" className="bg-gold" />
          <Swatch name="Deep Black" cssVar="--deep-black: 0 0% 0%" className="bg-deep-black" />
          <Swatch name="Card" cssVar="--card: 0 0% 4%" className="bg-card" />
          <Swatch name="Muted" cssVar="--muted: 0 0% 12%" className="bg-muted" />
          <Swatch name="Border" cssVar="--border: 0 0% 15%" className="bg-border" />
          <Swatch name="Secondary" cssVar="--secondary: 0 0% 8%" className="bg-secondary" />
        </div>
      </Section>

      {/* TYPOGRAPHY */}
      <Section title="Tipografía">
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">Montserrat — Títulos y UI</p>
            <p className="font-montserrat text-ivory text-cinematic-lg">TRAJE NEGRO</p>
            <p className="font-montserrat text-ivory text-cinematic text-sm mt-2">TEXTO CINEMATOGRÁFICO SMALL</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">Cormorant Garamond — Cuerpo editorial</p>
            <p className="font-serif-display text-ivory text-3xl font-light italic">El carácter no se negocia.</p>
            <p className="font-serif-display text-ivory text-xl font-light mt-2">
              Hay elecciones que no necesitan explicación. Traje Negro representa eso: presencia, decisión y carácter.
            </p>
          </div>
        </div>
      </Section>

      {/* FONT SIZES */}
      <Section title="Escala Tipográfica">
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground text-xs mb-1">Hero título — text-[34px] / md:text-5xl / lg:text-6xl</p>
            <p className="font-montserrat text-ivory text-cinematic text-[34px]">TRAJE NEGRO</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Subtítulo Hero — text-[28px] / md:text-4xl (Serif)</p>
            <p className="font-serif-display text-ivory text-[28px] italic font-light">El carácter no se negocia.</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Slide body — text-[28px] / md:text-2xl / lg:text-3xl (Serif)</p>
            <p className="font-serif-display text-ivory text-[28px] font-light">No es un vino. Es una forma de estar.</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">CTA button — text-xs, tracking-[0.35em]</p>
            <p className="font-montserrat text-ivory text-cinematic text-xs tracking-[0.35em]">EXPLORAR TRAJE NEGRO</p>
          </div>
        </div>
      </Section>

      {/* UTILITY CLASSES */}
      <Section title="Clases Utilitarias">
        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">.text-cinematic</p>
            <p className="text-cinematic text-ivory text-sm">UPPERCASE · TRACKING 0.3EM · FONT EXTRALIGHT</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">.text-cinematic-lg</p>
            <p className="text-cinematic-lg text-ivory">TÍTULO GRANDE</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">.font-serif-display</p>
            <p className="font-serif-display text-ivory text-2xl italic font-light">Elegancia editorial en serif</p>
          </div>
        </div>
      </Section>

      {/* ANIMATIONS */}
      <Section title="Animaciones ASMR">
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground text-xs mb-3 uppercase tracking-widest">.asmr-breathe — Respiración dorada (6s)</p>
            <div className="w-20 h-px bg-gold asmr-breathe" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-3 uppercase tracking-widest">.asmr-breathe-slow — Respiración lenta (10s)</p>
            <div className="w-20 h-px bg-gold asmr-breathe-slow" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-3 uppercase tracking-widest">.asmr-float — Flotación sutil (8s)</p>
            <div className="w-8 h-8 rounded-full border border-gold asmr-float" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">Framer Motion — Curva ASMR</p>
            <code className="text-gold text-xs font-mono block bg-card p-3 rounded border border-border">
              const asmrEase = [0.25, 0.1, 0.25, 1];<br />
              duration: 2.5 – 5s (entradas), 1.5s (hover)
            </code>
          </div>
        </div>
      </Section>

      {/* COMPONENTS */}
      <Section title="Componentes">
        <div className="space-y-8">
          {/* Divider */}
          <div>
            <p className="text-muted-foreground text-xs mb-3 uppercase tracking-widest">Divisor dorado</p>
            <div className="w-10 h-px bg-gold asmr-breathe" />
          </div>

          {/* CTA Button */}
          <div>
            <p className="text-muted-foreground text-xs mb-3 uppercase tracking-widest">Botón CTA</p>
            <button className="px-14 py-5 border border-gold/50 text-ivory/80 text-cinematic text-xs bg-transparent hover:border-gold hover:text-ivory transition-all duration-[1.5s] ease-in-out tracking-[0.35em]">
              EXPLORAR TRAJE NEGRO
            </button>
          </div>

          {/* Overlay spec */}
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">Overlay sobre imagen</p>
            <code className="text-gold text-xs font-mono block bg-card p-3 rounded border border-border">
              bg-background con opacity 0.45 – 0.75 según contraste necesario
            </code>
          </div>
        </div>
      </Section>

      {/* SPACING & LAYOUT */}
      <Section title="Espaciado y Layout">
        <div className="space-y-4 text-ivory/80 text-sm font-montserrat">
          <p>• Cada slide ocupa <code className="text-gold">100dvh</code> con <code className="text-gold">scroll-snap-type: y mandatory</code></p>
          <p>• Padding horizontal: <code className="text-gold">px-8</code> (móvil) / <code className="text-gold">px-16</code> (desktop)</p>
          <p>• Ancho máximo de texto: <code className="text-gold">max-w-[650px]</code></p>
          <p>• Divisores dorados: <code className="text-gold">w-8 h-px</code> o <code className="text-gold">w-10 h-px</code></p>
          <p>• Separación entre divisor y contenido: <code className="text-gold">mb-12 / mt-12</code></p>
          <p>• BlackTransition entre slides: sección vacía full-screen negra</p>
        </div>
      </Section>

      {/* RESPONSIVE */}
      <Section title="Responsive">
        <div className="space-y-4 text-ivory/80 text-sm font-montserrat">
          <p>• Móvil: fuente base <code className="text-gold">28px</code> para slides, <code className="text-gold">34px</code> título hero</p>
          <p>• Tablet (md): escala estándar de Tailwind</p>
          <p>• Desktop (lg): tamaños más grandes vía <code className="text-gold">lg:</code> prefix</p>
          <p>• Imágenes: <code className="text-gold">object-cover</code> por defecto, <code className="text-gold">object-contain</code> cuando se debe mostrar completa</p>
        </div>
      </Section>

      <footer className="border-t border-border pt-8 mt-16 mb-8">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Traje Negro — Guía de Estilo v1.0
        </p>
      </footer>
    </div>
  );
};

export default Styleguide;
