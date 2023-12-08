import Card from "@/components/card/Card";
import { headers } from "next/headers";
import Image from "next/image";
import styles from "../profile.module.css";

const getData = async (email) => {
  const res = await fetch(`http://localhost:3000/api/profile/${email}`, {
    method: "GET",
    headers: headers(),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Profile: failed to fetch posts");
  }
  return res.json();
};
const Profile = async ({ params }) => {
  const {email} = params;
  const data = await getData(email);
  return (
    <div>
      <div className={styles.userInfoContainer}>
        <Image src={data?.image} alt="dp" width={100} height={100} className={styles.image}/>
        <div>
          <h1>Welcome, {data?.name}</h1>
          <p>Email: {data?.email}</p>
        </div>
      </div>
      <h2 className={styles.yourPosts}>All posts:</h2>
      {data?.Post?.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};
export default Profile;