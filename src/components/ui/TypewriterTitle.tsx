"use client";
/**
 * @author: @dorian_baffier
 * @description: Typewriter
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useEffect, useRef } from "react";

interface TypewriterSequence {
    text: string;
    deleteAfter?: boolean;
    pauseAfter?: number;
}

interface TypewriterTitleProps {
    sequences?: TypewriterSequence[];
    typingSpeed?: number;
    startDelay?: number;
    autoLoop?: boolean;
    loopDelay?: number;
    className?: string;
    inline?: boolean;
}

export default function TypewriterTitle({
    sequences = [
        { text: "Typewriter", deleteAfter: true },
        { text: "Multiple Words", deleteAfter: true },
        { text: "Auto Loop", deleteAfter: false },
    ],
    typingSpeed = 50,
    startDelay = 500,
    autoLoop = true,
    loopDelay = 2000,
    className = "",
    inline = false,
}: TypewriterTitleProps) {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let isActive = true;

        const typeText = async () => {
            if (!textRef.current) return;

            while (isActive) {
                // Reset the text content
                textRef.current.textContent = "";

                // Wait for initial delay on first run
                await new Promise((resolve) => setTimeout(resolve, startDelay));

                // Process each sequence
                for (const sequence of sequences) {
                    if (!isActive) break;

                    // Type out the sequence text
                    for (let i = 0; i < sequence.text.length; i++) {
                        if (!isActive) break;
                        textRef.current.textContent = sequence.text.slice(0, i + 1);
                        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
                    }

                    // Pause after typing if specified
                    if (sequence.pauseAfter) {
                        await new Promise((resolve) => setTimeout(resolve, sequence.pauseAfter));
                    }

                    // Delete the text if specified
                    if (sequence.deleteAfter) {
                        // Small pause before deleting
                        await new Promise((resolve) => setTimeout(resolve, 500));

                        for (let i = sequence.text.length; i > 0; i--) {
                            if (!isActive) break;
                            textRef.current.textContent = sequence.text.slice(0, i);
                            await new Promise((resolve) => setTimeout(resolve, typingSpeed / 2));
                        }
                    }
                }

                if (!autoLoop || !isActive) break;

                // Wait before starting next loop
                await new Promise((resolve) => setTimeout(resolve, loopDelay));
            }
        };

        typeText();

        // Cleanup function to stop the animation when component unmounts
        return () => {
            isActive = false;
        };
    }, [sequences, typingSpeed, startDelay, autoLoop, loopDelay]);

    if (inline) {
        // Calculate the maximum width needed for all sequences
        const maxLength = Math.max(...sequences.map(s => s.text.length));
        const estimatedWidth = `${maxLength * 0.6}em`; // Approximate character width
        
        return (
            <span
                className={`inline-block ${className}`}
                style={{ 
                    minWidth: estimatedWidth, 
                    textAlign: 'left',
                    display: 'inline-block'
                }}
            >
                <span
                    ref={textRef}
                    className="inline-block border-r-2 border-current animate-cursor pr-1"
                >
                    {sequences[0].text}
                </span>
            </span>
        );
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto py-24">
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-6xl font-mono text-black dark:text-white tracking-tight flex items-center gap-2">
                    <span
                        ref={textRef}
                        className="inline-block border-r-2 border-black dark:border-white animate-cursor pr-1"
                    >
                        {sequences[0].text}
                    </span>
                </div>
            </div>
        </div>
    );
}