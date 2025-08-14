'use client'

import PageContainer from '@/components/layout/page-container'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Select } from '@/components/ui/select'
import { JobCreateForm } from '@/features/jobs/components/JobCreateForm'

export default function ClientJobCreatePage() {
    // const [form, setForm] = useState({
    //     title: '',
    //     company: '',
    //     location: '',
    //     salary_min: '',
    //     salary_max: '',
    //     description: ''
    // })

    // const skillOptions = [
    //     { value: "react", label: "React.js" },
    //     { value: "node", label: "Node.js" },
    //     { value: "python", label: "Python" },
    //     { value: "typescript", label: "TypeScript" },
    //     { value: "aws", label: "AWS" },
    //     { value: "docker", label: "Docker" },
    // ];


    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target
    //     setForm(prev => ({ ...prev, [name]: value }))
    // }

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     console.log('Job created:', form)
    //     // TODO: Call JobService.createJob(form) here
    // }

    return (

        <JobCreateForm />

        // <PageContainer>
        //     <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        //         {/* Form - 2/3 width */}
        //         <div className='lg:col-span-2'>
        //             <h2 className='text-2xl font-bold tracking-tight mb-4'>Create New Job</h2>
        //             <Card>
        //                 <CardHeader>
        //                     <CardTitle>Job Details</CardTitle>
        //                     <CardDescription>
        //                         Fill in the details for your new job posting
        //                     </CardDescription>
        //                 </CardHeader>
        //                 <form onSubmit={handleSubmit}>
        //                     <CardContent className='space-y-4'>
        //                         <div className='space-y-2'>
        //                             <Label htmlFor='title'>Job Title</Label>
        //                             <Input
        //                                 id='title'
        //                                 name='title'
        //                                 value={form.title}
        //                                 onChange={handleChange}
        //                                 placeholder='e.g. Senior Software Engineer'
        //                                 required
        //                             />
        //                         </div>

        //                         <div className='space-y-2'>
        //                             <Label htmlFor='description'>Description</Label>
        //                             <Textarea
        //                                 id='description'
        //                                 name='description'
        //                                 value={form.description}
        //                                 onChange={handleChange}
        //                                 placeholder='Describe the job responsibilities and requirements'
        //                                 className='min-h-[200px]'
        //                             />
        //                         </div>

        //                         <div className='space-y-2'>
        //                             <label className="block text-sm font-medium mb-1">
        //                                 Skills Requirement
        //                             </label>
        //                             {/* <Select
        //                                 isMulti
        //                                 options={skillOptions}
        //                                 value={form.skills}
        //                                 onChange={handleSkillsChange}
        //                                 placeholder="Select required skills"
        //                             /> */}
        //                         </div>

        //                         <div className='space-y-2'>
        //                             <Label htmlFor='location'>Location</Label>
        //                             <Input
        //                                 id='location'
        //                                 name='location'
        //                                 value={form.location}
        //                                 onChange={handleChange}
        //                                 placeholder='e.g. Remote / New York'
        //                             />
        //                         </div>

        //                         <div className='grid grid-cols-2 gap-4'>
        //                             <div className='space-y-2'>
        //                                 <Label htmlFor='salary_min'>Salary Min</Label>
        //                                 <Input
        //                                     type='number'
        //                                     id='salary_min'
        //                                     name='salary_min'
        //                                     value={form.salary_min}
        //                                     onChange={handleChange}
        //                                     placeholder='e.g. 50000'
        //                                 />
        //                             </div>
        //                             <div className='space-y-2'>
        //                                 <Label htmlFor='salary_max'>Salary Max</Label>
        //                                 <Input
        //                                     type='number'
        //                                     id='salary_max'
        //                                     name='salary_max'
        //                                     value={form.salary_max}
        //                                     onChange={handleChange}
        //                                     placeholder='e.g. 90000'
        //                                 />
        //                             </div>
        //                         </div>


        //                     </CardContent>
        //                     <CardFooter className='mt-10'>
        //                         <Button type='submit'>Create Job</Button>
        //                     </CardFooter>
        //                 </form>
        //             </Card>
        //         </div>

        //         {/* Sidebar - 1/3 width */}
        //         <div className='hidden lg:block'>
        //             <Card>
        //                 <CardHeader>
        //                     <CardTitle>Tips for Posting Jobs</CardTitle>
        //                 </CardHeader>
        //                 <CardContent className='text-sm text-muted-foreground space-y-2'>
        //                     <p>• Use a clear and descriptive title.</p>
        //                     <p>• Include location and salary range if possible.</p>
        //                     <p>• Keep the description concise but informative.</p>
        //                     <p>• Highlight key responsibilities and skills required.</p>
        //                 </CardContent>
        //             </Card>
        //         </div>
        //     </div>
        // </PageContainer>
    )
}
