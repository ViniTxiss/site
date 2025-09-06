import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Import das imagens
import restauranteImg from '../assets/restaurante-sabor-arte.jpg'
import lojaModaImg from '../assets/loja-moda-feminina.jpg'
import consultoriaImg from '../assets/consultoria-empresarial.jpg'
import clinicaImg from '../assets/clinica-odontologica.jpg'
import artesanatoImg from '../assets/loja-artesanato.jpg'
import academiaImg from '../assets/academia-fitness.jpg'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Restaurante Sabor & Arte",
      category: "institutional",
      categoryLabel: "Site Institucional",
      description: "Site elegante para restaurante com cardápio online, sistema de reservas e galeria de fotos. Design responsivo e otimizado para conversão.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: restauranteImg,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Loja Moda Feminina",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      description: "Loja online completa com catálogo de produtos, carrinho de compras, pagamento integrado e painel administrativo.",
      technologies: ["React", "Stripe", "Firebase", "Material-UI"],
      image: lojaModaImg,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Consultoria Empresarial",
      category: "landing",
      categoryLabel: "Landing Page",
      description: "Landing page otimizada para captura de leads com formulários inteligentes, depoimentos e call-to-actions estratégicos.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      image: consultoriaImg,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Clínica Odontológica",
      category: "institutional",
      categoryLabel: "Site Institucional",
      description: "Site profissional para clínica com agendamento online, informações sobre tratamentos e equipe médica.",
      technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
      image: clinicaImg,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Loja de Artesanato",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      description: "E-commerce para produtos artesanais com galeria de imagens, sistema de avaliações e integração com redes sociais.",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
      image: artesanatoImg,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Academia Fitness",
      category: "landing",
      categoryLabel: "Landing Page",
      description: "Landing page para academia com planos de assinatura, calculadora de IMC e formulário de contato otimizado.",
      technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Netlify"],
      image: academiaImg,
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'institutional', label: 'Sites Institucionais' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'landing', label: 'Landing Pages' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Meus Projetos
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça alguns sites que desenvolvi para pequenas empresas. 
            Cada projeto foi criado com foco na experiência do usuário e resultados de negócio.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? "bg-teal-600 hover:bg-teal-700" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Site
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                    {project.categoryLabel}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-teal-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  {project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              Nenhum projeto encontrado para esta categoria.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-slate-50 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Gostou do que viu?
          </h3>
          <p className="text-slate-600 mb-6">
            Vamos conversar sobre como posso ajudar sua empresa a ter um site profissional.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
            <a href="/contact">Solicitar Orçamento</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

