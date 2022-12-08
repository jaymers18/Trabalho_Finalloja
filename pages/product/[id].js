import axios from "axios";
import Footer from "../../components/footer";
import styles from "../../styles/Product.module.css"

function Product({item = {}}) {
   return(
      <div className={styles.container}>
         <div className={styles.container_img}>
            <img src={item.image} alt="foto do produto" />
         </div>
         <div className={styles.container_form}>
            <h1>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
            <strong>{item.category}</strong>
            <p className={styles.rating}>★★★★★: <strong>{item.rating.rate}</strong> ({item.rating.count} avaliações!)</p>
            <h2>R$ {item.price}</h2>
         </div>
         <Footer />
      </div>
   );
}

export async function getStaticProps(context) {
   const response = await axios.get(
      'https://fakestoreapi.com/products',
      {params: {id:context.params.id}}
   );

   const item = await response.data[context.params.id - 1]; // rever

   return {
      props: {item}, // will be passed to the page component as props
   }
}

export async function getStaticPaths() {
   const response = await axios.get(
      'https://fakestoreapi.com/products'
   );

   const items = await response.data;
   const paths = items.map((item) => {
      return {params:{id:String(item.id)}}
   })

   return {
     paths,
     fallback: true, // can also be true or 'blocking'
   }
 }

export default Product;