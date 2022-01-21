function doSomething() {
    doSomethingB();
    // try {
    // } catch(error) {
    //     console.log(error.message);
    // }
}

function doSomethingB() {
    doSomethingC();
}

function doSomethingC() {
    throw new TypeError('testError');
}

doSomething();