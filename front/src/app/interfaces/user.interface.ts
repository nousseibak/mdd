import { Post } from "./post.interface";
import { Topic } from "./topic.interface";

export interface User {
  id?: number;
  email: string;
  username: string;
  password?: string;
  admin?: boolean;
  posts?: Post[];
  comments?: Comment[];
  subscriptions?: Topic[];
  createdAt?: Date;
  updatedAt?: Date;
}