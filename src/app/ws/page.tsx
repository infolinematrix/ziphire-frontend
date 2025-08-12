"use client";

import { useUser } from "@/hooks/use-user";
import { useEffect, useRef, useState } from "react";
import { getToken } from "@/lib/auth"


export default function WebSocketTestPage() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const wsRef = useRef<WebSocket | null>(null);
    const [token, setToken] = useState("");



    useEffect(() => {

        const connectWebSocket = async () => {
            const token = await getToken();

            if (!token) {
                console.error("Authentication token not found.");
                return;
            }

            // Use the same endpoint URL as the FastAPI backend
            const ws = new WebSocket(`ws://localhost:8000/ws/chat?token=${token}`);
            wsRef.current = ws;

            ws.onopen = () => console.log("✅ Connected");

            ws.onmessage = (event) => {
                // Receive messages from the server and add to state
                setMessages((prev) => [...prev, event.data]);
            };

            ws.onclose = (event) => {
                console.log("❌ Disconnected", event.code);
                setMessages((prev) => [...prev, "Connection closed."]);
            };

            ws.onerror = (err) => {
                console.error("⚠️ WS Error", err);
                setMessages((prev) => [...prev, "Connection error."]);
            };
        };

        // Call the async function
        connectWebSocket();
        // Cleanup function
        return () => {
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.close();
            }
        };

    }, []);

    const sendMessage = () => {
        if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
            setMessages((prev) => [...prev, "Connection is not open"]);
            return;
        }

        try {
            wsRef.current.send(input);
            setInput(""); // Clear the input field after sending
        } catch (err) {
            console.error("Send error:", err);
            setMessages((prev) => [...prev, "Failed to send message"]);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>FastAPI WebSocket Chat</h1>

            <div
                style={{
                    marginTop: 12,
                    border: "1px solid #ddd",
                    padding: 12,
                    height: 260,
                    overflowY: "auto",
                    // background: "#fafafa",
                }}
            >
                {messages.map((m, i) => (
                    <div key={i} style={{ marginBottom: 6 }}>
                        {m}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    style={{ flex: 1, padding: 8 }}
                />
                <button onClick={sendMessage} style={{ padding: "8px 12px" }}>
                    Send
                </button>
            </div>
        </div>
    );
}