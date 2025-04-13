import { DataSource } from "typeorm";
import { AppDataSource } from "../db/data-source";
import { Post } from "../db/entity/Post";
import { User } from "../db/entity/User";
import { Comment } from "../db/entity/Comment";

export const getDatabaseConnection = async () => {
  const dataSource = new DataSource({
    ...AppDataSource.options,
    entities: [Post, User, Comment]
  });
  return dataSource.isInitialized ? dataSource : await dataSource.initialize()
};
