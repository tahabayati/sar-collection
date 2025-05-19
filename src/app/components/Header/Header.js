'use client'
import { FaBagShopping } from "react-icons/fa6";
import Link from "next/link"
import styles from "./Header.module.css"
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
         <Link href="/" >
           Sar
          </Link>
          <FaBagShopping/>
      </div>
    </header>
  )
}
