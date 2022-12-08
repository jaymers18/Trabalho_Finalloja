
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'
import img from '../styles/img/vector.png';
import Footer from '../components/footer';

export default function Home(){
  return(
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>Loja Online!</h3>
        <p>Aproveita que está aqui e dá uma olhada em nossos produtos!!</p>
        <Link href='/products'>Visitar Produtos!</Link>
      </div>
      <div className={styles.container_img}>
        <Image className={styles.img} src={img} alt="vector"  />
      </div>
      <Footer />
    </div>
  )
}

