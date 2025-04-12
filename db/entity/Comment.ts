import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number | undefined;

  @Column('int')
  userId: number | undefined;

  @Column('int')
  postId: number | undefined;

  @Column('text')
  content: string | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @ManyToOne(type => User, user => user.comments)
  user: User | undefined;

  @ManyToOne(type => Post, post => post.comments)
  post: Post | undefined;

}
