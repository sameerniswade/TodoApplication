import { Databases, Client, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";
import { deleteTodo } from "../store/todoSlice";

export class Services {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getTodo(id) {
    console.log("getTodoServices", id);
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal("userId", id)]
      );
    } catch (error) {
      console.log("appwrite config :: getTodo :: error", error);
    }
  }

  async addTodo(todo, complate, id, userId) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        ID.unique(),
        {
          task: todo,
          complete: complate,
          id: id,
          userId: userId,
        }
      );
    } catch (error) {
      console.log("appwrite config :: getTodo :: error", error);
    }
  }
  async updateTodo() {}
  async deleteTodo() {}

  async complateTodo() {}
}

const services = new Services();
export default services;
