import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: "Email",
      content: "contato@devwebpro.com",
      link: "mailto:contato@devwebpro.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-600" />,
      title: "Telefone",
      content: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="h-6 w-6 text-teal-600" />,
      title: "Localização",
      content: "São Paulo, SP",
      link: null
    }
  ]

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "O prazo varia de acordo com a complexidade do projeto. Sites básicos ficam prontos em 1-2 semanas, enquanto projetos mais complexos podem levar de 4-8 semanas."
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Todos os projetos incluem um período de suporte gratuito. Também oferecemos planos de manutenção mensal para manter seu site sempre atualizado."
    },
    {
      question: "O site será responsivo?",
      answer: "Absolutamente! Todos os sites que desenvolvo são responsivos e funcionam perfeitamente em dispositivos móveis, tablets e desktops."
    },
    {
      question: "Posso fazer alterações no site depois?",
      answer: "Sim! Desenvolvo sites com painéis administrativos intuitivos para que você possa fazer alterações básicas. Para mudanças mais complexas, estou sempre disponível."
    }
  ]

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Vamos Conversar
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entre em contato para discutir seu projeto. Estou aqui para ajudar 
            sua empresa a ter uma presença online profissional e eficaz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato em até 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-slate-600">
                    Obrigado pelo contato. Responderei em breve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Tipo de Projeto *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="institutional">Site Institucional</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="landing">Landing Page</SelectItem>
                          <SelectItem value="maintenance">Manutenção</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Conte-me mais sobre seu projeto..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-teal-100 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-slate-600 hover:text-teal-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Horário de Atendimento
              </h2>
              <div className="space-y-2 text-slate-600">
                <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong>Sábado:</strong> 9h às 14h</p>
                <p><strong>Domingo:</strong> Fechado</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">
                Resposta Rápida
              </h3>
              <p className="text-slate-600 text-sm">
                Comprometo-me a responder todas as mensagens em até 24 horas. 
                Para urgências, entre em contato via WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefere conversar por telefone?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ligue agora e vamos discutir seu projeto diretamente.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-slate-100">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:+5511999999999">(11) 99999-9999</a>
          </Button>
        </section>
      </div>
    </div>
  )
}

export default Contact

