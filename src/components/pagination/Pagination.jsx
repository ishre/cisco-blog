"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled = {!hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
