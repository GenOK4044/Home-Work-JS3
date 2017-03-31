var base = +prompt ('enter base'); // число возводимое в степень
var exponent = +prompt ('enter exponent');  //степень возвдения числа


function pow(a, b) {
	var result = 1;

	for (var i = 0; i < b; i++) {
		result = result * a;
	}

	return result;
}

var PawResult = pow(base, exponent);

alert (PawResult);