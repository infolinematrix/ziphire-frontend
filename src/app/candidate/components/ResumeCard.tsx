
import React from 'react'

interface Props {
    title: string,
    file?: File
}

export default function ResumeCard({ title, file }: Props) {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-2xl shadow p-4 md:p-6 space-y-4 w-full mb-4">

            {/* Content */}
            <p className="text-gray-800 dark:text-gray-200 text-sm">{title}</p>


        </div>
    )
}
