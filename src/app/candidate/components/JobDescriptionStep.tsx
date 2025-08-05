import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface Props {
  agreed: boolean
  setAgreed: (v: boolean) => void
  onContinue: () => void
}

export default function JobDescriptionStep({ agreed, setAgreed, onContinue }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg mb-1">Frontend Developer</h3>
      <p className="text-sm mb-2">
        We are seeking a skilled Frontend Developer to join our dynamic team. You will be responsible for building and maintaining user interfaces using React, TypeScript, and modern UI frameworks.
      </p>
      <ul className="list-disc list-inside text-sm mb-2">
        <li>Develop responsive web applications using React and TypeScript</li>
        <li>Work closely with UI/UX designers to implement designs</li>
        <li>Optimize applications for maximum speed and scalability</li>
        <li>Collaborate with backend developers and participate in code reviews</li>
      </ul>
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