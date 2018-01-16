import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Article extends React.Component {
    render() {
        const {
            title,
            text,
            pictureURL,
            author,
            type,
            tags,
            numberOfLikes,
        } = this.props;

        return (
            <div className='Article'>
                <h1 style={{textAlign: 'center'}}>
                    {title}
                </h1>
                <h4 style={{textAlign: 'center'}}>
                    by {author.name}
                </h4>
                <h4 style={{textAlign: 'center'}}>
                    {type.toUpperCase()}
                </h4>
                <img src={pictureURL} width='100%' />
                <p style={{whiteSpace: 'pre-wrap'}}>
                    {text}
                </p>
                <div className='tags'>
                    <b>Tags:</b> {tags.join(', ')}
                </div>
                <div className='tags'>
                    <b>Likes:</b> {numberOfLikes}
                </div>
            </div>
        );
    }
};

Article.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    pictureURL: PropTypes.string,
    author: PropTypes.shape({
        name: PropTypes.string,
        avatarURL: PropTypes.string,
        numberOfArticles: PropTypes.number
    }),
    type: PropTypes.oneOf(['education', 'entertainment']),
    tags: PropTypes.arrayOf(PropTypes.string),
    numberOfLikes: PropTypes.number
};

Article.defaultProps = {
    author: {
        name: 'Unnamed Author'
    },
    pictureURL: 'https://i.ytimg.com/vi/O-58MDm1eWI/maxresdefault.jpg',
    type: 'entertainment',
    tags: [],
    numberOfLikes: 0
};

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Article
                    title='Cras ultricies mi eu turpis'
                    text='Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nullam accumsan lorem in dui. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Curabitur blandit mollis lacus. Nullam cursus lacinia erat.&#010;Etiam feugiat lorem non metus. Ut a nisl id ante tempus hendrerit. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nulla facilisi.&#010;Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Praesent turpis. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec vitae sapien ut libero venenatis faucibus. Nam adipiscing.&#010;Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Pellentesque posuere. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Donec posuere vulputate arcu. Fusce ac felis sit amet ligula pharetra condimentum.&#010;Ut id nisl quis enim dignissim sagittis. Phasellus tempus. Nam at tortor in tellus interdum sagittis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nunc interdum lacus sit amet orci.'
                    pictureURL='http://kaseyparksmedia.com/wp-content/uploads/2017/12/pexels-photo-459225.jpg'
                    author={{
                        name: 'John Smithey',
                        avatarURL: '',
                        numberOfArticles: 25
                    }}
                    type='education'
                    tags={['tag1', 'tag2', 'tag3']}
                    numberOfLikes={190}
                />
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);