'use client'

import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from '@/components/ui/scroll-area'
import AIQuestionsStep from './AIQuestionsStep'
import CoverLetterStep from './CoverLetterStep'
import JobDescriptionStep from './JobDescriptionStep'
import ResumeSelectStep from './ResumeSelectStep'
import ReviewSubmitStep from './ReviewSubmitStep'

// Dummy resume list for demonstration
const resumes = [
    { id: 1, name: "Resume - Frontend.pdf" },
    { id: 2, name: "Resume - Fullstack.pdf" },
    { id: 3, name: "Resume - Designer.pdf" },
]

interface Props {
    jobId: number
    jobTitle: string,
    jobDescription: string,
}

export default function ApplyJob({ jobId, jobTitle, jobDescription }: Props) {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)
    const [agreed, setAgreed] = useState(false)
    const [aiAnswers, setAiAnswers] = useState<{ [key: string]: string }>({})
    const [coverLetter, setCoverLetter] = useState('')
    const [selectedResume, setSelectedResume] = useState<number | null>(null)

    // Example AI questions
    const aiQuestions = [
        { id: 'exp', question: 'How many years of experience do you have with React?' },
        { id: 'ts', question: 'Describe your experience with TypeScript.' },
    ]

    useEffect(() => {
        if (open) {
            setStep(1)
        }
    }, [open])

    // Auto-close sheet on tab/window blur
    useEffect(() => {
        const handleClose = () => {
            if (open) setOpen(false)
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) handleClose()
        })

        window.addEventListener('blur', handleClose)

        return () => {
            document.removeEventListener('visibilitychange', handleClose)
            window.removeEventListener('blur', handleClose)
        }
    }, [open])

    // Step content
    function renderStep() {
        switch (step) {
            case 1:
                return (
                    <JobDescriptionStep
                        jobId={jobId}
                        jobTitle={jobTitle}
                        jobDescription={jobDescription}
                        agreed={agreed}
                        setAgreed={setAgreed}
                        onContinue={() => setStep(2)}
                    />
                )
            case 2:
                return (
                    <AIQuestionsStep
                        aiQuestions={aiQuestions}
                        aiAnswers={aiAnswers}
                        setAiAnswers={setAiAnswers}
                        onContinue={() => setStep(3)}
                    />
                )
            case 3:
                return (
                    <CoverLetterStep
                        coverLetter={coverLetter}
                        setCoverLetter={setCoverLetter}
                        onContinue={() => setStep(4)}
                    />
                )
            case 4:
                return (
                    <ResumeSelectStep
                        resumes={resumes}
                        selectedResume={selectedResume}
                        setSelectedResume={setSelectedResume}
                        onContinue={() => setStep(5)}
                    />
                )
            case 5:
                return (
                    <ReviewSubmitStep
                        aiQuestions={aiQuestions}
                        aiAnswers={aiAnswers}
                        coverLetter={coverLetter}
                        resumes={resumes}
                        selectedResume={selectedResume}
                    />
                )
            default:
                return null
        }
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant={"outline"} className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400">
                    <Send className="w-4 h-4" />
                    <span>Apply</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="!max-w-[600px] max-h-screen overflow-y-auto">
                <ScrollArea className='h-[calc(100dvh-52px)]'>
                    <SheetHeader>
                        <SheetTitle>
                            Job Application <span className='px-4 text-muted-foreground text-sm'>#{jobId}</span>
                        </SheetTitle>
                        <SheetDescription>
                            Complete the steps to apply for this job.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="px-4 py-2 mb-6 bg-muted rounded">
                        {renderStep()}
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}