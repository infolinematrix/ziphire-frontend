import { Button } from '@/components/ui/button'
import { IconMessage } from '@tabler/icons-react'
import { MessageCircle } from 'lucide-react'
import React from 'react'

export default function ChatButton() {
  return (
    

    <div className="relative w-fit p-2">
      <MessageCircle className="w-4 h-4 text-gray-700" />
      {/* {notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
          {notificationCount}
        </span>
      )} */}
       <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 rounded-full">
          2
        </span>
    </div>
  )
}
