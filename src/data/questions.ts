export interface Question {
  id: number;
  title: string;
  code: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const questions: Question[] = [
  {
    id: 1,
    title: "![] + []",
    code: `console.log(![] + []);`,
    options: ["true", "false", '"false"', "undefined"],
    correctAnswer: 2,
    explanation: `![] 首先被转换为 false（空数组是 truthy，取反为 false）
然后 false + [] 进行字符串拼接：
• false 转为字符串 "false"
• [] 转为字符串 ""
• 结果："false" + "" = "false"`,
    category: "基础运算",
    difficulty: 'easy'
  },
  {
    id: 2,
    title: "[] + {}",
    code: `console.log([] + {});`,
    options: ['"[object Object]"', '"{}"', '"[]"', "0"],
    correctAnswer: 0,
    explanation: `[] + {} 进行字符串拼接：
• [] 转为字符串 ""
• {} 转为字符串 "[object Object]"
• 结果："" + "[object Object]" = "[object Object]"`,
    category: "基础运算",
    difficulty: 'easy'
  },
  {
    id: 3,
    title: "{} + []",
    code: `console.log({} + []);`,
    options: ['"[object Object]"', "0", '"0"', "NaN"],
    correctAnswer: 0,
    explanation: `{} + [] 进行字符串拼接：
• {} 转为字符串 "[object Object]"
• [] 转为字符串 ""
• 结果："[object Object]" + "" = "[object Object]"`,
    category: "基础运算",
    difficulty: 'easy'
  },
  {
    id: 4,
    title: "!{} + []",
    code: `console.log(!{} + []);`,
    options: ['"false"', "false", "true", '"true"'],
    correctAnswer: 0,
    explanation: `!{} + [] 进行运算：
• !{} 转换为 false（对象是 truthy，取反为 false）
• false + [] 进行字符串拼接
• false 转为 "false"，[] 转为 ""
• 结果："false" + "" = "false"`,
    category: "基础运算",
    difficulty: 'easy'
  },
  {
    id: 5,
    title: "![] == 0",
    code: `console.log(![] == 0);`,
    options: ["true", "false", '"false"', "undefined"],
    correctAnswer: 0,
    explanation: `![] == 0 进行相等比较：
• ![] 转换为 false
• false == 0 比较时，false 转为数字 0
• 0 == 0 为 true`,
    category: "相等比较",
    difficulty: 'medium'
  },
  {
    id: 6,
    title: "[] == 0",
    code: `console.log([] == 0);`,
    options: ["true", "false", '"0"', "undefined"],
    correctAnswer: 0,
    explanation: `[] == 0 进行相等比较：
• [] 转换为原始值，先调用 valueOf() 返回自身，再调用 toString() 返回 ""
• "" == 0 比较时，"" 转为数字 0
• 0 == 0 为 true`,
    category: "相等比较",
    difficulty: 'medium'
  },
  {
    id: 7,
    title: "[1,2,3] == '1,2,3'",
    code: `console.log([1,2,3] == '1,2,3');`,
    options: ["true", "false", '"1,2,3"', "undefined"],
    correctAnswer: 0,
    explanation: `[1,2,3] == '1,2,3' 进行相等比较：
• [1,2,3] 转换为字符串时调用 toString()
• [1,2,3].toString() 返回 "1,2,3"
• "1,2,3" == "1,2,3" 为 true`,
    category: "数组转换",
    difficulty: 'medium'
  },
  {
    id: 8,
    title: "[1] == 1",
    code: `console.log([1] == 1);`,
    options: ["true", "false", '"1"', "undefined"],
    correctAnswer: 0,
    explanation: `[1] == 1 进行相等比较：
• [1] 转换为原始值时调用 toString() 返回 "1"
• "1" == 1 比较时，"1" 转为数字 1
• 1 == 1 为 true`,
    category: "数组转换",
    difficulty: 'medium'
  },
  {
    id: 9,
    title: "[1,2] == '1,2'",
    code: `console.log([1,2] == '1,2');`,
    options: ["true", "false", '"1,2"', "undefined"],
    correctAnswer: 0,
    explanation: `[1,2] == '1,2' 进行相等比较：
• [1,2] 转换为字符串时调用 toString()
• [1,2].toString() 返回 "1,2"
• "1,2" == "1,2" 为 true`,
    category: "数组转换",
    difficulty: 'medium'
  },
  {
    id: 10,
    title: "['1'] == 1",
    code: `console.log(['1'] == 1);`,
    options: ["true", "false", '"1"', "undefined"],
    correctAnswer: 0,
    explanation: `['1'] == 1 进行相等比较：
• ['1'] 转换为原始值时调用 toString() 返回 "1"
• "1" == 1 比较时，"1" 转为数字 1
• 1 == 1 为 true`,
    category: "数组转换",
    difficulty: 'medium'
  },
  {
    id: 11,
    title: "[true] == 1",
    code: `console.log([true] == 1);`,
    options: ["true", "false", '"true"', "undefined"],
    correctAnswer: 1,
    explanation: `[true] == 1 进行相等比较：
• [true] 转换为原始值时调用 toString() 返回 "true"
• "true" == 1 比较时，"true" 转为数字 NaN
• NaN == 1 为 false`,
    category: "数组转换",
    difficulty: 'medium'
  },
  {
    id: 12,
    title: "{}.valueOf()",
    code: `console.log({}.valueOf());`,
    options: ["{}", '"[object Object]"', "undefined", "null"],
    correctAnswer: 0,
    explanation: `{}.valueOf() 调用对象的 valueOf 方法：
• 普通对象的 valueOf() 方法返回对象本身
• 所以结果是 {}`,
    category: "对象转换",
    difficulty: 'medium'
  },
  {
    id: 13,
    title: "{}.toString()",
    code: `console.log({}.toString());`,
    options: ['"[object Object]"', '"{}"', '"Object"', "undefined"],
    correctAnswer: 0,
    explanation: `{}.toString() 调用对象的 toString 方法：
• 普通对象的 toString() 方法返回 "[object Object]"
• 这是默认的对象字符串表示`,
    category: "对象转换",
    difficulty: 'medium'
  },
  {
    id: 14,
    title: "[] + {} === '{}'",
    code: `console.log([] + {} === '{}');`,
    options: ["true", "false", '"[object Object]"', "undefined"],
    correctAnswer: 1,
    explanation: `[] + {} === '{}' 进行严格相等比较：
• [] + {} 结果是 "[object Object]"（字符串拼接）
• "[object Object]" === "{}" 为 false
• 因为两个字符串内容不同`,
    category: "对象转换",
    difficulty: 'medium'
  },
  {
    id: 15,
    title: "{} + [] === 0",
    code: `console.log({} + [] === 0);`,
    options: ["true", "false", '"[object Object]"', "undefined"],
    correctAnswer: 1,
    explanation: `{} + [] === 0 进行严格相等比较：
• {} + [] 结果是 "[object Object]"（字符串拼接）
• "[object Object]" === 0 为 false
• 因为字符串和数字类型不同`,
    category: "对象转换",
    difficulty: 'medium'
  },
  {
    id: 16,
    title: "[] && 0",
    code: `console.log([] && 0);`,
    options: ["0", "[]", "true", "false"],
    correctAnswer: 0,
    explanation: `[] && 0 逻辑与运算：
• [] 是 truthy 值
• 逻辑与运算符返回第二个操作数
• 结果是 0`,
    category: "逻辑运算",
    difficulty: 'medium'
  },
  {
    id: 17,
    title: "0 && []",
    code: `console.log(0 && []);`,
    options: ["0", "[]", "true", "false"],
    correctAnswer: 0,
    explanation: `0 && [] 逻辑与运算：
• 0 是 falsy 值
• 逻辑与运算符遇到 falsy 值直接返回该值
• 结果是 0`,
    category: "逻辑运算",
    difficulty: 'medium'
  },
  {
    id: 18,
    title: "[] || 0",
    code: `console.log([] || 0);`,
    options: ["0", "[]", "true", "false"],
    correctAnswer: 1,
    explanation: `[] || 0 逻辑或运算：
• [] 是 truthy 值
• 逻辑或运算符遇到 truthy 值直接返回该值
• 结果是 []`,
    category: "逻辑运算",
    difficulty: 'medium'
  },
  {
    id: 19,
    title: "0 || []",
    code: `console.log(0 || []);`,
    options: ["0", "[]", "true", "false"],
    correctAnswer: 1,
    explanation: `0 || [] 逻辑或运算：
• 0 是 falsy 值
• 逻辑或运算符遇到 falsy 值继续计算第二个操作数
• [] 是 truthy 值，返回 []`,
    category: "逻辑运算",
    difficulty: 'medium'
  },
  {
    id: 20,
    title: "[] == false",
    code: `console.log([] == false);`,
    options: ["true", "false", "[]", "undefined"],
    correctAnswer: 0,
    explanation: `[] == false 相等比较：
• [] 转换为原始值 ""
• false 转换为数字 0
• "" 转换为数字 0
• 0 == 0 为 true`,
    category: "相等比较",
    difficulty: 'medium'
  },
  {
    id: 21,
    title: "![] == false",
    code: `console.log(![] == false);`,
    options: ["true", "false", "[]", "undefined"],
    correctAnswer: 0,
    explanation: `![] == false 相等比较：
• ![] 转换为 false
• false == false 为 true`,
    category: "相等比较",
    difficulty: 'medium'
  },
  {
    id: 22,
    title: "+[]",
    code: `console.log(+[]);`,
    options: ["0", "NaN", '""', "undefined"],
    correctAnswer: 0,
    explanation: `+[] 一元加号运算：
• [] 转换为原始值 ""
• "" 转换为数字 0
• 结果是 0`,
    category: "运算符优先级",
    difficulty: 'hard'
  },
  {
    id: 23,
    title: "-[]",
    code: `console.log(-[]);`,
    options: ["0", "-0", "NaN", "undefined"],
    correctAnswer: 1,
    explanation: `-[] 一元减号运算：
• [] 转换为原始值 ""
• "" 转换为数字 0
• -0 结果是 -0`,
    category: "运算符优先级",
    difficulty: 'hard'
  },
  {
    id: 24,
    title: "+![]",
    code: `console.log(+![]);`,
    options: ["0", "1", "false", "true"],
    correctAnswer: 0,
    explanation: `+![] 运算：
• ![] 转换为 false
• +false 转换为数字 0
• 结果是 0`,
    category: "运算符优先级",
    difficulty: 'hard'
  },
  {
    id: 25,
    title: "!+[]",
    code: `console.log(!+[]);`,
    options: ["true", "false", "0", "1"],
    correctAnswer: 0,
    explanation: `!+[] 运算：
• +[] 转换为数字 0
• !0 转换为 true
• 结果是 true`,
    category: "运算符优先级",
    difficulty: 'hard'
  },
  {
    id: 26,
    title: "[] + ![] + []",
    code: `console.log([] + ![] + []);`,
    options: ['"false"', '"truefalse"', '"falsefalse"', '"true"'],
    correctAnswer: 0,
    explanation: `[] + ![] + [] 字符串拼接：
• [] 转为 ""
• ![] 转为 false，再转为 "false"
• [] 转为 ""
• 结果："" + "false" + "" = "false"`,
    category: "运算符优先级",
    difficulty: 'hard'
  },
  {
    id: 27,
    title: "obj == 2 (自定义 valueOf)",
    code: `let obj = {
  valueOf() { return 2; },
  toString() { return '3'; }
};
console.log(obj == 2);`,
    options: ["true", "false", "2", "3"],
    correctAnswer: 0,
    explanation: `obj == 2 相等比较：
• 对象转换为原始值时优先调用 valueOf()
• obj.valueOf() 返回 2
• 2 == 2 为 true`,
    category: "ToPrimitive",
    difficulty: 'hard'
  },
  {
    id: 28,
    title: "obj == '3' (自定义 valueOf)",
    code: `let obj = {
  valueOf() { return 2; },
  toString() { return '3'; }
};
console.log(obj == '3');`,
    options: ["true", "false", "2", "3"],
    correctAnswer: 1,
    explanation: `obj == '3' 相等比较：
• 对象转换为原始值时优先调用 valueOf()
• obj.valueOf() 返回 2
• 2 == '3' 转换后为 2 == 3，结果为 false`,
    category: "ToPrimitive",
    difficulty: 'hard'
  },
  {
    id: 29,
    title: "new Date(0) == 0",
    code: `let d = new Date(0);
console.log(d == 0);`,
    options: ["true", "false", "0", "undefined"],
    correctAnswer: 0,
    explanation: `new Date(0) == 0 相等比较：
• Date 对象的 valueOf() 返回时间戳
• new Date(0).valueOf() 返回 0
• 0 == 0 为 true`,
    category: "Date对象",
    difficulty: 'medium'
  },
  {
    id: 30,
    title: "终极连击：(+!![])+(+!![])",
    code: `console.log((+!![])+(+!![]));`,
    options: ["2", "1", "0", "true"],
    correctAnswer: 0,
    explanation: `(+!![]) + (+!![]) 运算：
• !![] 转换为 true（双重否定）
• +true 转换为数字 1
• 1 + 1 = 2`,
    category: "综合运算",
    difficulty: 'hard'
  }
];