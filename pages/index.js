import Head from 'next/head'
import Main from '../components/main/Main'
import Intro from '../components/intro/Intro'
import Layout from '../components/layouts/Layout'
import styles from '../styles/style.module.scss'
import Navbar from '../components/navbars/Navbar'
import GlobalStlye from '../components/pageStyles/GlobalStyle'
import PageStyle from '../components/pageStyles/PageStyle'
import ModalBox from '../components/cards/ModalBox'

import { useState } from 'react'

export default function Home() {
  const [night, setNight] = useState(false)
  const [start, setStart] = useState(false)

  const [showModal, setShowModal] = useState(false)

  return (
   
    <div className={styles.container}>
      <GlobalStlye />
      <PageStyle />
      <Head>
        <title>StudySite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Navbar onNightToggle={setNight} />
      <Main start={start} night={night} setStart={setStart} setShowModal={setShowModal}/>
      <ModalBox showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
}

Home.getLayout = page => <Layout>{page}</Layout>