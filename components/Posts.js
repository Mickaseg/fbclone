import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({ posts }) {
  const [realPosts, setRealPosts] = useState([]);
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  useEffect(() => {
    setRealPosts(realtimePosts?.docs);
  }, [realtimePosts]);
  console.log(realPosts);

  // console.log(realtimePosts.docs[0]._document.data.value.mapValue.fields.name);

  return (
    <div className="">
      {realtimePosts
        ? realPosts?.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                image={post.data().image}
                postImage={post.data().postImage}
                timestamp={post.data().timestamp}
              />
            );
          })
        : posts.map((post) => {
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              image={post.image}
              postImage={post.postImage}
              timestamp={post.timestamp}
            />;
          })}
    </div>
  );
}

export default Posts;
