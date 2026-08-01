"use client";

import { useEffect, useRef, useState } from "react";

type TypeWriterProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
};

export default function TypeWriter({
  text,
  className = "",
  speed = 45,
  delay = 0,
  onComplete,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setDisplayed(text);
      setDone(true);
      onCompleteRef.current?.();
      return;
    }

    const startTimer = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(startTimer);
  }, [text, delay]);

  useEffect(() => {
    if (!started || done) return;

    if (displayed.length >= text.length) {
      setDone(true);
      onCompleteRef.current?.();
      return;
    }

    const timer = window.setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => window.clearTimeout(timer);
  }, [started, displayed, text, speed, done]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
      <span
        className={`ml-0.5 inline-block h-[0.9em] w-[0.08em] bg-current align-[-0.05em] ${
          done ? "opacity-0" : "animate-cursor-blink"
        }`}
        aria-hidden
      />
    </span>
  );
}
