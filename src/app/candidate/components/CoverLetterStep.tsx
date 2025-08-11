"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useJobStore } from "../services/JobState";


interface Props {
  coverLetter: string
  setCoverLetter: (v: string) => void
  onContinue: () => void
}

export default function CoverLetterStep({ coverLetter, setCoverLetter, onContinue }: Props) {

  const jobStore = useJobStore.getState();
  const quillRef = useRef(null);
  // Import the updated QuillEditor component
  const QuillEditor = dynamic(() => import('@/components/QuillEditor'), {
    ssr: false,
  });

  const form = useForm({
    defaultValues: {
      coverLetter: null
    }
  })

  const onSubmit = (data: any) => {
    debugger
    const formData = new FormData();
    jobStore.setCoverLetter(data)
    console.log("Form data.........", data);
  }

  return (
    <div className="space-y-4">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Use a flex container to manage vertical layout */}
          <div className="flex flex-col gap-4">
            <FormField
              name="coverLetter"
              control={form.control}
              render={({ field }) => (
                <FormItem className="min-h-[250px]">
                  <FormControl>
                    <QuillEditor
                      {...field}
                      id="coverLetter"
                      theme="snow"
                      placeholder="Write your cover letter..."
                      modules={{
                        toolbar: [
                          ["bold", "italic", "underline"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["clean"],
                        ],
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-4">
              <Button
                type="submit" // Ensure the button submits the form
                onClick={onContinue}
              >
                Continue
              </Button>
            </div>
          </div>
        </form>
      </Form>

    </div >
  )
}