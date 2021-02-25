import React, { useRef } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Memoized = React.memo(() => {
  const renders = useRef(0);
  renders.current += 1;
  return <p>renders: {renders.current}</p>;
});

const MemoizedWithTranslation = React.memo(() => {
  const [t] = useTranslation();
  const renders = useRef(0);
  renders.current += 1;
  return <p>renders with translation: {renders.current}</p>;
});

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <button type="button" onClick={() => {
        const nextFoo = parseInt(router.query.foo || '0') + 1;

        router.replace({
          query: {
            foo: nextFoo
          },
        }, `/?foo=${nextFoo}`, {
          shallow: true
        });
      }}>Update query</button>
      <Memoized />
      <MemoizedWithTranslation />
    </div>
  )
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})
