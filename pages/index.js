import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ShowCase from '../components/showcase'
import Product from '../components/product'
import Image from 'next/image'
import Desc from '../components/desc'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clothing India</title>
        <meta name="Cloths" content="Buy Best Cloths Available In India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.head}>
          <h1>HONEY</h1>
          <h3>LIMITED EDITION COLLECTION</h3>
          <div>
            <Link href="/menu/whats-new"><button className={styles.headbtn}>SHOP NOW</button></Link>
          </div>
        </div>
      </header>
      <section>
        <div className={styles.imageSec}>
          <ShowCase image={'https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/cta1-honey-week-1.jpg'} head={"WHATS'S NEW"}/>
          <ShowCase image={'https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/cta2-honey-week-1.jpg'} head={"DRESSES"}/>
          <ShowCase image={'https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/cta3-honey-week-1.jpg'} head={"CLASSIC"}/>
          <ShowCase image={'https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/cta4-honey-week-1.jpg'} head={"TOPS"}/>
        </div>
        <h1 className={styles.sec}>featured product</h1>
        <div className={styles.products}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
        <div className={styles.heroImage}>
          <Image objectFit="cover" layout='fill' src="https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/l-honey-week-1-aspect.jpg"/>
          <button className={styles.sbtn}><Link href=''>SHOP NOW</Link></button>
        </div>
        <h1 className={styles.sec}>explore</h1>
        <div className={styles.products}>
          <ShowCase image={'https://cdn11.bigcommerce.com/s-9srn18to/product_images/uploaded_images/cta1-honey-week-1.jpg'} head={"WHATS'S NEW"}/>
          <ShowCase image={'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} head={"WHATS'S NEW"}/>
          <ShowCase image={'https://images.unsplash.com/photo-1617258856138-402b60da4e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} head={"WHATS'S NEW"}/>
        </div>
        <div className={styles.div_wrapper}>
          <Desc/>
        </div>
      </section>
    </div>
  )
}
