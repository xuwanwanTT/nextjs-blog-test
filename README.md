## 启动数据库

```
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';

yarn m:create ./db/migration/CreateUsers
yarn m:create ./db/migration/CreatePosts
yarn m:create ./db/migration/CreateComments
yarn m:create ./db/migration/AddCreatedAtAndUpdateAt

yarn e:create ./db/entity/User
yarn e:create ./db/entity/Post
yarn e:create ./db/entity/Comment

```

# 需求分析

## 博客系统

- 用户可以登录、注销，但不能重置密码

- 要重置密码联系管理员

- 用户可以对博客进行增删改查

- 用户可以对博客进行评论，但不能修改评论

- 用户可以编辑用户名、密码、姓名、头像

- 手机上也能完成上面的操作

- 对搜索引擎优化