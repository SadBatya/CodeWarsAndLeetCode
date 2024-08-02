// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments


function cache(func) {
  const cachedResults = {};
  return (...args) => {
    const key = JSON.stringify(args);

    if (!(key in cachedResults)) {
      const result = func.apply(null, args);
      cachedResults[key] = result;
    }

    return cachedResults[key];
  };
}