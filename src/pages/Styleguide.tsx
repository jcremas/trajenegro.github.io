import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Wine, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* ── helpers ── */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-20">
    <h2 className="text-ivory font-montserrat text-xs uppercase tracking-[0.3em] mb-8 border-b border-border pb-3">
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

const ComponentDemo = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <p className="text-muted-foreground text-xs uppercase tracking-widest">{label}</p>
    <div className="bg-card/50 border border-border rounded-lg p-6">{children}</div>
  </div>
);

/* ── page ── */
const Styleguide = () => {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8 md:p-16 max-w-6xl mx-auto">
      {/* Header */}
      <Link to="/" className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest mb-8 hover:text-ivory transition-colors duration-700">
        <ArrowLeft className="w-3 h-3" /> Volver al sitio
      </Link>

      <h1 className="text-cinematic-lg text-ivory mb-4">STYLEGUIDE</h1>
      <p className="font-serif-display text-ivory/60 text-lg italic mb-20">
        Design system de Traje Negro — referencia para mantener coherencia visual.
      </p>

      {/* ═══════════════ COLORS ═══════════════ */}
      <Section title="01 · Paleta de Colores">
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

      {/* ═══════════════ TYPOGRAPHY ═══════════════ */}
      <Section title="02 · Tipografía">
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground text-xs mb-2 uppercase tracking-widest">Montserrat — Títulos, navegación y UI</p>
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

      {/* ═══════════════ FONT SCALE ═══════════════ */}
      <Section title="03 · Escala Tipográfica">
        <div className="space-y-6">
          {[
            { spec: "Hero título — 34px / md:5xl / lg:6xl", cls: "font-montserrat text-cinematic text-[34px]", text: "TRAJE NEGRO" },
            { spec: "Subtítulo Hero — 28px / md:4xl (Serif)", cls: "font-serif-display text-[28px] italic font-light", text: "El carácter no se negocia." },
            { spec: "Slide body — 28px / md:2xl / lg:3xl (Serif)", cls: "font-serif-display text-[28px] font-light", text: "No es un vino. Es una forma de estar." },
            { spec: "CTA button — xs, tracking-[0.35em]", cls: "font-montserrat text-cinematic text-xs tracking-[0.35em]", text: "EXPLORAR TRAJE NEGRO" },
            { spec: "Label / caption — xs, tracking-widest", cls: "font-montserrat text-xs uppercase tracking-widest", text: "SECCIÓN LABEL" },
          ].map(({ spec, cls, text }) => (
            <div key={spec}>
              <p className="text-muted-foreground text-xs mb-1">{spec}</p>
              <p className={`text-ivory ${cls}`}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ UTILITY CLASSES ═══════════════ */}
      <Section title="04 · Clases Utilitarias">
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

      {/* ═══════════════ ANIMATIONS ═══════════════ */}
      <Section title="05 · Animaciones ASMR">
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
            <code className="text-gold text-xs font-mono block bg-card p-4 rounded border border-border">
              const asmrEase = [0.25, 0.1, 0.25, 1];<br />
              duration: 2.5 – 5s (entradas), 1.5s (hover/tap)
            </code>
          </div>
        </div>
      </Section>

      {/* ═══════════════ BUTTONS ═══════════════ */}
      <Section title="06 · Botones">
        <div className="space-y-8">
          <ComponentDemo label="Botón CTA principal (custom)">
            <button className="px-14 py-5 border border-gold/50 text-ivory/80 text-cinematic text-xs bg-transparent hover:border-gold hover:text-ivory transition-all duration-[1.5s] ease-in-out tracking-[0.35em]">
              EXPLORAR TRAJE NEGRO
            </button>
          </ComponentDemo>

          <ComponentDemo label="Variantes shadcn/ui Button">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </ComponentDemo>

          <ComponentDemo label="Tamaños">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Wine className="w-4 h-4" /></Button>
            </div>
          </ComponentDemo>
        </div>
      </Section>

      {/* ═══════════════ INPUTS & FORMS ═══════════════ */}
      <Section title="07 · Inputs y Formularios">
        <div className="space-y-8">
          <ComponentDemo label="Input de texto">
            <div className="max-w-sm space-y-2">
              <Label htmlFor="demo-input">Email</Label>
              <Input id="demo-input" placeholder="tu@email.com" />
            </div>
          </ComponentDemo>

          <ComponentDemo label="Textarea">
            <div className="max-w-sm space-y-2">
              <Label htmlFor="demo-textarea">Mensaje</Label>
              <Textarea id="demo-textarea" placeholder="Escribí tu mensaje..." />
            </div>
          </ComponentDemo>

          <ComponentDemo label="Select">
            <div className="max-w-sm space-y-2">
              <Label>Varietal</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Elegí un varietal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="malbec">Malbec</SelectItem>
                  <SelectItem value="cabernet">Cabernet Sauvignon</SelectItem>
                  <SelectItem value="blend">Blend</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentDemo>

          <ComponentDemo label="Checkbox y Switch">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="demo-check" />
                <Label htmlFor="demo-check">Acepto los términos</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
                <Label>Notificaciones {switchOn ? "activadas" : "desactivadas"}</Label>
              </div>
            </div>
          </ComponentDemo>
        </div>
      </Section>

      {/* ═══════════════ CARDS ═══════════════ */}
      <Section title="08 · Cards">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat text-sm uppercase tracking-widest">Malbec Reserva</CardTitle>
              <CardDescription>Cosecha 2021 · Valle de Uco</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-serif-display text-foreground/80 text-sm italic">
                Notas de ciruela madura, tabaco y especias dulces. Cuerpo pleno con taninos sedosos.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Ver detalle</Button>
            </CardFooter>
          </Card>

          <Card className="border-gold/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-montserrat text-sm uppercase tracking-widest">Gran Reserva</CardTitle>
                <Badge variant="outline" className="border-gold/50 text-gold text-[10px]">EXCLUSIVO</Badge>
              </div>
              <CardDescription>Cosecha 2019 · Edición Limitada</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-serif-display text-foreground/80 text-sm italic">
                Blend de Malbec y Cabernet. 18 meses en barrica de roble francés.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Reservar</Button>
              <Button variant="ghost" size="sm">Más info</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* ═══════════════ BADGES ═══════════════ */}
      <Section title="09 · Badges">
        <ComponentDemo label="Variantes">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline" className="border-gold/50 text-gold">Gold custom</Badge>
          </div>
        </ComponentDemo>
      </Section>

      {/* ═══════════════ TABS ═══════════════ */}
      <Section title="10 · Tabs">
        <ComponentDemo label="Navegación por pestañas">
          <Tabs defaultValue="overview" className="max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tasting">Degustación</TabsTrigger>
              <TabsTrigger value="pairing">Maridaje</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <p className="font-serif-display text-foreground/80 text-sm italic">
                Un vino que no necesita presentación. Su presencia habla por sí sola.
              </p>
            </TabsContent>
            <TabsContent value="tasting" className="mt-4">
              <p className="font-serif-display text-foreground/80 text-sm italic">
                Servir entre 16-18°C. Decantar 30 minutos antes de servir.
              </p>
            </TabsContent>
            <TabsContent value="pairing" className="mt-4">
              <p className="font-serif-display text-foreground/80 text-sm italic">
                Carnes rojas, quesos maduros, chocolate negro.
              </p>
            </TabsContent>
          </Tabs>
        </ComponentDemo>
      </Section>

      {/* ═══════════════ DIALOGS ═══════════════ */}
      <Section title="11 · Dialogs y Alerts">
        <div className="space-y-8">
          <ComponentDemo label="Dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Abrir Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-montserrat uppercase tracking-widest text-sm">Confirmar reserva</DialogTitle>
                  <DialogDescription>
                    ¿Querés reservar una botella de Traje Negro Gran Reserva 2019?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm">Cancelar</Button>
                  <Button size="sm">Confirmar</Button>
                </div>
              </DialogContent>
            </Dialog>
          </ComponentDemo>

          <ComponentDemo label="Alert Dialog">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">Eliminar</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta acción no se puede deshacer.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Confirmar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </ComponentDemo>

          <ComponentDemo label="Toast / Sonner">
            <Button variant="outline" size="sm" onClick={() => toast("Reserva confirmada", { description: "Tu botella de Traje Negro te espera." })}>
              Mostrar Toast
            </Button>
          </ComponentDemo>
        </div>
      </Section>

      {/* ═══════════════ SEPARATOR ═══════════════ */}
      <Section title="12 · Separadores y Divisores">
        <div className="space-y-8">
          <ComponentDemo label="Divisor dorado animado">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-px bg-gold asmr-breathe" />
              <div className="w-20 h-px bg-gold asmr-breathe-slow" />
            </div>
          </ComponentDemo>
          <ComponentDemo label="Separator (shadcn)">
            <div className="space-y-4">
              <p className="text-foreground/80 text-sm">Contenido arriba</p>
              <Separator />
              <p className="text-foreground/80 text-sm">Contenido abajo</p>
            </div>
          </ComponentDemo>
        </div>
      </Section>

      {/* ═══════════════ SPACING ═══════════════ */}
      <Section title="13 · Espaciado y Layout">
        <div className="space-y-4 text-ivory/80 text-sm font-montserrat">
          <p>• Cada slide ocupa <code className="text-gold">100dvh</code> con <code className="text-gold">scroll-snap-type: y mandatory</code></p>
          <p>• Padding horizontal: <code className="text-gold">px-8</code> (móvil) / <code className="text-gold">px-16</code> (desktop)</p>
          <p>• Ancho máximo de texto: <code className="text-gold">max-w-[650px]</code></p>
          <p>• Divisores dorados: <code className="text-gold">w-8 h-px</code> o <code className="text-gold">w-10 h-px</code></p>
          <p>• Separación entre divisor y contenido: <code className="text-gold">mb-12 / mt-12</code></p>
          <p>• BlackTransition entre slides: sección vacía full-screen negra</p>
        </div>
      </Section>

      {/* ═══════════════ RESPONSIVE ═══════════════ */}
      <Section title="14 · Responsive">
        <div className="space-y-4 text-ivory/80 text-sm font-montserrat">
          <p>• Móvil: fuente base <code className="text-gold">28px</code> para slides, <code className="text-gold">34px</code> título hero</p>
          <p>• Tablet (md): escala estándar de Tailwind</p>
          <p>• Desktop (lg): tamaños más grandes vía <code className="text-gold">lg:</code> prefix</p>
          <p>• Imágenes: <code className="text-gold">object-cover</code> por defecto, <code className="text-gold">object-contain</code> cuando se debe mostrar completa</p>
        </div>
      </Section>

      <footer className="border-t border-border pt-8 mt-16 mb-8">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          Traje Negro — Design System v2.0
        </p>
      </footer>
    </div>
  );
};

export default Styleguide;
