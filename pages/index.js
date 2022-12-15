import { useKeyring } from '@w3ui/react-keyring'
import { useUploader } from '@w3ui/react-uploader'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [, { uploadFile }] = useUploader()
  const [{ space }, { createSpace, registerSpace }] = useKeyring()

  async function login() {
    await createSpace()
    await registerSpace("travis@dag.house")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        registered? {space?.registered()}
        <button onClick={login}>log in</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
