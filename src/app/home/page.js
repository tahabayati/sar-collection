'use client'
import styles from './home.module.css'
import Image from 'next/image'
import Header from '../components/Header/Header'
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
    <div className={styles.HomePageContainer}>
        <div className={styles.wrapper}>
      
          <div style={{
            width: '310px',
            height: '500px',
            backgroundColor: '#d7baaa',
            zIndex: -1,
            borderRadius: '10px',
            position: 'relative',
            boxShadow: ' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'
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


        <div className={styles.Hero}>
            <div style={{
            width: '310px',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d7baaa',
            zIndex:1 ,
            borderRadius: '10px',
            position: 'relative',
            boxShadow: ' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'
            
            }}>
            <div className={styles.title}>
              <h1>Sar collection</h1>
              <p>*</p>
            
            </div>
              <div className={styles.content}>
                <Image
                  src='/images/image7.webp'
                  alt="sdfsdf"
                  width={270}
                  height={450}
    
                />
              </div>
          </div>
        </div>

        <div className={styles.AfterTheHero}>
          <Header/>

        </div>

    </div>
  )
}
