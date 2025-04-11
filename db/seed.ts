import { AppDataSource } from "./data-source"
// import { Post } from "./entity/Post"

AppDataSource.initialize().then(async () => {
    const manager = AppDataSource.manager;
    // const posts = await manager.find(Post);
    // console.log(posts);

    // if (posts.length === 0) {
    //     await manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => {
    //         return new Post({ title: `Post ${n}`, content: `这是我的第${n}篇文章` });
    //     }));
    //     console.log('数据填充了')
    // }

    // const posts2 = await manager.find(Post);
    // console.log(posts2);

    AppDataSource.destroy();

}).catch(error => console.log(error))
