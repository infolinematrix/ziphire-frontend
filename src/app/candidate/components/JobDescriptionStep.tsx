

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { JobApplicationService } from "../services/JobApplicationService"
import { useEffect, useState } from "react"
import { useJobStore } from "../services/JobState"
import { JobApiResponse } from "../types/candidate.type"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface Props {
  jobId: number
  jobTitle: string,
  jobDescription: string,
  onContinue: () => void
}

export default function JobDescriptionStep({ jobId, jobTitle, jobDescription, onContinue }: Props) {

  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // const { user, description, setUser, setJobDescription } = useJobStore();
  const jobStore = useJobStore.getState();

  const form = useForm({

    defaultValues: {
      isAgree: false
    }
  })



  useEffect(() => {
    async function loadJob() {
      setLoading(true)
      try {

        const resp: JobApiResponse = await JobApplicationService.findJob(jobId)
        setJob(resp)
        jobStore.setJob(resp)

      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadJob()
  }, [jobId])


  const onSubmit = (data: any) => {
    console.log("Form submitted:", job);
    onContinue();

  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg mb-0">{jobTitle}</h3>
      <p className="text-sm mb-4">
        {jobDescription}
      </p>

      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>

          <div className="mb-4">
            <FormField
              control={form.control}
              name="isAgree"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">

                  <FormControl >
                    <Checkbox
                      id="agree"
                      checked={field.value}
                      onCheckedChange={(checked: boolean) => {
                        field.onChange(checked)
                      }}
                    />
                  </FormControl>
                  <FormLabel>I have read the job description and agree to continue</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />


          </div>
          <div className="mb-4">
            <Button
              disabled={!form.watch("isAgree")}
              // onClick={onContinue}
              type="submit"
            >
              Agree & Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}