import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number | undefined;

  @Column('varchar')
  title: string | undefined;

  @Column('varchar')
  content: string | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @ManyToOne(type => User, user => user.posts)
  author: User | undefined;

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[] | undefined;
}
