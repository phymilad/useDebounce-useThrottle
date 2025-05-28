import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(value: T, limit: number): T {
    const [throttleValue, setThrottleValue] = useState(value)

    const lastRan = useRef(Date.now())

    useEffect(() => {
        const timer = setTimeout(() => {
            if((Date.now() - lastRan.current >= limit)) {
                setThrottleValue(value)
                lastRan.current = Date.now()
            }
        }, limit - (Date.now() - lastRan.current));
        return () => {
            clearTimeout(timer)
        }
    }, [value, limit])

    return throttleValue
    
}