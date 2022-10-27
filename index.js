function setTimeoutPromise(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds);
  });
}

console.log('Start');

setTimeoutPromise(1000)
  .then(function () {
    console.log(`1 sec has passed`);
    return setTimeoutPromise(1000);
  })
  .then(function () {
    console.log(`2 sec has passed`);
  });

console.log(`End`);
