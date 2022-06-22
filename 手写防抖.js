// 设置定时器

// 设置一个闭包，返回一个方法

// 如果反复进来，清空前面的定时器，再重新设置一遍

function debounce(fn) {
    let timer = null;
    return function() {
      clearTimeout(timer);
   
      timer = setTimeout(() => {
        fn.call(this.arguments);
      }, 1000);
    }
  }