const randomHexColor = () => {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
  );
};

// setTimeout(function () {
//   console.time();
//   const body = document.body;
//   for (let i = 0; i < 10000; i++) {
//     let el = document.createElement('div');
//     el.innerText = i;
//     body.appendChild(el);
//     el.style.cssText = `background:${randomHexColor()};height:40px`;
//   }
//   console.timeEnd();
//   //   alert(1);
// }, 1000);

setTimeout(function () {
  const body = document.body;
  function loop(n) {
    var k = 0;
    for (var i = 0; i < 100; i++) {
      //   k += new Date() - 0;
      var el = document.createElement('div');
      el.innerHTML = i;
      body.appendChild(el);
      el.style.cssText = `background:${randomHexColor()};height:40px`;
    }
    if (n) {
      setTimeout(function () {
        loop(n - 1);
      }, 40);
    }
  }
  loop(10);
}, 1000);
