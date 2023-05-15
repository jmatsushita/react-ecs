import { jsx, Fragment } from 'react/jsx-runtime';
import { EntityContext } from '@react-ecs/core';
import React, { createRef, Children, Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

/**
 * A modification of https://github.com/dustinlacewell/react-ecs/blob/master/libs/three/src/components/ThreeView/index.tsx
 * Adds forwarding the ref for the contained object
 * @see https://github.com/dustinlacewell/react-ecs/issues/6
 * Solution contributed by @Honga1
 */

var ThreeView = /*#__PURE__*/function (_Component) {
  _inherits(ThreeView, _Component);

  var _super = _createSuper(ThreeView);

  function ThreeView(props) {
    var _this;

    _classCallCheck(this, ThreeView);

    _this = _super.call(this, props);
    _this.ref = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(ThreeView, [{
    key: "object3d",
    get: function get() {
      return this.ref.current;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var entity = this.context;
      entity.add(this);
    }
  }, {
    key: "render",
    value: function render() {
      if (Children.count(this.props.children) !== 1) {
        throw new Error('<ThreeView /> must have a single child.');
      }

      return jsx(Fragment, {
        children: /*#__PURE__*/React.cloneElement(this.props.children, {
          ref: this.props.forwardRef ? mergeRefs([this.ref, this.props.forwardRef]) : this.ref
        })
      }, void 0);
    }
  }]);

  return ThreeView;
}(Component);
ThreeView.contextType = EntityContext; // eslint-disable-next-line @typescript-eslint/no-explicit-any

ThreeView.__componentClassId__ = 100;

export { ThreeView };
