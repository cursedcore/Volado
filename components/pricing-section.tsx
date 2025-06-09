import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Tarifas</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Precios accesibles para todos los estudiantes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ofrecemos tarifas competitivas sin comprometer la calidad de la enseñanza
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-emerald-200 transition-colors">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Resolución de Tareas</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-4">C$150-300</div>
              <p className="text-slate-600 mb-6">Por tarea (según complejidad)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Explicación paso a paso
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Entrega en 24-48 horas
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Revisión gratuita
                </li>
              </ul>
              <Link
                href="https://wa.me/50589307821?text=Hola,%20necesito%20ayuda%20con%20una%20tarea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Ayuda
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-emerald-500 hover:border-emerald-600 transition-colors relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-emerald-600 text-white">Más Popular</Badge>
            </div>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Clases Personalizadas</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-4">C$400</div>
              <p className="text-slate-600 mb-6">Por hora de clase</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Atención personalizada
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Horarios flexibles
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Material de apoyo incluido
                </li>
              </ul>
              <Link
                href="https://wa.me/50589307821?text=Hola,%20me%20interesan%20las%20clases%20personalizadas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Agendar Clase
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-emerald-200 transition-colors">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Paquete Mensual</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-4">C$1,200</div>
              <p className="text-slate-600 mb-6">4 clases + apoyo ilimitado</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />4 clases de 1 hora
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Consultas por WhatsApp
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                  Descuento del 25%
                </li>
              </ul>
              <Link
                href="https://wa.me/50589307821?text=Hola,%20me%20interesa%20el%20paquete%20mensual"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contratar Paquete
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
