import { useState, useEffect } from 'react'
import { Instagram, Camera, Youtube } from 'lucide-react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src="/assets/LOGO.png" alt="Logo" className="h-12 w-auto object-contain" />
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-sm font-light absolute left-1/2 transform -translate-x-1/2">
            <li><a href="#inicio" className="hover:text-primary-mid transition-colors">Início</a></li>
            <li><a href="#trabalho" className="hover:text-primary-mid transition-colors">Trabalho</a></li>
            <li><a href="#contato" className="hover:text-primary-mid transition-colors">Contato</a></li>
          </ul>

          <a 
            href="https://www.instagram.com/guqroz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary-mid transition-colors flex-shrink-0"
          >
            <Instagram size={24} />            
          </a>
        </nav>
      </header>

      <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <Camera size={32} className="text-primary-mid flex-shrink-0" />
              <h1 className="text-3xl md:text-5xl font-bold break-words">Capturando a Essência</h1>
            </div>
            
            <p className="text-lg font-light leading-relaxed text-white/80">
              A fotografia e o videoclipe são mais do que técnica — são a forma como eu vejo o mundo. 
              Cada frame é uma história, cada beat é uma emoção capturada. No universo do trap e do rap, 
              encontrei minha voz visual: crua, autêntica e sem filtros. É sobre imortalizar momentos que 
              definem uma geração, uma cultura, um movimento.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.instagram.com/guqroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-mid hover:bg-alternative transition-colors rounded-sm text-sm font-medium"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@guqroz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 hover:border-primary-mid transition-colors rounded-sm text-sm font-medium"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-delay flex items-center justify-center">
            <img 
              src="/assets/HERO.jpg"
              alt="Fotografia Principal" 
              className="w-full h-[500px] object-cover object-center rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="trabalho" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Trabalhos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { img: 'FOTO1', title: 'Show Underground', desc: 'Cobertura fotográfica de evento trap na zona sul' },
              { img: 'FOTO2', title: 'Sessão de Estúdio', desc: 'Registro de gravação de EP com artista local' },
              { img: 'FOTO3', title: 'Street Session', desc: 'Ensaio urbano com rapper emergente' },
              { img: 'FOTO4', title: 'Festival de Rap', desc: 'Documentação de festival com 5 artistas' },
              { img: 'FOTO5', title: 'Backstage', desc: 'Bastidores de show com 2000+ pessoas' },
              { img: 'FOTO6', title: 'Cypher Noturno', desc: 'Registro de batalha de rimas na madrugada' },
            ].map((work, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={`/assets/${work.img}.jpg`} 
                  alt={work.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-sm text-white/80">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Videoclipe em Destaque</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <a
                href="https://www.youtube.com/watch?v=NWwe_jbohLY&list=PLde8dnBAaMVG38H-uI92esOI1dGycCOoR&pp=gAQB"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-sm"
              >
                <img 
                  src="/assets/CLIPE1.jpg" 
                  alt="Videoclipe"
                  className="w-full h-[500px] object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </a>

              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-bold">Direção e Fotografia</h4>
                <p className="text-lg text-white/80 leading-relaxed">
                  Videoclipe oficial onde assumi a direção completa e fotografia. Um trabalho que captura 
                  a essência do artista, mesclando estética urbana com narrativa visual impactante. 
                  Cada frame foi pensado para transmitir a energia e autenticidade do trap nacional.
                </p>
                <p className="text-white/60">
                  Produção completa: conceito, direção, fotografia e edição de cor.
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=NWwe_jbohLY&list=PLde8dnBAaMVG38H-uI92esOI1dGycCOoR&pp=gAQB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary-mid hover:bg-alternative transition-colors rounded-sm text-sm font-medium mt-4"
                >
                  Assistir no YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6 bg-primary-dark/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/CTA1.jpg" 
                alt="Contato"
                className="w-full h-[500px] object-cover object-center rounded-sm shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Criar Juntos</h2>
              <p className="text-white/80 mb-8">
                Tem um projeto em mente? Entre em contato e vamos transformar sua visão em realidade.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="+55 (11) 99999-9999"
                    className="w-full px-4 py-3 bg-primary border border-white/10 rounded-sm focus:border-primary-mid focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-primary border border-white/10 rounded-sm focus:border-primary-mid focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Instagram</label>
                  <input 
                    type="text" 
                    placeholder="@seuinstagram"
                    className="w-full px-4 py-3 bg-primary border border-white/10 rounded-sm focus:border-primary-mid focus:outline-none transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-mid hover:bg-alternative transition-colors rounded-sm text-sm font-medium mt-6"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/HERO.jpg" 
                alt="Sobre Mim"
                className="w-full h-[500px] object-cover object-top rounded-sm shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-white/80 leading-relaxed">
                Comecei na fotografia por acaso, mas me encontrei de verdade quando mergulhei na cena do trap e do rap. 
                Cada show, cada cypher, cada momento nos bastidores me mostrou que meu trabalho vai além de apertar um botão — 
                é sobre contar histórias reais, sem romantização.
              </p>
              <p className="text-white/80 leading-relaxed">
                Minha visão é simples: capturar a energia bruta, a autenticidade e a cultura que pulsa nas ruas. 
                Trabalho com artistas que têm algo a dizer, que vivem o que cantam. Meu objetivo é eternizar esses momentos 
                e mostrar ao mundo a força dessa geração.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm text-white/40">
          <span>Desenvolvido por</span>
          <img src="/assets/SILEO.png" alt="SILEO" className="h-4 opacity-60" />
        </div>
      </footer>
    </div>
  )
}

export default App