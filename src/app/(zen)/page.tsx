"use client";
import Image from "next/image";
import styles from "../page.module.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function HomeZenPage() {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current as any,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/loading.json",
    });

    return () => animation.destroy();
  }, []);

  return (
    <main className={styles.main}>
      <h2>Loading Habit Zen</h2>
      <div ref={animationContainer}></div>
    </main>
  );
}
