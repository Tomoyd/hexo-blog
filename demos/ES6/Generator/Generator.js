/*
*yield 表达式 每次执行遇到yield暂停执行yield后面的语句
* 每次通过next执行yield后的语句
* */
function* helloWorldGenerator() {
    yield "hello";
    yield "world";
    return "ending";
}
var hwg=helloWorldGenerator();
console.log(hwg)
console.log(hwg.next())
console.log(hwg.next())
console.log(hwg.next())
parseInt()
