const editPost = async (_, {
  id,
  title,
  author,
  content,
}) => {
  const editPost = {
    id,
    title,
    author,
    content,
  };

  return editPost;
};

export default editPost;
