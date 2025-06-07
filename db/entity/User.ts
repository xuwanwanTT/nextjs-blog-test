import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Post } from "./Post";
import { Comment } from "./Comment";
import { getDatabaseConnection } from "../../lib/getDatabaseConnection";
import md5 from "md5";
import _ from "lodash";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number | undefined;

  @Column('varchar')
  username: string | undefined;

  @Column('varchar')
  passwordDigest: string | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @OneToMany(type => Post, post => post.author)
  posts: Post[] | undefined;

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[] | undefined;

  errors = {
    username: [] as string[],
    password: [] as string[],
    passwordConfirmation: [] as string[]
  };
  password: string | undefined;
  passwordConfirmation: string | undefined;

  async validate() {
    if (this.username === undefined) {
      this.errors.username.push('不能为空');
    } else {
      if (this.username.trim() === '') {
        this.errors.username.push('不能为空');
      }
      if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
        this.errors.username.push('格式不合法');
      }
      if (this.username.trim().length > 42) {
        this.errors.username.push('太长');
      }
      if (this.username.trim().length <= 3) {
        this.errors.username.push('太短');
      }
      const { manager } = await getDatabaseConnection();
      const found = await manager.findOne(User, { where: { username: this.username } })
      if (found) {
        this.errors.username.push('已存在，不能重复注册')
      }
      if (this.password === '') {
        this.errors.password.push('不能为空');
      }
      if (this.password !== this.passwordConfirmation) {
        this.errors.passwordConfirmation.push('密码不匹配')
      }
    }
  }

  hasErrors() {
    return !!Object.values(this.errors).find(v => v.length > 0)
  }

  @BeforeInsert()
  generatePasswordDigest() {
    this.passwordDigest = md5(this.password as string);
  }

  toJSON() {
    return _.omit(this, ['password', 'passwordConfirmation', 'passwordDigest', 'errors'])
  }
}
