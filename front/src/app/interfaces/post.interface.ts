import { Topic } from "./topic.interface";
import { User } from "./user.interface";
import { Comment } from "./comment.interface";

export interface Post {
  id?: number;  
  title?: string;
  content: string;
  topic?: Topic;  
  comments?: Comment[]; 
  createdAt?: Date;  
  updatedAt?: Date;  
  author?: User;
}
