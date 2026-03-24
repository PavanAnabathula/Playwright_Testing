function retries (name, retryCount = 3, delay = 1000) {
  return `Retrying ${name},upto ${retryCount} times,${delay}ms apart`
}

console.log(retries('Login'));
console.log(retries('Checkout', 5));
console.log(retries('API', 2, 5000));
