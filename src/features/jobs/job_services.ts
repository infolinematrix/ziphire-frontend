import createAxiosInstance from "@/lib/axios";
import { AxiosInstance } from "axios";

export class JobService {
  //   private api!: AxiosInstance;

  //   constructor(api: AxiosInstance) {
  //     this.init();
  //   }

  //   private async init() {
  //     this.api = await createAxiosInstance();
  //   }

  static getJobsByClient = async (limit: number = 10, offset: number = 0) => {
    try {
      const api = await createAxiosInstance();
      const response = await api.get(`jobs/?limit=${limit}&offset=${offset}`);
      if (response.status == 200) {
        return response;
      }
    } catch (error: any) {
      throw error;
    }
  };

  static create = async () => {};
  static update = async (jobId: number) => {};
}
