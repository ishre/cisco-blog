"use client";

import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const {data, status} = useSession();
  const router = useRouter();
  if(status==="loading") return <div className={styles.loading}>Loading...</div>;
  if(status==="authenticated") router.push("/");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn("google")}>Login with Google</div>
        <div className={styles.socialButton} onClick={()=>signIn("github")}>Login with Github</div>
        <div className={styles.socialButton}>Login with Facebook</div>
      </div>
    </div>
  )
}

export default Login;
