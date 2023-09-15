import { useEffect, useRef } from "react"
import runCanvas from "../lib/canvas"
import Image from 'next/image'
import styles from '../styles/my-page.module.scss'
import { SiMedium, SiTwitter, SiLinkedin, SiGithub, SiDribbble } from "react-icons/si";
import Link from 'next/link'
import React from "react"
import { SEO } from '../components/seo'


export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if(canvasRef.current) {
      runCanvas(canvasRef.current)
    }
  }, [])
  return <div className={styles.wrapper}>
    <SEO
      description="Expert software engineer specializing in Python, TypeScript, and React. Build scalable backends, dynamic interfaces, and optimize existing systems."
      siteTitle="Software Engineer"
      title="Hamza Erbay"
      twitterCreator="@hamzaerbay"
    />
    <main>
      <div className={styles.avatar}>
        <Image src="/hamza-erbay-avatar.jpg" alt='hamza erbay' width={144} height={144} className={styles.img} loading="lazy" priority={false} />
      </div>
      <h1 className={styles.name}>Hamza Erbay</h1>
      <p className={styles.title}>SOFTWARE ENGINEER</p>
      <ul className={styles.contacts}>
        <li>
          <Link target="_blank" href="https://medium.com/@hamzaerbay"><SiMedium className={styles.icon} /></Link>
        </li>
        <li>
          <Link target="_blank" href="https://twitter.com/hamzaerbay"><SiTwitter className={styles.icon} /></Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.linkedin.com/in/hamzaerbay/"><SiLinkedin className={styles.icon} /></Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/hamzaerbay/"><SiGithub className={styles.icon} /></Link>
        </li>
        <li>
          <Link target="_blank" href="https://dribbble.com/hamzaerbay"><SiDribbble className={styles.icon} /></Link>
        </li>
      </ul>

      <div className={styles['box--one']} />
      <div className={styles['box--two']} />
      <div className={styles['box--three']} />
      <div className={styles['box--four']} />
      <canvas className={styles.canvas} ref={canvasRef} />
    </main>
  </div>
}