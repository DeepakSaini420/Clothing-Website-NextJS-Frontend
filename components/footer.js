import styles from '../styles/footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer_div}>
            <div className={styles.info_div}>
                <div className={styles.list_div}>
                    <p>INFO</p>
                    <ul>
                        <li>ABOUT US</li>
                        <li>CONTACT US</li>
                        <li>WORK WITH US</li>
                        <li>TS & CS</li>
                        <li>PRIVACY POLACY</li>
                    </ul>
                </div>
                <div className={styles.list_div}>
                    <p>INFO</p>
                    <ul>
                        <li>ABOUT US</li>
                        <li>CONTACT US</li>
                        <li>WORK WITH US</li>
                        <li>TS & CS</li>
                        <li>PRIVACY POLACY</li>
                    </ul>
                </div>
                <div className={styles.email}>
                    <p>Subscribe To Receive Updates And Special<br/> Offers!</p>
                    <div>
                        <input type="text" placeholder='YOUR EMAIL'/>
                        <span>SUBSCRIBE</span>
                    </div>
                </div>
            </div>
        </div>
    )
}