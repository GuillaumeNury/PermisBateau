import React from 'react';

export default class LevelBuilderPage extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
          image: new Image(),
          imagePath: 'memento-cotier-3.jpg',
          loaded: false,
          overlayBox: null,
          overlayPoint1: null,
          overlayPoint2: null,
      }

      this.imageRef = React.createRef();
      this._mouseUpHandler = () => this._mouseUp();
    }

    componentDidMount() {
        // eslint-disable-next-line
        this.state.image.onload = () => {
            this.setState({ loaded: true });
        }

        // eslint-disable-next-line
        this.state.image.src = this.state.imagePath;

        document.addEventListener('mouseup', this._mouseUpHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this._mouseUpHandler);
    }

    /**
     * 
     * @param {MouseEvent} evt 
     */
    _imageMouseDown(evt) {
        this.setState({
            overlayPoint1: { x: evt.clientX, y: evt.clientY }
        })
    }

    /**
     * 
     * @param {MouseEvent} evt 
     */
    _mouseMove(evt) {
        const { overlayPoint1 } = this.state;

        if (!overlayPoint1) return;

        const overlayPoint2 = { x: evt.clientX, y: evt.clientY };

        const left = Math.min(overlayPoint1.x, overlayPoint2.x);
        const top = Math.min(overlayPoint1.y, overlayPoint2.y);
        const bottom = Math.max(overlayPoint1.y, overlayPoint2.y);
        const right = Math.max(overlayPoint1.x, overlayPoint2.x);
        const width = right - left
        const height = bottom - top

        const overlayBox = { left, top, bottom, right, width, height };

        this.setState({
            overlayPoint2,
            overlayBox,
        })
    }

    _mouseUp() {
        const { overlayBox } = this.state;

        if (!overlayBox) return;

        const { left, top, width, height } = overlayBox;

        this.setState({
            overlayBox: null,
            overlayPoint1: null,
            overlayPoint2: null,
        });

        const scrollTop = this._sumElementToRootProperty(this.imageRef.current, e => e.scrollTop);
        const scrollLeft = this._sumElementToRootProperty(this.imageRef.current, e => e.scrollLeft);

        const solution = prompt('Réponse');

        if (solution) {
            console.log([width, height, scrollLeft + left, scrollTop + top, solution].join(';'));
        }
    }

    /**
     * 
     * @param {HTMLElement} element
     * @param {(element: HTMLElement) => number} getter
     */
    _sumElementToRootProperty(element, getter) {
        return (element.parentElement? this._sumElementToRootProperty(element.parentElement, getter) : 0) + getter(element);
    }

    render() {
        const { image, loaded, imagePath, overlayBox } = this.state;
        const style = {
            width: image.width + 'px',
            height: image.height + 'px',
            background: `url("${imagePath}")`,
            backgroundSize: 'contain'
        };

        const overlayStyle = overlayBox ? {
            display: 'block',
            top: overlayBox.top + 'px',
            left: overlayBox.left + 'px',
            width: overlayBox.width + 'px',
            height: overlayBox.height + 'px',
        } : { display: 'none' };

        return (<div>
            {loaded
                ? <div style={style} ref={this.imageRef} onMouseDown={(evt) => this._imageMouseDown(evt)} onMouseMove={(evt) => this._mouseMove(evt)}></div>
                : <div>Chargement...</div>}
            <div id="selection-overlay" style={overlayStyle} onMouseMove={(evt) => this._mouseMove(evt)}></div>
        </div>);
    }
}