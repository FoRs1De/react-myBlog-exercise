import PostItem from './PostItem';

const PostsList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => {
        <PostItem post={post} key={post.id}></PostItem>;
      })}
    </div>
  );
};

export default PostsList;
