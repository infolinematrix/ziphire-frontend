

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { JobApplicationService } from "../services/JobApplicationService"
import { useEffect, useState } from "react"

interface Props {
  jobId: number
  jobTitle: string,
  jobDescription: string,
  agreed: boolean
  setAgreed: (v: boolean) => void
  onContinue: () => void
}

export default function JobDescriptionStep({ jobId, jobTitle, jobDescription, agreed, setAgreed, onContinue }: Props) {

  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadJob() {
      setLoading(true)
      try {
        const data = await JobApplicationService.findJob(jobId)
        setJob(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadJob()
  }, [jobId])


  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg mb-0">{jobTitle}</h3>
      <p className="text-sm mb-4">
        {jobDescription}
      </p>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={e => setAgreed(e.target.checked)}
        />
        <Label htmlFor="agree">I have read the job description and agree to continue</Label>
      </div>
      <Button
        disabled={!agreed}
        onClick={onContinue}
      >
        Agree & Continue
      </Button>
    </div>
  )
}