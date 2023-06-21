import React from 'react'
import "./Blog.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Blog = () => {
  return (
    <div className='blog'>
      <Navbar />
      <Announcement />
      <div className="blogContainer">
        <div className='blog'>
          <h1 className="blog__title">Blog</h1>
          <div className="introductionBlog">
          <span>Bem-vindo(a) ao blog de redirecionamento da ALCLISBOA., onde você encontrará os melhores artigos de moda em um só lugar. Nossa equipe seleciona cuidadosamente o conteúdo de diferentes sites parceiros, oferecendo tendências, dicas de estilo, acessórios,inspiração e informações relevantes. Além disso, abordamos tópicos relacionados a cuidados com a pele, maquiagem e bem-estar. Simplificamos sua busca por informações de moda, redirecionando você para os sites que possuem os artigos em destaque. Mantenha-se atualizado(a) sobre as últimas novidades do mundo fashion através do nosso blog.</span>
          </div>
          <div className="blog__post">
            <img
              className="blog__post-image"
              src="https://blog.stz.com.br/painel/public/img/files/combinar-cores.png"
              alt="Blog Post"
            />
            <div className="blog__post-content">
              <h2 className="blog__post-title">Como combinar cores em um look: um guia para o seu visual</h2>
              <p className="blog__post-text">

                Você tem dúvidas sobre como combinar cores? Aprenda neste post como criar looks com diferentes tons e paletas ousadas.
              </p>
              <a className="blog__post-link" href="https://blog.stz.com.br/moda/combinar-cores">
                Leia Mais
              </a>
            </div>
          </div>

          <div className="blog__post">
            <img
              className="blog__post-image"
              src="https://images.pexels.com/photos/15864617/pexels-photo-15864617/free-photo-of-cada-cicatriz-tem-uma-historia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Blog Post"
            />
            <div className="blog__post-content">
              <h2 className="blog__post-title">Tipos de decote: qual usar e quando?</h2>
              <p className="blog__post-text">
              Existem muitos tipos de decote que, quando sabiamente usados, podem valorizar e muito a silhueta de seu corpo. 
              </p>
              <a className="blog__post-link" href="https://sacadaonline.com.br/saiba-como-usar-os-diferentes-tipos-de-decote/">
                Leia Mais
              </a>
            </div>
          </div>

          <div className="blog__post">
            <img
              className="blog__post-image"
              src="https://blog.stz.com.br/painel/public/img/files/como-usar-scarpin.png"
              alt="Blog Post"
            />
            <div className="blog__post-content">
              <h2 className="blog__post-title"> Descubra como usar scarpin e arrase em todos os seus looks</h2>
              <p className="blog__post-text">
                Você ainda tem dúvidas de como usar scarpin? Neste conteúdo, vamos te apresentar melhor o sapato e como combiná-lo em looks.
              </p>
              <a className="blog__post-link" href="https://blog.stz.com.br/moda/como-usar-scarpin">
                Leia Mais
              </a>
            </div>
          </div>

          <div className="blog__post">
            <img
              className="blog__post-image"
              src="https://blog.stz.com.br/painel/public/img/files/calcados-para-gestantes.jpg"
              alt="Blog Post"
            />
            <div className="blog__post-content">
              <h2 className="blog__post-title">Calçados para gestantes: tudo o que você precisa saber</h2>
              <p className="blog__post-text">
                Quer acertar no calçado para gestante? Confira neste post o nosso guia para arrasar na sua compra!
              </p>
              <a className="blog__post-link" href="https://blog.stz.com.br/moda/calcados-para-gestantes">
                Leia Mais
              </a>
            </div>
          </div>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog
