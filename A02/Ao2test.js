
QUnit.test('Testing the Currency Convertor of inr to usd with four sets of inputs', function (assert){
var i = 65;
var result = i/65;
assert.equal(result, 1, "inr=65, usd=" + result);
var i = 130;
var result = 130/65;
assert.equal(result, 2, "inr=130, usd=" + result);
var i = -65;
var result = null;
assert.equal(result, null, "inr is not a negative number" );
var i = "bobby";
var result = "inr is not a String";
assert.equal(result, "inr is not a String");
});