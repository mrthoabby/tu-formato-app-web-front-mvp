
import { Avatar, Button } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import styles from './Index.module.css'
import { User } from '@/domain/api'


type THomeProp = {
  user: User
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uri = context.req.headers.host;
  const protocol = context.req.headers.referer?.split(":")[0]
  const response = await fetch(`http://localhost:3000/api/user`);
  // const response = await fetch(`${protocol}://${uri}/api/user`);
  const result: User = await response.json();
  return {
    props: {
      user: result
    }
  }
}

export default function Home({ user }: THomeProp) {
  const router = useRouter();

  const goToCurrentWorkCompanyWebSite = useCallback(() => {
    window.open(user.professionInfo.currentWork.companyWebSite, "_blank");
  }, []);

  return (
    <>
      <Head>
        <title>{user.identificationInfo.name}</title>
        <meta name="description" content={`Hoja de vida de ${user.identificationInfo.name}`} />
        <meta name='keywords' content='danis abadia ' />
        <meta name="robots" content='index' />
        <meta name="Danis Abadia" />
        <meta property="og:title" content={user.identificationInfo.name} />
        <meta property="og:description" content={user.professionInfo.currentRole.title} />
        <meta property="og:image" content="/photo.svg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photo.svg" />
      </Head>
      <main className={styles.main}>

        <Avatar
          src="/photo.svg"
          alt={user.identificationInfo.name}
          sx={{ width: 280, height: 280 }}


        />
        <div className={styles.description}>
          <h1 className={styles.name}>
            {user.identificationInfo.name}
          </h1>
          <h2 className={styles.jobTitle}>
            {user.professionInfo.currentWork.jobTitle}
            <Button
              title='Puesto actual'
              variant="contained"
              onClick={goToCurrentWorkCompanyWebSite}>
              En {user.professionInfo.currentWork.company}
            </Button>

          </h2>
          <blockquote className={styles.cite}>
            {user.asideInfo.favoritePhrases[0].phrase}
            <hr className={styles.lineBottom} />
          </blockquote>

        </div>

        <Button title='Ver más' variant="text" className={styles.showMoreButton}>
          Ver más...
        </Button>
      </main >
    </>
  )
}
