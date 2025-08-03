'use client'
import { Bell } from "lucide-react";
import { randomUUID } from "node:crypto";
import { useEffect, useRef } from "react";

export function NotificationSocket({ token }: { token: string }) {
  const socketRef = useRef<WebSocket | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // const ws = new WebSocket(`ws://localhost:8000/ws/notifications?token=${token}`);
    // socketRef.current = ws;

    // ws.onopen = () => {
    //   console.log("WebSocket connected");

      // intervalRef.current = setInterval(() => {
        
      //   console.log("🕐 Logging every 5 seconds...");
      //   // ws.send("ping");
      // }, 5000);
    // };

    // ws.onmessage = (event) => {
    //   const notifications = JSON.parse(event.data);
    //   console.log("🔔 New Notifications:", notifications);
    //   // Show in UI, toast, etc.
    // };

    // ws.onerror = (event) => {
    //   console.log("WebSocket error event", event);

    //   const wsReadyState = socketRef.current?.readyState;
    //   const readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    //   console.log("WebSocket readyState:", readyStates[wsReadyState ?? 3]);
    // };

    // ws.onclose = () => {
    //   console.log("WebSocket closed");
    //   if (intervalRef.current) clearInterval(intervalRef.current);
    // };
    

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // ws.close();
    };
  }, [token]);

  return (
    <div className="relative w-fit p-2">
      <Bell className="w-4 h-4 text-gray-700" />
      {/* {notificationCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
          {notificationCount}
        </span>
      )} */}
       <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
          5
        </span>
    </div>
  );
}
