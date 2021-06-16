export const CheckNet = () => {
    var val = window && window.navigator && window.navigator.onLine;
    return val;
  };
