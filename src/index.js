import React, { Component,PropTypes } from 'react';
import ReactDom from 'react-dom';
import zxcvbn from 'zxcvbn';
import { Input, ProgressBar } from 'react-bootstrap';

export default class BootstrapPasswordStrength extends Component
{
  constructor(props)
  {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      password: props.password
    };

  }

  handleInput(event)
  {
    event.preventDefault();
    this.setState({
      password: event.target.value,
      result: zxcvbn(event.target.value)
    });

  }

  render()
  {
    const { labelText, inputClassName } = this.props;
    const { result } = this.state;
    const passwordLabel = (labelText) ? labelText : 'Enter password';
    const scoreClasses = [
      { label: <span>Very weak</span>, bsStyle: 'danger', striped: true, active: true, now: 20 },
      { label: <span>Weak</span>,  bsStyle: 'danger', striped: true, active: true, now: 40 },
      { label: <span>Ok</span>,  bsStyle: 'warning', striped: true, active: true, now: 60 },
      { label: <span>Strong</span>,  bsStyle: 'success', now: 80 },
      { label: <span>Very strong</span>,  bsStyle: 'success', now: 100 }
    ];
    const scoreClass = scoreClasses[result ? result.score : 0];

    return(
      <section>
        <label forHtml="password">{ passwordLabel }</label>
        <input className={ inputClassName }
               onInput={ this.handleInput }
               type="password"
               id="password" />
        <Input  />
        { result &&
        <ProgressBar { ...scoreClass } /> }
      </section>
    )
  }
}

BootstrapPasswordStrength.propTypes = {
  labelText: React.PropTypes.string,
  inputClassName: React.PropTypes.string
};
