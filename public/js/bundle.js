(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var AddCharacterActions = (function () {
    function AddCharacterActions() {
        _classCallCheck(this, AddCharacterActions);

        this.generateActions('addCharacterSuccess', 'addCharacterFail', 'updateName', 'updateGender', 'invalidName', 'invalidGender');
    }

    _createClass(AddCharacterActions, [{
        key: 'addCharacter',
        value: function addCharacter(name, gender) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/api/characters',
                data: { name: name, gender: gender }
            }).done(function (data) {
                _this.actions.addCharacterSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addCharacterFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddCharacterActions;
})();

exports['default'] = _alt2['default'].createActions(AddCharacterActions);
module.exports = exports['default'];

},{"../alt":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var FooterActions = (function () {
    function FooterActions() {
        _classCallCheck(this, FooterActions);

        this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
    }

    _createClass(FooterActions, [{
        key: 'getTopCharacters',
        value: function getTopCharacters() {
            var _this = this;

            $.ajax({ url: 'api/characters/top' }).done(function (data) {
                _this.actions.getTopCharactersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTopCharactersFail(jqXhr);
            });
        }
    }]);

    return FooterActions;
})();

exports['default'] = _alt2['default'].createActions(FooterActions);
module.exports = exports['default'];

},{"../alt":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeActions = (function () {
    function HomeActions() {
        _classCallCheck(this, HomeActions);

        this.generateActions('getTwoCharactersSuccess', 'getTwoCharactersFail', 'voteFail');
    }

    _createClass(HomeActions, [{
        key: 'getTwoCharacters',
        value: function getTwoCharacters() {
            var _this = this;

            $.ajax({ url: '/api/character' }).done(function (data) {
                _this.actions.getTwoCharactersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'vote',
        value: function vote(winner, loser) {
            var _this2 = this;

            $.ajax({
                type: 'PUT',
                url: '/api/character',
                data: {
                    winner: winner,
                    loser: loser
                }
            }).done(function () {
                _this2.actions.getTwoCharacters();
            }).fail(function (jqXhr) {
                _this2.actions.voteFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return HomeActions;
})();

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

},{"../alt":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var NavbarActions = (function () {
    function NavbarActions() {
        _classCallCheck(this, NavbarActions);

        this.generateActions('updateOnlineUsers', //当Socket.IO事件更新时设置在线用户数
        'updateAjaxAnimation', //添加”fadeIn”或”fadeOut”类到加载指示器
        'updateSearchQuery', //当使用键盘时设置搜索请求
        'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
    }

    //根据名称查找角色

    _createClass(NavbarActions, [{
        key: 'findCharacter',
        value: function findCharacter(payload) {
            var _this = this;

            $.ajax({
                url: '/api/characters/search',
                data: { name: payload.searchQuery }
            }).done(function (data) {
                (0, _underscore.assign)(payload, data);
                _this.actions.findCharacterSuccess(payload);
            }).fail(function () {
                _this.actions.findCharacterFail(payload);
            });
        }

        //从服务器获取总角色数
    }, {
        key: 'getCharacterCount',
        value: function getCharacterCount() {
            var _this2 = this;

            $.ajax({ url: '/api/characters/count' }).done(function (data) {
                _this2.actions.getCharacterCountSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getCharacterCountFail(jqXhr);
            });
        }
    }]);

    return NavbarActions;
})();

exports['default'] = _alt2['default'].createActions(NavbarActions);
module.exports = exports['default'];

},{"../alt":5,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesAddCharacterStore = require('../stores/AddCharacterStore');

var _storesAddCharacterStore2 = _interopRequireDefault(_storesAddCharacterStore);

var _actionsAddCharacterActions = require('../actions/AddCharacterActions');

var _actionsAddCharacterActions2 = _interopRequireDefault(_actionsAddCharacterActions);

var AddCharacter = (function (_React$Component) {
    _inherits(AddCharacter, _React$Component);

    function AddCharacter(props) {
        _classCallCheck(this, AddCharacter);

        _get(Object.getPrototypeOf(AddCharacter.prototype), 'constructor', this).call(this, props);
        this.state = _storesAddCharacterStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(AddCharacter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //在componentDidMount中添加store监听者
            _storesAddCharacterStore2['default'].listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesAddCharacterStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            //添加onChange方法，无论何时当store改变后更新组件状态。
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var name = this.state.name.trim();
            var gender = this.state.gender;

            if (!name) {
                _actionsAddCharacterActions2['default'].invalidName();
                this.refs.nameTextField.getDOMNode().focus();
            }

            if (!gender) {
                _actionsAddCharacterActions2['default'].invalidGender();
            }

            if (name && gender) {
                _actionsAddCharacterActions2['default'].addCharacter(name, gender);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-sm-8' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'panel-heading' },
                                'Add Character'
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2['default'].createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.nameValidationState },
                                        _react2['default'].createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Character Name'
                                        ),
                                        _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                                            onChange: _actionsAddCharacterActions2['default'].updateName, autoFocus: true }),
                                        _react2['default'].createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.genderValidationState },
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2['default'].createElement('input', { type: 'radio', name: 'gender', id: 'female', value: 'Female', checked: this.state.gender === 'Female',
                                                onChange: _actionsAddCharacterActions2['default'].updateGender }),
                                            _react2['default'].createElement(
                                                'label',
                                                { htmlFor: 'female' },
                                                'Female'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2['default'].createElement('input', { type: 'radio', name: 'gender', id: 'male', value: 'Male', checked: this.state.gender === 'Male',
                                                onChange: _actionsAddCharacterActions2['default'].updateGender }),
                                            _react2['default'].createElement(
                                                'label',
                                                { htmlFor: 'male' },
                                                'Male'
                                            )
                                        )
                                    ),
                                    _react2['default'].createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary' },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddCharacter;
})(_react2['default'].Component);

exports['default'] = AddCharacter;
module.exports = exports['default'];

},{"../actions/AddCharacterActions":1,"../stores/AddCharacterStore":13,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_Navbar2['default'], null),
                _react2['default'].createElement(_reactRouter.RouteHandler, null),
                _react2['default'].createElement(_Footer2['default'], null)
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Footer":8,"./Navbar":10,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesFooterStore = require('../stores/FooterStore');

var _storesFooterStore2 = _interopRequireDefault(_storesFooterStore);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this, props);
    this.state = _storesFooterStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesFooterStore2['default'].listen(this.onChange);
      _actionsFooterActions2['default'].getTopCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesFooterStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var leaderboardCharacters = this.state.characters.map(function (character) {
        return _react2['default'].createElement(
          'li',
          { key: character.characterId },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/characters/' + character.characterId },
            _react2['default'].createElement('img', { className: 'thumb-md', src: 'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg' })
          )
        );
      });

      return _react2['default'].createElement(
        'footer',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-5' },
              _react2['default'].createElement(
                'h3',
                { className: 'lead' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Information'
                ),
                ' and ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Copyright'
                )
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Powered by ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Node.js'
                ),
                ', ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'MongoDB'
                ),
                ' and ',
                _react2['default'].createElement(
                  'strong',
                  null,
                  'React'
                ),
                ' with Flux architecture and server-side rendering.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'You may view the ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/sahat/newedenfaces-react' },
                  'Source Code'
                ),
                ' behind this project on GitHub.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                '© 2015 Sahat Yalkabov.'
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'col-sm-7 hidden-xs' },
              _react2['default'].createElement(
                'h3',
                { className: 'lead' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  'Leaderboard'
                ),
                ' Top 5 Characters'
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'list-inline' },
                leaderboardCharacters
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

},{"../actions/FooterActions":2,"../stores/FooterStore":14,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var _underscore = require('underscore');

var Home = (function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
        this.state = _storesHomeStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesHomeStore2['default'].listen(this.onChange);
            _actionsHomeActions2['default'].getTwoCharacters();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesHomeStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(character) {
            var winner = character.characterId;
            var loser = (0, _underscore.first)((0, _underscore.without)(this.state.characters, (0, _underscore.findWhere)(this.state.characters, { characterId: winner }))).characterId;
            _actionsHomeActions2['default'].vote(winner, loser);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var characterNodes = this.state.characters.map(function (character, index) {
                return _react2['default'].createElement(
                    'div',
                    { key: character.characterId, className: index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'thumbnail fadeInUp animated' },
                        _react2['default'].createElement('img', { onClick: _this.handleClick.bind(_this, character), src: 'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg' }),
                        _react2['default'].createElement(
                            'div',
                            { className: 'caption text-center' },
                            _react2['default'].createElement(
                                'ul',
                                { className: 'list-inline' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        'Race: '
                                    ),
                                    ' ',
                                    character.race
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        'Bloodline: '
                                    ),
                                    ' ',
                                    character.bloodline
                                )
                            ),
                            _react2['default'].createElement(
                                'h4',
                                null,
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/characters/' + character.characterId },
                                    _react2['default'].createElement(
                                        'strong',
                                        null,
                                        character.name
                                    )
                                )
                            )
                        )
                    )
                );
            });

            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'h3',
                    { className: 'text-center' },
                    'Click on the portrait.Select your favorite.'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'row' },
                    characterNodes
                )
            );
        }
    }]);

    return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeActions":3,"../stores/HomeStore":15,"react":"react","react-router":"react-router","underscore":"underscore"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesNavbarStore = require('../stores/NavbarStore');

