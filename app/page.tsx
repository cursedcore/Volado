"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Star,
  CheckCircle,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ScheduleSection } from "@/components/schedule-section"

export default function TutoringLanding() {
  useEffect(() => {
    // Smooth scroll para los enlaces de navegación
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/logo-volado.jpg" alt="Volado Logo" width={50} height={50} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-slate-800">VOLADO</h1>
                <p className="text-sm text-emerald-600">Apoyo Académico</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Inicio
              </Link>
              <Link href="#servicios" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Servicios
              </Link>
              <Link href="#nosotros" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Quiénes somos
              </Link>
              <Link href="#contacto" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
                Contacto
              </Link>
            </nav>
            <Link
              href="https://wa.me/50589307821?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20apoyo%20académico"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-slate-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  ✨ Apoyo Académico Personalizado
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                  ¿Problemas con matemáticas o física? <span className="text-emerald-600">¡Te ayudamos!</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Clases personalizadas y resolución de tareas para estudiantes de secundaria y universidad en
                  Nicaragua.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/50589307821?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20apoyo%20académico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Ver Servicios
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Tutores certificados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Clases personalizadas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* La imagen grande del hero debe mostrar estudiantes estudiando matemáticas/física, 
                   tutores enseñando, o elementos visuales relacionados con educación académica.
                   Puede ser una foto de estudiantes con libros, calculadoras, fórmulas en pizarra, etc. */}
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Estudiantes aprendiendo matemáticas y física"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Star className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">4.9/5</p>
                    <p className="text-sm text-slate-600">Satisfacción estudiantil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Nuestros Servicios</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Te apoyamos en cada paso de tu aprendizaje
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ofrecemos servicios personalizados para que domines las matemáticas y la física
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Resolución de Tareas</h3>
                <p className="text-slate-600 mb-6">
                  Te ayudamos a resolver tus tareas paso a paso, explicándote cada procedimiento para que aprendas.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Explicación detallada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Entrega rápida
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Clases Personalizadas</h3>
                <p className="text-slate-600 mb-6">
                  Clases individuales adaptadas a tu ritmo de aprendizaje y necesidades específicas.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Horarios flexibles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Metodología adaptada
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Asesoría para Exámenes</h3>
                <p className="text-slate-600 mb-6">
                  Preparación intensiva previa a tus exámenes con ejercicios prácticos y repaso de conceptos clave.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Ejercicios de práctica
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    Repaso intensivo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Quiénes Somos</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Conoce a nuestros tutores</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Profesionales apasionados por la enseñanza con amplia experiencia académica
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Tutor de Matemáticas"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Dr. Carlos Mendoza</h3>
                <p className="text-emerald-600 font-medium mb-4">Especialista en Matemáticas</p>
                <p className="text-slate-600 mb-4">
                  Doctorado en Matemáticas Aplicadas, Universidad Nacional. 8 años de experiencia en docencia
                  universitaria.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge variant="secondary">Cálculo</Badge>
                  <Badge variant="secondary">Álgebra</Badge>
                  <Badge variant="secondary">Estadística</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Tutora de Física"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Ing. María González</h3>
                <p className="text-emerald-600 font-medium mb-4">Especialista en Física</p>
                <p className="text-slate-600 mb-4">
                  Ingeniería Física, UCA. Maestría en Física Teórica. 6 años de experiencia en tutorías personalizadas.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge variant="secondary">Mecánica</Badge>
                  <Badge variant="secondary">Termodinámica</Badge>
                  <Badge variant="secondary">Óptica</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Testimonios</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Lo que dicen nuestros estudiantes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Gracias a VOLADO logré aprobar cálculo diferencial. Las explicaciones son muy claras y los tutores
                  muy pacientes."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Estudiante"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Ana Rodríguez</p>
                    <p className="text-sm text-slate-600">Estudiante de Ingeniería</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Excelente servicio. Me ayudaron con física y ahora entiendo conceptos que antes me parecían
                  imposibles."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Estudiante"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Luis Martínez</p>
                    <p className="text-sm text-slate-600">Estudiante de Bachillerato</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-50 border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Muy recomendado. Los tutores son profesionales y siempre están disponibles para resolver dudas."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Estudiante"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Carmen Flores</p>
                    <p className="text-sm text-slate-600">Estudiante Universitaria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Schedule Section */}
      <ScheduleSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">¿Listo para mejorar tus calificaciones?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contáctanos ahora y recibe tu primera consulta gratuita
          </p>
          <Link
            href="https://wa.me/50589307821?text=Hola,%20estoy%20listo%20para%20mejorar%20mis%20calificaciones.%20¿Podrían%20ayudarme?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/logo-volado.jpg" alt="Volado Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-bold">VOLADO</h3>
                  <p className="text-emerald-400 text-sm">Apoyo Académico</p>
                </div>
              </div>
              <p className="text-slate-300">
                Tu éxito académico es nuestra misión. Especialistas en matemáticas y física para estudiantes
                nicaragüenses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Resolución de tareas</li>
                <li>Clases personalizadas</li>
                <li>Asesoría para exámenes</li>
                <li>Apoyo universitario</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+505 8930-7821</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@volado.ni</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Managua, Nicaragua</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="https://wa.me/50589307821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/_cursedcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/amaru.monTNgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
              <div>
                <h5 className="font-medium mb-3">Métodos de Pago</h5>
                <div className="space-y-2 text-slate-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-white">B</span>
                    </div>
                    <span>Banpro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-white">L</span>
                    </div>
                    <span>Lafise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-white">BAC</span>
                    </div>
                    <span>BAC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 VOLADO - Apoyo Académico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
