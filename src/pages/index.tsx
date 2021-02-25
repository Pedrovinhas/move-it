import Head from 'next/head'
import React from 'react';

import { ChallengeBox } from '../components/ChallangeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title> Início | move.it 🏃‍♂️ </title>
    </Head>
    <ExperienceBar />

    <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>

        <div>
          <ChallengeBox/>

        </div>
    </section>
 </div>
  )
}
