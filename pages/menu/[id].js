import Link from "next/link";
import ProductCard from "../../components/productCard";
import styles from '../../styles/clothList.module.css'

export default function ClothList(){
    return (
        <div className={styles.ClothList}>
            <div>
                <Link href="/">HOME</Link>/<span>WHATS'S NEW</span>
            </div>
            <div className={styles.main}>
                <div className={styles.head}>
                    <p>WHATS'S NEW</p>
                    <div className={styles.filters}>
                        <div className={styles.refine}>REFINE</div>
                        <div className={styles.sort}>SORT</div>
                    </div>
                </div>
                <div className={styles.cardList}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}
