import React from 'react'

import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const SIZE = 6;
        const MIDDLE_DIST = '12mm';
        const MIDDLE_DIST_PLUS = '18mm';

        let content = '';

        const colors = this.props.colors.slice(0);

        const direction = colors[0];
        const codes = colors.splice(1);

        const codeStyleBase = {
            position: 'absolute',
            width: '6mm',
            height: '6mm',
            boxSizing: 'border-box',
            borderLeft: this.props.showCodes ? 'none' : '1px solid black',
            borderRight: this.props.showCodes ? 'none' : '1px solid black',
            borderBottom: this.props.showCodes ? 'none' : '1px solid black',
            borderTop: this.props.showCodes ? 'none' : '1px solid black',
        };

        if (typeof codes === 'undefined' || codes.length === 0) {
            content = '';
        } else if (direction === 'IMAGE') {
            content = (<img src={codes[0]} className="cardImg" />);
        } else if (codes.length === 1) {
            switch (codes[0]) {
                case 'HORIZONTAL':
                    content = (<div className="path horizontal" />);
                    break;
                case 'VERTICAL':
                    content = (<div className="path vertical" />);
                    break;
                case 'TURN_LEFT_UP':
                    content = (
                        <div>
                            <div className="path horizontal left" />
                            <div className="path vertical up" />
                        </div>
                    );
                    break;
                case 'TURN_LEFT_DOWN':
                    content = (
                        <div>
                            <div className="path horizontal left" />
                            <div className="path vertical down" />
                        </div>
                    );
                    break;
                    break;
                case 'TURN_RIGHT_UP':
                    content = (
                        <div>
                            <div className="path horizontal right" />
                            <div className="path vertical up" />
                        </div>
                    );
                    break;
                case 'TURN_RIGHT_DOWN':
                    content = (
                        <div>
                            <div className="path horizontal right" />
                            <div className="path vertical down" />
                        </div>
                    );
                    break;
                case 'CROSSING':
                    content = (
                        <div>
                            <div className="path horizontal" />
                            <div className="path vertical" />
                        </div>
                    );
                    break;
                case 'CROSSING_LEFT':
                    content = (
                        <div>
                            <div className="path horizontal left" />
                            <div className="path vertical" />
                        </div>
                    );
                    break;
                case 'CROSSING_RIGHT':
                    content = (
                        <div>
                            <div className="path horizontal right" />
                            <div className="path vertical" />
                        </div>
                    );
                    break;
                case 'CROSSING_UP':
                    content = (
                        <div>
                            <div className="path horizontal" />
                            <div className="path vertical up" />
                        </div>
                    );
                    break;
                case 'CROSSING_DOWN':
                    content = (
                        <div>
                            <div className="path horizontal" />
                            <div className="path vertical down" />
                        </div>
                    );
                    break;
                default:
                    content = '';
            }
        } else {
            let endingStyle = {};
            let initialGap = 2;
            if (codes.length === 2) {
                initialGap = 12;
                if (direction === 'LEFT') {
                    endingStyle = { left: MIDDLE_DIST };
                } else if (direction === 'RIGHT') {
                    endingStyle = { right: MIDDLE_DIST };
                } else if (direction === 'UP') {
                    endingStyle = { top: MIDDLE_DIST };
                } else if (direction === 'DOWN') {
                    endingStyle = { bottom: MIDDLE_DIST };
                }
            } else if (codes.length === 3) {
                initialGap = 6;
            } else if (codes.length === 4) {
                initialGap = 3;
            }
            content = (
                <div className={`path ${direction === 'LEFT' || direction === 'RIGHT' ? 'horizontal' : 'vertical'}`}
                    style={endingStyle} >
                    {
                        codes.map((code, i) => {
                            let codeStyle = Object.assign({}, codeStyleBase);
                            if (direction === 'LEFT') {
                                codeStyle.right = `${initialGap + (i * SIZE)}mm`;
                                delete codeStyle.borderLeft;
                            } else if (direction === 'RIGHT') {
                                codeStyle.left = `${initialGap + (i * SIZE)}mm`;
                                delete codeStyle.borderLeft;
                            } else if (direction === 'UP') {
                                codeStyle.bottom = `${initialGap + (i * SIZE)}mm`;
                                delete codeStyle.borderTop;
                            } else if (direction === 'DOWN') {
                                codeStyle.top = `${initialGap + (i * SIZE)}mm`;
                                delete codeStyle.borderTop;
                            }
                            codeStyle.backgroundColor = this.props.showCodes ? code : 'white';
                            return (
                                <div key={i} style={codeStyle}></div>
                            )
                        })
                    }
                </div >
            )
        }

        return (
            <div className="card" onClick={this.props.onClick}>

                <div className={`border ${this.props.selected ? 'selected' : ''} ${this.props.showGrid ? 'grid' : ''}`} />

                <div style={{}}>
                </div>

                {content}

            </div>
        )
    }
}

export default Card;
