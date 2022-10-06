import Post from '../types/post';

type Group = {
  [key: string]: Post[];
};

export const groupPostsByYear = (posts: Post[]) => {
  return posts.reduce((group: Group, post: Post) => {
    const { date } = post;
    const year = date.slice(0, 4);
    group[year] = group[year] ?? [];
    group[year].push(post);
    return group;
  }, {});
};
