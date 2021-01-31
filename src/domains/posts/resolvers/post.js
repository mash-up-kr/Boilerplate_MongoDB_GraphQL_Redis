const getPost = async (_, {
  id,
}) => {
  const post = {
    id,
    title: 'title 1',
    content: 'content',
    createdAt: Date.now(),
  };

  return post;
};

export default getPost;
