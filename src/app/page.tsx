import styles from './page.module.css'
import Board from "../../container/Board"


export default function Home() {
  return (
      <div className={styles.container}>
         <main className={styles.main}>

        <Board />
      </main>
    </div>
       
      

  )
}
