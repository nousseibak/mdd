import { Topic } from "./topic.interface";
import { User } from "./user.interface";

export interface Post {
  id?: number;  
  title: string;
  content: string;
  author: number;  
  topic?: Topic;  
  comments?: Comment[]; 
  dateCreated?: Date;  
  createdAt?: Date;  
  updatedAt?: Date;  
}
