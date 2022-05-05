import Image from "next/image"
import styles from '../styles/clothPage.module.css'

export default function clothPage(){
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.igDiv}>
                    <div className={styles.Images}>
                            <Image className={styles.img} src={'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/2498/26004/22__40616.1644799431.jpg?c=2'}  alt={'random_image'} width={280} height={480} />
                            <Image className={styles.img} src={'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/2498/26004/22__40616.1644799431.jpg?c=2'} alt={'random_image'} width={280} height={480}/>
                            <Image className={styles.img} src={'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/2498/26004/22__40616.1644799431.jpg?c=2'} alt={'random_image'} width={280} height={480}/>
                            <Image className={styles.img} src={'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/2498/26004/22__40616.1644799431.jpg?c=2'} alt={'random_image'} width={280} height={480}/>
                    </div>
                </div>
                <div className="details">

                </div>
            </div>
        </div>
    )
}