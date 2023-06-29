import styles from './page.module.css'
import Board from "../../container/Board"
import  DefaultView  from 'react-responsive';


export default function Home() {
  return (
    <DefaultView>
      <div className={styles.container}>
         <main className={styles.main}>

        <Board />
      </main>
    </div>
    </DefaultView>
       
      

  )
}
