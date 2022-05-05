import Image from "next/image"
import styles from '../styles/showcase.module.css'

export default function ShowCase({image,head}){
    return(
        <div className={styles.showCase}>
            <Image src={image} layout="fill" objectFit="cover"/>
            <p>{head}</p>
        </div>
    )
}