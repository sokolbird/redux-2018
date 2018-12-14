import React, { PureComponent } from "react";
import { string } from "prop-types";

const getVideoId = url => url.split("/")[3];
const createVideoUrl = id => `https://www.youtube.com/embed/${id}`;

const VIEW_MODE = "VIEW_MODE";
const EDIT_MODE = "EDIT_MODE";

export default class ListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    tags: string.isRequired
  };

  state = {
    mode: VIEW_MODE,
    title: this.props.title,
    tags: this.props.tags
  };

  onChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  onSave = id => {
    this.props.editVideo(id, this.state.title, this.state.tags);
    this.switchMode();
  };

  switchMode = () => {
    const updatedMode = this.state.mode === VIEW_MODE ? EDIT_MODE : VIEW_MODE;
    this.setState({ mode: updatedMode });
  };

  render() {
    const { url, id, removeVideo } = this.props;
    const { title, tags } = this.state;

    const videoId = getVideoId(url);
    const videoUrl = createVideoUrl(videoId);

    const tagsList = tags.split(",").map(tag => {
      return <div key={Math.random()}># {tag}</div>;
    });

    return this.state.mode === VIEW_MODE ? (
      <li>
        <div>
          <div className="title">{title}</div>
          <div>
            <iframe src={videoUrl} title={title} />
          </div>
          <div>{tagsList}</div>
        </div>
        <div>
          <button onClick={this.switchMode}>&#9998;</button>
          <button onClick={() => removeVideo(id)}>&#10005;</button>
        </div>
      </li>
    ) : (
      <li>
        <div>
          <input value={title} onChange={this.onChange("title")} />
          <div>
            <iframe src={videoUrl} title={title} />
          </div>
          <input value={tags} onChange={this.onChange("tags")} />
        </div>
        <div>
          <button onClick={() => this.onSave(id)}>&#10003;</button>
          <button onClick={() => removeVideo(id)}>&#10005;</button>
        </div>
      </li>
    );
  }
}
