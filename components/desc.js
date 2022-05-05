import styles from '../styles/desc.module.css'

export default function Desc(){
    return (
        <div className={styles.div}>
            <div className={styles.cdiv1}>
                <p>Made for the Modren Bohemian</p>
            </div>
            <div className={styles.cdiv2}>
                <p>We blend classic, fashion forward pieces including elevated basics with bohemian detailing. Since our inception, our aim has been to provide size inclusive fashion basics for the modern bohemian. We seek to be an environmentally and socially responsible company; as such we work closely with our suppliers to ensure ethical conditions for workers. We are continually working towards providing the best clothing and accessories, with the least environmental and social harm possible.</p>
                <button className={styles.btn}>ABOUT US</button>
            </div>
        </div>
    )
}