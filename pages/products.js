import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/Products.module.css';

function Products({itens}){
    return(
        <div className={styles.container}>
            <h3>Nossos Produtos:</h3>
            <div className={styles.container_products}>
                {itens.map((item) =>(
                    <div key={item.id} className={styles.item} >
                        {/* <p>{item.title}</p> */}
                        <img src={item.image} alt={item.title} />
                        <Link href='/product/[id]' as={`/product/${item.id}`} >Saiba Mais</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return{
        props: {itens:data}
    }
}

export default Products;