import axios from 'axios'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Calvary Temple Kenya</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await axios.get('http://localhost:8000/baseruns')
  return {
    props: {
      posts: posts.data.sort(sortByDate),
    },
  }
}
