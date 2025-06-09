import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScheduleSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Horarios</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Estamos disponibles cuando nos necesites
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Horarios flexibles adaptados a tu rutina de estudios
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Horarios de Atención</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Lunes - Viernes</span>
                  <span className="font-semibold text-slate-800">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Sábados</span>
                  <span className="font-semibold text-slate-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Domingos</span>
                  <span className="font-semibold text-slate-800">2:00 PM - 8:00 PM</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>Nota:</strong> Para emergencias académicas, estamos disponibles 24/7 por WhatsApp con
                  respuesta garantizada en menos de 2 horas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Reserva tu Cita</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Agenda tu clase personalizada o consulta sobre tareas. Nos adaptamos a tu horario y disponibilidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span>Respuesta inmediata por WhatsApp</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span>Confirmación de cita en menos de 1 hora</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span>Recordatorios automáticos</span>
                </div>
              </div>
              <Link
                href="https://wa.me/50589307821?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6"
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Agendar Ahora
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
