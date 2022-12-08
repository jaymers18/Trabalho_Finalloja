
import styles from "../styles/Footer.module.css"

   function Footer () {
      return (
         <div className={styles.container}>
            <p>
               Feito por:
               <strong> Beatriz Diniz </strong>
               e 
               <strong> Jayme Neto </strong>
            </p>
         </div>
      )
   }

   export default Footer;