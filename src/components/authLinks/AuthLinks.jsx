"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {status} = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=> setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={()=> setOpen(!open)}>Home</Link>
          <Link href="https://ciscovitb.vercel.app/#Contact">Contact</Link>
          <Link href="https://ciscovitb.vercel.app/#About">About</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" onClick={()=> setOpen(!open)}>Login</Link>
          ) : (
            <>
              <Link href="/write" onClick={()=> setOpen(!open)}>Write</Link>
              <span className={styles.link} onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
