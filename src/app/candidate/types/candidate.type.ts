export interface JobData {
  id: number;
  uuid: string;
  client_id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface JobApiResponse {
  total: number;
  limit: number;
  offset: number;
  has_next: boolean;
  count: number;
  data: JobData[];
}
