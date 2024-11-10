import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import Post from "./Post";
const Main = () => {
  const [postsList, setPostsList] = useState([]);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div>
        {postsList.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
};

export default Main;
