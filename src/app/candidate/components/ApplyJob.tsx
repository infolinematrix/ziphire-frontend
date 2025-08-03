'use client'

import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

export default function ApplyJob() {
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        if (open) {
            console.log("LLM Generate..........")

            // Replace this with your actual API call
            // fetch('/api/llm', {
            //     method: 'POST',
            //     body: JSON.stringify({ jobId: 123 }),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log("LLM response:", data)
            //     })
            //     .catch(err => {
            //         console.error("API error:", err)
            //     })
        }else{
            console.log("LLM Generate Sheet Closed..........")
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

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant={"outline"} className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400">
                        <Send className="w-4 h-4" />
                        <span>Apply</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[8!w-[800px] !max-w-[600px] max-h-screen overflow-y-auto00px] sm:w-[800px]">
                    <SheetHeader>
                        <SheetTitle>Job Description</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">What is your total experince?</Label>
                            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Username</Label>
                            <Input id="sheet-demo-username" defaultValue="@peduarte" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </>
    )
}
