// 设置一个标记

// 设置一个闭包，返回一个方法

// 如果重复进去的时候，标记已经动了，那就组织程序进一步运行

// 如果定时器执行完了，设置这个标记为没动，允许下一次执行



function throttle(fn) {
    let timer = true;
    return function() {
      if (!timer) {
        return;
      }
      timer = false;
      setTimeout(() => {
        fn.call(this, arguments);
        timer = true;
      }, 1000);
    }
  }