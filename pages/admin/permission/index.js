import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

export default function Permission() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Admin/Permission Page
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Tuhin
        </a>
      </footer>
    </div>
  )
}
