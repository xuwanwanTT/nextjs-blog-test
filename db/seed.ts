import { AppDataSource } from "./data-source"
import { Comment } from "./entity/Comment";
import { Post } from "./entity/Post";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {
    const { manager } = AppDataSource;

    // 创建 user 1
    const u1 = new User();
    u1.username = 'xuwanwan';
    u1.passwordDigest = '520';
    await manager.save(u1);

    // 创建 post 1
    const p1 = new Post();
    p1.title = 'First Post';
    p1.content = 'This is my first post';
    p1.author = u1;
    await manager.save(p1);

    // 创建 comment 1
    const c1 = new Comment();
    c1.content = '666';
    c1.user = u1;
    c1.post = p1;
    await manager.save(c1);

    AppDataSource.destroy();

}).catch(error => console.log(error))
