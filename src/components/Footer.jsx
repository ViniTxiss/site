import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              DevWeb<span className="text-teal-400">Pro</span>
            </h3>
            <p className="text-slate-300 mb-4">
              Criando sites profissionais que ajudam pequenas empresas a crescer online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contato@devwebpro.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">contato@devwebpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 DevWebPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

