import type { NextApiHandler } from "next";
import { getDatabaseConnection } from "../../../../lib/getDatabaseConnection";
import { Post } from "../../../../db/entity/Post";
import { withSession } from "../../../../lib/withSession";

const Posts: NextApiHandler = withSession(async (req, res) => {
  if (req.method === 'POST') {
    const { title, content } = req.body;

    const post = new Post();
    post.title = title;
    post.content = content;
    const user = req.session.get('currentUser');
    post.author = user;

    const { manager } = await getDatabaseConnection();
    await manager.save(post);
    res.json(post);
  }
});

export default Posts;
