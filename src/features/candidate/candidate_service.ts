"use server";

import createAxiosInstance from "@/lib/axios";
import { AxiosInstance } from "axios";

class CandidateService {
  private api!: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.init();
  }

  private async init() {
    this.api = await createAxiosInstance();
  }

  findCandidate = async (id: number) => {
    const res = await this.api.get("");
    if (res.status !== 200) {
      throw new Error("Failed to fetch candidate data");
    }

    return res.data;
  };

  async listCandidates(limit:number, offset: number) {
    const res = await this.api.get(`/candidates`);
    return res.data;
  }

  async createCandidate(candidate: {
    name: string;
    experience: number;
    skills: string[];
  }) {
    const res = await this.api.post("/candidates", candidate);
    return res.data;
  }
}

// export const getCandidate = async (id: number) => {
//   const api = await createAxiosInstance();

//   const res = await api.get(`https://api.example.com/candidates/${id}`);

//   if (res.status !== 200) {
//     throw new Error("Failed to fetch candidate data");
//   }

//   return res.data;
// };
