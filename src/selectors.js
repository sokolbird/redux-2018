import { createSelector } from 'reselect';

const videosSelector = state => state.videos;
const searchSelector = state => state.search;
const filteredVideos = createSelector(
  [videosSelector, searchSelector],
  (videos, search) => (
    videos.filter((video) => {
      const criteriaKeys = Object.keys(search);
      return criteriaKeys.every((criteriaKey) => {
        const criteriaValue = search[criteriaKey];
        if (criteriaValue.length < 2) {
          return true;
        }
        return video[criteriaKey].includes(criteriaValue);
      });
    })
  ),
);

export default filteredVideos;
