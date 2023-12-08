import React from 'react'
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.categories} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 25.11.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.categories} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 25.11.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.categories} ${styles.coding}`}>
              Code
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 25.11.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.categories} ${styles.style}`}>
              Style
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>- 25.11.2023</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts
