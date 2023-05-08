module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports) {

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.29.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var classof = __webpack_require__("c6b6");

module.exports = typeof process != 'undefined' && classof(process) == 'process';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "7234":
/***/ (function(module, exports) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8932":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Multiselect_vue_vue_type_style_index_0_id_078d9e82_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("967a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Multiselect_vue_vue_type_style_index_0_id_078d9e82_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Multiselect_vue_vue_type_style_index_0_id_078d9e82_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8ea1":
/***/ (function(module, exports) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "967a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var lengthOfArrayLike = __webpack_require__("07fa");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Multiselect", function() { return /* reexport */ Multiselect; });
__webpack_require__.d(__webpack_exports__, "multiselectMixin", function() { return /* reexport */ multiselectMixin; });
__webpack_require__.d(__webpack_exports__, "pointerMixin", function() { return /* reexport */ pointerMixin; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/Multiselect.vue?vue&type=template&id=078d9e82

const _hoisted_1 = ["tabindex", "aria-owns"];
const _hoisted_2 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_3 = {
  class: "multiselect__tags-wrap"
};
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["onKeypress", "onMousedown"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = {
  class: "multiselect__spinner"
};
const _hoisted_8 = ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"];
const _hoisted_9 = ["id"];
const _hoisted_10 = {
  key: 0
};
const _hoisted_11 = {
  class: "multiselect__option"
};
const _hoisted_12 = ["id", "role"];
const _hoisted_13 = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"];
const _hoisted_14 = ["data-select", "data-deselect", "onMouseenter", "onMousedown"];
const _hoisted_15 = {
  class: "multiselect__option"
};
const _hoisted_16 = {
  class: "multiselect__option"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
      'multiselect--active': _ctx.isOpen,
      'multiselect--disabled': $props.disabled,
      'multiselect--above': $options.isAbove,
      'multiselect--has-options-group': $options.hasOptionGroup
    }, "multiselect"]),
    onFocus: _cache[13] || (_cache[13] = $event => _ctx.activate()),
    onBlur: _cache[14] || (_cache[14] = $event => _ctx.searchable ? false : _ctx.deactivate()),
    onKeydown: [_cache[15] || (_cache[15] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.pointerForward(), ["self", "prevent"]), ["down"])), _cache[16] || (_cache[16] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.pointerBackward(), ["self", "prevent"]), ["up"]))],
    onKeypress: _cache[17] || (_cache[17] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.addPointerElement($event), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: _cache[18] || (_cache[18] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])($event => _ctx.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": 'listbox-' + _ctx.id
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "caret", {
    toggle: _ctx.toggle
  }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    onMousedown: _cache[0] || (_cache[0] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.toggle(), ["prevent", "stop"])),
    class: "multiselect__select"
  }, null, 32)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "clear", {
    search: _ctx.search
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "selection", {
    search: _ctx.search,
    remove: _ctx.removeElement,
    values: $options.visibleValues,
    isOpen: _ctx.isOpen
  }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.visibleValues, (option, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "tag", {
      option: option,
      search: _ctx.search,
      remove: _ctx.removeElement
    }, () => [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
      class: "multiselect__tag",
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getOptionLabel(option))
    }, null, 8, _hoisted_4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
      tabindex: "1",
      onKeypress: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.removeElement(option), ["prevent"]), ["enter"]),
      onMousedown: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.removeElement(option), ["prevent"]),
      class: "multiselect__tag-icon"
    }, null, 40, _hoisted_5)]))]);
  }), 256))], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $options.visibleValues.length > 0]]), _ctx.internalValue && _ctx.internalValue.length > $props.limit ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "limit", {
    key: 0
  }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("strong", {
    class: "multiselect__strong",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.limitText(_ctx.internalValue.length - $props.limit))
  }, null, 8, _hoisted_6)]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "multiselect__loading"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "loading", {}, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.loading]])])]),
    _: 3
  }), _ctx.searchable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("input", {
    key: 0,
    ref: "search",
    name: $props.name,
    id: _ctx.id,
    type: "text",
    autocomplete: "off",
    spellcheck: "false",
    placeholder: _ctx.placeholder,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.inputStyle),
    value: _ctx.search,
    disabled: $props.disabled,
    tabindex: $props.tabindex,
    onInput: _cache[1] || (_cache[1] = $event => _ctx.updateSearch($event.target.value)),
    onFocus: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.activate(), ["prevent"])),
    onBlur: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.deactivate(), ["prevent"])),
    onKeyup: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])($event => _ctx.deactivate(), ["esc"])),
    onKeydown: [_cache[5] || (_cache[5] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.pointerForward(), ["prevent"]), ["down"])), _cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.pointerBackward(), ["prevent"]), ["up"])), _cache[8] || (_cache[8] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.removeLastElement(), ["stop"]), ["delete"]))],
    onKeypress: _cache[7] || (_cache[7] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.addPointerElement($event), ["prevent", "stop", "self"]), ["enter"])),
    class: "multiselect__input",
    "aria-controls": 'listbox-' + _ctx.id
  }, null, 44, _hoisted_8)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.isSingleLabelVisible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 1,
    class: "multiselect__single",
    onMousedown: _cache[9] || (_cache[9] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])((...args) => _ctx.toggle && _ctx.toggle(...args), ["prevent"]))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "single-label", {
    option: $options.singleValue
  }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.currentOptionLabel), 1)])], 32)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.isPlaceholderVisible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 2,
    class: "multiselect__placeholder",
    onMousedown: _cache[10] || (_cache[10] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])((...args) => _ctx.toggle && _ctx.toggle(...args), ["prevent"]))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "placeholder", {}, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.placeholder), 1)])], 32)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "multiselect"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: "multiselect__content-wrapper",
      onFocus: _cache[11] || (_cache[11] = (...args) => _ctx.activate && _ctx.activate(...args)),
      tabindex: "-1",
      onMousedown: _cache[12] || (_cache[12] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(() => {}, ["prevent"])),
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])({
        maxHeight: _ctx.optimizedHeight + 'px'
      }),
      ref: "list"
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("ul", {
      class: "multiselect__content",
      style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])($options.contentStyle),
      role: "listbox",
      id: 'listbox-' + _ctx.id
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "before-list"), _ctx.multiple && _ctx.max === _ctx.internalValue.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", _hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "max-elements", {}, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Maximum of " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.max) + " options selected. First remove a selected option to select another.", 1)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.max || _ctx.internalValue.length < _ctx.max ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
      key: 1
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.filteredOptions, (option, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
        class: "multiselect__element",
        key: index,
        id: _ctx.id + '-' + index,
        role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
      }, [!(option && (option.$isLabel || option.$isDisabled)) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 0,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([_ctx.optionHighlight(index, option), "multiselect__option"]),
        onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.select(option), ["stop"]),
        onMouseenter: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.pointerSet(index), ["self"]),
        "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
        "data-selected": $options.selectedLabelText,
        "data-deselect": $options.deselectLabelText
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "option", {
        option: option,
        search: _ctx.search,
        index: index
      }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getOptionLabel(option)), 1)])], 42, _hoisted_13)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), option && (option.$isLabel || option.$isDisabled) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
        key: 1,
        "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
        "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
        class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([_ctx.groupHighlight(index, option), "multiselect__option"]),
        onMouseenter: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.groupSelect && _ctx.pointerSet(index), ["self"]),
        onMousedown: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => _ctx.selectGroup(option), ["prevent"])
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "option", {
        option: option,
        search: _ctx.search,
        index: index
      }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getOptionLabel(option)), 1)])], 42, _hoisted_14)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 8, _hoisted_12);
    }), 128)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_15, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "no-result", {
      search: _ctx.search
    }, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("No elements found. Consider changing the search query.")])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.showNoResults && _ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("li", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "no-options", {}, () => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("List is empty.")])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.showNoOptions && (_ctx.options.length === 0 || $options.hasOptionGroup === true && _ctx.filteredOptions.length === 0) && !_ctx.search && !$props.loading]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "after-list")], 12, _hoisted_9)], 36), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isOpen]])]),
    _: 3
  })], 42, _hoisted_1);
}
// CONCATENATED MODULE: ./src/Multiselect.vue?vue&type=template&id=078d9e82

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./src/multiselectMixin.js


