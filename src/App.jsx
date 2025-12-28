import { useState, useEffect } from 'react'
import { Instagram, Camera, Youtube, ExternalLink, Clapperboard, Play } from 'lucide-react'

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
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center flex-shrink-0">
          <img src="/assets/LOGO.png" alt="Logo" className="h-8 w-auto object-contain translate-y-[4px]" />
        </a>
          
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

      <section className="hidden md:block w-full pt-16">
        <img 
          src="/assets/BANNER.webp" 
          alt="Banner" 
          className="w-full h-auto object-contain"
        />
      </section>      

      <section id="inicio" className="max-h-[600px] flex items-center justify-center py-36 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 animate-fade-in text-center">
            <div className="flex items-center justify-center gap-3">
             <h1 className="text-3xl md:text-5xl font-bold">Capturando a Essência</h1>
            </div>
            
            <p className="text-base font-light leading-relaxed text-white/80">
             Fotografia e audiovisual vão além da técnica — são a minha forma de contar histórias.
             Transformo ideias em imagens que comunicam identidade, emoção e propósito.
              Cada frame é cuidadosamente planejado para traduzir o ritmo, a estética e a essência de projetos musicais, criando narrativas visuais autênticas e impactantes. Meu trabalho é eternizar momentos únicos e dar forma visual a movimentos que emergem da música e da cultura.
            </p>

            <div className="flex gap-4 pt-4 justify-center">
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
        </div>
      </section>

      <section id="trabalho" className="pt-8 pb-16 px-6">
        <div className="container mx-auto">
          <div className='flex items-center justify-center gap-2 mb-12'>
            <Camera size={32} className="text-primary-mid"/>
            <h2 className="text-3xl md:text-4xl font-bold">Fotografias</h2>
          </div>
          
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {[
            { img: 'FOTO1', title: 'Still Cam', desc: 'Cobertura fotográfica de videoclipe de trap na zona leste', link: 'https://www.behance.net/gallery/235319315/Jovem-Flip-Fotografia-Still' },
            { img: 'FOTO2', title: 'Still Cam', desc: 'Registro de gravação de EP com artista local', link: 'https://www.behance.net/gallery/233107649/Lissa-MC-Ensaio-Fotografico' },
            { img: 'FOTO3', title: 'Still Cam', desc: 'Cobertura fotográfica de videoclipe de trap na zona leste', link: 'https://www.behance.net/gallery/241130641/For-My-Suzy-Fotografia-Still' },
            { img: 'FOTO4', title: 'Ensaio Fotográfico', desc: 'Sessão fotográfica em estúdio', link: 'https://www.behance.net/gallery/235319769/Jhulius-Fotografia-Still' },
            { img: 'FOTO5', title: 'Still Cam', desc: 'Registro de gravação de EP com artista local', link: 'https://www.behance.net/gallery/241130379/KAKAU-Fotografia-Still' },
            { img: 'FOTO6', title: 'Still Cam', desc: 'Cobertura fotográfica de videoclipe de trap na zona sul', link: 'https://www.behance.net/gallery/235319421/Esdras-Lira-Fotografia-Still' },
            { img: 'FOTO7', title: 'Still Cam', desc: 'Cobertura fotográfica de videoclipe de trap na zona sul', link: 'https://www.behance.net/gallery/218891577/Te-Fazer-Dancar-Making-Of' },
            { img: 'FOTO8', title: 'Still Cam', desc: 'Cobertura fotográfica de videoclipe de trap na zona sul', link: 'https://www.behance.net/gallery/232341149/No-Quase-Photoshoot' },
          ].map((work, index) => (
            <a 
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-sm cursor-pointer block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={`/assets/${work.img}.jpg`} 
                alt={work.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-sm text-white/80">{work.desc}</p>
              </div>
            </a>
          ))}
        </div>

          <div className="flex justify-center mb-20">
            <a 
              href="https://www.behance.net/guqroz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-primary-mid hover:bg-alternative transition-colors rounded-sm text-sm font-medium"
            >
              <ExternalLink size={18} />
              Ver Mais
            </a>
          </div>

          <div className="max-w-6xl mx-auto py-8 md:py-16">
            <div className='flex items-center justify-center gap-2 mb-12'>
            <Camera size={32} className="text-primary-mid"/>
            <h2 className="text-3xl md:text-4xl font-bold">Videoclipes</h2>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              {[
                { img: 'CLIPE1', link: 'https://youtu.be/NWwe_jbohLY?si=TVI_jrdwko6sr1BD' },
                { img: 'CLIPE2', link: 'https://www.youtube.com/watch?v=SKNco2gwOks&list=PLde8dnBAaMVG38H-uI92esOI1dGycCOoR&index=10&pp=gAQBiAQB8AUBsAgC' },
                { img: 'CLIPE3', link: 'https://youtu.be/GovMGcebVP0?si=_NTnM7vHY_OUDqsQ' },
                { img: 'CLIPE4', link: 'https://www.youtube.com/watch?v=zOXu-jPHq1U&list=PLde8dnBAaMVG38H-uI92esOI1dGycCOoR&index=2&pp=gAQBiAQB8AUBsAgC' },
              ].map((clipe, index) => (
                <a
                  key={index}
                  href={clipe.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-sm"
                >
                  <img 
                    src={`/assets/${clipe.img}.webp`}
                    alt={`Videoclipe ${index + 1}`}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 md:py-36 px-6 bg-primary-dark/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/CTA1.jpg" 
                alt="Contato"
                className="w-full h-[500px] object-cover object-[center_0%] rounded-sm shadow-2xl"
              />
            </div>

            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Criar Juntos</h2>
              <p className="text-white/80 mb-8">
                Tem um projeto em mente? Entre em contato e vamos transformar sua visão em realidade.
              </p>

              <div className="space-y-6">
                <a 
                  href="https://www.instagram.com/guqroz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-primary/50 border border-white/10 rounded-sm hover:border-primary-mid transition-colors group"
                >
                  <Instagram size={24} className="text-primary-mid flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm text-white/60">Instagram</p>
                    <p className="font-medium group-hover:text-primary-mid transition-colors">@guqroz</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5511914958005?text=Ol%C3%A1%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Voc%C3%AA%20tem%20disponibilidade%3F"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-primary/50 border border-white/10 rounded-sm hover:border-primary-mid transition-colors group"
                >
                  <svg className="w-6 h-6 text-primary-mid flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-sm text-white/60">WhatsApp</p>
                    <p className="font-medium group-hover:text-primary-mid transition-colors">+55 (11) 91495-8005</p>
                  </div>
                </a>

                <a 
                  href="mailto:guqroz@gmail.com" 
                  className="flex items-center gap-4 p-4 bg-primary/50 border border-white/10 rounded-sm hover:border-primary-mid transition-colors group"
                >
                  <svg className="w-6 h-6 text-primary-mid flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium group-hover:text-primary-mid transition-colors">guqroz@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-primary-mid/10 border border-primary-mid/20 rounded-sm">
                <p className="text-sm text-white/70 italic">
                  "Olá! Vi seu trabalho e gostaria de conversar sobre um projeto. Você tem disponibilidade?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-36 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/HERO.jpg" 
                alt="Sobre Mim"
                className="w-full h-[500px] object-cover object-[center_20%] object-top rounded-sm shadow-2xl"
              />
            </div>

            <div className="space-y-6 text-center md:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Sobre Mim</h2>   
              <p className="text-white/80 leading-relaxed text-sm">
               Meu nome é Gustavo Queiroz, tenho 21 anos e atuo com fotografia e audiovisual, unindo técnica, sensibilidade e narrativa visual em cada projeto. Acredito no poder da imagem como forma de expressão, comunicação e construção de identidade.
              </p>

              <p className="text-white/80 leading-relaxed text-sm">
              Minha trajetória começou no final de 2021, a partir de sessões fotográficas em estúdio com amigos, principalmente em ambientes musicais. Foi nesse processo que desenvolvi meu olhar criativo e passei a investir constantemente em aprendizado, equipamentos e experiências práticas, expandindo minha atuação para ensaios fotográficos, fotografia de shows ao vivo e produções visuais ligadas à música.
              </p>

              <p className="text-white/80 leading-relaxed text-sm">
              Com o tempo, esse caminho me levou naturalmente ao audiovisual, onde iniciei a produção de clipes musicais e aprofundei meus conhecimentos em captação, edição e direção. Hoje atuo de forma autônoma, aberto a diferentes tipos de projetos, sempre com o compromisso de entregar trabalhos autênticos, profissionais e alinhados à identidade de cada cliente.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto flex items-center justify-center gap-1 text-sm text-white/40">
          <span>Desenvolvido por</span>
          <img src="assets/LOGO_SILEO_PNG_B.png" alt="SILEO" className="-translate-y-0.5 h-4 opacity-60" />
        </div>
      </footer>

      
      <a
        href="https://wa.me/5511914958005?text=Ol%C3%A1%21%20Vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%20Voc%C3%AA%20tem%20disponibilidade%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] hover:scale-105 transition-transform transition-colors"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
    
  )

  
}


export default App