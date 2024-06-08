import { Post } from "./post.interface";
import { User } from "./user.interface";

export interface Comment {
  id?: number;  
  content: string;
  author?: User;  
  post?: Post;  
  dateCreated?: Date; 
  createdAt?: Date;  
  updatedAt?: Date;  
}
