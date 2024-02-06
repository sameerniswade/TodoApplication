import { Databases, Client, Storage, Query } from "appwrite";
import conf from "../conf/conf";

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

  async createPost({ title, slug, content, featureImage, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featureImage, status, userid }
      );
    } catch (error) {
      console.log("config :: createpost :: error", error);
    }
  }

  async updatePost({ title, slug, content, featureImage, status, userid }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("config :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("config :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("config :: getPost :: error", error);
    }
  }

  async getPosts() {
    try {
      await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("config :: getPost :: error", error);
    }
  }

  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.appWriteBucketId, ID.userid(), file);
    } catch (error) {
      console.log("config :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("config :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview() {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
  }
}

const services = new Services();
export default services;
