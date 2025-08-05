import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  aiQuestions: { id: string, question: string }[]
  aiAnswers: { [key: string]: string }
  setAiAnswers: (v: { [key: string]: string }) => void
  onContinue: () => void
}

export default function AIQuestionsStep({ aiQuestions, aiAnswers, setAiAnswers, onContinue }: Props) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold mb-2">Job Related Questions</h4>
      {aiQuestions.map(q => (
        <div key={q.id} className="grid gap-2">
          <Label htmlFor={q.id}>{q.question}</Label>
          <Input
            id={q.id}
            value={aiAnswers[q.id] || ''}
            onChange={e => setAiAnswers({ ...aiAnswers, [q.id]: e.target.value })}
          />
        </div>
      ))}
      <Button
        onClick={onContinue}
        disabled={aiQuestions.some(q => !aiAnswers[q.id])}
      >
        Continue
      </Button>
    </div>
  )
}