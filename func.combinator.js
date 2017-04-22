'use strict';

const t = require('tcomb');

// Signature
// (domain: Array<TcombType>, codomain: TcombType, name?: string) => TcombType

const SumType = t.func([t.Number, t.Number], t.Number);

// of() returns a type-checked version of its argument
const sum = SumType.of((a, b) => a + b);

// Comment calls to check the next one
sum('1', 2); // TypeError: [tcomb] Invalid value "1" supplied to arguments of function (Number, Number) => Number/0: Number
// Notice how "Number/1" indicates parameter position
sum(1, 's'); // TypeError: [tcomb] Invalid value "s" supplied to arguments of function (Number, Number) => Number/1: Number

// Also you this checks output
const sum2 = SumType.of((a, b) => 'jota');

sum2(1, 1);

const FunkyType = t.func([t.Number, t.Number], t.String);
// same definition as sum2, but using FunkyType doesn't throw, cause it's defined output is String
const funkySum = FunkyType.of((a, b) => 'jota');

funkySum(1, 1);
