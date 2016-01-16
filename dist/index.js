'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _zxcvbn = require('zxcvbn');

var _zxcvbn2 = _interopRequireDefault(_zxcvbn);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapPasswordStrength = function (_Component) {
  _inherits(BootstrapPasswordStrength, _Component);

  function BootstrapPasswordStrength(props) {
    _classCallCheck(this, BootstrapPasswordStrength);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BootstrapPasswordStrength).call(this, props));

    _this.handleInput = _this.handleInput.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(BootstrapPasswordStrength, [{
    key: 'handleInput',
    value: function handleInput(event) {
      event.preventDefault();
      this.setState({
        result: (0, _zxcvbn2.default)(event.target.value)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var labelText = this.props.labelText;
      var result = this.state.result;

      var passwordLabel = labelText ? labelText : 'Enter password';
      var scoreClasses = [{ label: _react2.default.createElement(
          'span',
          null,
          'Very weak'
        ), bsStyle: 'danger', striped: true, active: true, now: 20 }, { label: _react2.default.createElement(
          'span',
          null,
          'Weak'
        ), bsStyle: 'danger', striped: true, active: true, now: 40 }, { label: _react2.default.createElement(
          'span',
          null,
          'Ok'
        ), bsStyle: 'warning', striped: true, active: true, now: 60 }, { label: _react2.default.createElement(
          'span',
          null,
          'Strong'
        ), bsStyle: 'success', now: 80 }, { label: _react2.default.createElement(
          'span',
          null,
          'Very strong'
        ), bsStyle: 'success', now: 100 }];
      var scoreClass = scoreClasses[result ? result.score : 0];
      var label = _react2.default.createElement(
        'label',
        null,
        passwordLabel
      );

      var inputProps = Object.assign({}, this.props, {
        label: label,
        onInput: this.handleInput,
        type: 'password',
        labelText: undefined
      });

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(_reactBootstrap.Input, inputProps),
        result && _react2.default.createElement(_reactBootstrap.ProgressBar, scoreClass)
      );
    }
  }]);

  return BootstrapPasswordStrength;
}(_react.Component);

exports.default = BootstrapPasswordStrength;

BootstrapPasswordStrength.propTypes = {
  labelText: _react2.default.PropTypes.string
};
