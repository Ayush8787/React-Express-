import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {
    constructor(props)
    {
        super(props);
        
    }

    componentDidMount() {

        this.removeCommentBox = commentBox('5656503721656320-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {
        let id_news_1 = this.props.id_news;
        return (
            <div className="commentbox" id={id_news_1} />
        );
    }
}
export default PageWithComments;