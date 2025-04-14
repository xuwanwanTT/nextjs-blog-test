# 开发流程
创建表
创建实体和关联
填充数据
创建页面
创建api
约定前后接口
单元测试

## 启动数据库

```
mkdir blog-data
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

旧版 Windows Docker 客户端运行下面的代码
docker run -v "blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

## 清空之前的开发环境
```
docker ps -a // 查看容器信息
docker kill 容器id
docker rm 容器id

mac 和 Windows 新 docker运行
rm -rf blog-data

或者windows 旧版 docker 运行
docker container prune
docker volume rm blog-data
```

## 创建数据库
```
docker exec -it 容器id bash
psql -U blog
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

## 数据表

如果连接不到数据库，可尝试修改 db/data-source.ts 中的 host

```
yarn m:run // 创建表

yarn db:seed // 填充数据
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

### tip: 记录使用 migration 和 entity 创建文件
```
yarn m:create ./db/migration/CreateUsers
yarn m:create ./db/migration/CreatePosts
yarn m:create ./db/migration/CreateComments
yarn m:create ./db/migration/AddCreatedAtAndUpdateAt

yarn e:create ./db/entity/User
yarn e:create ./db/entity/Post
yarn e:create ./db/entity/Comment

yarn m:create ./db/migration/AddUniqueUsernameToUsers

```