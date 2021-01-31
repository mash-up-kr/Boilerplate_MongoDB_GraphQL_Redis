const getPosts = async (_) => {
  const posts = [];

  for (let i = 0; i < 20; ++i) {
    posts.push({
      id: i,
      title: `title ${i}`,
      content: `content`,
      createdAt: Date.now(),
    });
  }

  return posts;
};

export default getPosts;
