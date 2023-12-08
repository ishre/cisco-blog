import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/company/cisco-vit-bhopal/"><Image src="/linkedin.png" alt='linkedin' width={24} height={24}/></Link>
        <Link href="https://www.instagram.com/ciscovitb/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><Image src="/instagram.png" alt='instagram' width={24} height={24}/></Link>
        <Link href="https://x.com/CiscoVitB?s=20"><Image src="/twitter.webp" alt='twitter' width={24} height={24}/></Link>
      </div>
      <div className={styles.logo}>
        {/* Add your logo image here */}
        <Image src="/CCVITBLogo.png" alt='logo' width={90} height={45}/>
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="https://ciscovitb.vercel.app/#Contact" className={styles.link}>Contact</Link>
        <Link href="https://ciscovitb.vercel.app/#About" className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar
