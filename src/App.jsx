import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Artigo } from './components/Artigo'

function App() {

  function addArticle(){
    event.preventDefault();
    if(event.target.content.value == '' || event.target.url.value == ''){
        console.log("Campos vazios")
    }
    else{

    

    const newArticle = {
      
      content: event.target.content.value,
      imageUrl: event.target.url.value,
    }
    

    setArticle([...articles, newArticle])
    console.log(articles)
    event.target.content.value = ''
    event.target.url.value = ''
    }
  }

  const [articles, setArticle] = useState([
    {
      imageUrl: "https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem corrupti provident, cum autem non, omnis recusandae minus odio praesentium sed rerum. Quidem sunt deleniti dolores amet quam labore ad.",
    }
  ]
  )

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <Navbar />
      </div>

      <div className={styles.wrapper}>
        <main>
        

        {articles.map(article => {
          return (
            <Artigo imageUrl={article.imageUrl} content={article.content} />
          )
        })}

        <form  className={styles.addArticleForm} onSubmit={addArticle}>
        <strong>Digite o caminho da Imagem: </strong>
        <input type="text" name='url'/>
        <strong>Digite o texto</strong>
        <textarea name="content" placeholder='Digite aqui o conteudo'></textarea>
        <button type='submit'>Publicar Artigo</button>
      </form>
        </main>
      
      </div>
      
    </div>
  )
}

export default App


