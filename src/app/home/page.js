'use client'
import styles from './home.module.css'
import Image from 'next/image'

const images = [
  { src: '/images/image1.webp', alt: 'Image 1' },
  { src: '/images/image2.webp', alt: 'Image 2' },
  { src: '/images/image3.webp', alt: 'Image 3' },
  { src: '/images/image4.webp', alt: 'Image 4' },
  { src: '/images/image5.webp', alt: 'Image 5' },
  { src: '/images/image6.webp', alt: 'Image 6' },
  { src: '/images/image7.webp', alt: 'Image 7' }
]

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
  
      <div style={{
        width: '310px',
        height: '500px',
        backgroundColor: '#d7baaa',
        zIndex: -1,
        borderRadius: '10px',
        position: 'relative',
      }}>
        <div className={styles.title}>
          <h1>Sar collection</h1>
          <p>*</p>
        </div>
      </div>

      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.panel} ${index === images.length - 1 ? styles.stay : ''}`}
          style={{ '--i': index }}
        >
          <div className={styles.content}>
            <Image
              src={img.src}
              alt={img.alt}
              width={270}
              height={450}
              priority={index === images.length - 1}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
