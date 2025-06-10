import { GetServerSideProps, NextPage } from "next";
import { getDatabaseConnection } from "../../../lib/getDatabaseConnection";
import { marked } from 'marked';
import Link from "next/link";
import { withSession } from "../../../lib/withSession";

type Props = {
  post: Post,
  currentUser: User | null
};

const postsShow: NextPage<Props> = (props) => {
  const { currentUser, post } = props;

  return (
    <div>
      <header>
        <h1>{post.title}</h1>
        {currentUser ? <Link href={'/posts/[id]/edit'} as={`/posts/${post.id}/edit`}>编辑文章</Link> : null}
      </header>
      <article className="markdown-body"
        style={{
          width: 980,
          margin: '0 auto 16px auto',
          padding: '0 16px'
        }}
        dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </div>
  );
};

export default postsShow;

export const getServerSideProps: GetServerSideProps<any, any> = withSession(async (context) => {

  const currentUser = context.req.session.get('currentUser') || null;

  const { manager } = await getDatabaseConnection();
  const post = await manager.findOneOrFail('Post', { where: { id: context.params.id } });

  return {
    props: {
      currentUser,
      post: JSON.parse(JSON.stringify(post))
    }
  };
});
