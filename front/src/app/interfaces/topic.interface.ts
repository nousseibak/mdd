import { Post } from "./post.interface";
import { User } from "./user.interface";

export interface Topic {
  id?: number;  
  name: string;
  posts?: Post[];  
  subscribers: User[];  
  createdAt?: Date;  
  updatedAt?: Date;  
  isSubscribed?: boolean; 
  description: string;

}
