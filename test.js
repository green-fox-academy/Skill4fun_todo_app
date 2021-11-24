
var result = 0;

for (var i = 3; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}
console.log(result);