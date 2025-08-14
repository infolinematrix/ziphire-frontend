'use client'

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageContainer from '@/components/layout/page-container'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@/components/ui/card'
import { MultiSelect } from "@/components/multi-select";

// Zod Schema for validation
const jobSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters long"),
    salary: z
        .number()
        .positive("Salary must be positive"),
    skills: z
        .array(z.string())
        .min(1, "Select at least one skill")
        .max(10, "You can select up to 10 skills"),
    salary_min: z.number(),
    salary_max: z.number(),
});

type JobFormData = z.infer<typeof jobSchema>;

const skillOptions = [
    { value: "react", label: "React.js" },
    { value: "node", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "typescript", label: "TypeScript" },
    { value: "aws", label: "AWS" },
    { value: "docker", label: "Docker" },
];


export const JobCreateForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<JobFormData>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            title: "",
            description: "",
            salary: 0,
            skills: [],
            salary_min: 0, salary_max: 0
        },
    });

    // 3️⃣ Submit handler
    const onSubmit = (data: JobFormData) => {
        console.log("Job created:", data);
    };

    return (
        <PageContainer>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Form - 2/3 width */}
                <div className='lg:col-span-2'>
                    <h2 className='text-2xl font-bold tracking-tight mb-4'>Create New Job</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>Job Details</CardTitle>
                            <CardDescription>
                                Fill in the details for your new job posting
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardContent className='space-y-4'>
                                <div className='space-y-2'>
                                    <Label htmlFor='title'>Job Title</Label>
                                    <Input
                                        {...register("title")}
                                        placeholder='e.g. Senior Software Engineer'
                                        required
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='description'>Description</Label>
                                    <Textarea
                                        {...register("description")}
                                        placeholder='Describe the job responsibilities and requirements'
                                        className='min-h-[200px]'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label className="block text-sm font-medium mb-1">
                                        Skills Requirement
                                    </label>
                                    <MultiSelect />
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='space-y-2'>
                                            <Label htmlFor='salary_min'>Salary Min</Label>
                                            <Input
                                                {...register("salary_min")}
                                                placeholder='25000'
                                                required
                                            />
                                        </div>
                                        <div className='space-y-2'>
                                            <Label htmlFor='salary_max'>Salary Max</Label>
                                            <Input
                                                {...register("salary_max")}
                                                placeholder='50000'
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>asdas</div>

                                </div>




                            </CardContent>
                            <CardFooter className='mt-10'>
                                <Button type='submit'>Create Job</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </div>

                {/* Sidebar - 1/3 width */}
                <div className='hidden lg:block'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Tips for Posting Jobs</CardTitle>
                        </CardHeader>
                        <CardContent className='text-sm text-muted-foreground space-y-2'>
                            <p>• Use a clear and descriptive title.</p>
                            <p>• Include location and salary range if possible.</p>
                            <p>• Keep the description concise but informative.</p>
                            <p>• Highlight key responsibilities and skills required.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </PageContainer>
    )
}


