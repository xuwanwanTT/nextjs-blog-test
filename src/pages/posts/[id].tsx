import { GetServerSideProps, NextPage } from "next";
import { getDatabaseConnection } from "../../../lib/getDatabaseConnection";
import { Post } from "../../../db/entity/Post";

type Props = {
  post: any
};

const postsShow: NextPage<Props> = (props) => {
  const { post } = props;

  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default postsShow;

export const getServerSideProps: GetServerSideProps<any, any> = async (context) => {

  const { manager } = await getDatabaseConnection();
  const post = await manager.findOneOrFail(Post, { where: { id: context.params.id } });

  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  };
};
