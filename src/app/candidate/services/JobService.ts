import createAxiosInstance from "@/lib/axios";

export class JobService {
  static async getall() {
    try {
      const api = await createAxiosInstance();
      const res = await api.get(`/jobs`);
      return res.data;
    } catch (error: any) {
      console.error("Jobs error:", error);
      throw new Error(error.response?.data?.message || "Failed to fetch jobs");
    }
  }
}
