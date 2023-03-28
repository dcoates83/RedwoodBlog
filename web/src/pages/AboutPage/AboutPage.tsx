import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>Redwood Blog</h1>

      <p>About</p>
      <main>
        <p>
          <Link to={routes.home()}>Return Home</Link>
        </p>
      </main>
    </>
  )
}

export default AboutPage
