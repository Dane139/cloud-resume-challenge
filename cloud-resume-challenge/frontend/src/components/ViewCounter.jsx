import React, { useState, useEffect, useRef } from "react";

export default function ViewCounter() {
    const [count, setCount] = useState("...");
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const hasVisited = localStorage.getItem("has_visited_crc");
        const method = hasVisited ? 'GET' : 'POST';

        console.log(`[counter] Mode: ${hasVisited ? 'Returning User' : 'New User'} | sending: ${method}`);

        fetch('/api/view_counter', { 
            method: method,
            headers: { 'Accept': 'application/json' }
        })
        .then((res) => {
            if (!res.ok) throw new Error('API unavailable');
            return res.json();
        })
        .then((data) => {
            setCount(data.count || 0);
            if (!hasVisited) {

                localStorage.setItem("has_visited_crc", "true");
            }
        })
        .catch((err) => {
            console.error("Counter Error:", err);
            setCount("Error");
        });
    }, []);

    return (
        <div className="view_counter_wrap" style={{ textAlign: 'center', padding: '20px' }}>
            <span className="count" style={{ fontWeight: 'bold' }}>{count}</span>
            <span className="label">{"\u00A0"}Views</span> 
        </div>
    );
}