import React, { PureComponent } from 'react';

class RegisterForm extends PureComponent {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.state = {
            text: 'HOOOOO',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const text = event.target[0].value;
        this.props.addText(text);
        this.formRef.current.reset();
    }

    render() {
        const { texts } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} ref={this.formRef}>
                    <input type='text' placeholder='Input text here' />
                    <button type='submit'>Add Text</button>
                </form>
                <div>
                    <p>Here goes the texts:</p>
                    <ul>
                        {texts.map((text, index) => (
                            <li key={`item-${index}`}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
