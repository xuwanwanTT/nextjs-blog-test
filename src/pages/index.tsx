import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../db/entity/Post";
import { getDatabaseConnection } from "../../lib/getDatabaseConnection";

type Props = {
  posts: Post[]
};

const Index: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { manager } = await getDatabaseConnection();
  const posts = await manager.find(Post);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};
