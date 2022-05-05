import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Product.module.css'

export default function Product() {

    const quickView = () => {
        console.log('Hello World')
    }

    return (
        <div className={styles.singleProduct}>
            <div className={styles.Image} onClick={quickView}>
                <Link href="">
                    <Image objectFit="cover" layout="fill" src={'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2465/25665/ETCH-SIZING-TEMPLATE1_05__08230.1642368537.jpg'}></Image>
                </Link>
            </div>
            <div className={styles.details}>
                <Link href=""><p className={styles.p1}>Broderie Anglaise Tiered Ruffle Maxi Dress In White</p></Link>
                <p className={styles.p2}>BOHEMIAN TRADERS</p>
                <p className={styles.p3}>$ 329.5</p>
            </div>
        </div>
    )
}