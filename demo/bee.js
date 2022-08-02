(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/@jrc03c/js-text-tools/src/camelify.js
  var require_camelify = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/camelify.js"(exports, module) {
      function camelify(text) {
        if (typeof text !== "string") {
          throw new Error("`text` must be a string!");
        }
        text = text.trim();
        let out = "";
        let shouldCapitalizeNextCharacter = false;
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char.match(/[A-Za-z0-9]/g)) {
            if (out.length === 0) {
              out += char.toLowerCase();
            } else if (shouldCapitalizeNextCharacter) {
              out += char.toUpperCase();
            } else {
              out += char;
            }
            shouldCapitalizeNextCharacter = false;
          } else if (!char.includes("'") && !char.includes("\u2019") && !char.includes("\u275C")) {
            shouldCapitalizeNextCharacter = true;
          }
        }
        return out;
      }
      module.exports = camelify;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/indent.js
  var require_indent = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/indent.js"(exports, module) {
      function indent(text, chars) {
        chars = chars || "";
        return text.split("\n").map((line) => {
          if (line.trim().length > 0) {
            return chars + line;
          } else {
            return line;
          }
        }).join("\n");
      }
      module.exports = indent;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/helpers/replace-all.js
  var require_replace_all = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/helpers/replace-all.js"(exports, module) {
      function replaceAll(text, a, b) {
        if (typeof text !== "string") {
          throw new Error("`text` must be a string!");
        }
        if (typeof a !== "string") {
          throw new Error("`a` must be a string!");
        }
        if (typeof b !== "string") {
          throw new Error("`b` must be a string!");
        }
        return text.split(a).join(b);
      }
      module.exports = replaceAll;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/helpers/strip.js
  var require_strip = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/helpers/strip.js"(exports, module) {
      var replaceAll = require_replace_all();
      var alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
      var doubleSpace = "  ";
      var singleSpace = " ";
      function strip(text) {
        if (typeof text !== "string") {
          throw new Error("`text` must be a string!");
        }
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i].toLowerCase();
          if (alpha.includes(char)) {
            out += char;
          } else if (char === "'" || char === "\u2019" || char === "\u275C") {
            out += "";
          } else {
            out += singleSpace;
          }
        }
        while (out.includes(doubleSpace)) {
          out = replaceAll(out, doubleSpace, singleSpace);
        }
        return out.trim();
      }
      module.exports = strip;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/kebabify.js
  var require_kebabify = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/kebabify.js"(exports, module) {
      var strip = require_strip();
      function kebabify(text) {
        if (typeof text !== "string") {
          throw new Error("`text` must be a string!");
        }
        const words = strip(text).split(" ");
        if (words.length === 0)
          return "";
        if (words.length === 1)
          return words[0];
        return words.join("-");
      }
      module.exports = kebabify;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/snakeify.js
  var require_snakeify = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/snakeify.js"(exports, module) {
      var strip = require_strip();
      function snakeify(text) {
        if (typeof text !== "string") {
          throw new Error("`text` must be a string!");
        }
        const words = strip(text).split(" ");
        if (words.length === 0)
          return "";
        if (words.length === 1)
          return words[0];
        return words.join("_");
      }
      module.exports = snakeify;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/math-error.js
  var require_math_error = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/math-error.js"(exports, module) {
      var MathError = class extends Error {
        constructor(message) {
          if (typeof window !== "undefined") {
            super(message);
          } else {
            super("\n\n\x1B[31m" + message + "\n\x1B[0m");
          }
        }
      };
      module.exports = MathError;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/assert.js
  var require_assert = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/assert.js"(exports, module) {
      var MathError = require_math_error();
      module.exports = function(isTrue, message) {
        if (!isTrue)
          throw new MathError(message);
      };
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-undefined.js
  var require_is_undefined = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-undefined.js"(exports, module) {
      function isUndefined(x) {
        return x === null || typeof x === "undefined";
      }
      module.exports = isUndefined;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-array.js
  var require_is_array = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-array.js"(exports, module) {
      function isArray(obj) {
        return obj instanceof Array;
      }
      module.exports = isArray;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/flatten.js
  var require_flatten = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/flatten.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      function flatten(arr) {
        assert2(
          !isUndefined(arr),
          "You must pass one array into the `flatten` function!"
        );
        assert2(isArray(arr), "The `flatten` function only works on arrays!");
        let out = [];
        arr.forEach(function(value2) {
          if (isArray(value2)) {
            out = out.concat(flatten(value2));
          } else {
            out.push(value2);
          }
        });
        return out;
      }
      module.exports = flatten;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-equal.js
  var require_is_equal = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-equal.js"(exports, module) {
      var isArray = require_is_array();
      function isEqual(a, b) {
        const aType = typeof a;
        const bType = typeof b;
        if (aType !== bType)
          return false;
        if (aType === "undefined")
          return true;
        if (aType === "boolean")
          return a === b;
        if (aType === "number" || aType === "bigint")
          return a === b;
        if (aType === "string")
          return a === b;
        if (aType === "function")
          return a === b;
        if (aType === "object") {
          if (a === null || b === null) {
            return a === null && b === null;
          } else {
            const aKeys = Object.keys(a);
            const bKeys = Object.keys(b);
            if (aKeys.length !== bKeys.length)
              return false;
            for (let i = 0; i < aKeys.length; i++) {
              const key = aKeys[i];
              if (!b.hasOwnProperty(key))
                return false;
              if (!isEqual(a[key], b[key]))
                return false;
            }
            return true;
          }
        }
      }
      module.exports = isEqual;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/set.js
  var require_set = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/set.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var flatten = require_flatten();
      function set(arr) {
        assert2(!isUndefined(arr), "You must pass an array into the `set` function!");
        assert2(isArray(arr), "You must pass an array into the `set` function!");
        const out = [];
        const temp = {};
        flatten(arr).forEach((item) => {
          const key = typeof item === "undefined" ? "undefined" : typeof item === "function" ? item.toString() : JSON.stringify(item);
          if (!temp[key])
            out.push(item);
          temp[key] = true;
        });
        return out;
      }
      module.exports = set;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/count.js
  var require_count = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/count.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var flatten = require_flatten();
      var isEqual = require_is_equal();
      var set = require_set();
      function count(arr, items) {
        assert2(
          !isUndefined(arr),
          "You must pass an array and some items to count into the `count` function!"
        );
        assert2(
          isArray(arr),
          "You must pass an array and some items to count into the `count` function!"
        );
        const temp = flatten(arr);
        items = isUndefined(items) ? set(arr) : items;
        if (isArray(items)) {
          return flatten(items).map(function(item1) {
            const c = temp.filter((item2) => isEqual(item1, item2)).length;
            return { item: item1, count: c };
          });
        } else {
          return temp.filter((other) => other === items).length;
        }
      }
      module.exports = count;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-function.js
  var require_is_function = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-function.js"(exports, module) {
      function isFunction(fn) {
        return typeof fn === "function";
      }
      module.exports = isFunction;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-object.js
  var require_is_object = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-object.js"(exports, module) {
      var isArray = require_is_array();
      var isUndefined = require_is_undefined();
      function isObject(x) {
        return typeof x === "object" && !isUndefined(x) && !isArray(x);
      }
      module.exports = isObject;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/index-of.js
  var require_index_of = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/index-of.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isFunction = require_is_function();
      var isObject = require_is_object();
      function indexOf(x, fn) {
        assert2(
          isObject(x) || isArray(x),
          "You must pass (1) an object or array and (2) a function or value into the `indexOf` function!"
        );
        if (!isFunction(fn)) {
          const value2 = fn;
          fn = (v) => v === value2;
        }
        function helper(x2, fn2, checked) {
          checked = checked || [];
          if (checked.indexOf(x2) > -1) {
            return null;
          }
          if (isObject(x2)) {
            checked.push(x2);
            const keys = Object.keys(x2);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value2 = x2[key];
              if (fn2(value2)) {
                return [key];
              }
              const results = helper(value2, fn2, checked);
              if (results && results.length > 0) {
                return [key].concat(results);
              }
            }
          } else if (isArray(x2)) {
            checked.push(x2);
            for (let i = 0; i < x2.length; i++) {
              const value2 = x2[i];
              if (fn2(value2)) {
                return [i];
              }
              const results = helper(value2, fn2, checked);
              if (results && results.length > 0) {
                return [i].concat(results);
              }
            }
          } else {
            if (fn2(x2)) {
              return [];
            }
          }
          return null;
        }
        function safeFn(v) {
          try {
            return fn(v);
          } catch (e) {
            return false;
          }
        }
        const paths = helper(x, safeFn);
        if (paths && paths.length > 0) {
          return paths;
        } else {
          return null;
        }
      }
      module.exports = indexOf;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/copy.js
  var require_copy = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/copy.js"(exports, module) {
      var indexOf = require_index_of();
      var isArray = require_is_array();
      function copy(x) {
        function helper(x2, checked, currentPath) {
          checked = checked || [];
          currentPath = currentPath || "";
          if (checked.indexOf(x2) > -1) {
            const parts = currentPath.split("/").slice(currentPath.startsWith("/") ? 1 : 0);
            const isANestedCopy = parts.some((v, i) => {
              const subParts = parts.slice(0, parts.length - i - 1);
              let temp = orig;
              subParts.forEach((part) => {
                temp = temp[part];
              });
              return temp === x2;
            });
            if (isANestedCopy) {
              const pathToCopy = orig === x2 ? "/" : "/" + indexOf(orig, x2).join("/");
              return `<reference to "${pathToCopy}">`;
            }
          }
          if (typeof x2 === "object") {
            if (x2 === null)
              return null;
            checked.push(x2);
            if (isArray(x2)) {
              return x2.map((v, i) => helper(v, checked, currentPath + "/" + i));
            } else {
              const out = {};
              Object.keys(x2).forEach((key) => {
                out[key] = helper(x2[key], checked, currentPath + "/" + key);
              });
              return out;
            }
          } else {
            return x2;
          }
        }
        const orig = x;
        return helper(x);
      }
      module.exports = copy;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-number.js
  var require_is_number = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-number.js"(exports, module) {
      function isNumber(x) {
        return typeof x === "number" && !isNaN(x);
      }
      module.exports = isNumber;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/max.js
  var require_max = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/max.js"(exports, module) {
      var flatten = require_flatten();
      var isNumber = require_is_number();
      function max(arr) {
        try {
          const temp = flatten(arr);
          let out = -Infinity;
          for (let i = 0; i < temp.length; i++) {
            if (!isNumber(temp[i]))
              return NaN;
            if (temp[i] > out)
              out = temp[i];
          }
          return out === -Infinity ? NaN : out;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = max;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/shape.js
  var require_shape = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/shape.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var max = require_max();
      function shape(arr) {
        assert2(!isUndefined(arr), "You must pass an array into the `shape` function!");
        assert2(isArray(arr), "You must pass an array into the `shape` function!");
        let out = [arr.length];
        const childrenAreArrays = arr.map((x) => isArray(x));
        if (childrenAreArrays.indexOf(true) > -1) {
          assert2(
            childrenAreArrays.indexOf(false) < 0,
            "The array passed into the `shape` function has some children that are not themselves arrays!"
          );
          const lengths = arr.map((x) => x.length);
          const maxLength = max(lengths);
          lengths.forEach(function(length) {
            assert2(
              length === maxLength,
              "The array passed into the `shape` function has some children of inconsistent length!"
            );
          });
          out = out.concat(shape(arr[0]));
        }
        return out;
      }
      module.exports = shape;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/sort.js
  var require_sort = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/sort.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isFunction = require_is_function();
      function alphaSort(a, b) {
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      }
      function sort(arr, fn) {
        if (isUndefined(fn))
          fn = alphaSort;
        assert2(!isUndefined(arr), "You must pass an array into the `sort` function!");
        assert2(isArray(arr), "You must pass an array into the `sort` function!");
        assert2(
          isFunction(fn),
          "The second parameter of the `sort` function must be a comparison function!"
        );
        const out = arr.slice();
        out.sort(fn);
        return out;
      }
      module.exports = sort;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-append.js
  var require_df_append = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-append.js"(exports, module) {
      var assert2 = require_assert();
      var copy = require_copy();
      var isArray = require_is_array();
      var isEqual = require_is_equal();
      var MathError = require_math_error();
      var shape = require_shape();
      var sort = require_sort();
      function dfAppend(DataFrame, Series, df, data) {
        if (data instanceof Series) {
          assert2(
            isEqual(sort(df.columns), sort(data.index)),
            "The index of the incoming Series must match the columns of the target DataFrame!"
          );
          const newValues = copy(df.values);
          newValues.push(df.columns.map((col) => data.get(col)));
          const out = new DataFrame(newValues);
          out.columns = df.columns;
          const shouldSkipCopying = true;
          return out.resetIndex(shouldSkipCopying);
        } else if (data instanceof DataFrame) {
          assert2(
            isEqual(sort(df.columns), sort(data.columns)),
            "The columns of the incoming DataFrame must match the columns of the target DataFrame!"
          );
          const newValues = copy(df.values);
          data.values.forEach((row) => {
            newValues.push(
              df.columns.map((col) => {
                const colIndex = data.columns.indexOf(col);
                return row[colIndex];
              })
            );
          });
          const out = new DataFrame(newValues);
          out.columns = df.columns;
          const shouldSkipCopying = true;
          return out.resetIndex(shouldSkipCopying);
        } else if (isArray(data)) {
          const dataShape = shape(data);
          if (dataShape.length === 1) {
            assert2(
              data.length === df.columns.length,
              "When passing a 1-dimensional array into the `append` method, the array must have the same length as the number of columns in the target DataFrame!"
            );
            const temp = new Series(data);
            temp.index = df.columns;
            return dfAppend(DataFrame, Series, df, temp);
          } else if (dataShape.length === 2) {
            assert2(
              dataShape[1] === df.columns.length,
              "When passing a 2-dimensional array into the `append` method, each row of the array must have the same length as the number of columns in the target DataFrame!"
            );
            const temp = new DataFrame(data);
            temp.columns = df.columns;
            return dfAppend(DataFrame, Series, df, temp);
          } else {
            throw new MathError(
              "When passing an array into the `append` method, the array must be 1- or 2-dimensional! If 1-dimensional, it must be as long as the number of columns in the target DataFrame. If 2-dimensional, each row must be as long as the number of columns in the target DataFrame."
            );
          }
        } else {
          throw new MathError(
            "Only Series, DataFrames, and 1- or 2-dimensional arrays can be passed into the `append` method!"
          );
        }
      }
      module.exports = dfAppend;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-apply.js
  var require_df_apply = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-apply.js"(exports, module) {
      var assert2 = require_assert();
      var isFunction = require_is_function();
      var isArray = require_is_array();
      var isUndefined = require_is_undefined();
      function dfApply(DataFrame, Series, df, fn, axis) {
        axis = axis || 0;
        assert2(
          isFunction(fn),
          "The first parameter to the `apply` method must be a function."
        );
        assert2(
          axis === 0 || axis === 1,
          "The second parameter to the `apply` method (the `axis`) must be 0 or 1."
        );
        if (axis === 0) {
          const temp = {};
          let shouldReturnADataFrame;
          df.columns.forEach((colName, i) => {
            const series = new Series(df.values.map((row) => row[i]));
            series.name = colName;
            series.index = df.index;
            const value2 = fn(series, i, df);
            if (value2 instanceof Series) {
              temp[colName] = value2.values;
            } else {
              temp[colName] = value2;
            }
            if (isUndefined(shouldReturnADataFrame)) {
              shouldReturnADataFrame = value2 instanceof Series || isArray(value2);
            }
          });
          if (shouldReturnADataFrame) {
            const out = new DataFrame(temp);
            out.index = df.index;
            return out;
          } else {
            const out = new Series(df.columns.map((colName) => temp[colName]));
            out.index = df.columns;
            return out;
          }
        } else if (axis === 1) {
          let shouldReturnADataFrame;
          const temp = df.values.map((row, i) => {
            const series = new Series(row);
            series.name = df.index[i];
            series.index = df.columns;
            const value2 = fn(series, i, df);
            if (isUndefined(shouldReturnADataFrame)) {
              shouldReturnADataFrame = value2 instanceof Series || isArray(value2);
            }
            if (value2 instanceof Series) {
              return value2.values;
            } else {
              return value2;
            }
          });
          if (shouldReturnADataFrame) {
            const out = new DataFrame(temp);
            out.index = df.index;
            out.columns = df.columns;
            return out;
          } else {
            const out = new Series(temp);
            out.index = df.index;
            return out;
          }
        }
      }
      module.exports = dfApply;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-string.js
  var require_is_string = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-string.js"(exports, module) {
      function isString(s) {
        return typeof s === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-assign.js
  var require_df_assign = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-assign.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isObject = require_is_object();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var shape = require_shape();
      var copy = require_copy();
      var MathError = require_math_error();
      var sort = require_sort();
      function dfAssign(DataFrame, Series, df, p1, p2) {
        const isSeries = (x) => x instanceof Series;
        const obj = (() => {
          const out2 = {};
          if (isUndefined(p2)) {
            if (isSeries(p1)) {
              const temp = df.index.map((rowName) => p1.get(rowName));
              assert2(
                temp.length === df.index.length,
                "Each column of values to be assigned must have the same length as the number of rows in the target DataFrame!"
              );
              out2[p1.name] = temp;
            } else if (isObject(p1)) {
              Object.keys(p1).forEach((key) => {
                const values2 = p1[key];
                if (isSeries(values2)) {
                  const temp = df.index.map((rowName) => values2.get(rowName));
                  assert2(
                    temp.length === df.index.length,
                    "Each column of values to be assigned must have the same length as the number of rows in the target DataFrame!"
                  );
                  out2[key] = temp;
                } else if (isArray(values2)) {
                  assert2(
                    shape(values2).length === 1,
                    "When using a single argument for the `assign` method, the argument must be either (1) a Series, or (2) an object consisting of key-value pairs where each key is a string representing a column name and each value is a one-dimensional array or Series!"
                  );
                  assert2(
                    values2.length === df.index.length,
                    "Each column of values to be assigned must have the same length as the number of rows in the target DataFrame!"
                  );
                  out2[key] = values2;
                } else {
                  throw new MathError(
                    "When using a single argument for the `assign` method, the argument must be either (1) a Series, or (2) an object consisting of key-value pairs where each key is a string representing a column name and each value is a one-dimensional array or Series!"
                  );
                }
              });
            } else {
              throw new MathError(
                "When using a single argument for the `assign` method, the argument must be either (1) a Series, or (2) an object consisting of key-value pairs where each key is a string representing a column name and each value is a one-dimensional array or Series!"
              );
            }
          } else {
            assert2(
              isString(p1),
              "When using two arguments for the `assign` method, the first argument must be a string representing a column name, and the second argument must be a one-dimensional array or Series!"
            );
            if (isSeries(p2)) {
              const temp = df.index.map((rowName) => p2.get(rowName));
              assert2(
                temp.length === df.index.length,
                "The one-dimensional array or Series to be assigned must have the same length as the number of rows in the target DataFrame!"
              );
              out2[p1] = temp;
            } else if (isArray(p2)) {
              assert2(
                shape(p2).length === 1,
                "When using two arguments for the `assign` method, the first argument must be a string representing a column name, and the second argument must be a one-dimensional array or Series!"
              );
              assert2(
                p2.length === df.index.length,
                "The one-dimensional array or Series to be assigned must have the same length as the number of rows in the target DataFrame!"
              );
              out2[p1] = p2;
            } else {
              throw new MathError(
                "When using two arguments for the `assign` method, the first argument must be a string representing a column name, and the second argument must be a one-dimensional array or Series!"
              );
            }
          }
          return out2;
        })();
        const columns = df.columns;
        const index = df.index;
        const values = copy(df.values);
        const newColumnNames = sort(Object.keys(obj));
        values.forEach((row, i) => {
          newColumnNames.forEach((colName) => {
            row.push(obj[colName][i]);
          });
        });
        const out = new DataFrame(values);
        out.columns = columns.concat(newColumnNames);
        out.index = index;
        return out;
      }
      module.exports = dfAssign;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-copy.js
  var require_df_copy = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-copy.js"(exports, module) {
      var copy = require_copy();
      function dfCopy(DataFrame, df) {
        if (df.isEmpty)
          return new DataFrame();
        const out = new DataFrame(copy(df.values));
        out.columns = df.columns.slice();
        out.index = df.index.slice();
        return out;
      }
      module.exports = dfCopy;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-drop.js
  var require_df_drop = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-drop.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var shape = require_shape();
      function dfDrop(DataFrame, Series, df, rows, cols) {
        if (isUndefined(rows))
          rows = [];
        if (isUndefined(cols))
          cols = [];
        if (isString(rows) || isNumber(rows))
          rows = [rows];
        if (isString(cols) || isNumber(cols))
          cols = [cols];
        assert2(
          isArray(rows),
          "The `drop` method only works on 1-dimensional arrays of numerical indices and/or strings."
        );
        assert2(
          isArray(cols),
          "The `drop` method only works on 1-dimensional arrays of numerical indices and/or strings."
        );
        assert2(
          shape(rows).length === 1,
          "The `drop` method only works on 1-dimensional arrays of numerical indices and/or strings."
        );
        assert2(
          shape(cols).length === 1,
          "The `drop` method only works on 1-dimensional arrays of numerical indices and/or strings."
        );
        let outIndex, outColumns;
        df.index.forEach((row, i) => {
          if (rows.indexOf(row) < 0 && rows.indexOf(i) < 0) {
            if (!outIndex)
              outIndex = [];
            outIndex.push(row);
          }
        });
        df.columns.forEach((col, i) => {
          if (cols.indexOf(col) < 0 && cols.indexOf(i) < 0) {
            if (!outColumns)
              outColumns = [];
            outColumns.push(col);
          }
        });
        let out = df.get(outIndex, outColumns);
        if (out instanceof Series) {
          let temp = new DataFrame();
          temp = temp.assign(out);
          if (df.index.indexOf(out.name) > -1)
            temp = temp.transpose();
          out = temp;
        }
        return out;
      }
      module.exports = dfDrop;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/helpers/is-whole-number.js
  var require_is_whole_number = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/helpers/is-whole-number.js"(exports, module) {
      var isNumber = require_is_number();
      function isInteger(x) {
        return isNumber(x) && parseInt(x) === x;
      }
      function isWholeNumber(x) {
        return isInteger(x) && x >= 0;
      }
      module.exports = isWholeNumber;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-drop-missing.js
  var require_df_drop_missing = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-drop-missing.js"(exports, module) {
      var assert2 = require_assert();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var isWholeNumber = require_is_whole_number();
      var shape = require_shape();
      function dfDropMissing(DataFrame, Series, df, axis, condition, threshold) {
        axis = axis || 0;
        assert2(
          axis === 0 || axis === 1,
          "The first parameter of the `dropMissing` method (the `axis`) must be 0 or 1."
        );
        threshold = threshold || 0;
        assert2(
          isWholeNumber(threshold),
          "The third parameter of the `dropMissing` method (the `threshold`) should be a whole number (meaning that data should be dropped if it contains more than `threshold` null values)."
        );
        condition = threshold > 0 ? "none" : condition || "any";
        assert2(
          condition === "any" || condition === "all" || condition === "none",
          "The second parameter of the `dropMissing` method (the `condition` parameter, which indicates the condition under which data should be dropped) should be 'any' or 'all' (meaning that if 'any' of the data contains null values, then it should be dropped; or that if 'all' of the data contains null values, then it should be dropped)."
        );
        function helper(values) {
          if (threshold > 0) {
            let count = 0;
            for (let i = 0; i < values.length; i++) {
              const value2 = values[i];
              if (isUndefined(value2))
                count++;
              if (count >= threshold)
                return [];
            }
          } else if (condition === "any") {
            for (let i = 0; i < values.length; i++) {
              const value2 = values[i];
              if (isUndefined(value2))
                return [];
            }
          } else if (condition === "all") {
            for (let i = 0; i < values.length; i++) {
              const value2 = values[i];
              if (!isUndefined(value2))
                return values;
            }
            return [];
          }
          return values;
        }
        let out = df.copy();
        const tempID = Math.random().toString();
        if (axis === 0) {
          out = out.assign(tempID, out.index);
          const newValues = out.values.map(helper).filter((row) => row.length > 0);
          if (shape(newValues).length < 2)
            return new DataFrame();
          out.values = newValues;
          let newIndex = out.get(null, tempID);
          if (isUndefined(newIndex))
            return new DataFrame();
          if (isString(newIndex))
            newIndex = [newIndex];
          if (newIndex instanceof Series)
            newIndex = newIndex.values;
          out.index = newIndex;
          out = out.drop(null, tempID);
        } else if (axis === 1) {
          const temp = {};
          out.columns.forEach((colName, i) => {
            const values = out.values.map((row) => row[i]);
            const newValues = helper(values);
            if (newValues.length > 0) {
              temp[colName] = newValues;
            }
          });
          if (Object.keys(temp).length === 0) {
            return new DataFrame();
          }
          const newOut = new DataFrame(temp);
          newOut.index = out.index;
          return newOut;
        }
        return out;
      }
      module.exports = dfDropMissing;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/drop-nan.js
  var require_drop_nan = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/drop-nan.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isUndefined = require_is_undefined();
      var isNumber = require_is_number();
      var shape = require_shape();
      function dropNaN(x) {
        assert2(
          isArray(x),
          "The value passed into the `dropNaN` function must be a one-dimensional array!"
        );
        assert2(
          shape(x).length === 1,
          "The value passed into the `dropNaN` function must be a one-dimensional array"
        );
        return x.filter((v) => !isUndefined(v) && isNumber(v));
      }
      module.exports = dropNaN;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-drop-nan.js
  var require_df_drop_nan = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-drop-nan.js"(exports, module) {
      var assert2 = require_assert();
      var dropNaN = require_drop_nan();
      var isWholeNumber = require_is_whole_number();
      function dfDropNaN(DataFrame, df, axis, condition, threshold) {
        axis = axis || 0;
        assert2(
          axis === 0 || axis === 1,
          "The first parameter of the `dropNaN` method (the `axis`) must be 0 or 1."
        );
        threshold = threshold || 0;
        assert2(
          isWholeNumber(threshold),
          "The third parameter of the `dropNaN` method (the `threshold`) should be a whole number (meaning that data should be dropped if it contains more than `threshold` NaN values)."
        );
        condition = threshold > 0 ? "none" : condition || "any";
        assert2(
          condition === "any" || condition === "all" || condition === "none",
          "The second parameter of the `dropNaN` method (the `condition` parameter, which indicates the condition under which data should be dropped) should be 'any' or 'all' (meaning that if 'any' of the data contains NaN values, then it should be dropped; or that if 'all' of the data contains NaN values, then it should be dropped)."
        );
        function helper(values) {
          const numericalValues = dropNaN(values);
          if (threshold > 0)
            return values.length - numericalValues.length < threshold;
          if (condition === "any")
            return numericalValues.length === values.length;
          if (condition === "all")
            return numericalValues.length > 0;
          return true;
        }
        let out = df.copy();
        const tempID = Math.random().toString();
        if (axis === 0) {
          const rowsToKeep = out.index.filter((row) => {
            const values = out.get(row, null).values;
            return helper(values);
          });
          if (rowsToKeep.length > 0)
            return out.get(rowsToKeep, null);
          else
            return new DataFrame();
        } else if (axis === 1) {
          const colsToKeep = out.columns.filter((col) => {
            const values = out.get(null, col).values;
            return helper(values);
          });
          if (colsToKeep.length > 0)
            return out.get(null, colsToKeep);
          else
            return new DataFrame();
        }
        return out;
      }
      module.exports = dfDropNaN;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-filter.js
  var require_df_filter = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-filter.js"(exports, module) {
      var assert2 = require_assert();
      var flatten = require_flatten();
      var isFunction = require_is_function();
      var isUndefined = require_is_undefined();
      function arrayToObject(x) {
        const out = {};
        flatten(x).forEach((value2, i) => {
          out[value2] = i;
        });
        return out;
      }
      function undoArrayToObject(obj) {
        return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
      }
      function dfFilter(DataFrame, Series, df, fn, axis) {
        assert2(
          isFunction(fn),
          "The `filter` method takes a single parameter: a function that is used to filter the values."
        );
        if (isUndefined(axis))
          axis = 0;
        assert2(
          axis === 0 || axis === 1,
          "The `axis` parameter to the `filter` method must be 0 or 1."
        );
        let out = df.copy();
        if (out.isEmpty)
          return out;
        const index = arrayToObject(out.index);
        const columns = arrayToObject(out.columns);
        if (axis === 0) {
          let newValues = out.values.filter((row, i) => {
            const series = new Series(row);
            series.name = df.index[i];
            series.index = df.columns;
            const shouldKeep = fn(series, i, df);
            if (!shouldKeep)
              delete index[out.index[i]];
            return shouldKeep;
          });
          if (flatten(newValues).length === 0) {
            return new DataFrame();
          }
          if (newValues.length === 1) {
            const temp = new Series(flatten(newValues));
            temp.name = undoArrayToObject(index)[0];
            temp.index = undoArrayToObject(columns);
            return temp;
          }
          out.values = newValues;
          out.index = undoArrayToObject(index);
        } else if (axis === 1) {
          out = out.transpose();
          let newValues = out.values.filter((row, i) => {
            const series = new Series(row);
            series.name = df.columns[i];
            series.index = df.index;
            const shouldKeep = fn(series, i, df);
            if (!shouldKeep)
              delete columns[out.index[i]];
            return shouldKeep;
          });
          if (flatten(newValues).length === 0) {
            return new DataFrame();
          }
          if (newValues.length === 1) {
            const temp = new Series(flatten(newValues));
            temp.name = undoArrayToObject(columns)[0];
            temp.index = undoArrayToObject(index);
            return temp;
          }
          out.values = newValues;
          out.index = undoArrayToObject(columns);
          out = out.transpose();
        }
        return out;
      }
      module.exports = dfFilter;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/is-boolean.js
  var require_is_boolean = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/is-boolean.js"(exports, module) {
      function isBoolean(x) {
        return typeof x === "boolean";
      }
      module.exports = isBoolean;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/reverse.js
  var require_reverse = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/reverse.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      function reverse(arr) {
        assert2(
          !isUndefined(arr),
          "You must pass an array into the `reverse` function!"
        );
        assert2(isArray(arr), "You must pass an array into the `reverse` function!");
        const out = [];
        for (let i = arr.length - 1; i >= 0; i--)
          out.push(arr[i]);
        return out;
      }
      module.exports = reverse;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/range.js
  var require_range = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/range.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isNumber = require_is_number();
      var reverse = require_reverse();
      function range(a, b, step = 1) {
        assert2(
          !isUndefined(a) && !isUndefined(b) && !isUndefined(step),
          "You must pass two numbers and optionally a step value to the `range` function!"
        );
        assert2(
          isNumber(a) && isNumber(b) && isNumber(step),
          "You must pass two numbers and optionally a step value to the `range` function!"
        );
        assert2(
          step > 0,
          "The step value must be greater than 0! (NOTE: The step value is a magnitude; it does not indicate direction.)"
        );
        let shouldReverse = false;
        if (a > b) {
          shouldReverse = true;
          let buffer = a;
          a = b + step;
          b = buffer + step;
        }
        let out = [];
        for (let i = a; i < b; i += step)
          out.push(i);
        if (shouldReverse)
          out = reverse(out);
        return out;
      }
      module.exports = range;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-from-csv-string.js
  var require_df_from_csv_string = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-from-csv-string.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isBoolean = require_is_boolean();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var MathError = require_math_error();
      var max = require_max();
      var range = require_range();
      function fromCSVString(DataFrame, raw, hasHeaderRow, hasIndexColumn, fieldDelimiter, stringDelimiter) {
        hasHeaderRow = (() => {
          if (isUndefined(hasHeaderRow)) {
            return false;
          } else if (isBoolean(hasHeaderRow)) {
            return hasHeaderRow;
          }
          throw new MathError(
            "The `hasHeaderRow` parameter of the `fromCSV` method must be a boolean!"
          );
        })();
        hasIndexColumn = (() => {
          if (isUndefined(hasIndexColumn)) {
            return false;
          } else if (isBoolean(hasIndexColumn)) {
            return hasIndexColumn;
          }
          throw new MathError(
            "The `hasIndexColumn` parameter of the `fromCSV` method must be a boolean!"
          );
        })();
        fieldDelimiter = (() => {
          const errorMessage = "The `fieldDelimiter` parameter of the `fromCSV` method must be one of:\n\n1) a single-character string (e.g., ',')\n2) an array containing two single-character strings, one each for a left delimiter and a right delimiter (e.g., ['<', '>'])";
          if (isUndefined(fieldDelimiter)) {
            return ",";
          } else if (isString(fieldDelimiter)) {
            assert2(fieldDelimiter.length === 1, errorMessage);
            return fieldDelimiter;
          } else if (isArray(fieldDelimiter)) {
            assert2(fieldDelimiter.length === 2, errorMessage);
            assert2(fieldDelimiter[0].length === 1, errorMessage);
            assert2(fieldDelimiter[1].length === 1, errorMessage);
            return fieldDelimiter;
          } else {
            throw new MathError(errorMessage);
          }
        })();
        stringDelimiter = (() => {
          const errorMessage = "The `stringDelimiter` parameter of the `fromCSV` method must be one of:\n\n1) a single-character string (e.g., '\"')\n2) an array containing two single-character strings, one each for a left delimiter and a right delimiter (e.g., ['\u201C', '\u201D'])";
          if (isUndefined(stringDelimiter)) {
            return '"';
          } else if (isString(stringDelimiter)) {
            assert2(stringDelimiter.length === 1, errorMessage);
            return stringDelimiter;
          } else if (isArray(stringDelimiter)) {
            assert2(stringDelimiter.length === 2, errorMessage);
            assert2(stringDelimiter[0].length === 1, errorMessage);
            assert2(stringDelimiter[1].length === 1, errorMessage);
            return stringDelimiter;
          } else {
            throw new MathError(errorMessage);
          }
        })();
        const out = (() => {
          const lines = raw.split("\n").filter((line) => line.length > 0);
          const rows = lines.map((line) => {
            const row = [];
            let temp2 = "";
            let isInQuotes = false;
            for (let i = 0; i < line.length; i++) {
              const char = line[i];
              if (char.match(/\\/g)) {
                i++;
              } else if (isArray(stringDelimiter) && char === stringDelimiter[0]) {
                isInQuotes = true;
              } else if (isArray(stringDelimiter) && char === stringDelimiter[1]) {
                isInQuotes = false;
              } else if (isString(stringDelimiter) && char === stringDelimiter) {
                isInQuotes = !isInQuotes;
              } else if (isArray(fieldDelimiter) && char === fieldDelimiter[0] || isArray(fieldDelimiter) && char === fieldDelimiter[1] || isString(fieldDelimiter) && char === fieldDelimiter) {
                if (!isInQuotes) {
                  const value2 = temp2;
                  try {
                    const parsedValue = JSON.parse(value2);
                    if (isArray(parsedValue)) {
                      row.push(value2.trim());
                    } else {
                      row.push(parsedValue);
                    }
                  } catch (e) {
                    row.push(value2.trim());
                  }
                  temp2 = "";
                } else {
                  temp2 += char;
                }
              } else {
                temp2 += char;
              }
            }
            if (temp2.length > 0) {
              const value2 = temp2;
              try {
                const parsedValue = JSON.parse(value2);
                if (isArray(parsedValue)) {
                  row.push(value2.trim());
                } else {
                  row.push(parsedValue);
                }
              } catch (e) {
                row.push(value2.trim());
              }
            }
            return row;
          });
          const columns = (() => {
            const temp2 = hasHeaderRow ? rows.shift() : range(0, rows[0].length).map((i) => "col" + i);
            if (hasIndexColumn) {
              temp2.shift();
            }
            return temp2;
          })();
          const index = (() => {
            const temp2 = hasIndexColumn ? rows.map((row) => row.shift()) : range(0, rows.length).map((i) => "row" + i);
            return temp2;
          })();
          const maxRowLength = max(rows.map((row) => row.length));
          const temp = new DataFrame(
            rows.map((row) => {
              row.length = maxRowLength;
              return row;
            })
          );
          if (hasHeaderRow)
            temp.columns = columns;
          if (hasIndexColumn)
            temp.index = index;
          return temp;
        })();
        return out;
      }
      module.exports = fromCSVString;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-from-csv.js
  var require_df_from_csv = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-from-csv.js"(exports, module) {
      var assert2 = require_assert();
      var dfFromCSVString = require_df_from_csv_string();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var MathError = require_math_error();
      async function fromCSV(DataFrame, path, encoding, hasHeaderRow, hasIndexColumn, fieldDelimiter, stringDelimiter) {
        encoding = (() => {
          if (!isUndefined(encoding)) {
            assert2(
              isString(encoding),
              "The `encoding` parameter of the `fromCSV` method must be a string (e.g., 'utf8')!"
            );
            return encoding;
          } else {
            return "utf8";
          }
        })();
        const raw = await (async () => {
          try {
            const response = await fetch(path);
            return await response.text();
          } catch (e) {
          }
          try {
            const fs = __require("fs");
            return fs.readFileSync(path, encoding);
          } catch (e) {
          }
          throw new MathError(`The path "${path}" could not be loaded!`);
        })();
        return dfFromCSVString(
          DataFrame,
          raw,
          hasHeaderRow,
          hasIndexColumn,
          fieldDelimiter,
          stringDelimiter
        );
      }
      module.exports = fromCSV;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-get.js
  var require_df_get = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-get.js"(exports, module) {
      var assert2 = require_assert();
      var isNumber = require_is_number();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var set = require_set();
      function dfGet(df, rows, cols) {
        if (isString(rows) || isNumber(rows))
          rows = [rows];
        if (isString(cols) || isNumber(cols))
          cols = [cols];
        const types = set((rows || []).concat(cols || []).map((v) => typeof v));
        assert2(
          types.length <= 2,
          "Only whole numbers and/or strings are allowed in `get` arrays!"
        );
        if (types.length === 1) {
          assert2(
            types[0] === "string" || types[0] === "number",
            "Only whole numbers and/or strings are allowed in `get` arrays!"
          );
        }
        if (types.length === 2) {
          assert2(
            types.indexOf("string") > -1,
            "Only whole numbers and/or strings are allowed in `get` arrays!"
          );
          assert2(
            types.indexOf("number") > -1,
            "Only whole numbers and/or strings are allowed in `get` arrays!"
          );
        }
        if (!isUndefined(rows)) {
          rows = rows.map((r) => {
            if (isString(r)) {
              assert2(df.index.indexOf(r) > -1, `Row "${r}" does not exist!`);
              return r;
            }
            if (isNumber(r)) {
              assert2(r >= 0, `Index ${r} is out of bounds!`);
              assert2(parseInt(r) === r, `Row numbers must be integers!`);
              assert2(r < df.index.length, `Index ${r} is out of bounds!`);
              return df.index[r];
            }
          });
        }
        if (!isUndefined(cols)) {
          cols = cols.map((c) => {
            if (isString(c)) {
              assert2(df.columns.indexOf(c) > -1, `Column "${c}" does not exist!`);
              return c;
            }
            if (isNumber(c)) {
              assert2(c >= 0, `Column ${c} is out of bounds!`);
              assert2(parseInt(c) === c, `Column numbers must be integers!`);
              assert2(c < df.columns.length, `Column ${c} is out of bounds!`);
              return df.columns[c];
            }
          });
        }
        return df.getSubsetByNames(rows, cols);
      }
      module.exports = dfGet;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-get-dummies.js
  var require_df_get_dummies = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-get-dummies.js"(exports, module) {
      var assert2 = require_assert();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var set = require_set();
      var sort = require_sort();
      function camelify(text) {
        let temp = text.toLowerCase();
        let out = "";
        for (let i = 0; i < temp.length; i++) {
          const char = temp[i];
          if (char.match(/[a-z0-9]/g)) {
            out += char;
          } else {
            out += " ";
          }
        }
        const words = out.split(" ").filter((word) => word.length > 0);
        return words[0] + words.slice(1).map((word) => word[0].toUpperCase() + word.substring(1)).join("");
      }
      function dfGetDummies(DataFrame, df, columns) {
        if (isUndefined(columns)) {
          columns = df.columns;
        } else if (isString(columns)) {
          columns = [columns];
        }
        const temp = {};
        columns.forEach((col) => {
          assert2(
            isString(col),
            "You must pass either a string or a one-dimensional array of strings into the `getDummies` (AKA `oneHotEncode`) method!"
          );
          const colIndex = df.columns.indexOf(col);
          assert2(
            colIndex > -1,
            `The given DataFrame does not have a column called "${col}"!`
          );
          const values = df.values.map((row) => row[colIndex]);
          const valuesSet = sort(set(values));
          values.forEach((value2) => {
            valuesSet.forEach((orig) => {
              const colName = col + "_" + camelify(orig.toString());
              if (!temp[colName]) {
                temp[colName] = [];
              }
              if (value2 === orig) {
                temp[colName].push(1);
              } else {
                temp[colName].push(0);
              }
            });
          });
        });
        const out = new DataFrame(temp);
        out.index = df.index;
        return out;
      }
      module.exports = dfGetDummies;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-get-subset-by-indices.js
  var require_df_get_subset_by_indices = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-get-subset-by-indices.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var isUndefined = require_is_undefined();
      var isWholeNumber = require_is_whole_number();
      var range = require_range();
      var shape = require_shape();
      function dfGetSubsetByIndices(df, rowIndices, colIndices) {
        const dataShape = df.shape;
        if (isUndefined(rowIndices))
          rowIndices = range(0, dataShape[0]);
        if (isUndefined(colIndices))
          colIndices = range(0, dataShape[1]);
        if (isNumber(rowIndices))
          rowIndices = [rowIndices];
        if (isNumber(colIndices))
          colIndices = [colIndices];
        assert2(
          isArray(rowIndices) && isArray(colIndices),
          "The `rowIndices` and `colIndices` parameters must be 1-dimensional arrays of whole numbers."
        );
        assert2(
          shape(rowIndices).length === 1 && shape(colIndices).length === 1,
          "The `rowIndices` and `colIndices` parameters must be 1-dimensional arrays of whole numbers."
        );
        assert2(
          rowIndices.length > 0,
          "The `rowIndices` array must contain at least one index."
        );
        assert2(
          colIndices.length > 0,
          "The `colIndices` array must contain at least one index."
        );
        rowIndices.forEach((rowIndex) => {
          assert2(
            isWholeNumber(rowIndex),
            "The `rowIndices` and `colIndices` parameters must be 1-dimensional arrays of whole numbers."
          );
          assert2(
            rowIndex < df.index.length,
            `The row index ${rowIndex} is out of bounds.`
          );
        });
        colIndices.forEach((colIndex) => {
          assert2(
            isWholeNumber(colIndex),
            "The `rowIndices` and `colIndices` parameters must be 1-dimensional arrays of whole numbers."
          );
          assert2(
            colIndex < df.columns.length,
            `The column index ${colIndex} is out of bounds.`
          );
        });
        const rows = rowIndices.map((i) => df.index[i]);
        const cols = colIndices.map((i) => df.columns[i]);
        return df.getSubsetByNames(rows, cols);
      }
      module.exports = dfGetSubsetByIndices;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-get-subset-by-names.js
  var require_df_get_subset_by_names = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-get-subset-by-names.js"(exports, module) {
      var assert2 = require_assert();
      var flatten = require_flatten();
      var isArray = require_is_array();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var shape = require_shape();
      function dfGetSubsetByNames(DataFrame, Series, df, rows, cols) {
        if (isUndefined(rows))
          rows = df.index;
        if (isUndefined(cols))
          cols = df.columns;
        if (isString(rows))
          rows = [rows];
        if (isString(cols))
          cols = [cols];
        assert2(
          isArray(rows) && isArray(cols),
          "The `rows` and `cols` parameters must be 1-dimensional arrays of strings."
        );
        assert2(
          shape(rows).length === 1 && shape(cols).length === 1,
          "The `rows` and `cols` parameters must be 1-dimensional arrays of strings."
        );
        assert2(
          rows.length > 0,
          "The `rows` array must contain at least one row name."
        );
        assert2(
          cols.length > 0,
          "The `cols` array must contain at least one column name."
        );
        rows.forEach((row) => {
          assert2(
            isString(row),
            "The `rows` and `cols` parameters must be 1-dimensional arrays of strings."
          );
          assert2(
            df.index.indexOf(row) > -1,
            `The row name "${row}" does not exist in the list of rows.`
          );
        });
        cols.forEach((col) => {
          assert2(
            isString(col),
            "The `rows` and `cols` parameters must be 1-dimensional arrays of strings."
          );
          assert2(
            df.columns.indexOf(col) > -1,
            `The column name "${col}" does not exist in the list of columns.`
          );
        });
        const values = rows.map((row) => {
          return cols.map((col) => {
            return df.values[df.index.indexOf(row)][df.columns.indexOf(col)];
          });
        });
        if (rows.length === 1 && cols.length === 1) {
          return flatten(values)[0];
        }
        if (rows.length === 1) {
          const out2 = new Series(flatten(values));
          out2.name = rows[0];
          out2.index = cols;
          return out2;
        }
        if (cols.length === 1) {
          const out2 = new Series(flatten(values));
          out2.name = cols[0];
          out2.index = rows;
          return out2;
        }
        const out = new DataFrame(values);
        out.columns = cols;
        out.index = rows;
        return out;
      }
      module.exports = dfGetSubsetByNames;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/helpers/left-pad.js
  var require_left_pad = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/helpers/left-pad.js"(exports, module) {
      var assert2 = require_assert();
      var isNumber = require_is_number();
      function leftPad(x, maxLength) {
        assert2(isNumber(x), "The `leftPad` function only works on numbers!");
        let out = x.toString();
        while (out.length < maxLength)
          out = "0" + out;
        return out;
      }
      module.exports = leftPad;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-join.js
  var require_df_join = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-join.js"(exports, module) {
      var assert2 = require_assert();
      var copy = require_copy();
      var isArray = require_is_array();
      var isEqual = require_is_equal();
      var leftPad = require_left_pad();
      var MathError = require_math_error();
      var shape = require_shape();
      var sort = require_sort();
      function dfJoin(DataFrame, Series, df, data) {
        if (data instanceof Series) {
          assert2(
            isEqual(sort(data.index), sort(df.index)),
            "The index of the incoming Series must match the index of the target DataFrame!"
          );
          const newValues = copy(df.values);
          df.index.forEach((row, i) => {
            const value2 = data.get(row);
            newValues[i].push(value2);
          });
          const out = new DataFrame(newValues);
          out.columns = df.columns.concat([data.name]);
          return out;
        } else if (data instanceof DataFrame) {
          assert2(
            isEqual(sort(data.index), sort(df.index)),
            "The index of the incoming DataFrame must match the index of the target DataFrame!"
          );
          const newValues = copy(df.values);
          df.index.forEach((rowName, i) => {
            const row = data.values[data.index.indexOf(rowName)];
            newValues[i] = newValues[i].concat(row);
          });
          const out = new DataFrame(newValues);
          out.columns = df.columns.concat(data.columns);
          return out;
        } else if (isArray(data)) {
          const dataShape = shape(data);
          if (dataShape.length === 1) {
            assert2(
              data.length === df.values.length,
              "When passing a 1-dimensional array into the `join` method, the array must have the same length as the number of rows in the target DataFrame!"
            );
            const temp = new Series(data);
            temp.index = df.index;
            temp.name = "col" + leftPad(df.columns.length, df.columns.length.toString().length);
            return dfJoin(DataFrame, Series, df, temp);
          } else if (dataShape.length === 2) {
            assert2(
              data.length === df.values.length,
              "When passing a 2-dimensional array into the `join` method, each column of the array must have the same length as the number of rows in the target DataFrame!"
            );
            const temp = new DataFrame(data);
            temp.index = df.index;
            temp.columns = temp.columns.map(
              (col, i) => "col" + leftPad(df.columns.length + i, df.columns.length.toString().length)
            );
            return dfJoin(DataFrame, Series, df, temp);
          } else {
            throw new MathError(
              "When passing an array into the `join` method, the array must be 1- or 2-dimensional! If 1-dimensional, it must be as long as the number of rows of the target DataFrame. If 2-dimensional, each column must be as long as the number of rows in the target DataFrame."
            );
          }
        } else {
          throw new MathError(
            "Only Series, DataFrames, and 1- or 2-dimensional arrays can be passed into the `join` method!"
          );
        }
      }
      module.exports = dfJoin;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-print.js
  var require_df_print = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-print.js"(exports, module) {
      var isString = require_is_string();
      var range = require_range();
      function dfPrint(DataFrame, Series, df) {
        function truncate(s, maxLength2) {
          if (isString(s)) {
            if (s.length > maxLength2) {
              return s.substring(0, maxLength2 - 3) + "...";
            } else {
              return s;
            }
          } else {
            return s;
          }
        }
        if (df.isEmpty) {
          console.table({});
          console.log("Shape:", [0, 0], "\n");
          return df;
        }
        const maxRows = typeof window === "undefined" ? 20 : 10;
        const halfMaxRows = parseInt(maxRows / 2);
        const maxColumns = typeof window === "undefined" ? Math.floor(process.stdout.columns / 24) - 1 : 10;
        const halfMaxColumns = parseInt(maxColumns / 2);
        const tempRows = maxRows > df.index.length ? null : range(0, halfMaxRows).concat(
          range(df.index.length - halfMaxRows, df.index.length)
        );
        const tempColumns = maxColumns > df.columns.length ? null : range(0, halfMaxColumns).concat(
          range(df.columns.length - halfMaxColumns, df.columns.length)
        );
        let temp = df.get(tempRows, tempColumns);
        if (temp instanceof Series) {
          if (df.shape[0] === 1) {
            temp = new DataFrame([temp.values]);
            temp.index = df.index;
            temp.columns = new Series(df.columns).get(tempColumns).values;
          } else if (df.shape[1] === 1) {
            temp = new DataFrame([temp.values]).transpose();
            temp.index = new Series(df.index).get(tempRows).values;
            temp.columns = df.columns;
          }
        }
        if (maxRows <= df.index.length) {
          temp._index.splice(halfMaxRows, 0, "...");
          temp._values.splice(
            halfMaxRows,
            0,
            range(0, temp.columns.length).map((i) => "...")
          );
        }
        if (maxColumns <= df.columns.length) {
          temp._columns.splice(halfMaxColumns, 0, "...");
          temp._values = temp._values.map((row) => {
            row.splice(halfMaxColumns, 0, "...");
            return row;
          });
        }
        const maxLength = 28;
        if (temp instanceof Series) {
          temp.values = temp.values.map((value2) => truncate(value2, maxLength));
          temp.name = truncate(temp.name, maxLength);
          temp.index = temp.index.map((row) => truncate(row, maxLength));
        } else {
          temp.values = temp.values.map((row) => {
            return row.map((value2) => truncate(value2, maxLength));
          });
          temp.columns = temp.columns.map((col) => truncate(col, maxLength));
          temp.index = temp.index.map((row) => truncate(row, maxLength));
        }
        console.table(temp.toObject());
        console.log("Shape:", df.shape, "\n");
        return df;
      }
      module.exports = dfPrint;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-reset-index.js
  var require_df_reset_index = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-reset-index.js"(exports, module) {
      var leftPad = require_left_pad();
      var range = require_range();
      function dfResetIndex(df, shouldSkipCopying) {
        const out = shouldSkipCopying ? df : df.copy();
        out.index = range(0, df.shape[0]).map((i) => {
          return "row" + leftPad(i, (out.index.length - 1).toString().length);
        });
        return out;
      }
      module.exports = dfResetIndex;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/vectorize.js
  var require_vectorize = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/vectorize.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var max = require_max();
      var isFunction = require_is_function();
      function vectorize(fn) {
        assert2(
          !isUndefined(fn),
          "You must pass a function into the `vectorize` function!"
        );
        assert2(
          isFunction(fn),
          "You must pass a function into the `vectorize` function!"
        );
        return function temp() {
          const atLeastOneArgumentIsAnArray = Object.keys(arguments).map((key) => isArray(arguments[key])).indexOf(true) > -1;
          if (atLeastOneArgumentIsAnArray) {
            const out = [];
            const lengths = Object.keys(arguments).filter((key) => isArray(arguments[key])).map((key) => arguments[key].length);
            const maxLength = max(lengths);
            lengths.forEach((length) => {
              assert2(
                length === maxLength,
                `If using arrays for all arguments to this function, then the arrays must all have equal length!`
              );
            });
            for (let i = 0; i < maxLength; i++) {
              const args = Object.keys(arguments).map((key) => {
                if (isArray(arguments[key]))
                  return arguments[key][i];
                return arguments[key];
              });
              out.push(temp(...args));
            }
            return out;
          } else {
            return fn(...arguments);
          }
        };
      }
      module.exports = vectorize;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/floor.js
  var require_floor = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/floor.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function floor(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.floor(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(floor);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/ndarray.js
  var require_ndarray = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/ndarray.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var flatten = require_flatten();
      var error = "You must pass a natural number or a one-dimensional array of natural numbers into the `ndarray` function!";
      function ndarray(shape, shouldSkipChecks) {
        if (!shouldSkipChecks) {
          assert2(!isUndefined(shape), error);
          if (!isArray(shape))
            shape = [shape];
          shape = flatten(shape);
          assert2(shape.length > 0, error);
          shape.forEach((x) => {
            assert2(isNumber(x), error);
            assert2(parseInt(x) === x, error);
            assert2(x >= 0, error);
          });
        }
        if (shape.length === 1) {
          const out = [];
          for (let i = 0; i < shape[0]; i++)
            out.push(void 0);
          return out;
        } else {
          const out = [];
          for (let i = 0; i < shape[0]; i++) {
            out.push(ndarray(shape.slice(1), true));
          }
          return out;
        }
      }
      module.exports = ndarray;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/apply.js
  var require_apply = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/apply.js"(exports, module) {
      var vectorize = require_vectorize();
      function apply(x, fn) {
        try {
          return fn(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(apply);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/reshape.js
  var require_reshape = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/reshape.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var shape = require_shape();
      var flatten = require_flatten();
      var product = (x) => x.reduce((a, b) => a * b);
      function reshape(x, newShape) {
        assert2(
          isArray(x),
          "The first argument passed into the `reshape` function must be an array!"
        );
        if (isNumber(newShape))
          newShape = [newShape];
        assert2(
          isArray(newShape),
          "The second argument passed into the `reshape` function must be a whole number or a one-dimensional array of whole numbers!"
        );
        assert2(
          shape(newShape).length === 1,
          "The first argument passed into the `reshape` function must be a whole number or a one-dimensional array of whole numbers!"
        );
        newShape.forEach((v) => {
          assert2(
            isNumber(v) && parseInt(v) === v && v > 0,
            "The first argument passed into the `reshape` function must be a whole number or a one-dimensional array of whole numbers!"
          );
        });
        if (newShape.length <= 1)
          return flatten(x);
        let temp = flatten(x);
        assert2(
          product(newShape) === temp.length,
          "The new shape doesn't match the number of values available in `x` (the first argument passed into the `reshape` function)!"
        );
        let out = [];
        let step = parseInt(temp.length / newShape[0]);
        for (let i = 0; i < newShape[0]; i++) {
          let row = temp.slice(i * step, (i + 1) * step);
          out.push(reshape(row, newShape.slice(1)));
        }
        return out;
      }
      module.exports = reshape;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/random.js
  var require_random = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/random.js"(exports, module) {
      var ndarray = require_ndarray();
      var apply = require_apply();
      var isUndefined = require_is_undefined();
      var assert2 = require_assert();
      var isNumber = require_is_number();
      var copy = require_copy();
      var reshape = require_reshape();
      var MAX = Math.pow(2, 64);
      var s = [];
      seed(parseInt(Math.random() * MAX));
      function splitmix64(state, n) {
        state = uint(state);
        function helper() {
          state += uint("0x9e3779b97f4a7c15");
          let z = copy(state);
          z = (z ^ z >> 30n) * uint("0xbf58476d1ce4e5b9");
          z = (z ^ z >> 27n) * uint("0x94d049bb133111eb");
          return z ^ z >> 31n;
        }
        const out = [];
        for (let i = 0; i < n; i++)
          out.push(helper());
        return out;
      }
      function uint(x) {
        return BigInt.asUintN(64, BigInt(x));
      }
      function rotl(x, k) {
        x = uint(x);
        k = BigInt(k);
        return uint(uint(x << k) | uint(x >> uint(64n - k)));
      }
      function seed(val) {
        if (!isUndefined(val)) {
          assert2(
            isNumber(val),
            "If passing a value into the `seed` function, then that value must be an integer!"
          );
          const temp = splitmix64(parseInt(val), 4);
          s[0] = temp[0];
          s[1] = temp[1];
          s[2] = temp[2];
          s[3] = temp[3];
        } else {
          return copy(s);
        }
      }
      function next() {
        const result = uint(rotl(s[0] + s[3], 23) + s[0]);
        const t = uint(s[1] << 17n);
        s[2] = uint(s[2] ^ s[0]);
        s[3] = uint(s[3] ^ s[1]);
        s[1] = uint(s[1] ^ s[2]);
        s[0] = uint(s[0] ^ s[3]);
        s[2] = uint(s[2] ^ t);
        s[3] = rotl(s[3], 45);
        return parseInt(result) / MAX;
      }
      function random(shape) {
        if (isUndefined(shape))
          return next();
        if (isNumber(shape))
          shape = [shape];
        const out = [];
        let n = 1;
        shape.forEach((v) => n *= v);
        for (let i = 0; i < n; i++)
          out.push(next());
        return reshape(out, shape);
      }
      module.exports = { random, seed };
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/shuffle.js
  var require_shuffle = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/shuffle.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var floor = require_floor();
      var { random } = require_random();
      function shuffle(arr) {
        assert2(
          !isUndefined(arr),
          "You must pass an array into the `shuffle` function!"
        );
        assert2(isArray(arr), "You must pass an array into the `shuffle` function!");
        const out = [];
        let temp = arr.slice();
        for (let i = 0; i < arr.length; i++) {
          const index = parseInt(random() * temp.length);
          out.push(temp.splice(index, 1)[0]);
        }
        return out;
      }
      module.exports = shuffle;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-shuffle.js
  var require_df_shuffle = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-shuffle.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var shuffle = require_shuffle();
      function dfShuffle(df, axis) {
        if (isUndefined(axis))
          axis = 0;
        assert2(
          axis === 0 || axis === 1,
          "The `axis` parameter to the `shuffle` must be 0, 1, or undefined."
        );
        return df.get(
          axis === 0 ? shuffle(df.index) : null,
          axis === 1 ? shuffle(df.columns) : null
        );
      }
      module.exports = dfShuffle;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-sort.js
  var require_df_sort = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-sort.js"(exports, module) {
      var { random } = require_random();
      var assert2 = require_assert();
      var flatten = require_flatten();
      var isArray = require_is_array();
      var isBoolean = require_is_boolean();
      var isNumber = require_is_number();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var range = require_range();
      var shape = require_shape();
      var sort = require_sort();
      function dfSort(df, cols, directions) {
        let out = df.copy();
        const indexID = random().toString();
        out = out.assign(indexID, out.index);
        if (isUndefined(cols)) {
          cols = [indexID];
          directions = [true];
        }
        if (isNumber(cols) || isString(cols)) {
          cols = [cols];
          if (isBoolean(directions) || isString(directions))
            directions = [directions];
        }
        assert2(
          isArray(cols),
          "The first parameter of the `sort` method must be (1) a string or index representing a column name or index, respectively; (2) a 1-dimensional array of strings and/or indices; or (3) null."
        );
        assert2(
          shape(cols).length === 1,
          "The first parameter of the `sort` method must be (1) a string or index representing a column name or index, respectively; (2) a 1-dimensional array of strings and/or indices; or (3) null."
        );
        if (isUndefined(directions))
          directions = range(0, cols.length).map((i) => true);
        assert2(
          isArray(directions),
          "The second parameter of the `sort` method must be (1) a string or boolean representing the sort direction ('ascending' / 'descending', or true / false); (2) a 1-dimensional array of strings and/or booleans; or (3) null."
        );
        assert2(
          shape(directions).length === 1,
          "The second parameter of the `sort` method must be (1) a string or boolean representing the sort direction ('ascending' / 'descending', or true / false); (2) a 1-dimensional array of strings and/or booleans; or (3) null."
        );
        assert2(
          cols.length === directions.length,
          "The arrays passed into the `sort` method must be equal in length."
        );
        cols = cols.map((col) => {
          assert2(
            isString(col) || isNumber(col),
            "Column references can either be column names (as strings) or column indices (as whole numbers)."
          );
          if (isString(col)) {
            const index = out.columns.indexOf(col);
            assert2(index > -1, `The column "${col}" does not exist!`);
            return index;
          }
          if (isNumber(col)) {
            assert2(parseInt(col) === col, "Column indices must be whole numbers!");
            assert2(col >= 0, `The column index ${col} is out of bounds!`);
            assert2(col < out.columns.length, `The index ${col} is out of bounds!`);
            return col;
          }
        });
        directions = directions.map((dir) => {
          assert2(
            isString(dir) || isBoolean(dir),
            "Direction references can either be strings ('ascending' or 'descending') or booleans (true or false)."
          );
          if (isString(dir)) {
            const value2 = dir.trim().toLowerCase();
            assert2(
              value2 === "ascending" || value2 === "descending",
              "Direction references can either be strings ('ascending' or 'descending') or booleans (true or false)."
            );
            return value2 === "ascending";
          }
          if (isBoolean(dir)) {
            return dir;
          }
        });
        out.values = sort(out.values, (a, b) => {
          let counter = 0;
          while (a[cols[counter]] === b[cols[counter]] && counter < cols.length) {
            counter++;
          }
          const isAscending = directions[counter];
          if (a[cols[counter]] === b[cols[counter]])
            return 0;
          if (a[cols[counter]] < b[cols[counter]])
            return isAscending ? -1 : 1;
          if (a[cols[counter]] > b[cols[counter]])
            return isAscending ? 1 : -1;
        });
        out.index = flatten(out.get(null, indexID).values);
        out = out.dropColumns(indexID);
        return out;
      }
      module.exports = dfSort;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-csv-string.js
  var require_df_to_csv_string = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-csv-string.js"(exports, module) {
      var isBoolean = require_is_boolean();
      var isObject = require_is_object();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var MathError = require_math_error();
      function toCSVString(df, shouldIncludeIndex) {
        shouldIncludeIndex = (() => {
          if (isUndefined(shouldIncludeIndex)) {
            return true;
          } else if (isBoolean(shouldIncludeIndex)) {
            return shouldIncludeIndex;
          }
          throw new MathError(
            "The `shouldIncludeIndex` parameter of the `toCSVString` method must be a boolean!"
          );
        })();
        const index = [""].concat(df.index);
        const out = [df.columns].concat(df.values).map((row, i) => {
          const temp = shouldIncludeIndex ? [index[i]] : [];
          return temp.concat(row).map((value2) => {
            if (isString(value2)) {
              return JSON.stringify(value2);
            } else if (isObject(value2)) {
              return JSON.stringify(JSON.stringify(value2));
            } else if (isUndefined(value2)) {
              return "";
            } else {
              return value2.toString();
            }
          }).join(",");
        }).join("\n");
        return out;
      }
      module.exports = toCSVString;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-csv.js
  var require_df_to_csv = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-csv.js"(exports, module) {
      var dfToCSVString = require_df_to_csv_string();
      var MathError = require_math_error();
      function toCSV(df, filename, shouldIncludeIndex) {
        const out = dfToCSVString(df, shouldIncludeIndex);
        let downloadedInBrowser = false;
        let wroteToDiskInNode = false;
        let browserError, nodeError;
        try {
          let newFilename = filename;
          if (filename.includes("/")) {
            const parts = filename.split("/");
            newFilename = parts[parts.length - 1];
          }
          const a = document.createElement("a");
          a.href = `data:text/csv;charset=utf-8,${encodeURIComponent(out)}`;
          a.download = newFilename;
          a.dispatchEvent(new MouseEvent("click"));
          downloadedInBrowser = true;
        } catch (e) {
          browserError = e;
        }
        try {
          const fs = __require("fs");
          const path = __require("path");
          fs.writeFileSync(path.resolve(filename), out, "utf8");
          wroteToDiskInNode = true;
        } catch (e) {
          nodeError = e;
        }
        if (!downloadedInBrowser && !wroteToDiskInNode) {
          if (typeof window !== "undefined") {
            throw new MathError(browserError);
          } else if (typeof module !== "undefined") {
            throw new MathError(nodeError);
          } else {
            throw new MathError(
              "I don't know what's going wrong, but it doesn't seem like you're in Node or the browser, and we couldn't download and/or write the file to disk!"
            );
          }
        }
        return df;
      }
      module.exports = toCSV;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-json-string.js
  var require_df_to_json_string = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-json-string.js"(exports, module) {
      function dfToJSONString(df, axis) {
        return JSON.stringify(df.toObject(axis));
      }
      module.exports = dfToJSONString;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-json.js
  var require_df_to_json = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-json.js"(exports, module) {
      var dfToJSONString = require_df_to_json_string();
      var MathError = require_math_error();
      function toJSON(df, filename, axis) {
        const out = dfToJSONString(df, axis);
        let downloadedInBrowser = false;
        let wroteToDiskInNode = false;
        let browserError, nodeError;
        try {
          let newFilename = filename;
          if (filename.includes("/")) {
            const parts = filename.split("/");
            newFilename = parts[parts.length - 1];
          }
          const a = document.createElement("a");
          a.href = `data:application/json;charset=utf-8,${encodeURIComponent(out)}`;
          a.download = newFilename;
          a.dispatchEvent(new MouseEvent("click"));
          downloadedInBrowser = true;
        } catch (e) {
          browserError = e;
        }
        try {
          const fs = __require("fs");
          const path = __require("path");
          fs.writeFileSync(path.resolve(filename), out, "utf8");
          wroteToDiskInNode = true;
        } catch (e) {
          nodeError = e;
        }
        if (!downloadedInBrowser && !wroteToDiskInNode) {
          if (typeof window !== "undefined") {
            throw new MathError(browserError);
          } else if (typeof module !== "undefined") {
            throw new MathError(nodeError);
          } else {
            throw new MathError(
              "I don't know what's going wrong, but it doesn't seem like you're in Node or the browser, and we couldn't download and/or write the file to disk!"
            );
          }
        }
        return df;
      }
      module.exports = toJSON;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-object.js
  var require_df_to_object = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/df-to-object.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      function dfToObject(df, axis) {
        if (isUndefined(axis)) {
          axis = 0;
        } else {
          assert2(
            axis === 0 || axis === 1,
            "The axis parameter of the `toObject` method must be undefined, 0, or 1. An axis of 0 indicates that the returned object should be organized first by rows and then by columns. An axis of 1 indicates that the returned object should be organized first by columns and then by rows."
          );
        }
        const out = {};
        if (axis === 0) {
          df.index.forEach((rowName, i) => {
            const temp = {};
            df.columns.forEach((colName, j) => {
              temp[colName] = df.values[i][j];
            });
            out[rowName] = temp;
          });
        } else {
          df.columns.forEach((colName, j) => {
            const temp = {};
            df.index.forEach((rowName, i) => {
              temp[rowName] = df.values[i][j];
            });
            out[colName] = temp;
          });
        }
        return out;
      }
      module.exports = dfToObject;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/transpose.js
  var require_transpose = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/transpose.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var shape = require_shape();
      var reverse = require_reverse();
      var ndarray = require_ndarray();
      function transpose(arr) {
        assert2(
          !isUndefined(arr),
          "You must pass an array into the `transpose` function!"
        );
        assert2(isArray(arr), "You must pass an array into the `transpose` function!");
        const theShape = shape(arr);
        assert2(
          theShape.length <= 2,
          "I'm not smart enough to know how to transpose arrays that have more than 2 dimensions. Sorry for the inconvenience! Please only pass 1- or 2-dimensional arrays into the `transpose` function!"
        );
        if (theShape.length === 1) {
          return reverse(arr);
        } else if (theShape.length === 2) {
          const out = ndarray(reverse(theShape));
          for (let row = 0; row < theShape[0]; row++) {
            for (let col = 0; col < theShape[1]; col++) {
              out[col][row] = arr[row][col];
            }
          }
          return out;
        }
      }
      module.exports = transpose;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-apply.js
  var require_series_apply = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-apply.js"(exports, module) {
      var assert2 = require_assert();
      var isFunction = require_is_function();
      function seriesApply(series, fn) {
        assert2(
          isFunction(fn),
          "The parameter to the `apply` method must be a function."
        );
        const out = series.copy();
        out.values = out.values.map((v, i) => fn(v, out.index[i]));
        return out;
      }
      module.exports = seriesApply;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-drop-missing.js
  var require_series_drop_missing = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-drop-missing.js"(exports, module) {
      var isUndefined = require_is_undefined();
      function seriesDropMissing(series) {
        const out = series.copy();
        const outIndex = [];
        out.values = out.values.filter((v, i) => {
          if (isUndefined(v)) {
            return false;
          } else {
            outIndex.push(out.index[i]);
            return true;
          }
        });
        out.index = outIndex;
        return out;
      }
      module.exports = seriesDropMissing;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-drop-nan.js
  var require_series_drop_nan = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-drop-nan.js"(exports, module) {
      var isNumber = require_is_number();
      function seriesDropNaN(Series, series) {
        const index = [];
        const values = [];
        series.values.forEach((value2, i) => {
          if (isNumber(value2)) {
            values.push(value2);
            index.push(series.index[i]);
          }
        });
        const out = new Series(values);
        out.name = series.name;
        out.index = index;
        return out;
      }
      module.exports = seriesDropNaN;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-filter.js
  var require_series_filter = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-filter.js"(exports, module) {
      var copy = require_copy();
      function seriesFilter(Series, series, fn) {
        let out = series.copy();
        const index = copy(out.index);
        const indicesToRemove = [];
        const newValues = out.values.filter((value2, i) => {
          const shouldKeep = fn(value2, i, out.values);
          if (!shouldKeep)
            indicesToRemove.push(out.index[i]);
          return shouldKeep;
        });
        indicesToRemove.forEach((i) => {
          index.splice(index.indexOf(i), 1);
        });
        if (newValues.length === 0) {
          out = new Series();
          out.name = series.name;
          return out;
        }
        out.values = newValues;
        out.index = index;
        return out;
      }
      module.exports = seriesFilter;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-get.js
  var require_series_get = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-get.js"(exports, module) {
      var assert2 = require_assert();
      var isNumber = require_is_number();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var set = require_set();
      function seriesGet(series, indices) {
        if (isString(indices) || isNumber(indices))
          indices = [indices];
        const types = set((indices || []).map((v) => typeof v));
        assert2(
          types.length <= 2,
          "Only whole numbers and/or strings are allowed in `get` arrays!"
        );
        if (types.length === 1) {
          assert2(
            types[0] === "string" || types[0] === "number",
            "Only whole numbers and/or strings are allowed in `get` arrays!"
          );
        }
        if (types.length === 2) {
          assert2(
            types.indexOf("string") > -1,
            "Only whole numbers and/or strings are allowed in `get` arrays!"
          );
          assert2(
            types.indexOf("number") > -1,
            "Only whole numbers and/or strings are allowed in `get` arrays!"
          );
        }
        if (!isUndefined(indices)) {
          indices = indices.map((i) => {
            if (typeof i === "string") {
              assert2(series.index.indexOf(i) > -1, `Index "${i}" does not exist!`);
              return i;
            }
            if (typeof i === "number") {
              assert2(i >= 0, `Index ${i} is out of bounds!`);
              assert2(parseInt(i) === i, `Indices must be integers!`);
              assert2(i < series.index.length, `Index ${i} is out of bounds!`);
              return series.index[i];
            }
          });
        }
        return series.getSubsetByNames(indices);
      }
      module.exports = seriesGet;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-get-subset-by-indices.js
  var require_series_get_subset_by_indices = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-get-subset-by-indices.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isUndefined = require_is_undefined();
      var isWholeNumber = require_is_whole_number();
      var range = require_range();
      var shape = require_shape();
      function seriesGetSubsetByIndices(series, indices) {
        const dataShape = series.shape;
        if (isUndefined(indices))
          indices = range(0, dataShape[0]);
        assert2(
          isArray(indices),
          "The `indices` array must be 1-dimensional array of whole numbers."
        );
        assert2(
          shape(indices).length === 1,
          "The `indices` array must be a 1-dimensional array of whole numbers."
        );
        assert2(
          indices.length > 0,
          "The `indices` array must contain at least one index."
        );
        indices.forEach((index) => {
          assert2(
            isWholeNumber(index),
            "The `indices` array must be a 1-dimensional array of whole numbers."
          );
          assert2(
            index < series.index.length,
            `The row index ${index} is out of bounds.`
          );
        });
        const rows = indices.map((i) => series.index[i]);
        return series.getSubsetByNames(rows);
      }
      module.exports = seriesGetSubsetByIndices;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-get-subset-by-names.js
  var require_series_get_subset_by_names = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-get-subset-by-names.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var shape = require_shape();
      function seriesGetSubsetByNames(Series, series, indices) {
        if (isUndefined(indices))
          indices = series.index;
        assert2(
          isArray(indices),
          "The `indices` array must be a 1-dimensional array of strings."
        );
        assert2(
          shape(indices).length === 1,
          "The `indices` array must be a 1-dimensional array of strings."
        );
        assert2(
          indices.length > 0,
          "The `indices` array must contain at least one index name."
        );
        indices.forEach((name) => {
          assert2(isString(name), "The `indices` array must contain only strings.");
          assert2(
            series.index.indexOf(name) > -1,
            `The name "${name}" does not exist in the index.`
          );
        });
        const values = indices.map((name) => {
          return series.values[series.index.indexOf(name)];
        });
        if (values.length === 1)
          return values[0];
        const out = new Series(values);
        out.index = indices;
        out.name = series.name;
        return out;
      }
      module.exports = seriesGetSubsetByNames;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-print.js
  var require_series_print = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-print.js"(exports, module) {
      var copy = require_copy();
      var range = require_range();
      function seriesPrint(series) {
        let temp = series.copy();
        const maxRows = typeof window === "undefined" ? 20 : 10;
        if (temp.index.length > maxRows) {
          temp = temp.get(
            range(0, maxRows / 2).concat(
              range(temp.index.length - maxRows / 2, temp.index.length)
            )
          );
          const tempIndex = copy(temp.index);
          tempIndex.splice(parseInt(tempIndex.length / 2), 0, "...");
          temp.values.push("...");
          temp.index.push("...");
          temp = temp.get(tempIndex);
        }
        const out = {};
        temp.values.forEach((value2, i) => {
          const obj = {};
          obj[temp.name] = value2;
          out[temp.index[i]] = obj;
        });
        console.table(out);
        console.log("Shape:", series.shape, "\n");
        return series;
      }
      module.exports = seriesPrint;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-sort.js
  var require_series_sort = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-sort.js"(exports, module) {
      var assert2 = require_assert();
      var isBoolean = require_is_boolean();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var sort = require_sort();
      var transpose = require_transpose();
      function seriesSort(Series, series, direction) {
        assert2(
          isBoolean(direction) || isString(direction) || isUndefined(direction),
          "The `sort` method can take an optional parameter that's either a string representing a direction ('ascending' or 'descending') or a boolean representing whether or not the direction is ascending (true or false)."
        );
        let isAscending = true;
        if (isUndefined(direction)) {
          isAscending = true;
        }
        if (isString(direction)) {
          direction = direction.trim().toLowerCase();
          assert2(
            direction === "ascending" || direction === "descending",
            "The `sort` method can take an optional parameter that's either a string representing a direction ('ascending' or 'descending') or a boolean representing whether or not the direction is ascending (true or false)."
          );
          isAscending = direction === "ascending";
        }
        if (isBoolean(direction)) {
          isAscending = direction;
        }
        let temp = transpose([series.values, series.index]);
        temp = transpose(
          sort(temp, (a, b) => {
            if (a[0] === b[0])
              return 0;
            if (a[0] < b[0])
              return isAscending ? -1 : 1;
            if (a[0] > b[0])
              return isAscending ? 1 : -1;
          })
        );
        const out = new Series(temp[0]);
        out.index = temp[1];
        out.name = series.name;
        return out;
      }
      module.exports = seriesSort;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-sort-by-index.js
  var require_series_sort_by_index = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-sort-by-index.js"(exports, module) {
      var sort = require_sort();
      var transpose = require_transpose();
      function seriesSortByIndex(Series, series) {
        let temp = transpose([series.values, series.index]);
        temp = transpose(
          sort(temp, (a, b) => {
            if (a[1] === b[1])
              return 0;
            if (a[1] < b[1])
              return -1;
            if (a[1] > b[1])
              return 1;
          })
        );
        const out = new Series(temp[0]);
        out.index = temp[1];
        out.name = series.name;
        return out;
      }
      module.exports = seriesSortByIndex;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/series-to-object.js
  var require_series_to_object = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/series-to-object.js"(exports, module) {
      function seriesToObject(series) {
        const out = {};
        out[series.name] = {};
        series.index.forEach((index, i) => {
          out[series.name][index] = series.values[i];
        });
        return out;
      }
      module.exports = seriesToObject;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/series/index.js
  var require_series = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/series/index.js"(exports, module) {
      var assert2 = require_assert();
      var copy = require_copy();
      var isArray = require_is_array();
      var isString = require_is_string();
      var isUndefined = require_is_undefined();
      var leftPad = require_left_pad();
      var ndarray = require_ndarray();
      var range = require_range();
      var reverse = require_reverse();
      var seriesApply = require_series_apply();
      var seriesDropMissing = require_series_drop_missing();
      var seriesDropNaN = require_series_drop_nan();
      var seriesFilter = require_series_filter();
      var seriesGet = require_series_get();
      var seriesGetSubsetByIndices = require_series_get_subset_by_indices();
      var seriesGetSubsetByNames = require_series_get_subset_by_names();
      var seriesPrint = require_series_print();
      var seriesSort = require_series_sort();
      var seriesSortByIndex = require_series_sort_by_index();
      var seriesToObject = require_series_to_object();
      var shape = require_shape();
      var transpose = require_transpose();
      module.exports = function(DataFrame) {
        class Series {
          constructor(data) {
            const self = this;
            self.name = "data";
            Object.defineProperty(self, "_values", {
              value: [],
              configurable: true,
              enumerable: false,
              writable: true
            });
            Object.defineProperty(self, "values", {
              configurable: true,
              enumerable: true,
              get() {
                return self._values;
              },
              set(x) {
                assert2(isArray(x), "The new values must be a 1-dimensional array!");
                const dataShape = shape(x);
                assert2(
                  dataShape.length === 1,
                  "The new array of values must be 1-dimensional!"
                );
                if (dataShape[0] < self._index.length) {
                  self._index = self._index.slice(0, dataShape[0]);
                } else if (dataShape[0] > self._index.length) {
                  self._index = self._index.concat(
                    range(self._index.length, dataShape[0]).map((i) => {
                      return "row" + leftPad(i, (x.length - 1).toString().length);
                    })
                  );
                }
                self._values = x;
              }
            });
            Object.defineProperty(self, "_index", {
              value: [],
              configurable: true,
              enumerable: false,
              writable: true
            });
            Object.defineProperty(self, "index", {
              configurable: true,
              enumerable: true,
              get() {
                return self._index;
              },
              set(x) {
                assert2(
                  isArray(x),
                  "The new index must be a 1-dimensional array of strings!"
                );
                assert2(
                  x.length === self.shape[0],
                  "The new index must be the same length as the old index!"
                );
                assert2(
                  shape(x).length === 1,
                  "The new index must be a 1-dimensional array of strings!"
                );
                x.forEach((value2) => {
                  assert2(isString(value2), "All of the row names must be strings!");
                });
                self._index = x;
              }
            });
            if (data) {
              const dataShape = shape(data);
              assert2(
                dataShape.length === 1,
                "The `data` array passed into the constructor of a DataFrame must be 1-dimensional!"
              );
              self.values = data;
            }
          }
          get shape() {
            const self = this;
            return shape(self.values);
          }
          get isEmpty() {
            const self = this;
            return self.values.filter((v) => !isUndefined(v)).length === 0;
          }
          clear() {
            const self = this;
            const out = self.copy();
            out.values = ndarray(out.shape);
            out.index = self.index;
            return out;
          }
          get(indices) {
            const self = this;
            return seriesGet(self, indices);
          }
          getSubsetByNames(indices) {
            const self = this;
            return seriesGetSubsetByNames(Series, self, indices);
          }
          getSubsetByIndices(indices) {
            const self = this;
            return seriesGetSubsetByIndices(self, indices);
          }
          loc(indices) {
            const self = this;
            return self.getSubsetByNames(indices);
          }
          iloc(indices) {
            const self = this;
            return self.getSubsetByIndices(indices);
          }
          reverse() {
            const self = this;
            const out = new Series(reverse(self.values));
            out.index = reverse(self.index);
            out.name = self.name;
            return out;
          }
          resetIndex() {
            const self = this;
            const out = self.copy();
            out.index = range(0, self.shape[0]).map((i) => {
              return "row" + leftPad(i, (out.index.length - 1).toString().length);
            });
            return out;
          }
          copy() {
            const self = this;
            const out = new Series(copy(self.values));
            out.index = self.index.slice();
            out.name = self.name;
            return out;
          }
          apply(fn) {
            const self = this;
            return seriesApply(self, fn);
          }
          dropMissing(condition, threshold) {
            const self = this;
            return seriesDropMissing(self, condition, threshold);
          }
          dropNaN() {
            const self = this;
            return seriesDropNaN(Series, self);
          }
          toObject() {
            const self = this;
            return seriesToObject(self);
          }
          print() {
            const self = this;
            return seriesPrint(self);
          }
          sort(direction) {
            const self = this;
            return seriesSort(Series, self, direction);
          }
          sortByIndex() {
            const self = this;
            return seriesSortByIndex(Series, self);
          }
          filter(fn) {
            const self = this;
            return seriesFilter(Series, self, fn);
          }
          toDataFrame() {
            const self = this;
            const out = new DataFrame(transpose([self.values]));
            out.columns = [self.name];
            out.index = self.index;
            return out;
          }
          getDummies() {
            const self = this;
            return self.toDataFrame().getDummies();
          }
          oneHotEncode() {
            const self = this;
            return self.getDummies();
          }
        }
        return Series;
      };
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dataframe/index.js
  var require_dataframe = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dataframe/index.js"(exports, module) {
      var assert2 = require_assert();
      var count = require_count();
      var dfAppend = require_df_append();
      var dfApply = require_df_apply();
      var dfAssign = require_df_assign();
      var dfCopy = require_df_copy();
      var dfDrop = require_df_drop();
      var dfDropMissing = require_df_drop_missing();
      var dfDropNaN = require_df_drop_nan();
      var dfFilter = require_df_filter();
      var dfFromCSV = require_df_from_csv();
      var dfFromCSVString = require_df_from_csv_string();
      var dfGet = require_df_get();
      var dfGetDummies = require_df_get_dummies();
      var dfGetSubsetByIndices = require_df_get_subset_by_indices();
      var dfGetSubsetByNames = require_df_get_subset_by_names();
      var dfJoin = require_df_join();
      var dfPrint = require_df_print();
      var dfResetIndex = require_df_reset_index();
      var dfShuffle = require_df_shuffle();
      var dfSort = require_df_sort();
      var dfToCSV = require_df_to_csv();
      var dfToCSVString = require_df_to_csv_string();
      var dfToJSONString = require_df_to_json_string();
      var dfToJSON = require_df_to_json();
      var dfToObject = require_df_to_object();
      var flatten = require_flatten();
      var isArray = require_is_array();
      var isUndefined = require_is_undefined();
      var leftPad = require_left_pad();
      var ndarray = require_ndarray();
      var range = require_range();
      var set = require_set();
      var shape = require_shape();
      var transpose = require_transpose();
      function makeKey(n) {
        const alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
        let out = "";
        for (let i = 0; i < n; i++)
          out += alpha[parseInt(Math.random() * alpha.length)];
        return out;
      }
      var DataFrame = class {
        constructor(data) {
          const self = this;
          Object.defineProperty(self, "_values", {
            value: [],
            configurable: true,
            enumerable: false,
            writable: true
          });
          Object.defineProperty(self, "values", {
            configurable: true,
            enumerable: true,
            get() {
              if (self._values.length === 0 || !isUndefined(self._values[0]) && self._values[0].length === 0) {
                return [[]];
              }
              return self._values;
            },
            set(x) {
              assert2(isArray(x), "The new values must be a 2-dimensional array!");
              const dataShape = shape(x);
              assert2(
                dataShape.length === 2,
                "The new array of values must be 2-dimensional!"
              );
              if (dataShape[0] < self._index.length) {
                self._index = self._index.slice(0, dataShape[0]);
              } else if (dataShape[0] > self._index.length) {
                self._index = self._index.concat(
                  range(self._index.length, dataShape[0]).map((i) => {
                    return "row" + leftPad(i, (dataShape[0] - 1).toString().length);
                  })
                );
              }
              if (dataShape[1] < self._columns.length) {
                self._columns = self._columns.slice(0, dataShape[1]);
              } else if (dataShape[1] > self._columns.length) {
                self._columns = self._columns.concat(
                  range(self._columns.length, dataShape[1]).map((i) => {
                    return "col" + leftPad(i, (dataShape[1] - 1).toString().length);
                  })
                );
              }
              self._values = x;
            }
          });
          Object.defineProperty(self, "_columns", {
            value: [],
            configurable: true,
            enumerable: false,
            writable: true
          });
          Object.defineProperty(self, "columns", {
            configurable: true,
            enumerable: true,
            get() {
              return self._columns;
            },
            set(x) {
              assert2(
                isArray(x),
                "The new columns list must be a 1-dimensional array of strings!"
              );
              assert2(
                self.isEmpty || x.length === self.shape[1],
                "The new columns list must be the same length as the old columns list!"
              );
              assert2(
                shape(x).length === 1,
                "The new columns list must be a 1-dimensional array of strings!"
              );
              x = x.map((v) => {
                if (typeof v !== "string") {
                  v = JSON.stringify(v) || v.toString();
                }
                if (v.trim().length === 0) {
                  return "untitled_" + makeKey(8);
                }
                return v.trim();
              });
              const counts = (() => {
                const temp = count(x);
                const out = {};
                temp.forEach((obj) => {
                  out[obj.item] = obj.count;
                });
                return out;
              })();
              x = x.map((v) => {
                if (counts[v] > 1) {
                  return v + "_" + makeKey(8);
                }
                return v;
              });
              self._columns = x;
            }
          });
          Object.defineProperty(self, "_index", {
            value: [],
            configurable: true,
            enumerable: false,
            writable: true
          });
          Object.defineProperty(self, "index", {
            configurable: true,
            enumerable: true,
            get() {
              return self._index;
            },
            set(x) {
              assert2(
                isArray(x),
                "The new index must be a 1-dimensional array of strings!"
              );
              assert2(
                self.isEmpty || x.length === self.shape[0],
                "The new index must be the same length as the old index!"
              );
              assert2(
                shape(x).length === 1,
                "The new index must be a 1-dimensional array of strings!"
              );
              x = x.map((v) => {
                if (typeof v !== "string") {
                  v = JSON.stringify(v) || v.toString();
                }
                if (v.trim().length === 0) {
                  return "untitled_" + makeKey(8);
                }
                return v.trim();
              });
              const counts = (() => {
                const temp = count(x);
                const out = {};
                temp.forEach((obj) => {
                  out[obj.item] = obj.count;
                });
                return out;
              })();
              x = x.map((v) => {
                if (counts[v] > 1) {
                  return v + "_" + makeKey(8);
                }
                return v;
              });
              self._index = x;
            }
          });
          assert2(
            isUndefined(data) || data instanceof Object,
            "The `data` passed into the constructor of a DataFrame must be either (1) an object where the key-value pairs are (respectively) column names and 1-dimensional arrays of values, or (2) a 2-dimensional array of values."
          );
          if (data) {
            if (isArray(data)) {
              const dataShape = shape(data);
              assert2(
                dataShape.length === 2,
                "The `data` array passed into the constructor of a DataFrame must be 2-dimensional!"
              );
              self.values = data;
            } else {
              self._columns = Object.keys(data);
              const temp = [];
              self._columns.forEach((col) => {
                const values = data[col];
                temp.push(values);
              });
              self._values = transpose(temp);
              const dataShape = shape(self.values);
              self._index = range(0, dataShape[0]).map((i) => {
                return "row" + leftPad(i, (dataShape[0] - 1).toString().length);
              });
            }
          }
        }
        get shape() {
          const self = this;
          return shape(self.values);
        }
        get rows() {
          const self = this;
          return self.index;
        }
        set rows(rows) {
          const self = this;
          self.index = rows;
        }
        get isEmpty() {
          const self = this;
          return flatten(self.values).length === 0;
        }
        clear() {
          const self = this;
          const out = new DataFrame(ndarray(self.shape));
          out.columns = self.columns.slice();
          out.index = self.index.slice();
          return out;
        }
        get(rows, cols) {
          const self = this;
          return dfGet(self, rows, cols);
        }
        getSubsetByNames(rows, cols) {
          const self = this;
          return dfGetSubsetByNames(DataFrame, Series, self, rows, cols);
        }
        getSubsetByIndices(rowIndices, colIndices) {
          const self = this;
          return dfGetSubsetByIndices(self, rowIndices, colIndices);
        }
        loc(rows, cols) {
          const self = this;
          return self.getSubsetByNames(rows, cols);
        }
        iloc(rowIndices, colIndices) {
          const self = this;
          return self.getSubsetByIndices(rowIndices, colIndices);
        }
        getDummies(columns) {
          const self = this;
          return dfGetDummies(DataFrame, self, columns);
        }
        oneHotEncode(columns) {
          const self = this;
          return dfGetDummies(DataFrame, self, columns);
        }
        transpose() {
          const self = this;
          const out = new DataFrame(transpose(self.values));
          out.columns = self.index;
          out.index = self.columns;
          return out;
        }
        get T() {
          const self = this;
          return self.transpose();
        }
        resetIndex(shouldSkipCopying) {
          const self = this;
          return dfResetIndex(self, shouldSkipCopying);
        }
        copy() {
          const self = this;
          return dfCopy(DataFrame, self);
        }
        assign(p1, p2) {
          const self = this;
          return dfAssign(DataFrame, Series, self, p1, p2);
        }
        apply(fn, axis) {
          const self = this;
          return dfApply(DataFrame, Series, self, fn, axis);
        }
        map(fn, axis) {
          const self = this;
          return self.apply(fn, axis);
        }
        dropMissing(axis, condition, threshold) {
          const self = this;
          return dfDropMissing(DataFrame, Series, self, axis, condition, threshold);
        }
        dropNaN(axis, condition, threshold) {
          const self = this;
          return dfDropNaN(DataFrame, self, axis, condition, threshold);
        }
        drop(rows, cols) {
          const self = this;
          return dfDrop(DataFrame, Series, self, rows, cols);
        }
        dropColumns(columns) {
          const self = this;
          return self.drop(null, columns);
        }
        dropRows(rows) {
          const self = this;
          return self.drop(rows, null);
        }
        toObject(axis) {
          const self = this;
          return dfToObject(self, axis);
        }
        toCSVString(shouldIncludeIndex) {
          const self = this;
          return dfToCSVString(self, shouldIncludeIndex);
        }
        toCSV(filename, shouldIncludeIndex) {
          const self = this;
          return dfToCSV(self, filename, shouldIncludeIndex);
        }
        toJSON(filename, axis) {
          const self = this;
          return dfToJSON(self, filename, axis);
        }
        toJSONString(axis) {
          const self = this;
          return dfToJSONString(self, axis);
        }
        print() {
          const self = this;
          return dfPrint(DataFrame, Series, self);
        }
        sort(cols, directions) {
          const self = this;
          return dfSort(self, cols, directions);
        }
        sortByIndex() {
          const self = this;
          return self.sort();
        }
        filter(fn, axis) {
          const self = this;
          return dfFilter(DataFrame, Series, self, fn, axis);
        }
        shuffle(axis) {
          const self = this;
          return dfShuffle(self, axis);
        }
        append(data) {
          const self = this;
          return dfAppend(DataFrame, Series, self, data);
        }
        join(data) {
          const self = this;
          return dfJoin(DataFrame, Series, self, data);
        }
      };
      DataFrame.fromCSV = function() {
        return dfFromCSV(DataFrame, ...arguments);
      };
      DataFrame.fromCSVString = function() {
        return dfFromCSVString(DataFrame, ...arguments);
      };
      var Series = require_series()(DataFrame);
      module.exports = { DataFrame, Series };
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/abs.js
  var require_abs = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/abs.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function abs(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.abs(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(abs);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/add.js
  var require_add = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/add.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function add() {
        try {
          let out = 0;
          const x = Object.values(arguments);
          for (let i = 0; i < x.length; i++) {
            if (!isNumber(x[i]))
              return NaN;
            out += x[i];
          }
          return out;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(add);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/append.js
  var require_append = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/append.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var shape = require_shape();
      var transpose = require_transpose();
      function append(a, b, axis = 0) {
        assert2(
          !isUndefined(a),
          "You must pass two arrays into the `append` function!"
        );
        assert2(
          !isUndefined(b),
          "You must pass two arrays into the `append` function!"
        );
        assert2(isArray(a), "You must pass two arrays into the `append` function!");
        assert2(isArray(b), "You must pass two arrays into the `append` function!");
        assert2(
          isNumber(axis),
          "The `axis` argument to the `append` function must be 0 or 1!"
        );
        assert2(
          axis >= 0 && axis < 2,
          "The `axis` argument to the `append` function must be 0 or 1!"
        );
        assert2(
          parseInt(axis) === axis,
          "The `axis` argument to the `append` function must be 0 or 1!"
        );
        const aShape = shape(a);
        const bShape = shape(b);
        assert2(
          aShape.length === bShape.length,
          "The two arrays passed into the `append` function must have the same number of dimensions!"
        );
        assert2(
          aShape.length < 3 && bShape.length < 3,
          "The two arrays passed into the `append` function must be 1- or 2-dimensional!"
        );
        for (let i = 0; i < aShape.length; i++) {
          if (i !== axis) {
            assert2(
              aShape[i] === bShape[i],
              `The two arrays passed into the \`append\` function must have the same shapes along all axes *except* the axis along which they're being appended! (${aShape[i]} != ${bShape[i]})`
            );
          }
        }
        assert2(
          axis < aShape.length,
          "The axis argument you passed into the `append` function is out of bounds for the array!"
        );
        if (aShape.length === 0) {
          return [];
        } else if (aShape.length === 1) {
          return a.concat(b);
        } else if (aShape.length === 2) {
          if (axis === 0) {
            const out = [];
            for (let i = 0; i < aShape[0]; i++)
              out.push(a[i]);
            for (let i = 0; i < bShape[0]; i++)
              out.push(b[i]);
            return out;
          } else if (axis === 1) {
            return transpose(append(transpose(a), transpose(b), 0));
          }
        }
      }
      module.exports = append;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/arccos.js
  var require_arccos = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/arccos.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function arccos(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.acos(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(arccos);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/arcsin.js
  var require_arcsin = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/arcsin.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function arcsin(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.asin(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(arcsin);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/arctan.js
  var require_arctan = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/arctan.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function arctan(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.atan(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(arctan);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/argmax.js
  var require_argmax = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/argmax.js"(exports, module) {
      var indexOf = require_index_of();
      var max = require_max();
      function argmax(x) {
        try {
          const out = indexOf(x, max(x));
          if (out) {
            if (out.length === 0) {
              return null;
            } else if (out.length === 1) {
              return out[0];
            } else {
              return out;
            }
          } else {
            return null;
          }
        } catch (e) {
          return NaN;
        }
      }
      module.exports = argmax;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/min.js
  var require_min = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/min.js"(exports, module) {
      var flatten = require_flatten();
      var isNumber = require_is_number();
      function min(arr) {
        try {
          const temp = flatten(arr);
          let out = Infinity;
          for (let i = 0; i < temp.length; i++) {
            if (!isNumber(temp[i]))
              return NaN;
            if (temp[i] < out)
              out = temp[i];
          }
          return out === Infinity ? NaN : out;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = min;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/argmin.js
  var require_argmin = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/argmin.js"(exports, module) {
      var indexOf = require_index_of();
      var min = require_min();
      function argmin(x) {
        try {
          const out = indexOf(x, min(x));
          if (out) {
            if (out.length === 0) {
              return null;
            } else if (out.length === 1) {
              return out[0];
            } else {
              return out;
            }
          } else {
            return null;
          }
        } catch (e) {
          return NaN;
        }
      }
      module.exports = argmin;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/ceil.js
  var require_ceil = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/ceil.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function ceil(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.ceil(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(ceil);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/chop.js
  var require_chop = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/chop.js"(exports, module) {
      var isUndefined = require_is_undefined();
      var abs = require_abs();
      var vectorize = require_vectorize();
      var isNumber = require_is_number();
      function chop(x, threshold) {
        try {
          if (!isNumber(x))
            return NaN;
          if (isUndefined(threshold)) {
            threshold = 1e-10;
          } else if (!isNumber(threshold)) {
            return NaN;
          }
          return abs(x) < threshold ? 0 : x;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(chop);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/clamp.js
  var require_clamp = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/clamp.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function clamp(x, a, b) {
        try {
          if (!isNumber(x))
            return NaN;
          if (!isNumber(a))
            return NaN;
          if (!isNumber(b))
            return NaN;
          if (x < a)
            return a;
          if (x > b)
            return b;
          return x;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(clamp);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/mean.js
  var require_mean = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/mean.js"(exports, module) {
      var isNumber = require_is_number();
      var flatten = require_flatten();
      function mean(arr) {
        try {
          const temp = flatten(arr);
          let out = 0;
          for (let i = 0; i < temp.length; i++) {
            if (!isNumber(temp[i]))
              return NaN;
            out += temp[i];
          }
          return out / temp.length;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = mean;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/variance.js
  var require_variance = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/variance.js"(exports, module) {
      var mean = require_mean();
      var flatten = require_flatten();
      var isNumber = require_is_number();
      function variance(arr) {
        try {
          const temp = flatten(arr);
          const m = mean(temp);
          let out = 0;
          for (let i = 0; i < temp.length; i++) {
            if (!isNumber(temp[i]))
              return NaN;
            out += (temp[i] - m) * (temp[i] - m);
          }
          return out / temp.length;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = variance;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/cohens-d.js
  var require_cohens_d = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/cohens-d.js"(exports, module) {
      var mean = require_mean();
      var variance = require_variance();
      function cohensd(arr1, arr2) {
        try {
          const m1 = mean(arr1);
          const m2 = mean(arr2);
          const s = Math.sqrt((variance(arr1) + variance(arr2)) / 2);
          return (m1 - m2) / s;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = cohensd;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/combine.js
  var require_combine = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/combine.js"(exports, module) {
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var assert2 = require_assert();
      function combine(arr, r) {
        assert2(isArray(arr), "The `combine` function only works on arrays!");
        assert2(isNumber(r), "`r` must be a whole number!");
        if (r > arr.length) {
          return [arr];
        }
        if (r <= 0) {
          return [[]];
        }
        assert2(r === parseInt(r), "`r` must be a whole number!");
        if (arr.length < 2)
          return arr;
        const out = [];
        arr.forEach((item, i) => {
          assert2(
            !isArray(item),
            "It is not recommended to get combinations of arrays of arrays. Weird things happen, and I haven't figured out how to account for such a scenario yet. A possible workaround is: convert each sub-array to a string (using `JSON.stringify`), get the combinations using the array of strings, and then convert each string in each combination back to a sub-array (using `JSON.parse`)."
          );
          const after = arr.slice(i + 1);
          if (after.length < r - 1)
            return;
          const children = combine(after, r - 1);
          children.forEach((child) => {
            out.push([item].concat(child));
          });
        });
        return out;
      }
      module.exports = combine;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/covariance.js
  var require_covariance = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/covariance.js"(exports, module) {
      var mean = require_mean();
      var isUndefined = require_is_undefined();
      function covariance(x, y) {
        try {
          const mx = mean(x);
          const my = mean(y);
          const n = Math.max(x.length, y.length);
          let out = 0;
          for (let i = 0; i < n; i++) {
            if (isUndefined(x[i]))
              return NaN;
            if (isUndefined(y[i]))
              return NaN;
            out += (x[i] - mx) * (y[i] - my);
          }
          return out / x.length;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = covariance;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/sqrt.js
  var require_sqrt = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/sqrt.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function sqrt(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.sqrt(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(sqrt);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/std.js
  var require_std = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/std.js"(exports, module) {
      var sqrt = require_sqrt();
      var variance = require_variance();
      function std(arr) {
        try {
          return sqrt(variance(arr));
        } catch (e) {
          return NaN;
        }
      }
      module.exports = std;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/correl.js
  var require_correl = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/correl.js"(exports, module) {
      var covariance = require_covariance();
      var std = require_std();
      function correl(x, y) {
        try {
          return covariance(x, y) / (std(x) * std(y));
        } catch (e) {
          return NaN;
        }
      }
      module.exports = correl;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/cos.js
  var require_cos = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/cos.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function cos(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.cos(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(cos);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/diff.js
  var require_diff = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/diff.js"(exports, module) {
      var assert2 = require_assert();
      var flatten = require_flatten();
      var isArray = require_is_array();
      var isEqual = require_is_equal();
      var isUndefined = require_is_undefined();
      function diff(a, b) {
        assert2(isArray(a), "You must pass two arrays into the `diff` function!");
        assert2(isArray(b), "You must pass two arrays into the `diff` function!");
        const aTemp = flatten(a);
        const bTemp = flatten(b);
        const out = [];
        aTemp.forEach((item) => {
          const equivalent = bTemp.find((other) => isEqual(other, item));
          if (isUndefined(equivalent)) {
            out.push(item);
          }
        });
        return out;
      }
      module.exports = diff;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/pow.js
  var require_pow = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/pow.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function pow(x, p) {
        try {
          if (!isNumber(x))
            return NaN;
          if (!isNumber(p))
            return NaN;
          return Math.pow(x, p);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(pow);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/sum.js
  var require_sum = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/sum.js"(exports, module) {
      var add = require_add();
      var flatten = require_flatten();
      function sum(arr) {
        try {
          return add(...flatten(arr));
        } catch (e) {
          return NaN;
        }
      }
      module.exports = sum;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/multiply.js
  var require_multiply = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/multiply.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function multiply() {
        try {
          let out = 1;
          const x = Object.values(arguments);
          for (let i = 0; i < x.length; i++) {
            if (!isNumber(x[i]))
              return NaN;
            out *= x[i];
          }
          return out;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(multiply);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/scale.js
  var require_scale = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/scale.js"(exports, module) {
      var multiply = require_multiply();
      function scale(a, b) {
        return multiply(a, b);
      }
      module.exports = scale;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/subtract.js
  var require_subtract = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/subtract.js"(exports, module) {
      var add = require_add();
      var scale = require_scale();
      function subtract(a, b) {
        return add(a, scale(b, -1));
      }
      module.exports = subtract;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/distance.js
  var require_distance = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/distance.js"(exports, module) {
      var pow = require_pow();
      var sum = require_sum();
      var sqrt = require_sqrt();
      var subtract = require_subtract();
      function distance(a, b) {
        try {
          return sqrt(sum(pow(subtract(a, b), 2)));
        } catch (e) {
          return NaN;
        }
      }
      module.exports = distance;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/divide.js
  var require_divide = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/divide.js"(exports, module) {
      var scale = require_scale();
      var pow = require_pow();
      function divide(a, b) {
        return scale(a, pow(b, -1));
      }
      module.exports = divide;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/dot.js
  var require_dot = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/dot.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var isEqual = require_is_equal();
      var flatten = require_flatten();
      var shape = require_shape();
      var sum = require_sum();
      var scale = require_scale();
      var transpose = require_transpose();
      function dot(a, b) {
        assert2(
          !isUndefined(a) && !isUndefined(b),
          "You must pass two arrays of numbers into the `dot` function!"
        );
        assert2(
          isArray(a) && isArray(b),
          "You must pass two arrays of numbers into the `dot` function!"
        );
        flatten(a).concat(flatten(b)).forEach((v) => {
          assert2(
            isNumber(v),
            "One of the arrays you passed into the `dot` function contains non-numerical values!"
          );
        });
        const aShape = shape(a);
        const bShape = shape(b);
        assert2(
          aShape.length <= 2 && bShape.length <= 2,
          "I'm not smart enough to know how to get the dot-product of arrays that have more than 2 dimensions. Sorry for the inconvenience! Please only pass 1- or 2-dimensional arrays into the `dot` function!"
        );
        assert2(
          aShape[aShape.length - 1] === bShape[0],
          `There's a dimension misalignment in the two arrays you passed into the \`dot\` function. (${aShape[aShape.length - 1]} !== ${bShape[0]})`
        );
        if (aShape.length === 1 && bShape.length === 1) {
          return sum(scale(a, b));
        } else if (aShape.length === 1 && bShape.length === 2) {
          return transpose(b).map((col) => dot(a, col));
        } else if (aShape.length === 2 && bShape.length === 1) {
          return a.map((row) => dot(row, b));
        } else if (aShape.length === 2 && bShape.length === 2) {
          const bTranspose = transpose(b);
          const out = [];
          for (let i = 0; i < a.length; i++) {
            const row = [];
            for (let j = 0; j < bTranspose.length; j++) {
              row.push(dot(a[i], bTranspose[j]));
            }
            out.push(row);
          }
          return out;
        }
      }
      module.exports = dot;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/drop-missing.js
  var require_drop_missing = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/drop-missing.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isUndefined = require_is_undefined();
      var shape = require_shape();
      function dropMissing(x) {
        assert2(
          isArray(x),
          "The value passed into the `dropMissing` function must be a one-dimensional array!"
        );
        assert2(
          shape(x).length === 1,
          "The value passed into the `dropMissing` function must be a one-dimensional array!"
        );
        return x.filter((v) => !isUndefined(v));
      }
      module.exports = dropMissing;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/drop-missing-pairwise.js
  var require_drop_missing_pairwise = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/drop-missing-pairwise.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var max = require_max();
      var shape = require_shape();
      function dropMissingPairwise(a, b) {
        assert2(
          isArray(a) && isArray(b),
          "The two items passed into the `dropMissingPairwise` function must be arrays!"
        );
        assert2(
          shape(a).length === 1 && shape(b).length === 1,
          "The `dropMissingPairwise` function only works on one-dimensional arrays!"
        );
        const aOut = [];
        const bOut = [];
        for (let i = 0; i < max([a.length, b.length]); i++) {
          if (!isUndefined(a[i]) && !isUndefined(b[i])) {
            aOut.push(a[i]);
            bOut.push(b[i]);
          }
        }
        return [aOut, bOut];
      }
      module.exports = dropMissingPairwise;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/drop-nan-pairwise.js
  var require_drop_nan_pairwise = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/drop-nan-pairwise.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var max = require_max();
      var shape = require_shape();
      function dropNaNPairwise(a, b) {
        assert2(
          isArray(a) && isArray(b),
          "The two items passed into the `dropNaNPairwise` function must be arrays!"
        );
        assert2(
          shape(a).length === 1 && shape(b).length === 1,
          "The `dropNaNPairwise` function only works on one-dimensional arrays!"
        );
        const aOut = [];
        const bOut = [];
        for (let i = 0; i < max([a.length, b.length]); i++) {
          if (!isUndefined(a[i]) && isNumber(a[i]) && !isUndefined(b[i]) && isNumber(b[i])) {
            aOut.push(a[i]);
            bOut.push(b[i]);
          }
        }
        return [aOut, bOut];
      }
      module.exports = dropNaNPairwise;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/exp.js
  var require_exp = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/exp.js"(exports, module) {
      var vectorize = require_vectorize();
      var isNumber = require_is_number();
      function exp(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.exp(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(exp);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/factorial.js
  var require_factorial = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/factorial.js"(exports, module) {
      var vectorize = require_vectorize();
      function factorial(n) {
        try {
          if (n !== parseInt(n))
            return NaN;
          if (n <= 1)
            return 1;
          return n * factorial(n - 1);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(factorial);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/find.js
  var require_find = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/find.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isFunction = require_is_function();
      var isObject = require_is_object();
      function find(x, fn) {
        assert2(
          isObject(x) || isArray(x),
          "You must pass (1) an object or array and (2) a function or value into the `find` function!"
        );
        if (!isFunction(fn)) {
          value = fn;
          fn = (v) => v === value;
        }
        function helper(x2, fn2, checked) {
          checked = checked || [];
          if (checked.indexOf(x2) > -1) {
            return null;
          }
          if (isObject(x2)) {
            checked.push(x2);
            const keys = Object.keys(x2);
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value2 = x2[key];
              if (fn2(value2)) {
                return value2;
              }
              const result = helper(value2, fn2, checked);
              if (result) {
                return result;
              }
            }
          } else if (isArray(x2)) {
            checked.push(x2);
            for (let i = 0; i < x2.length; i++) {
              const value2 = x2[i];
              if (fn2(value2)) {
                return value2;
              }
              const result = helper(value2, fn2, checked);
              if (result) {
                return result;
              }
            }
          } else {
            if (fn2(x2)) {
              return x2;
            }
          }
          return null;
        }
        function safeFn(v) {
          try {
            return fn(v);
          } catch (e) {
            return false;
          }
        }
        return helper(x, safeFn);
      }
      module.exports = find;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/find-all.js
  var require_find_all = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/find-all.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isFunction = require_is_function();
      var isObject = require_is_object();
      function findAll(x, fn) {
        assert2(
          isObject(x) || isArray(x),
          "You must pass (1) an object or array and (2) a function or value into the `findAll` function!"
        );
        if (!isFunction(fn)) {
          value = fn;
          fn = (v) => v === value;
        }
        function helper(x2, fn2, checked) {
          checked = checked || [];
          if (checked.indexOf(x2) > -1) {
            return null;
          }
          if (isObject(x2)) {
            checked.push(x2);
            const keys = Object.keys(x2);
            const out = [];
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value2 = x2[key];
              let alreadyStoredThisValue = false;
              if (fn2(value2)) {
                out.push(value2);
                alreadyStoredThisValue = true;
              }
              const results2 = helper(value2, fn2, checked);
              if (results2 && results2.length > 0) {
                results2.slice(alreadyStoredThisValue ? 1 : 0).forEach((r) => out.push(r));
              }
            }
            return out;
          } else if (isArray(x2)) {
            checked.push(x2);
            const out = [];
            for (let i = 0; i < x2.length; i++) {
              const value2 = x2[i];
              let alreadyStoredThisValue = false;
              if (fn2(value2)) {
                out.push(value2);
                alreadyStoredThisValue = true;
              }
              const results2 = helper(value2, fn2, checked);
              if (results2 && results2.length > 0) {
                results2.slice(alreadyStoredThisValue ? 1 : 0).forEach((r) => out.push(r));
              }
            }
            return out;
          } else {
            if (fn2(x2)) {
              return [x2];
            }
          }
          return null;
        }
        function safeFn(v) {
          try {
            return fn(v);
          } catch (e) {
            return false;
          }
        }
        const results = helper(x, safeFn);
        if (results && results.length > 0) {
          return results;
        } else {
          return null;
        }
      }
      module.exports = findAll;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/float.js
  var require_float = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/float.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function float(x) {
        try {
          const out = JSON.parse(x);
          if (isNumber(out))
            return out;
          return NaN;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(float);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/int.js
  var require_int = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/int.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function int(x) {
        try {
          const out = JSON.parse(x);
          if (isNumber(out))
            return parseInt(out);
          return NaN;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(int);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/get-value-at.js
  var require_get_value_at = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/get-value-at.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var shape = require_shape();
      var int = require_int();
      function getValueAt(x, index) {
        assert2(
          !isUndefined(x),
          "You must pass an array and an index into the `getValueAt` function!"
        );
        assert2(
          isArray(x),
          "You must pass an array and an index into the `getValueAt` function!"
        );
        assert2(
          isNumber(index) || isArray(index),
          "The index passed into the `getValueAt` function must be a positive integer or a one-dimensional array of positive integers!"
        );
        if (isArray(index)) {
          assert2(
            shape(index).length === 1,
            "The index passed into the `getValueAt` function must be a positive integer or a one-dimensional array of positive integers!"
          );
          index.forEach((value2) => {
            assert2(
              isNumber(value2) && int(value2) === value2,
              "The index passed into the `getValueAt` function must be a positive integer or a one-dimensional array of positive integers!"
            );
          });
          assert2(
            index.length <= shape(x).length,
            "The index passed into the `getValueAt` function has too many dimensions!"
          );
        }
        if (isNumber(index)) {
          assert2(index < x.length, `The index ${index} is out of bounds!`);
          return x[index];
        } else {
          if (index.length > 1) {
            assert2(index[0] < x.length, `The index ${index[0]} is out of bounds!`);
            return getValueAt(x[index[0]], index.slice(1));
          } else {
            return getValueAt(x, index[0]);
          }
        }
      }
      module.exports = getValueAt;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/zeros.js
  var require_zeros = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/zeros.js"(exports, module) {
      var ndarray = require_ndarray();
      var apply = require_apply();
      var isNumber = require_is_number();
      var reshape = require_reshape();
      function zeros(shape) {
        if (isNumber(shape))
          shape = [shape];
        const out = [];
        let n = 1;
        shape.forEach((v) => n *= v);
        for (let i = 0; i < n; i++)
          out.push(0);
        return reshape(out, shape);
      }
      module.exports = zeros;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/identity.js
  var require_identity = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/identity.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isNumber = require_is_number();
      var zeros = require_zeros();
      function identity(size) {
        assert2(
          !isUndefined(size),
          "You must pass an integer greater than 0 (representing the size) into the `identity` function!"
        );
        assert2(
          isNumber(size),
          "You must pass an integer greater than 0 (representing the size) into the `identity` function!"
        );
        assert2(
          parseInt(size) === size,
          "You must pass an integer greater than 0 (representing the size) into the `identity` function!"
        );
        assert2(
          size > 0,
          "You must pass an integer greater than 0 (representing the size) into the `identity` function!"
        );
        const out = zeros([size, size]);
        for (let i = 0; i < size; i++)
          out[i][i] = 1;
        return out;
      }
      module.exports = identity;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/indexes-of.js
  var require_indexes_of = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/indexes-of.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isFunction = require_is_function();
      var isObject = require_is_object();
      function indexesOf(x, fn) {
        assert2(
          isObject(x) || isArray(x),
          "You must pass (1) an object or array and (2) a function or value into the `indexesOf` function!"
        );
        if (!isFunction(fn)) {
          const value2 = fn;
          fn = (v) => v === value2;
        }
        function helper(x2, fn2, checked) {
          checked = checked || [];
          if (checked.indexOf(x2) > -1) {
            return null;
          }
          if (isObject(x2)) {
            checked.push(x2);
            const keys = Object.keys(x2);
            const paths2 = [];
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              const value2 = x2[key];
              if (fn2(value2)) {
                paths2.push([key]);
              }
              const results = helper(value2, fn2, checked);
              if (results && results.length > 0) {
                results.forEach((result) => paths2.push([key].concat(result)));
              }
            }
            return paths2;
          } else if (isArray(x2)) {
            checked.push(x2);
            const paths2 = [];
            for (let i = 0; i < x2.length; i++) {
              const value2 = x2[i];
              if (fn2(value2)) {
                paths2.push([i]);
              }
              const results = helper(value2, fn2, checked);
              if (results && results.length > 0) {
                results.forEach((result) => paths2.push([i].concat(result)));
              }
            }
            return paths2;
          } else {
            if (fn2(x2)) {
              return [];
            }
          }
          return null;
        }
        function safeFn(v) {
          try {
            return fn(v);
          } catch (e) {
            return false;
          }
        }
        const paths = helper(x, safeFn);
        if (paths && paths.length > 0) {
          return paths;
        } else {
          return null;
        }
      }
      module.exports = indexesOf;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/union.js
  var require_union = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/union.js"(exports, module) {
      var assert2 = require_assert();
      var set = require_set();
      function union() {
        return set([...arguments]);
      }
      module.exports = union;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/intersect.js
  var require_intersect = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/intersect.js"(exports, module) {
      var isArray = require_is_array();
      var flatten = require_flatten();
      var union = require_union();
      function intersect() {
        const arrays = Object.values(arguments).map((v) => {
          if (isArray(v))
            return flatten(v);
          return [v];
        });
        const out = [];
        const allValues = union(arrays);
        allValues.forEach((value2) => {
          for (let i = 0; i < arrays.length; i++) {
            if (arrays[i].indexOf(value2) < 0) {
              return;
            }
          }
          out.push(value2);
        });
        return out;
      }
      module.exports = intersect;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/slice.js
  var require_slice = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/slice.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isNumber = require_is_number();
      var isArray = require_is_array();
      var range = require_range();
      var flatten = require_flatten();
      var shape = require_shape();
      var floor = require_floor();
      function slice(arr, indices) {
        assert2(!isUndefined(arr), "You must pass an array into the `slice` function!");
        assert2(isArray(arr), "You must pass an array into the `slice` function!");
        if (isUndefined(indices))
          return arr.slice();
        assert2(
          isArray(indices),
          "The indices passed into the `slice` function must be a one-dimensional array of integers or null values."
        );
        flatten(indices).forEach((idx2) => {
          assert2(
            isUndefined(idx2) || isNumber(idx2) && floor(idx2) === idx2,
            "The indices passed into the `slice` function must be a one-dimensional array of integers or null values."
          );
        });
        let idx = indices[0];
        if (isUndefined(idx))
          idx = range(0, arr.length);
        if (isNumber(idx))
          idx = [idx];
        const out = [];
        idx.forEach((i) => {
          assert2(i < arr.length, "Index out of bounds in the `slice` function!");
          if (i < 0)
            i += arr.length;
          const item = arr[i];
          if (isArray(item)) {
            out.push(slice(arr[i], indices.slice(1, indices.length)));
          } else {
            out.push(arr[i]);
          }
        });
        return out;
      }
      module.exports = slice;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/inverse.js
  var require_inverse = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/inverse.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var flatten = require_flatten();
      var shape = require_shape();
      var slice = require_slice();
      var dot = require_dot();
      var add = require_add();
      var scale = require_scale();
      var append = require_append();
      var range = require_range();
      function inverse(x) {
        assert2(
          !isUndefined(x),
          "You must pass a square 2D array into the `inverse` function!"
        );
        assert2(
          isArray(x),
          "You must pass a square 2D array into the `inverse` function!"
        );
        flatten(x).forEach(
          (v) => assert2(
            isNumber(v),
            "The array passed into the `inverse` function must contain only numbers!"
          )
        );
        const xShape = shape(x);
        assert2(
          xShape.length === 2,
          "The array passed into the `inverse` function must be exactly two-dimensional and square!"
        );
        assert2(
          xShape[0] === xShape[1],
          "The array passed into the `inverse` function must be exactly two-dimensional and square!"
        );
        assert2(
          xShape[0] >= 0,
          "The array passed into the `inverse` function must be exactly two-dimensional and square!"
        );
        if (xShape[0] === 0) {
          return x;
        } else if (xShape[0] === 1) {
          assert2(x[0][0] !== 0, "This matrix cannot be inverted!");
          return 1 / x[0][0];
        } else if (xShape[0] === 2) {
          const a = x[0][0];
          const b = x[0][1];
          const c = x[1][0];
          const d = x[1][1];
          const det = a * d - b * c;
          assert2(det !== 0, "This matrix cannot be inverted!");
          const out = [
            [d, -b],
            [-c, a]
          ];
          return scale(out, 1 / det);
        } else if (xShape[0] > 1) {
          const times = (a, b) => isNumber(a) || isNumber(b) ? scale(a, b) : dot(a, b);
          for (let divider = 1; divider < xShape[0] - 1; divider++) {
            try {
              const A = slice(x, [range(0, divider), range(0, divider)]);
              const B = slice(x, [range(0, divider), range(divider, xShape[0])]);
              const C = slice(x, [range(divider, xShape[0]), range(0, divider)]);
              const D = slice(x, [
                range(divider, xShape[0]),
                range(divider, xShape[0])
              ]);
              const AInv = inverse(A);
              const CompInv = inverse(add(D, times(-1, times(times(C, AInv), B))));
              const topLeft = add(
                AInv,
                times(times(times(times(AInv, B), CompInv), C), AInv)
              );
              const topRight = times(-1, times(times(AInv, B), CompInv));
              const bottomLeft = times(-1, times(times(CompInv, C), AInv));
              const bottomRight = CompInv;
              const out = append(
                append(topLeft, topRight, 1),
                append(bottomLeft, bottomRight, 1),
                0
              );
              return out;
            } catch (e) {
            }
          }
          assert2(false, "This matrix cannot be inverted!");
        }
      }
      module.exports = inverse;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/lerp.js
  var require_lerp = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/lerp.js"(exports, module) {
      var vectorize = require_vectorize();
      var isNumber = require_is_number();
      function lerp(a, b, f) {
        try {
          if (!isNumber(a))
            return NaN;
          if (!isNumber(b))
            return NaN;
          if (!isNumber(f))
            return NaN;
          return f * (b - a) + a;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(lerp);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/log.js
  var require_log = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/log.js"(exports, module) {
      var isNumber = require_is_number();
      var isUndefined = require_is_undefined();
      var vectorize = require_vectorize();
      function log(x, base) {
        try {
          base = isUndefined(base) ? Math.E : base;
          if (!isNumber(x))
            return NaN;
          if (!isNumber(base))
            return NaN;
          return Math.log(x) / Math.log(base);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(log);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/map.js
  var require_map = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/map.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function map(x, a, b, c, d) {
        try {
          if (!isNumber(x))
            return NaN;
          if (!isNumber(a))
            return NaN;
          if (!isNumber(b))
            return NaN;
          if (!isNumber(c))
            return NaN;
          if (!isNumber(d))
            return NaN;
          return (d - c) * (x - a) / (b - a) + c;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(map);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/median.js
  var require_median = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/median.js"(exports, module) {
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var flatten = require_flatten();
      var sort = require_sort();
      var dropNaN = require_drop_nan();
      function median(arr) {
        try {
          let flattenedArr = flatten(arr);
          let temp = dropNaN(flattenedArr);
          if (temp.length === 0)
            return NaN;
          if (temp.length < flattenedArr.length)
            return NaN;
          temp = sort(temp);
          let out;
          if (temp.length % 2 === 0) {
            out = (temp[temp.length / 2 - 1] + temp[temp.length / 2]) / 2;
          } else {
            out = temp[Math.floor(temp.length / 2)];
          }
          return out;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = median;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/mode.js
  var require_mode = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/mode.js"(exports, module) {
      var flatten = require_flatten();
      var count = require_count();
      var set = require_set();
      var sort = require_sort();
      function mode(arr) {
        try {
          if (arr.length === 0)
            return NaN;
          const temp = flatten(arr);
          if (temp.length === 0)
            return NaN;
          const counts = {};
          const tempSet = set(temp);
          tempSet.forEach((item) => {
            counts[item] = count(temp, item);
          });
          const sortedTempSet = sort(tempSet, (a, b) => counts[b] - counts[a]);
          const mostCountedItem = sortedTempSet[0];
          const out = sort(
            sortedTempSet.filter((item) => counts[item] === counts[mostCountedItem])
          );
          if (out.length === 1)
            return out[0];
          return out;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = mode;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/normal.js
  var require_normal = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/normal.js"(exports, module) {
      var isUndefined = require_is_undefined();
      var ndarray = require_ndarray();
      var apply = require_apply();
      var { random } = require_random();
      var reshape = require_reshape();
      var isNumber = require_is_number();
      function helper() {
        const u1 = random();
        const u2 = random();
        return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
      }
      function normal(shape) {
        if (isUndefined(shape))
          return helper();
        if (isNumber(shape))
          shape = [shape];
        const out = [];
        let n = 1;
        shape.forEach((v) => n *= v);
        for (let i = 0; i < n; i++)
          out.push(helper());
        return reshape(out, shape);
      }
      module.exports = normal;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/ones.js
  var require_ones = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/ones.js"(exports, module) {
      var ndarray = require_ndarray();
      var apply = require_apply();
      var reshape = require_reshape();
      var isNumber = require_is_number();
      function ones(shape) {
        if (isNumber(shape))
          shape = [shape];
        const out = [];
        let n = 1;
        shape.forEach((v) => n *= v);
        for (let i = 0; i < n; i++)
          out.push(1);
        return reshape(out, shape);
      }
      module.exports = ones;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/permute.js
  var require_permute = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/permute.js"(exports, module) {
      var isArray = require_is_array();
      var isNumber = require_is_number();
      var assert2 = require_assert();
      var isUndefined = require_is_undefined();
      function permute(arr, r) {
        assert2(isArray(arr), "The `permute` function only works on arrays!");
        if (isUndefined(r))
          r = arr.length;
        assert2(isNumber(r), "`r` must be a whole number!");
        if (r > arr.length) {
          return permute(arr);
        }
        if (r <= 0) {
          return [[]];
        }
        assert2(r === parseInt(r), "`r` must be a whole number!");
        if (arr.length < 2)
          return arr;
        const out = [];
        arr.forEach((item, i) => {
          assert2(
            !isArray(item),
            "It is not recommended to permute arrays of arrays. Weird things happen, and I haven't figured out how to account for such a scenario yet. A possible workaround is: convert each sub-array to a string (using `JSON.stringify`), get the permutations using the array of strings, and then convert each string in each combination back to a sub-array (using `JSON.parse`)."
          );
          const before = arr.slice(0, i);
          const after = arr.slice(i + 1);
          const others = before.concat(after);
          const children = permute(others, r - 1);
          children.forEach((child) => {
            out.push([item].concat(child));
          });
        });
        return out;
      }
      module.exports = permute;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/print.js
  var require_print = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/print.js"(exports, module) {
      var isArray = require_is_array();
      var shape = require_shape();
      var { DataFrame, Series } = require_dataframe();
      function print() {
        Object.keys(arguments).forEach((key) => {
          let x = arguments[key];
          if (isArray(x)) {
            let xShape = shape(x);
            if (xShape.length === 1) {
              new Series(x).print();
            } else if (xShape.length == 2) {
              new DataFrame(x).print();
            } else {
              console.log(x);
            }
          } else if (x instanceof DataFrame || x instanceof Series) {
            x.print();
          } else {
            console.log(x);
          }
        });
      }
      module.exports = print;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/round.js
  var require_round = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/round.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function round(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.round(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(round);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/set-value-at.js
  var require_set_value_at = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/set-value-at.js"(exports, module) {
      var assert2 = require_assert();
      var isNumber = require_is_number();
      var isArray = require_is_array();
      var copy = require_copy();
      function setValueAt(x, index, value2) {
        assert2(
          isArray(x),
          "The first argument passed into the `setValueAt` function must be an array!"
        );
        if (isNumber(index))
          index = [index];
        assert2(
          isArray(index),
          "The second argument passed into the `setValueAt` function must be an integer or an array of integers!"
        );
        let out = copy(x);
        let temp = out;
        for (let i = 0; i < index.length - 1; i++) {
          temp = temp[index[i]];
        }
        temp[index[index.length - 1]] = value2;
        return out;
      }
      module.exports = setValueAt;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/sign.js
  var require_sign = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/sign.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function sign(x) {
        try {
          if (!isNumber(x))
            return NaN;
          if (x < 0)
            return -1;
          if (x > 0)
            return 1;
          return 0;
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(sign);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/sin.js
  var require_sin = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/sin.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function sin(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.sin(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(sin);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/stdev.js
  var require_stdev = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/stdev.js"(exports, module) {
      var std = require_std();
      function stdev(x) {
        return std(x);
      }
      module.exports = stdev;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/tan.js
  var require_tan = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/tan.js"(exports, module) {
      var isNumber = require_is_number();
      var vectorize = require_vectorize();
      function tan(x) {
        try {
          if (!isNumber(x))
            return NaN;
          return Math.tan(x);
        } catch (e) {
          return NaN;
        }
      }
      module.exports = vectorize(tan);
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/time.js
  var require_time = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/time.js"(exports, module) {
      var isFunction = require_is_function();
      function timeSync(fn, args) {
        assert(isFunction(fn), "`fn` must be a function!");
        const start = new Date();
        if (args) {
          fn(...args);
        } else {
          fn();
        }
        return new Date() - start;
      }
      async function timeAsync(fn, args) {
        assert(isFunction(fn), "`fn` must be a function!");
        const start = new Date();
        if (args) {
          await fn(...args);
        } else {
          await fn();
        }
        return new Date() - start;
      }
      module.exports = { timeSync, timeAsync };
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/where.js
  var require_where = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/where.js"(exports, module) {
      var assert2 = require_assert();
      var isArray = require_is_array();
      var isFunction = require_is_function();
      var apply = require_apply();
      var indexOf = require_index_of();
      var setValueAt = require_set_value_at();
      var flatten = require_flatten();
      function where(x, fn) {
        assert2(
          isArray(x),
          "The first argument passed into the `where` function must be an array!"
        );
        assert2(
          isFunction(fn),
          "The second argument passed into the `where` function must be a function!"
        );
        const n = flatten(x).length;
        let temp = apply(x, fn);
        const out = [];
        let count = 0;
        let isDone = false;
        while (!isDone) {
          const idx = indexOf(temp, true);
          if (idx) {
            out[count] = idx;
            temp = setValueAt(temp, idx, null);
            count++;
          } else {
            isDone = true;
          }
        }
        if (count === 0)
          return null;
        return out;
      }
      module.exports = where;
    }
  });

  // node_modules/@jrc03c/js-math-tools/src/index.js
  var require_src = __commonJS({
    "node_modules/@jrc03c/js-math-tools/src/index.js"(exports, module) {
      var { DataFrame, Series } = require_dataframe();
      var out = {
        abs: require_abs(),
        add: require_add(),
        append: require_append(),
        apply: require_apply(),
        arccos: require_arccos(),
        arcsin: require_arcsin(),
        arctan: require_arctan(),
        argmax: require_argmax(),
        argmin: require_argmin(),
        assert: require_assert(),
        ceil: require_ceil(),
        chop: require_chop(),
        clamp: require_clamp(),
        cohensd: require_cohens_d(),
        combine: require_combine(),
        copy: require_copy(),
        correl: require_correl(),
        cos: require_cos(),
        count: require_count(),
        covariance: require_covariance(),
        DataFrame,
        diff: require_diff(),
        distance: require_distance(),
        divide: require_divide(),
        dot: require_dot(),
        dropMissing: require_drop_missing(),
        dropMissingPairwise: require_drop_missing_pairwise(),
        dropNaN: require_drop_nan(),
        dropNaNPairwise: require_drop_nan_pairwise(),
        exp: require_exp(),
        factorial: require_factorial(),
        find: require_find(),
        findAll: require_find_all(),
        flatten: require_flatten(),
        float: require_float(),
        floor: require_floor(),
        getValueAt: require_get_value_at(),
        identity: require_identity(),
        indexOf: require_index_of(),
        indexesOf: require_indexes_of(),
        int: require_int(),
        intersect: require_intersect(),
        inverse: require_inverse(),
        isArray: require_is_array(),
        isBoolean: require_is_boolean(),
        isEqual: require_is_equal(),
        isFunction: require_is_function(),
        isNumber: require_is_number(),
        isObject: require_is_object(),
        isString: require_is_string(),
        isUndefined: require_is_undefined(),
        lerp: require_lerp(),
        log: require_log(),
        map: require_map(),
        MathError: require_math_error(),
        max: require_max(),
        mean: require_mean(),
        median: require_median(),
        min: require_min(),
        mode: require_mode(),
        multiply: require_multiply(),
        ndarray: require_ndarray(),
        normal: require_normal(),
        ones: require_ones(),
        permute: require_permute(),
        pow: require_pow(),
        print: require_print(),
        random: require_random().random,
        range: require_range(),
        reshape: require_reshape(),
        reverse: require_reverse(),
        round: require_round(),
        scale: require_scale(),
        seed: require_random().seed,
        Series,
        set: require_set(),
        setValueAt: require_set_value_at(),
        shape: require_shape(),
        shuffle: require_shuffle(),
        sign: require_sign(),
        sin: require_sin(),
        slice: require_slice(),
        sort: require_sort(),
        sqrt: require_sqrt(),
        std: require_std(),
        stdev: require_stdev(),
        subtract: require_subtract(),
        sum: require_sum(),
        tan: require_tan(),
        time: require_time().timeSync,
        timeSync: require_time().timeSync,
        timeAsync: require_time().timeAsync,
        transpose: require_transpose(),
        union: require_union(),
        variance: require_variance(),
        vectorize: require_vectorize(),
        where: require_where(),
        zeros: require_zeros(),
        dump: function() {
          Object.keys(out).forEach((key) => {
            try {
              global[key] = out[key];
            } catch (e) {
              try {
                window[key] = out[key];
              } catch (e2) {
              }
            }
          });
        }
      };
      if (typeof module !== "undefined") {
        module.exports = out;
      }
      if (typeof window !== "undefined") {
        window.JSMathTools = out;
      }
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/stringify.js
  var require_stringify = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/stringify.js"(exports, module) {
      var { copy } = require_src();
      function stringify(x, replacer, space) {
        return JSON.stringify(copy(x), replacer, space);
      }
      module.exports = stringify;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/unindent.js
  var require_unindent = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/unindent.js"(exports, module) {
      function unindent(text) {
        const lines = text.split("\n");
        const indentations = lines.filter((line) => line.trim().length > 0).map((line) => line.split("").findIndex((char) => !char.match(/\s/g)));
        const minIndentation = Math.min(...indentations);
        return lines.map((line) => line.substring(minIndentation)).join("\n");
      }
      module.exports = unindent;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/wrap.js
  var require_wrap = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/wrap.js"(exports, module) {
      function wrap(raw, maxLineLength, hangingIndentPrefix) {
        if (typeof raw !== "string") {
          throw new Error(
            "The first argument to the `wrap` function must be a string!"
          );
        }
        if (typeof maxLineLength === "undefined" || maxLineLength === null) {
          if (typeof process !== "undefined" && typeof process.stdout !== "undefined" && typeof process.stdout.columns === "number") {
            maxLineLength = process.stdout.columns > 80 ? 80 : process.stdout.columns;
          } else {
            maxLineLength = 80;
          }
        }
        if (isNaN(maxLineLength) || typeof maxLineLength !== "number") {
          throw new Error(
            "The second argument to the `wrap` function must be undefined, null, or an integer!"
          );
        }
        if (typeof hangingIndentPrefix === "undefined") {
          hangingIndentPrefix = "";
        }
        if (typeof hangingIndentPrefix !== "string") {
          throw new Error(
            "The third argument to the `wrap` function must be undefined, null, or a string!"
          );
        }
        const out = [];
        raw.split("\n").forEach((line) => {
          if (line.trim().length === 0) {
            return out.push("");
          }
          const indentation = line.split(/[^\s]/g)[0];
          const words = line.replace(indentation, "").split(" ");
          let temp = indentation;
          let hasWrappedAtLeastOnce = false;
          words.forEach((word) => {
            const newLine = temp + (temp.trim().length > 0 ? " " : "") + word;
            if (newLine.length > maxLineLength) {
              out.push(temp);
              temp = indentation + hangingIndentPrefix + word;
              hasWrappedAtLeastOnce = true;
            } else {
              temp = newLine;
            }
          });
          if (temp.length > 0) {
            out.push(temp);
          }
        });
        return out.join("\n");
      }
      module.exports = wrap;
    }
  });

  // node_modules/@jrc03c/js-text-tools/src/index.js
  var require_src2 = __commonJS({
    "node_modules/@jrc03c/js-text-tools/src/index.js"(exports, module) {
      var out = {
        camelify: require_camelify(),
        indent: require_indent(),
        kebabify: require_kebabify(),
        snakeify: require_snakeify(),
        stringify: require_stringify(),
        unindent: require_unindent(),
        wrap: require_wrap(),
        dump() {
          Object.keys(out).forEach((key) => {
            if (typeof global !== "undefined") {
              global[key] = out[key];
            }
            if (typeof window !== "undefined") {
              window[key] = out[key];
            }
          });
        }
      };
      if (typeof module !== "undefined") {
        module.exports = out;
      }
      if (typeof window !== "undefined") {
        window.JSTextTools = out;
      }
    }
  });

  // node_modules/@jrc03c/make-key/index.js
  var require_make_key = __commonJS({
    "node_modules/@jrc03c/make-key/index.js"(exports, module) {
      var { assert: assert2, isNumber, int, seed, random } = require_src();
      function makeKey(keyLength, keySeed) {
        assert2(
          isNumber(keyLength) && int(keyLength) === keyLength,
          "`keyLength` must be an integer!"
        );
        if (keySeed) {
          assert2(
            isNumber(keySeed) && int(keySeed) === keySeed,
            "`keySeed` must be an integer!"
          );
          seed(keySeed);
        }
        let out = "";
        let alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
        for (let i = 0; i < keyLength; i++) {
          out += alpha[int(random() * alpha.length)];
        }
        return out;
      }
      if (typeof module !== "undefined") {
        module.exports = makeKey;
      }
    }
  });

  // src/index.js
  var require_src3 = __commonJS({
    "src/index.js"(exports, module) {
      var { stringify } = require_src2();
      var makeKey = require_make_key();
      var SubscriptionService = class {
        constructor() {
          const self = this;
          self.subscriptions = {};
        }
        on(path, callback) {
          const self = this;
          if (!self.subscriptions[path])
            self.subscriptions[path] = [];
          self.subscriptions[path].push(callback);
          return self;
        }
        off(path, callback) {
          const self = this;
          self.subscriptions[path].splice(
            self.subscriptions[path].indexOf(callback),
            1
          );
          return self;
        }
        run(path, payload) {
          const self = this;
          const callbacks = self.subscriptions[path];
          if (callbacks)
            callbacks.forEach((cb) => cb(payload));
          return self;
        }
      };
      var Drone = class extends SubscriptionService {
        constructor() {
          super();
          const self = this;
          onmessage = (event) => self.run(event.data.path, event.data.payload, event.data.cbid);
        }
        run(path, payload, cbid) {
          const self = this;
          const request = {
            data: payload
          };
          const response = {
            send: function(result) {
              try {
                result = JSON.parse(stringify(result));
              } catch (e) {
              }
              postMessage({
                path: cbid,
                payload: result
              });
            }
          };
          const callbacks = self.subscriptions[path];
          if (callbacks)
            callbacks.forEach((cb) => cb(request, response));
          else
            response.send(null);
          return self;
        }
      };
      var Queen = class extends SubscriptionService {
        constructor(filename, n) {
          super();
          const self = this;
          self.hive = [];
          if (filename) {
            self.addDrones(filename, n || 1);
          }
        }
        addDrone(filename) {
          const self = this;
          const drone = new Worker(filename);
          drone.onmessage = (event) => super.run(event.data.path, event.data.payload);
          self.hive.push(drone);
          return drone;
        }
        addDrones(filename, n) {
          const self = this;
          for (let i = 0; i < n; i++)
            self.addDrone(filename);
          return self;
        }
        removeDrone(drone) {
          const self = this;
          self.hive = self.hive.filter((other) => other !== drone);
          drone.terminate();
          return self;
        }
        removeDrones(drones) {
          const self = this;
          drones.forEach((drone) => self.removeDrone(drone));
          return self;
        }
        run(path, payload) {
          const self = this;
          if (self.hive.length === 0) {
            console.warn(
              "The queen issued a command, but there are no drones in the hive! Use the queen's `addDrone` method to add a drone to the hive! (https://github.com/jrc03c/bee.js)"
            );
            return null;
          }
          return new Promise((resolve, reject) => {
            try {
              try {
                payload = JSON.parse(stringify(payload));
              } catch (e) {
              }
              const results = new Array(self.hive.length);
              const promises = self.hive.map(function(drone, i) {
                return new Promise(function(innerResolve, innerReject) {
                  try {
                    const cbid = makeKey(32);
                    self.on(cbid, (result) => {
                      self.off(cbid, this);
                      results[i] = result;
                      innerResolve();
                    });
                    drone.postMessage({ path, payload, cbid });
                  } catch (e) {
                    innerReject(e);
                  }
                });
              });
              Promise.all(promises).then(() => {
                if (self.hive.length === 1)
                  resolve(results[0]);
                else
                  resolve(results);
              });
            } catch (e) {
              reject(e);
            }
          });
        }
        command(path, payload) {
          const self = this;
          return self.run(path, payload);
        }
        kill() {
          const self = this;
          self.stop();
          self.removeDrones(self.hive);
          return null;
        }
        stop() {
          const self = this;
          self.hive.forEach((drone) => drone.terminate());
          return self;
        }
        terminate() {
          const self = this;
          return self.stop();
        }
      };
      var Bee = { Drone, Queen };
      if (typeof module !== "undefined") {
        module.exports = Bee;
      }
      if (typeof globalThis !== "undefined") {
        globalThis.Bee = Bee;
      }
    }
  });
  require_src3();
})();
