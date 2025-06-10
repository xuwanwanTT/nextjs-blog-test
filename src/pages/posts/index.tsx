import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../../db/entity/Post";
import { getDatabaseConnection } from "../../../lib/getDatabaseConnection";
import Link from "next/link";
import qs from 'querystring';
import { usePager } from "@/hooks/usePager";
import { withSession } from "../../../lib/withSession";

type Props = {
  posts: Post[],
  count: number,
  perPage: number,
  page: number,
  totalPage: number,
  currentUser: User | null,
};

const PostsIndex: NextPage<Props> = (props) => {
  const { currentUser, posts, page, totalPage } = props;

  const { pager } = usePager({ page, totalPage });
  return (
    <div>
      <header>
        <h1>文章列表</h1>
        {currentUser ? <Link href={'/posts/new'}>新增文章</Link> : null}
      </header>
      {posts.map(post => (
        <div key={post.id}>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div>{post.title}</div>
          </Link>
        </div>
      ))}
      <footer>
        {pager}
      </footer>
    </div>
  );
};

export default PostsIndex;

export const getServerSideProps: GetServerSideProps = withSession(async (context) => {
  const index = context.req.url?.indexOf('?') || 0;
  const search = context.req.url?.substring(index + 1) || '';
  const query = qs.parse(search);
  const page = parseInt(query.page?.toString() || '') || 1;
  const perPage = 10;

  const currentUser = context.req.session.get('currentUser') || null;

  const { manager } = await getDatabaseConnection();
  const [posts, count] = await manager.findAndCount(Post, {
    skip: (page - 1) * perPage,
    take: perPage
  });

  return {
    props: {
      currentUser,
      posts: JSON.parse(JSON.stringify(posts)),
      page,
      totalPage: Math.ceil(count / perPage),
    }
  };
});
