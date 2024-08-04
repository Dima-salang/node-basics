function sum(a, b) {
    console.log(a + b);
}

const ages = [1, 2, 3, 4];

// we can export it as an object
// module.exports.sum = sum;

// or we can just export a single function
module.exports = sum; 

module.exports = {
    ages : ages,
    sum : sum
}