function isEmpty(opt) {
  if (opt === 0) return false;
  if (Array.isArray(opt) && opt.length === 0) return true;
  return !opt;
}
function not(fun) {
  return (...params) => !fun(...params);
}
function includes(str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}
function filterOptions(options, search, label, customLabel) {
  return search ? options.filter(option => includes(customLabel(option, label), search)).sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options;
}
function stripGroups(options) {
  return options.filter(option => !option.$isLabel);
}
function flattenOptions(values, label) {
  return options => options.reduce((prev, curr) => {
    /* istanbul ignore else */
    if (curr[values] && curr[values].length) {
      prev.push({
        $groupLabel: curr[label],
        $isLabel: true
      });
      return prev.concat(curr[values]);
    }
    return prev;
  }, []);
}
function filterGroups(search, label, values, groupLabel, customLabel) {
  return groups => groups.map(group => {
    /* istanbul ignore else */
    if (!group[values]) {
      console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
      return [];
    }
    const groupOptions = filterOptions(group[values], search, label, customLabel);
    return groupOptions.length ? {
      [groupLabel]: group[groupLabel],
      [values]: groupOptions
    } : [];
  });
}
const flow = (...fns) => x => fns.reduce((v, f) => f(v), x);
/* harmony default export */ var multiselectMixin = ({
  data() {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(option, label) {
        if (isEmpty(option)) return '';
        return label ? option[label] : option;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
    if (this.preselectFirst && !this.internalValue.length && this.options.length) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();
      let options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }
      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({
            isTag: true,
            label: search
          });
        } else {
          options.unshift({
            isTag: true,
            label: search
          });
        }
      }
      return options.slice(0, this.optionsLimit);
    },
    valueKeys() {
      if (this.trackBy) {
        return this.internalValue.map(element => element[this.trackBy]);
      } else {
        return this.internalValue;
      }
    },
    optionKeys() {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map(element => this.customLabel(element, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? '' : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? '' : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.$emit('update:modelValue', this.multiple ? [] : null);
      }
    },
    search() {
      this.$emit('search-change', this.search);
    }
  },
  emits: ['open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(options, search, label) {
      return flow(filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(options) {
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(option) {
      const opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(option) {
      return !!option.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(option) {
      if (isEmpty(option)) return '';
      /* istanbul ignore else */
      if (option.isTag) return option.label;
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel;
      const label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return '';
      return label;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return;
      }
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel) return;
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return;
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return;
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return;
        }
        if (this.multiple) {
          this.$emit('update:modelValue', this.internalValue.concat([option]));
        } else {
          this.$emit('update:modelValue', option);
        }
        this.$emit('select', option, this.id);

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(selectedGroup) {
      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      if (!group) return;
      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);
        const newValue = this.internalValue.filter(option => group[this.groupValues].indexOf(option) === -1);
        this.$emit('update:modelValue', newValue);
      } else {
        let optionsToAdd = group[this.groupValues].filter(option => !(this.isOptionDisabled(option) || this.isSelected(option)));

        // if max is defined then just select options respecting max
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length);
        }
        this.$emit('select', optionsToAdd, this.id);
        this.$emit('update:modelValue', this.internalValue.concat(optionsToAdd));
      }
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(group) {
      return group[this.groupValues].every(option => this.isSelected(option) || this.isOptionDisabled(option));
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(group) {
      return group[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return;
      /* istanbul ignore else */
      if (option.$isDisabled) return;
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const index = typeof option === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', null);
      }
      this.$emit('remove', option, this.id);

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return;
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return;
      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }
      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== 'undefined') this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      /* istanbul ignore else */
      if (!this.isOpen) return;
      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (typeof this.$refs.search !== 'undefined') this.$refs.search.blur();
      } else {
        if (typeof this.$el !== 'undefined') this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window === 'undefined') return;
      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.preferredOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/pointerMixin.js
