import React from 'react'
import { Download, Award, Users, Clock, Code, Lightbulb, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Python/Flask", level: 82 },
    { name: "WordPress", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "SEO", level: 80 }
  ]

  const experience = [
    {
      year: "2024 - Presente",
      title: "Desenvolvedor Web Freelancer",
      company: "Autônomo",
      description: "Desenvolvimento de sites e aplicações web para pequenas e médias empresas, focando em soluções personalizadas e resultados de negócio."
    },
    {
      year: "2022 - 2024",
      title: "Desenvolvedor Frontend",
      company: "TechSolutions Ltda",
      description: "Desenvolvimento de interfaces web responsivas e aplicações React para diversos clientes do setor corporativo."
    },
    {
      year: "2021 - 2022",
      title: "Desenvolvedor Junior",
      company: "WebStudio",
      description: "Início da carreira profissional, trabalhando com WordPress, HTML, CSS e JavaScript em projetos de pequeno e médio porte."
    }
  ]

  const values = [
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: "Qualidade",
      description: "Comprometo-me a entregar sempre o melhor resultado, utilizando as melhores práticas de desenvolvimento e design."
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-600" />,
      title: "Pontualidade",
      description: "Respeito prazos e mantenho comunicação transparente sobre o andamento de cada projeto."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Suporte",
      description: "Ofereço suporte contínuo e estou sempre disponível para ajudar com dúvidas e melhorias."
    }
  ]

  const certifications = [
    "Certificação React - Meta",
    "Google Analytics Certified",
    "AWS Cloud Practitioner",
    "Scrum Foundation Professional"
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Sobre Mim
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desenvolvedor web apaixonado por criar soluções digitais que fazem a diferença 
            para pequenas empresas crescerem online.
          </p>
        </div>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Olá, eu sou <span className="text-teal-600">João Silva</span>
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Sou desenvolvedor web há mais de 3 anos, especializado em criar sites 
                profissionais para pequenas empresas. Minha paixão é transformar ideias 
                em soluções digitais que realmente funcionam.
              </p>
              <p>
                Acredito que cada empresa, independente do tamanho, merece ter uma presença 
                online forte e profissional. Por isso, trabalho de forma próxima com meus 
                clientes para entender suas necessidades e criar sites que não apenas 
                impressionam visualmente, mas também geram resultados.
              </p>
              <p>
                Quando não estou codificando, gosto de estudar novas tecnologias, 
                contribuir com projetos open source e ajudar outros desenvolvedores 
                iniciantes em sua jornada.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <Code className="h-32 w-32 text-teal-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Minhas Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-slate-700">{skill.name}</span>
                  <span className="text-slate-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Experiência Profissional
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-teal-600 font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-slate-500 font-medium mt-2 md:mt-0">
                      {exp.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Meus Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications & Education */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Certificações
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-teal-600" />
                    <span className="text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Formação
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Tecnologia em Sistemas para Internet
                  </h4>
                  <p className="text-slate-600">FATEC São Paulo - 2019-2021</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Curso Completo de Desenvolvimento Web
                  </h4>
                  <p className="text-slate-600">Udemy - 2020</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    React - The Complete Guide
                  </h4>
                  <p className="text-slate-600">Udemy - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="bg-slate-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Curiosidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-slate-600">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-slate-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">24h</div>
              <div className="text-slate-600">Tempo de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">3+</div>
              <div className="text-slate-600">Anos de Experiência</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estou sempre em busca de novos desafios e projetos interessantes.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-slate-100">
            <a href="/contact">Entre em Contato</a>
          </Button>
        </section>
      </div>
    </div>
  )
}

export default About

