import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/CCVITBLogo.png"
            alt="lama blog"
            width={100}
            height={50}
          />
          {/* <h1 className={styles.logoText}>Cisco Community VITB</h1> */}
        </div>
        <p className={styles.desc}>
          We are the vibrant Cisco community of impassioned enthusiasts, driven
          by an unwavering dedication to innovation and collaboration. Together,
          we aspire to revolutionize networking experiences, guided by curiosity
          and a collective commitment to pushing the frontiers of technology.
        </p>
        <div className={styles.icons}>
          <Link href="https://www.linkedin.com/company/cisco-vit-bhopal/">
            <Image src="/linkedin.png" alt="linkedin" width={18} height={18} />
          </Link>
          <Link href="https://www.instagram.com/ciscovitb/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={18}
              height={18}
            />
          </Link>
          <Link href="https://x.com/CiscoVitB?s=20">
            <Image src="/twitter.webp" alt="twitter" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {/* <Link href="/">Blog</Link> */}
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div> */}
        <div className={styles.list}>
          <span className={styles.listTitle}>Social Media</span>
          <Link href="https://www.linkedin.com/company/cisco-vit-bhopal/">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com/ciscovitb/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
            Instagram
          </Link>
          <Link href="https://x.com/CiscoVitB?s=20">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
