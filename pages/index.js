import Head from 'next/head'
import React from 'react'
import { Client } from '../prismic-configuration'
import Prismic from 'prismic-javascript'
import BlogEntry from '../components/blogEntry'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps(context) {
    const req = context.req
    const posts = await Client(req).query(
      Prismic.Predicates.at('document.type', 'post'),
      {}
    )
    return {
      postsObject: posts,
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="container mx-auto text-center py-4">
          <h1 className="text-6xl text-black">Prismic + Next.js Blog</h1>
        </header>

        <main className="container mx-auto text-center">
          <p className="text-gray-900 text-xl">Fetched blog posts</p>

          <div className="flex flex-wrap pt-8">
            {this.props.postsObject.results.map((post, index) => (
              <BlogEntry
                key={post.uid}
                uid={post.uid}
                title={post.data.title[0].text}
                desc={post.data.short_desc[0].text}
                image={post.data.featured_image.url}
              ></BlogEntry>
            ))}
          </div>
        </main>
      </div>
    )
  }
}
