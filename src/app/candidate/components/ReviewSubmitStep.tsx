import { Button } from "@/components/ui/button"

interface Props {
  aiQuestions: { id: string, question: string }[]
  aiAnswers: { [key: string]: string }
  coverLetter: string
  resumes: { id: number, name: string }[]
  selectedResume: number | null
}

export default function ReviewSubmitStep({ aiQuestions, aiAnswers, coverLetter, resumes, selectedResume }: Props) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold mb-2">Review & Submit</h4>
      <div>
        <strong>Job:</strong> Frontend Developer
      </div>
      <div>
        <strong>AI Answers:</strong>
        <ul className="list-disc list-inside">
          {aiQuestions.map(q => (
            <li key={q.id}><strong>{q.question}</strong>: {aiAnswers[q.id]}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Cover Letter:</strong> {coverLetter}
      </div>
      <div>
        <strong>Resume:</strong> {resumes.find(r => r.id === selectedResume)?.name}
      </div>
      <Button type="submit" className="w-full">Apply</Button>
    </div>
  )
}