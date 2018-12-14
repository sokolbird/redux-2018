import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

const getVideoId = (url) => url.split('/')[3];
const createVideoUrl = (id) => `https://www.youtube.com/embed/${id}`;

export default class List extends PureComponent {
    static propTypes = {
        items: arrayOf(shape({
            id: string,
            title: string,
            url: string,
            tags: arrayOf(string),
        })),
    };

    static defaultProps = {
        items: [
            {
                id: '1',
                title: 'Video 1',
                url: 'https://youtu.be/9FmXNWq3EZI',
            },
            {
                id: '2',
                title: 'Video 2',
                url: 'https://youtu.be/OiXd9vZb1Lc',
            }
        ],
    };

    render() {
        const { items } = this.props;

        const list = items.map(item => {
            const { url, id, title } = item;

            const videoId = getVideoId(url);

            return (
                <li key={id}>
                    <div className="title">{title}</div>
                    <iframe src={createVideoUrl(videoId)} title={title} />
                </li>
            )
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
}
