import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, ShoppingCart, Target, Star, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Import das imagens
import restauranteImg from '../assets/restaurante-sabor-arte.jpg'
import lojaModaImg from '../assets/loja-moda-feminina.jpg'
import consultoriaImg from '../assets/consultoria-empresarial.jpg'

const Home = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-teal-600" />,
      title: "Sites Institucionais",
      description: "Sites profissionais que apresentam sua empresa de forma elegante e convincente."
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-teal-600" />,
      title: "E-commerce",
      description: "Lojas online completas para vender seus produtos com segurança e facilidade."
    },
    {
      icon: <Target className="h-8 w-8 text-teal-600" />,
      title: "Landing Pages",
      description: "Páginas focadas em conversão para capturar leads e gerar vendas."
    }
  ]

  const featuredProjects = [
    {
      title: "Restaurante Sabor & Arte",
      category: "Site Institucional",
      description: "Site elegante para restaurante com cardápio online e sistema de reservas.",
      image: restauranteImg
    },
    {
      title: "Loja Moda Feminina",
      category: "E-commerce",
      description: "Loja online completa com catálogo de produtos e pagamento integrado.",
      image: lojaModaImg
    },
    {
      title: "Consultoria Empresarial",
      category: "Landing Page",
      description: "Landing page otimizada para captura de leads e conversão de clientes.",
      image: consultoriaImg
    }
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "50+", label: "Clientes Satisfeitos" },
    { icon: <Star className="h-6 w-6" />, number: "100+", label: "Projetos Concluídos" },
    { icon: <Clock className="h-6 w-6" />, number: "3+", label: "Anos de Experiência" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Criação de Sites para{' '}
                <span className="text-teal-400">Pequenas Empresas</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Transformo suas ideias em sites profissionais que geram resultados. 
                Desenvolvimento moderno, responsivo e otimizado para conversão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link to="/portfolio">
                    Ver Meus Projetos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800">
                  <Link to="/contact">
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-teal-400 to-green-500 rounded-lg p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-3">
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-32 bg-gradient-to-r from-teal-100 to-green-100 rounded"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 bg-teal-600 rounded w-20"></div>
                      <div className="h-8 bg-slate-200 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Como Posso Ajudar Sua Empresa
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofereço soluções completas de desenvolvimento web, desde sites institucionais 
              até e-commerce complexos, sempre focando na experiência do usuário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-slate-600">
              Conheça alguns dos sites que desenvolvi para pequenas empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-teal-600 font-medium mb-2">{project.category}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link to="/portfolio">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para ter seu site profissional?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Vamos conversar sobre seu projeto e como posso ajudar sua empresa a crescer online.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-slate-100">
            <Link to="/contact">
              Entre em Contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

