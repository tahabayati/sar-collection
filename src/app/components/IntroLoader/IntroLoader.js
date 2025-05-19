'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'          // keep Next optimisation
import styles from './IntroLoader.module.css'

export default function IntroLoader({ onDone }) {
  // phases: scroll → zoom → reveal
  const [phase, setPhase] = useState('scroll')

  /* timeline control */
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('zoom'), 3000)      // stop scroll
    const t2 = setTimeout(() => {
      setPhase('reveal')   // switch to normal flow
      onDone()             // tell parent the intro finished
    }, 4200)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  /* wrapper class changes once we reveal */
  const wrapperClass =
    phase === 'reveal' ? styles.loaderStatic : styles.loader

  /* column gets scroll / zoom modifiers */
  const columnClass =
    styles.column +
    (phase === 'scroll' ? ` ${styles.scroll}` : '') +
    (phase === 'zoom'   ? ` ${styles.zoom}`   : '')

  return (
    <div className={wrapperClass}>
      <div className={columnClass}>
        {/* use 20 placeholder images; LAST one becomes hero */}
        {Array.from({ length: 20 }).map((_, i, arr) => {
          const lastIndex = arr.length - 1
          const isHero = i === lastIndex

          const imgClass =
            styles.img +
            (phase === 'zoom'
              ? (isHero ? ` ${styles.heroZoom}` : ` ${styles.fadeOut}`)
              : '')

          return (
            <Image
              key={i}
              src={`https://picsum.photos/seed/${i}/800/600`}
              alt={`placeholder ${i}`}
              width={800}
              height={600}
              priority={i < 12}        /* preload first dozen for smoothness */
              className={imgClass}
            />
          )
        })}
      </div>
    </div>
  )
}
