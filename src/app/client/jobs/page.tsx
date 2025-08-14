
import PageContainer from '@/components/layout/page-container'
import { NextPage } from 'next'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardAction,
    CardFooter,
    CardContent
} from '@/components/ui/card';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';
import { RecentSales } from '@/features/overview/components/recent-sales';
import { JobService } from '@/features/jobs/job_services';
import ClientJobCard from '@/features/jobs/components/ClientJobCard';


export default async function ClientJobsPage() {

    const data = [Array(10)]
    const jobs = await JobService.getJobsByClient(10, 0)
    console.log(jobs, '-----------------');


    return (
        <PageContainer>
            <div className='flex flex-1 flex-col space-y-2'>
                <div className='flex items-center justify-between space-y-2'>
                    <h2 className='text-2xl font-bold tracking-tight'>
                        Hi, Welcome back 👋
                    </h2>
                </div>

                <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs md:grid-cols-2 lg:grid-cols-4'>
                    <Card className='@container/card'>
                        <CardHeader>
                            <CardDescription>Total Revenue</CardDescription>
                            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                                $1,250.00
                            </CardTitle>
                            <CardAction>
                                <Badge variant='outline'>
                                    <IconTrendingUp />
                                    +12.5%
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                            <div className='line-clamp-1 flex gap-2 font-medium'>
                                Trending up this month <IconTrendingUp className='size-4' />
                            </div>
                            <div className='text-muted-foreground'>
                                Visitors for the last 6 months
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className='@container/card'>
                        <CardHeader>
                            <CardDescription>New Customers</CardDescription>
                            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                                1,234
                            </CardTitle>
                            <CardAction>
                                <Badge variant='outline'>
                                    <IconTrendingDown />
                                    -20%
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                            <div className='line-clamp-1 flex gap-2 font-medium'>
                                Down 20% this period <IconTrendingDown className='size-4' />
                            </div>
                            <div className='text-muted-foreground'>
                                Acquisition needs attention
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className='@container/card'>
                        <CardHeader>
                            <CardDescription>Active Accounts</CardDescription>
                            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                                45,678
                            </CardTitle>
                            <CardAction>
                                <Badge variant='outline'>
                                    <IconTrendingUp />
                                    +12.5%
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                            <div className='line-clamp-1 flex gap-2 font-medium'>
                                Strong user retention <IconTrendingUp className='size-4' />
                            </div>
                            <div className='text-muted-foreground'>
                                Engagement exceed targets
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className='@container/card'>
                        <CardHeader>
                            <CardDescription>Growth Rate</CardDescription>
                            <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                                4.5%
                            </CardTitle>
                            <CardAction>
                                <Badge variant='outline'>
                                    <IconTrendingUp />
                                    +4.5%
                                </Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
                            <div className='line-clamp-1 flex gap-2 font-medium'>
                                Steady performance increase{' '}
                                <IconTrendingUp className='size-4' />
                            </div>
                            <div className='text-muted-foreground'>
                                Meets growth projections
                            </div>
                        </CardFooter>
                    </Card>
                </div>

                <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
                    <div className='col-span-7 md:col-span-7'>
                        <Card className='@container/card'>
                            <CardHeader>
                                <CardTitle className='font-semibold'>
                                    My Jobs
                                </CardTitle>
                                <CardDescription>{jobs?.data?.count} job posted so far</CardDescription>
                                <CardAction>
                                    <Badge variant='outline'>
                                        <IconTrendingUp />
                                        +12.5%
                                    </Badge>
                                </CardAction>
                            </CardHeader>


                            <CardContent>

                                {jobs?.data?.count > 0 ? (
                                    <ul className='space-y-2'>
                                        {jobs?.data.data.map((job: any) => (
                                            <li
                                                key={job.id}
                                                className=''
                                            >
                                                <ClientJobCard job={job} />
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className='text-muted-foreground'>No jobs found</div>
                                )}
                            </CardContent>
                        </Card>
                    </div>




                </div>
            </div>
        </PageContainer>
    );
}