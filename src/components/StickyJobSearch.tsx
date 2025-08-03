
import React from 'react'
import Image from 'next/image';
import { Breadcrumbs } from './breadcrumbs';
import SearchInput from './search-input';
import { Button } from './ui/button';



export default function StickyJobSearch() {
    return (
        <>
        
        <div className="sticky top-0 z-10 border-0 flex items-center justify-between flex-wrap gap-3 bg-background rounded-sm p-4">
           
            {/* App Logo */}

            <Image
                src="/img/ziphire-logo-dark-1.svg"
                alt="App Logo"
                width={34}
                height={34}
            // className="w-100 h-10 object-cover"
            />
            {/* Left Section: Search Filters */}
            <div className="flex flex-wrap items-center gap-3 flex-1 min-w-10">
               <SearchInput />
               
                
            </div>

            {/* Right Section: Actions */}
            <div className="flex items-center gap-2">
                <Button variant={"outline"}>
                    <Image
                        src="/img/filter.svg"
                        alt="Filter Icon"
                        width={16}
                        height={16}
                    />
                    Filter
                </Button>
                <button className="px-4 py-1.5 bg-gray-200 text-sm rounded hover:bg-gray-300">
                    Reset
                </button>
                <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                    Filter
                </button>
                <button className="px-4 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                    Add New
                </button>
            </div>
        </div>
        
        </>
    )
}


