import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Artigo } from './components/Artigo'

function App() {
 

  return (
    <div>
      <Header />
      <div className={styles.page}>
        <Navbar />
      </div>

      <div className={styles.wrapper}
      >
        <main>
        <Artigo imageUrl="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" 

        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem corrupti provident, cum autem non, omnis recusandae minus odio praesentium sed rerum. Quidem sunt deleniti dolores amet quam labore ad." />

        <Artigo imageUrl="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" 

        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem corrupti provident, cum autem non, omnis recusandae minus odio praesentium sed rerum. Quidem sunt deleniti dolores amet quam labore ad." />

        <Artigo imageUrl="https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0" 

        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem corrupti provident, cum autem non, omnis recusandae minus odio praesentium sed rerum. Quidem sunt deleniti dolores amet quam labore ad." />

        
        </main>
      </div>

    </div>
  )
}

export default App


