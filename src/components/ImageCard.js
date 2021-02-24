import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageSpans: 0,
        }

        this.imageRef = React.createRef();

    }

    setSpans = () => {

        this.setState({
            imageSpans: Math.ceil(this.imageRef.current.clientHeight / 10 + 1)
        });

    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)

    }

    render() {

        const { description, urls: { regular: src } } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${ this.state.imageSpans }` }}>
                <img
                    src={ src }
                    alt={ description }
                    ref={ this.imageRef }
                />
            </div>
        )

    }

}

export default ImageCard;
