import { connect } from 'react-redux';
import { removeVideo, editVideo } from '../reducers/videos';
import List from '../components/List';
import filteredVideos from '../selectors';


const mapStateToProps = state => ({
  items: filteredVideos(state),
  fullCount: state.videos.length,
  filteredCount: filteredVideos(state).length
});

const mapDispatchToProps = dispatch => ({
  removeVideo: id => dispatch(removeVideo(id)),
  editVideo: (id, title, tags) => dispatch(editVideo(id, title, tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
