import React from "react";
import PropTypes from "prop-types";

import "./Thought.css";

export default class Thought extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    };

    visible = true;
    render() {
        if (!this.props.text) {
            return null;
        }
        return (
            <div class="thought">
                <span class="bubble">{this.props.text}</span>
                <div class="pointer"></div>
            </div>
        );
    }
}
