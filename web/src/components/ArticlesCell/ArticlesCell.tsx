import type { FindPosts } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPosts {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No posts yet!</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error loading posts: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  return posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </article>
  ))
}
