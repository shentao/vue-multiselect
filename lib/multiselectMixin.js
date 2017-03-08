'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function includes(str, query) {
  if (!str) return false;
  var text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}

function filterOptions(options, search, label) {
  return label ? options.filter(function (option) {
    return includes(option[label], search);
  }) : options.filter(function (option) {
    return includes(option, search);
  });
}

function stripGroups(options) {
  return options.filter(function (option) {
    return !option.$isLabel;
  });
}

function flattenOptions(values, label) {
  return function (options) {
    return options.reduce(function (prev, curr) {
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values]);
      }
      return prev.concat(curr);
    }, []);
  };
}

function filterGroups(search, label, values, groupLabel) {
  return function (groups) {
    return groups.map(function (group) {
      var _ref;

      var groupOptions = filterOptions(group[values], search, label);

      return groupOptions.length ? (_ref = {}, _defineProperty(_ref, groupLabel, group[groupLabel]), _defineProperty(_ref, values, groupOptions), _ref) : [];
    });
  };
}

var flow = function flow() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

exports.default = {
  data: function data() {
    return {
      search: '',
      isOpen: false,
      hasEnoughSpace: true,
      internalValue: this.value || this.value === 0 ? (0, _utils2.default)(Array.isArray(this.value) ? this.value : [this.value]) : []
    };
  },

  props: {
    internalSearch: {
      type: Boolean,
      default: true
    },

    options: {
      type: Array,
      required: true
    },

    multiple: {
      type: Boolean,
      default: false
    },

    value: {
      type: null,
      default: function _default() {
        return [];
      }
    },

    trackBy: {
      type: String
    },

    label: {
      type: String
    },

    searchable: {
      type: Boolean,
      default: true
    },

    clearOnSelect: {
      type: Boolean,
      default: true
    },

    hideSelected: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: 'Select option'
    },

    allowEmpty: {
      type: Boolean,
      default: true
    },

    resetAfter: {
      type: Boolean,
      default: false
    },

    closeOnSelect: {
      type: Boolean,
      default: true
    },

    customLabel: {
      type: Function,
      default: function _default(option, label) {
        return label ? option[label] : option;
      }
    },

    taggable: {
      type: Boolean,
      default: false
    },

    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },

    max: {
      type: Number
    },

    id: {
      default: null
    },

    optionsLimit: {
      type: Number,
      default: 1000
    },

    groupValues: {
      type: String
    },

    groupLabel: {
      type: String
    },

    blockKeys: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  mounted: function mounted() {
    if (!this.multiple && !this.clearOnSelect) {
      console.warn('[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false.');
    }
  },

  computed: {
    filteredOptions: function filteredOptions() {
      var search = this.search || '';
      var normalizedSearch = search.toLowerCase();

      var options = this.options.concat();

      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label);

        options = this.hideSelected ? options.filter(this.isNotSelected) : options;
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        options.unshift({ isTag: true, label: search });
      }

      return options.slice(0, this.optionsLimit);
    },
    valueKeys: function valueKeys() {
      var _this = this;

      if (this.trackBy) {
        return this.internalValue.map(function (element) {
          return element[_this.trackBy];
        });
      } else {
        return this.internalValue;
      }
    },
    optionKeys: function optionKeys() {
      var _this2 = this;

      var options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return this.label ? options.map(function (element) {
        return element[_this2.label].toString().toLowerCase();
      }) : options.map(function (element) {
        return element.toString().toLowerCase();
      });
    },
    currentOptionLabel: function currentOptionLabel() {
      return this.multiple ? this.searchable ? '' : this.placeholder : this.internalValue[0] ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? '' : this.placeholder;
    }
  },
  watch: {
    'internalValue': function internalValue(newVal, oldVal) {
      if (this.resetAfter && this.internalValue.length) {
        this.search = '';
        this.internalValue = [];
      }
    },
    'search': function search() {
      this.$emit('search-change', this.search, this.id);
    },
    'value': function value(_value) {
      this.internalValue = this.getInternalValue(_value);
    }
  },
  methods: {
    getValue: function getValue() {
      return this.multiple ? (0, _utils2.default)(this.internalValue) : this.internalValue.length === 0 ? null : (0, _utils2.default)(this.internalValue[0]);
    },
    getInternalValue: function getInternalValue(value) {
      return value === null || value === undefined ? [] : this.multiple ? (0, _utils2.default)(value) : (0, _utils2.default)([value]);
    },
    filterAndFlat: function filterAndFlat(options) {
      return flow(filterGroups(this.search, this.label, this.groupValues, this.groupLabel), flattenOptions(this.groupValues, this.groupLabel))(options);
    },
    flatAndStrip: function flatAndStrip(options) {
      return flow(flattenOptions(this.groupValues, this.groupLabel), stripGroups)(options);
    },
    updateSearch: function updateSearch(query) {
      this.search = query;
    },
    isExistingOption: function isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    isSelected: function isSelected(option) {
      var opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    isNotSelected: function isNotSelected(option) {
      return !this.isSelected(option);
    },
    getOptionLabel: function getOptionLabel(option) {
      if (!option && option !== 0) return '';

      if (option.isTag) return option.label;
      return this.customLabel(option, this.label) || '';
    },
    select: function select(option, key) {
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isLabel) return;

      if (this.max && this.multiple && this.internalValue.length === this.max) return;
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        var isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return;
        } else if (this.multiple) {
          this.internalValue.push(option);
        } else {
          this.internalValue = [option];
        }
        this.$emit('select', (0, _utils2.default)(option), this.id);
        this.$emit('input', this.getValue(), this.id);

        if (this.clearOnSelect) this.search = '';
      }

      if (this.closeOnSelect) this.deactivate();
    },
    removeElement: function removeElement(option) {
      if (this.disabled) return;

      if (!this.allowEmpty && this.internalValue.length <= 1) return;

      var index = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);

      this.internalValue.splice(index, 1);
      this.$emit('remove', (0, _utils2.default)(option), this.id);
      this.$emit('input', this.getValue(), this.id);

      if (this.closeOnSelect) this.deactivate();
    },
    removeLastElement: function removeLastElement() {
      if (this.blockKeys.indexOf('Delete') !== -1) return;

      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1]);
      }
    },
    activate: function activate() {
      if (this.isOpen || this.disabled) return;

      this.adjustPosition();

      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;

      if (this.searchable) {
        this.search = '';
        this.$refs.search.focus();
      } else {
        this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    deactivate: function deactivate() {
      if (!this.isOpen) return;

      this.isOpen = false;

      if (this.searchable) {
        this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    toggle: function toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    adjustPosition: function adjustPosition() {
      if (typeof window !== 'undefined') {
        this.hasEnoughSpace = this.$el.getBoundingClientRect().top + this.maxHeight < window.innerHeight;
      }
    }
  }
};