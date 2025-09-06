import React from 'react'
import { Code, ShoppingCart, Target, Smartphone, Search, Headphones, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-teal-600" />,
      title: "Design e Desenvolvimento",
      description: "Sites personalizados e responsivos, desenvolvidos com as mais modernas tecnologias web.",
      features: [
        "Design responsivo para todos os dispositivos",
        "Código limpo e otimizado",
        "Integração com APIs e serviços externos",
        "Painel administrativo personalizado"
      ],
      technologies: ["React", "Node.js", "Python", "HTML5", "CSS3", "JavaScript"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-teal-600" />,
      title: "E-commerce",
      description: "Lojas online completas com sistema de pagamento, gestão de produtos e relatórios de vendas.",
      features: [
        "Catálogo de produtos com filtros",
        "Carrinho de compras e checkout seguro",
        "Integração com gateways de pagamento",
        "Painel de controle para vendas"
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Firebase"]
    },
    {
      icon: <Target className="h-12 w-12 text-teal-600" />,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão, focadas em capturar leads e gerar vendas.",
      features: [
        "Design focado em conversão",
        "Formulários inteligentes",
        "Integração com ferramentas de marketing",
        "Testes A/B para otimização"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Mailchimp"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-teal-600" />,
      title: "Responsividade",
      description: "Garantia de que seu site funcione perfeitamente em todos os dispositivos.",
      features: [
        "Design mobile-first",
        "Testes em múltiplos dispositivos",
        "Performance otimizada",
        "Experiência de usuário consistente"
      ],
      technologies: ["Bootstrap", "Tailwind CSS", "Flexbox", "CSS Grid"]
    },
    {
      icon: <Search className="h-12 w-12 text-teal-600" />,
      title: "SEO e Performance",
      description: "Otimização para mecanismos de busca e performance para melhor posicionamento.",
      features: [
        "Otimização on-page",
        "Velocidade de carregamento",
        "Meta tags e estrutura semântica",
        "Google Analytics e Search Console"
      ],
      technologies: ["Google Analytics", "Google Search Console", "Schema.org"]
    },
    {
      icon: <Headphones className="h-12 w-12 text-teal-600" />,
      title: "Manutenção e Suporte",
      description: "Suporte contínuo para manter seu site sempre atualizado e funcionando perfeitamente.",
      features: [
        "Atualizações de segurança",
        "Backup automático",
        "Monitoramento 24/7",
        "Suporte técnico especializado"
      ],
      technologies: ["cPanel", "WordPress", "SSL", "CDN"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Briefing",
      description: "Entendemos suas necessidades, objetivos e público-alvo para criar a estratégia ideal."
    },
    {
      step: "02",
      title: "Design",
      description: "Criamos wireframes e protótipos que refletem a identidade da sua marca."
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Codificamos seu site com as melhores práticas e tecnologias modernas."
    },
    {
      step: "04",
      title: "Entrega",
      description: "Testamos, otimizamos e entregamos seu site pronto para gerar resultados."
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Meus Serviços
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofereço soluções completas de desenvolvimento web, desde sites institucionais 
            até e-commerce complexos, sempre focando na experiência do usuário e resultados de negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-slate-700 mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-16 bg-slate-50 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-slate-600">
              Meu processo de trabalho é transparente e focado em resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-300 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-slate-600">
              Soluções flexíveis para diferentes necessidades e orçamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Site Básico</CardTitle>
                <div className="text-3xl font-bold text-teal-600">
                  R$ 1.500
                  <span className="text-sm font-normal text-slate-600">/projeto</span>
                </div>
                <CardDescription>
                  Ideal para pequenos negócios que precisam de presença online
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Até 5 páginas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Design responsivo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Formulário de contato</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>SEO básico</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>30 dias de suporte</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative border-teal-600 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Site Profissional</CardTitle>
                <div className="text-3xl font-bold text-teal-600">
                  R$ 3.500
                  <span className="text-sm font-normal text-slate-600">/projeto</span>
                </div>
                <CardDescription>
                  Para empresas que querem se destacar da concorrência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Até 10 páginas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Design personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Painel administrativo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>SEO avançado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>90 dias de suporte</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Google Analytics</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">E-commerce</CardTitle>
                <div className="text-3xl font-bold text-teal-600">
                  R$ 6.500
                  <span className="text-sm font-normal text-slate-600">/projeto</span>
                </div>
                <CardDescription>
                  Loja online completa para vender seus produtos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Páginas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Sistema de pagamento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Gestão de produtos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Relatórios de vendas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>6 meses de suporte</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Treinamento incluído</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Vamos conversar sobre suas necessidades e criar a solução ideal para sua empresa.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-slate-100">
            <a href="/contact" className="flex items-center">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </section>
      </div>
    </div>
  )
}

export default Services