var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var Navbar = (function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
        this.state = _storesNavbarStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    /*
    * contextTypes,我们需要它来引用router的实例，从而让我们能访问当前路径、请求参数、路由参数以及到其它路由的变换。
    * 我们不在Navbar组件里直接使用它，而是将它作为一个参数传递给Navbar action，以使它能导航到特定character资料页面。
    */

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesNavbarStore2['default'].listen(this.onChange);
            _actionsNavbarActions2['default'].getCharacterCount();

            var socket = io.connect();

            socket.on('onlineUsers', function (data) {
                _actionsNavbarActions2['default'].updateOnlineUsers(data);
            });

            $(document).ajaxStart(function () {
                _actionsNavbarActions2['default'].updateAjaxAnimation('fadeIn');
            });

            $(document).ajaxComplete(function () {
                setTimeout(function () {
                    _actionsNavbarActions2['default'].updateAjaxAnimation('fadeOut');
                }, 750);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesNavbarStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }

        /*
        * handleSubmit是用来处理表单提交的程序，在按下Enter键或点击Search图标时执行。
        * 它会做一些输入清理和验证工作，然后触发findCharacter action。
        * 另外我们还传递了搜索区域的DOM节点给action，以便当搜索结果为0时加载一个震动动画。
        */
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var searchQuery = this.state.searchQuery.trim();

            if (searchQuery) {
                _actionsNavbarActions2['default'].findCharacter({
                    searchQuery: searchQuery,
                    searchForm: this.refs.searchForm.getDOMNode(),
                    router: this.context.router
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'nav',
                { className: 'navbar navbar-default navbar-static-top' },
                _react2['default'].createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2['default'].createElement(
                        'button',
                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
                        _react2['default'].createElement(
                            'span',
                            { className: 'sr-only' },
                            'Toggle navigation'
                        ),
                        _react2['default'].createElement('span', { className: 'icon-bar' }),
                        _react2['default'].createElement('span', { className: 'icon-bar' }),
                        _react2['default'].createElement('span', { className: 'icon-bar' })
                    ),
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/', className: 'navbar-brand' },
                        _react2['default'].createElement(
                            'span',
                            { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri' }),
                            _react2['default'].createElement('div', { className: 'tri invert' }),
                            _react2['default'].createElement('div', { className: 'tri' }),
                            _react2['default'].createElement('div', { className: 'tri invert' })
                        ),
                        'NEF',
                        _react2['default'].createElement(
                            'span',
                            { className: 'badge badge-up badge-danger' },
                            this.state.onlineUsers
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { id: 'navbar', className: 'navbar-collapse collapse' },
                    _react2['default'].createElement(
                        'form',
                        { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
                        _react2['default'].createElement(
                            'div',
                            { className: 'input-group' },
                            _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalCharacters + ' characters', value: this.state.searchQuery, onChange: _actionsNavbarActions2['default'].updateSearchQuery }),
                            _react2['default'].createElement(
                                'span',
                                { className: 'input-group-btn' },
                                _react2['default'].createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                                    _react2['default'].createElement('span', { className: 'glyphicon glyphicon-search' })
                                )
                            )
                        )
                    ),
                    _react2['default'].createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/' },
                                'Home'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/stats' },
                                'Stats'
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Top 100 ',
                                _react2['default'].createElement('span', { className: 'caret' })
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top' },
                                        'Top Overall'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/caldari' },
                                        'Caldari'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/caldari/achura' },
                                                'Achura'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/caldari/civire' },
                                                'Civire'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/caldari/deteis' },
                                                'Deteis'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/gallente' },
                                        'Gallente'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/gallente/gallente' },
                                                'Gallente'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/gallente/intaki' },
                                                'Intaki'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/gallente/jin-mei' },
                                                'Jin-Mei'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/minmatar' },
                                        'Minmatar'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/minmatar/brutor' },
                                                'Brutor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/minmatar/sebiestor' },
                                                'Sebiestor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/minmatar/vherokior' },
                                                'Vherokior'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/top/amarr' },
                                        'Amarr'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/amarr/amarr' },
                                                'Amarr'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/amarr/ni-kunni' },
                                                'Ni-Kunni'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/top/amarr/khanid' },
                                                'Khanid'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement('li', { className: 'divider' }),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/shame' },
                                        'Hall of Shame'
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Female ',
                                _react2['default'].createElement('span', { className: 'caret' })
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female' },
                                        'All'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/caldari' },
                                        'Caldari'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/caldari/achura' },
                                                'Achura'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/caldari/civire/' },
                                                'Civire'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/caldari/deteis' },
                                                'Deteis'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/gallente' },
                                        'Gallente'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/gallente/gallente' },
                                                'Gallente'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/gallente/intaki' },
                                                'Intaki'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/gallente/jin-mei' },
                                                'Jin-Mei'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/minmatar' },
                                        'Minmatar'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/minmatar/brutor' },
                                                'Brutor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/minmatar/sebiestor' },
                                                'Sebiestor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/minmatar/vherokior' },
                                                'Vherokior'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/female/amarr' },
                                        'Amarr'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/amarr/amarr' },
                                                'Amarr'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/amarr/ni-kunni' },
                                                'Ni-Kunni'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/female/amarr/khanid' },
                                                'Khanid'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2['default'].createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Male ',
                                _react2['default'].createElement('span', { className: 'caret' })
                            ),
                            _react2['default'].createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male' },
                                        'All'
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/caldari' },
                                        'Caldari'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/caldari/achura' },
                                                'Achura'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/caldari/civire' },
                                                'Civire'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/caldari/deteis' },
                                                'Deteis'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/gallente' },
                                        'Gallente'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/gallente/gallente' },
                                                'Gallente'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/gallente/intaki' },
                                                'Intaki'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/gallente/jin-mei' },
                                                'Jin-Mei'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/minmatar' },
                                        'Minmatar'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/minmatar/brutor' },
                                                'Brutor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/minmatar/sebiestor' },
                                                'Sebiestor'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/minmatar/vherokior' },
                                                'Vherokior'
                                            )
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'dropdown-submenu' },
                                    _react2['default'].createElement(
                                        _reactRouter.Link,
                                        { to: '/male/amarr' },
                                        'Amarr'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        { className: 'dropdown-menu' },
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/amarr/amarr' },
                                                'Amarr'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/amarr/ni-kunni' },
                                                'Ni-Kunni'
                                            )
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            _react2['default'].createElement(
                                                _reactRouter.Link,
                                                { to: '/male/amarr/khanid' },
                                                'Khanid'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'li',
                            null,
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/add' },
                                'Add'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
})(_react2['default'].Component);

