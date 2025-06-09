import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">FAQ</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">¿Qué materias cubren exactamente?</AccordionTrigger>
              <AccordionContent>
                Nos especializamos en matemáticas (álgebra, cálculo, estadística, geometría) y física (mecánica,
                termodinámica, óptica, electricidad). Cubrimos desde nivel de secundaria hasta universitario.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">¿Cuánto tiempo toma resolver una tarea?</AccordionTrigger>
              <AccordionContent>
                Generalmente entregamos las tareas en 24-48 horas, dependiendo de la complejidad. Para casos urgentes,
                podemos ofrecer entregas más rápidas con un costo adicional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">¿Las clases son presenciales o virtuales?</AccordionTrigger>
              <AccordionContent>
                Ofrecemos ambas modalidades. Las clases virtuales se realizan por videollamada con pizarra digital, y
                las presenciales en ubicaciones convenientes en Managua.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">¿Qué métodos de pago aceptan?</AccordionTrigger>
              <AccordionContent>
                Aceptamos transferencias bancarias a través de Banpro, Lafise y BAC. También podemos coordinar otros
                métodos de pago según sea necesario.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">¿Ofrecen garantía en sus servicios?</AccordionTrigger>
              <AccordionContent>
                Sí, ofrecemos revisión gratuita de las tareas si hay algún error. Para las clases, si no estás
                satisfecho con la primera sesión, te devolvemos el 100% de tu dinero.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
