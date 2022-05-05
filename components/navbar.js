import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar(){
    return(
        <navbar className={styles.navbar}>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="">WHAT'S NEW</Link></li>
                    <li><Link href="">WOMEN</Link></li>
                    <li><Link href="">DRESSES</Link></li>
                    <li><Link href="">CLASSIC</Link></li>
                    <li><Link href="">CURVE</Link></li>
                    <li><Link href="">CAMPAIGN</Link></li>
                </ul>
            </nav>
            <div>
                <Image src='https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/logo.png' width={150} height={40}/>
            </div>
            <div className={styles.imgs}>
                <div className={styles.igs}>
                    <Image className={styles.igs} src='https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/searchicon.jpg' height={20} width={20}/>
                    <Image className={styles.igs} src='https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/profileicon.jpg' height={20} width={20}/>
                    <Image className={styles.igs} src='https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/b9aa6678ed5f35706e0350c33005cfd6.png' height={20} width={20}/>
                </div>
            </div>
        </navbar>
    )
}