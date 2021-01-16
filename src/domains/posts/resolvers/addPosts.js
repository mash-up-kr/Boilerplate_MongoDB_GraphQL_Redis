const addPosts = async (_, {
  title,
  author,
  content,
}) => {
  const newPost = {
    title,
    author,
    content,
  };

  return newPost;
};

export default addPosts;
