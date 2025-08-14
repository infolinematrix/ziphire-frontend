'use client'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
interface Props {
    job: {
        id: string
        title: string
        description: string
        created_at: string
        company?: string
        location?: string
        salary_min?: number
        salary_max?: number
        status?: 'active' | 'closed'
        applicants_count?: number
    }
}

export default function ClientJobCard({ job }: Props) {
    const salary =
        job.salary_min && job.salary_max
            ? `₹${job.salary_min.toLocaleString()} - ₹${job.salary_max.toLocaleString()}`
            : '+$99.00'
    return (
        // <div className='p-4 border rounded-lg hover:bg-muted transition space-y-2'>
        //     {/* Title + Status */}
        //     <div className='flex justify-between items-start gap-4'>
        //         <div className='font-medium '>{job.title}</div>
        //         {job.status && (
        //             <Badge
        //                 variant={job.status === 'active' ? 'default' : 'secondary'}
        //                 className='capitalize'
        //             >
        //                 {job.status}
        //             </Badge>
        //         )}
        //     </div>

        //     {/* Company + Location */}
        //     <div className='text-sm text-muted-foreground flex gap-2 flex-wrap'>
        //         {job.company && <span>🏢 {job.company}</span>}
        //         {job.location && <span>📍 {job.location}</span>}
        //     </div>

        //     {/* Salary */}
        //     <div className='text-sm font-medium'>💰 {salary}</div>

        //     {/* Description */}
        //     <div className='text-sm text-muted-foreground line-clamp-2'>
        //         {job.description}
        //     </div>

        //     {/* Footer */}
        //     {/* <div className='flex justify-between text-xs text-muted-foreground pt-2 border-t'>
        //         <span>📅 {new Date(job.created_at).toLocaleDateString()}</span>
        //         {job.applicants_count !== undefined && (
        //             <span>👥 {job.applicants_count} Applicants</span>
        //         )}
        //     </div> */}
        // </div>

        <div className='flex items-center p-3 hover:bg-muted transition'>
            {/* <Avatar className='h-9 w-9'>
                <AvatarImage src={'sale.avatar'} alt='Avatar' />
                <AvatarFallback>{'sale.fallback'}</AvatarFallback>
            </Avatar> */}
            <div className='ml-0 space-y-2'>
                <div>
                    <div className='text-sm leading-none font-medium mb-1'>{job.title}</div>
                    <div className='text-xs text-muted-foreground'>{job.created_at}</div>
                </div>
                <p className='text-muted-foreground text-sm'>{job.description}</p>
            </div>
            <div className='ml-auto '>{salary}</div>
        </div>
    )
}