/* harmony default export */ var pointerMixin = ({
  data() {
    return {
      pointer: 0,
      pointerDirty: false
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = false;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      };
    },
    groupHighlight(index, selectedGroup) {
      if (!this.groupSelect) {
        return ['multiselect__option--disabled', {
          'multiselect__option--group': selectedGroup.$isLabel
        }];
      }
      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      return group && !this.wholeGroupDisabled(group) ? ['multiselect__option--group', {
        'multiselect__option--highlight': index === this.pointer && this.showPointer
      }, {
        'multiselect__option--group-selected': this.wholeGroupSelected(group)
      }] : 'multiselect__option--disabled';
    },
    addPointerElement({
      key
    } = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward() {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset() {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return;
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust() {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
    },
    pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/Multiselect.vue?vue&type=script&lang=js


/* harmony default export */ var Multiselectvue_type_script_lang_js = ({
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ''
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: count => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ''
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : '';
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : '';
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : '';
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : '';
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : '';
    },
    inputStyle() {
      if (this.searchable || this.multiple && this.modelValue && this.modelValue.length) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen ? {
          width: '100%'
        } : {
          width: '0',
          position: 'absolute',
          padding: '0'
        };
      }
      return '';
    },
    contentStyle() {
      return this.options.length ? {
        display: 'inline-block'
      } : {
        display: 'block'
      };
    },
    isAbove() {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true;
      } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
        return false;
      } else {
        return this.preferredOpenDirection === 'above';
      }
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    }
  }
});
// CONCATENATED MODULE: ./src/Multiselect.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/Multiselect.vue?vue&type=style&index=0&id=078d9e82&lang=css
var Multiselectvue_type_style_index_0_id_078d9e82_lang_css = __webpack_require__("8932");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/Multiselect.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Multiselectvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var Multiselect = (__exports__);
// CONCATENATED MODULE: ./src/index.js



/* harmony default export */ var src_0 = (Multiselect);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=vue-multiselect.common.js.map