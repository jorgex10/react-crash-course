import Post from "./Post";

import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Jorge" body="ReactJS is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </ul>
  );
}

export default PostsList;
