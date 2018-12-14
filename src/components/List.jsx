import React, { PureComponent } from "react";
import { arrayOf, shape, string } from "prop-types";

import ListItem from "./ListItem";

export default class List extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        id: string,
        title: string,
        url: string,
        tags: string
      })
    )
  };

  static defaultProps = {
    items: []
  };

  render() {
    const {
      items,
      fullCount,
      filteredCount,
      removeVideo,
      editVideo
    } = this.props;

    const list = items.map(item => (
      <ListItem
        removeVideo={removeVideo}
        editVideo={editVideo}
        key={item.id}
        {...item}
      />
    ));

    return (
      <div>
        <ul>{list}</ul>
        <div>
          Count: {fullCount} / Filtered: {filteredCount}
        </div>
      </div>
    );
  }
}
