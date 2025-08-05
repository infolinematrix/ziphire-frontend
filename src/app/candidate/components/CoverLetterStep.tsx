import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  coverLetter: string
  setCoverLetter: (v: string) => void
  onContinue: () => void
}

export default function CoverLetterStep({ coverLetter, setCoverLetter, onContinue }: Props) {
  return (
    <div className="space-y-4">
      <Label htmlFor="cover-letter">Cover Letter</Label>
      <Input
        id="cover-letter"
        placeholder="Write your cover letter"
        value={coverLetter}
        onChange={e => setCoverLetter(e.target.value)}
      />
      <Button
        onClick={onContinue}
        disabled={!coverLetter}
      >
        Continue
      </Button>
    </div>
  )
}