import Card from "@/components/card/Card";
import { headers } from "next/headers";
import Image from "next/image";
import styles from "./profile.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/profile", {
    method: "GET",
    headers: headers(),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Profile: failed to fetch posts");
  }
  return res.json();
};
const Profile = async () => {
  const data = await getData();
  const user = data.user;
  const posts = data.posts;
  return (
    <div>
      <div className={styles.userInfoContainer}>
        <Image src={user.image} alt="dp" width={100} height={100} className={styles.image}/>
        <div>
          <h1>Welcome, {user?.name}</h1>
          <p>Email: {user?.email}</p>
        </div>
      </div>
      <h2 className={styles.yourPosts}>Your posts:</h2>
      {posts?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};
export default Profile;
