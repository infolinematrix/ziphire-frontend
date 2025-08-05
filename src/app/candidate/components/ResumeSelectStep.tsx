import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface Resume {
  id: number
  name: string
}

interface Props {
  resumes: Resume[]
  selectedResume: number | null
  setSelectedResume: (id: number) => void
  onContinue: () => void
}

export default function ResumeSelectStep({ resumes, selectedResume, setSelectedResume, onContinue }: Props) {
  return (
    <div className="space-y-4">
      <Label>Select Resume</Label>
      <div className="space-y-2">
        {resumes.map(resume => (
          <div key={resume.id} className="flex items-center gap-2">
            <input
              type="radio"
              id={`resume-${resume.id}`}
              name="resume"
              checked={selectedResume === resume.id}
              onChange={() => setSelectedResume(resume.id)}
            />
            <Label htmlFor={`resume-${resume.id}`}>{resume.name}</Label>
          </div>
        ))}
      </div>
      <Button
        onClick={onContinue}
        disabled={selectedResume === null}
      >
        Continue
      </Button>
    </div>
  )
}