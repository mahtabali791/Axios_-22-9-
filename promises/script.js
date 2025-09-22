function promiseExample() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Promise resolved after 2 seconds!');
        }, 2000);
    });
    document.getElementById('promise-result').innerText = 'Waiting...';
    promise.then(function(result) {
        document.getElementById('promise-result').innerText = result;
    });
}
