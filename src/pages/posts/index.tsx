import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../../db/entity/Post";
import { getDatabaseConnection } from "../../../lib/getDatabaseConnection";
import Link from "next/link";
import qs from 'querystring';

type Props = {
  posts: Post[],
  count: number,
  perPage: number,
  page: number,
};

const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props;
  return (
    <div>
      <h1>文章列表({props.count}) 每页({props.perPage})</h1>
      {posts.map(post => (
        <div>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div>{post.title}</div>
          </Link>
        </div>
      ))}
      <footer>
        共 {props.count} 篇文章, 当前是第 {props.page} 页
        <Link href={`?page=${props.page - 1}`}><div>上一页</div></Link>
        <Link href={`?page=${props.page + 1}`}><div>下一页</div></Link>
      </footer>
    </div>
  );
};

export default PostsIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const index = context.req.url?.indexOf('?') || 0;
  const search = context.req.url?.substring(index + 1) || '';
  const query = qs.parse(search);
  const page = parseInt(query.page?.toString() || '1');
  const perPage = 3;

  const { manager } = await getDatabaseConnection();
  const [posts, count] = await manager.findAndCount(Post, {
    skip: (page - 1) * perPage,
    take: perPage
  });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      count,
      page,
      perPage
    }
  };
};
