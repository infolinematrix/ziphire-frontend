import {createAxiosInstance}  from '@/lib/axios';


export interface JobApplicationData {
  jobId: string;
  candidateId: string;
}

export class JobApplicationService {
    // constructor(private readonly api:ReturnType<typeof createAxiosInstance> ) {}
    
  //--Get Job detail
 static async findJob(jobId: number) {
    try {
      const api = await createAxiosInstance();
      const res = await api.get(`/jobs/${jobId}`)
      return res.data
    } catch (error: any) {
      console.error('JobApplicationService.getJob error:', error)
      throw new Error(error.response?.data?.message || 'Failed to fetch job details')
    }
  }
  
  // Delete application
  static async deleteApplication(appId: number){
    try {
        const api = await createAxiosInstance();
    } catch (error: any) {
        console.log('Error Deleting job application');
        throw new Error(error.response?.data?.message || 'Failed to detele job application')
    }
  }

  // View application
  static async viewApplication(appId: number){
    try {
        const api = await createAxiosInstance();
    } catch (error: any) {
        console.log('Error Viewing job application');
        throw new Error(error.response?.data?.message || 'Failed to View job application')
    }
  }

  static async apply(data: JobApplicationData): Promise<{ success: boolean; message: string }> {
    try {
        const api = await createAxiosInstance();
      const res = await fetch('/api/job-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to apply for job');
      }

      const result = await res.json();
      return { success: true, message: result.message || 'Applied successfully' };
    } catch (error: any) {
      console.error('JobApplicationService.apply error:', error);
      return { success: false, message: error.message || 'An error occurred' };
    }
  }

  static async getApplicationsByCandidate(candidateId: string): Promise<any[]> {
    try {
      const res = await fetch(`/api/job-applications?candidateId=${candidateId}`);
      if (!res.ok) throw new Error('Failed to fetch applications');
      return await res.json();
    } catch (error: any) {
      console.error('JobApplicationService.getApplicationsByCandidate error:', error);
      return [];
    }
  }

  
}