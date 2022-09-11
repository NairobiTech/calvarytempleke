import axios from 'axios'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  frontmatter: { title, date, cover_image, video },
  slug,
  content,
}) {
  return (
    <>
      <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <div className='post-body'>
        <video
          id="videoPlayer"
          width="650"
          controls
          muted="muted"
          autoPlay
          poster={cover_image}
        >
          <source src={video} type="video/mp4" />
        </video>
          <div className="content">{content}</div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await axios.get('https://calvarytempleke-api.onrender.com/baseruns')
  const paths = []

  await posts.data.map((post) => {
    paths.push({ params: { slug: post.slug } })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const post = await axios.get('https://calvarytempleke-api.onrender.com/baserun?p=' + slug)

  const { frontmatter, content } = post.data
  console.log(frontmatter)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
