export const parseTags = (tags: string | string[]) => {
  if (tags === undefined) {
    return [];
  }
  return Array.isArray(tags) ? tags : tags.split(' ');
};
