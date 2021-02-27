import { GetServerSideProps } from 'next';
import Head from 'next/head'
import React from 'react';

import { ChallengeBox } from '../components/ChallangeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';


export default function Home(props) {
  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesComplete={props.challengesCompleted}
    >
    <div className={styles.container}>
    <Head>
      <title> Início | move.it 🏃‍♂️ </title>
    </Head>
    <ExperienceBar />

    <CountdownProvider>
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
    </CountdownProvider>
 </div>
 </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
