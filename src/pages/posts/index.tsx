import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../../db/entity/Post";
import { getDatabaseConnection } from "../../../lib/getDatabaseConnection";
import Link from "next/link";

type Props = {
  posts: Post[]
};

const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(post => (
        <div>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div>{post.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { manager } = await getDatabaseConnection();
  const posts = await manager.find(Post);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};