Navbar.contextTypes = {
    router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Navbar;
module.exports = exports['default'];

},{"../actions/NavbarActions":4,"../stores/NavbarStore":16,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

/*
* main.js是我们的React应用的入口点，
* 当Browserify将整个依赖树串起来并生成最终的bundle.js时会用到，
* 这里我们填入初始化的内容后我们基本不用再动它了。
*/

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
    _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":12,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsAddCharacter = require('./components/AddCharacter');

var _componentsAddCharacter2 = _interopRequireDefault(_componentsAddCharacter);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { handler: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/add', handler: _componentsAddCharacter2['default'] })
);
module.exports = exports['default'];

},{"./components/AddCharacter":6,"./components/App":7,"./components/Home":9,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAddCharacterActions = require('../actions/AddCharacterActions');

var _actionsAddCharacterActions2 = _interopRequireDefault(_actionsAddCharacterActions);

var AddCharacterStore = (function () {
    function AddCharacterStore() {
        _classCallCheck(this, AddCharacterStore);

        this.bindActions(_actionsAddCharacterActions2['default']);
        this.name = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

    _createClass(AddCharacterStore, [{
        key: 'onAddCharacterSuccess',
        value: function onAddCharacterSuccess(successMessage) {
            this.nameValidationState = 'has-sucess';
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddCharacterFail',
        value: function onAddCharacterFail(errorMessage) {
            this.nameValidationState = 'has-error';
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
            this.nameValidationState = '';
            this.helpBlock = '';
        }
    }, {
        key: 'onUpdateGender',
        value: function onUpdateGender(event) {
            this.gender = event.target.value;
            this.genderValidationState = '';
        }
    }, {
        key: 'onInvalidName',
        value: function onInvalidName() {
            this.nameValidationState = 'has-error';
            this.helpBlock = 'Please enter a character name.';
        }
    }, {
        key: 'onInvalidGender',
        value: function onInvalidGender() {
            this.genderValidationState = 'has-error';
        }
    }]);

    return AddCharacterStore;
})();

exports['default'] = _alt2['default'].createStore(AddCharacterStore);
module.exports = exports['default'];

},{"../actions/AddCharacterActions":1,"../alt":5}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var FooterStore = (function () {
    function FooterStore() {
        _classCallCheck(this, FooterStore);

        //bindActions用于将action绑定到store中定义的相应处理函数
        this.bindActions(_actionsFooterActions2['default']);
        this.characters = [];
    }

    _createClass(FooterStore, [{
        key: 'onGetTopCharactersSuccess',
        value: function onGetTopCharactersSuccess(data) {
            this.characters = data.slice(0, 5);
        }
    }, {
        key: 'onGetTopCharactersFail',
        value: function onGetTopCharactersFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }]);

    return FooterStore;
})();

exports['default'] = _alt2['default'].createStore(FooterStore);
module.exports = exports['default'];

},{"../actions/FooterActions":2,"../alt":5}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var HomeStore = (function () {
    function HomeStore() {
        _classCallCheck(this, HomeStore);

        this.bindActions(_actionsHomeActions2['default']);
        this.characters = [];
    }

    _createClass(HomeStore, [{
        key: 'onGetTwoCharactersSuccess',
        value: function onGetTwoCharactersSuccess(data) {
            this.characters = data;
        }
    }, {
        key: 'onGetTwoCharactersFail',
        value: function onGetTwoCharactersFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }, {
        key: 'onVoteFail',
        value: function onVoteFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }]);

    return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeActions":3,"../alt":5}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var NavbarStore = (function () {
    function NavbarStore() {
        _classCallCheck(this, NavbarStore);

        this.bindActions(_actionsNavbarActions2['default']);
        this.totalCharacters = 0;
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    _createClass(NavbarStore, [{
        key: 'onFindCharacterSuccess',
        value: function onFindCharacterSuccess(payload) {
            payload.router.transitonTo('/characters/' + payload.characterId);
        }
    }, {
        key: 'onFindCharacterFail',
        value: function onFindCharacterFail(payload) {
            payload.searchForm.classList.add('shake');
            setTimeout(function () {
                payload.searchForm.classList.remove('shake');
            }, 1000);
        }
    }, {
        key: 'onUpdateOnlineUsers',
        value: function onUpdateOnlineUsers(data) {
            this.onlineUsers = data.onlineUsers;
        }
    }, {
        key: 'onUpdateAjaxAnimation',
        value: function onUpdateAjaxAnimation(className) {
            //fadein or fadeout
            this.ajaxAnimationClass = className;
        }
    }, {
        key: 'onUpdateSearchQuery',
        value: function onUpdateSearchQuery(event) {
            //因为onChange方法返回一个event对象，所以这里使用event.target.value来获取输入框的值
            this.searchQuery = event.target.value;
        }
    }, {
        key: 'onGetCharacterCountSuccess',
        value: function onGetCharacterCountSuccess(data) {
            this.totalCharacters = data.count;
        }
    }, {
        key: 'onGetCharacterCountFail',
        value: function onGetCharacterCountFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return NavbarStore;
})();

exports['default'] = _alt2['default'].createStore(NavbarStore);
module.exports = exports['default'];

},{"../actions/NavbarActions":4,"../alt":5}]},{},[11]);
