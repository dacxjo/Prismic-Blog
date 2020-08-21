import { Client } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import Head from 'next/head'

export default function Post({ data }) {
  return (
    <React.Fragment>
      <Head>
        <title>{RichText.asText(data.title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <header
          style={{
            backgroundImage: `url(${data.featured_image.url})`,
          }}
          className="w-full h-64 flex items-center justify-center bg-cover relative"
        >
          <h1
            style={{ textShadow: '2px 3px 5px rgba(0,0,0,0.5)' }}
            className="text-6xl text-white text-shadow"
          >
            {RichText.asText(data.title)}
          </h1>
        </header>
        <main className="post-content container mx-auto mt-10">
          <RichText render={data.content} />
        </main>
      </article>
    </React.Fragment>
  )
}

export async function getStaticPaths() {
  const { results } = await Client().query(
    Prismic.Predicates.at('document.type', 'post')
  )

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const { data } = await Client().getByUID('post', uid)
  return {
    props: { data },
  }
}
