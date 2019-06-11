import React from "react";

export default class ControlledInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: this.props.value };

        this.getValue = this.getValue.bind(this);
        this.onClickFocus = this.onClickFocus.bind(this);

        this.input = React.createRef();
    }

    getValue() {
        if (this.state.value) {
            this.setState({empty: false});
            return this.state.value;
        }
        else {
            this.setState({empty: true});
            return false;
        }
    }

    onClickFocus() {
        this.input.current.focus();
    }

    render() {
        return (
            <div className={this.props.field} onClick={this.onClickFocus}>
                {this.props.text && (
                    <p className={this.props.legend}>
                        {this.props.text}
                    </p>
                )}
                <input
                    ref={this.input}
                    id={this.props.id}
                    type={this.props.type}
                    className={this.props.className}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                />
                {this.state.empty && <p className={this.props.error}>Campo Obrigatório</p>}
            </div>
        );
    }
}
