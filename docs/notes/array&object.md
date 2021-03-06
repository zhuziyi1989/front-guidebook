# 数组和对象的方法

## 原生数组方法

- `arr.concat(arr1, arr2, arrn);`--合并两个或多个数组。此方法**不会**修改原有数组，而是返回一个新数组
- `arr.fill(value,start,end) ;`--用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。⚠️此方法**会**修改原有数组
- `arr.filter() ;`--方法创建一个新数组, 其保留 通过所提供函数测试的 所有元素。[此方法**不会**修改原有数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- `arr.join(",");`--将一个数组的所有元素连接成一个字符串返回。**不会**修改原有数组
- `arr.sort();`--采用“原地算法”对数组的元素进行排序，并返回数组。⚠️[此方法**会**修改原有数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- `arr.unshift(e1, e2, en);`--添加元素到数组的头部，返回该数组的新长度。⚠️此方法**会**修改原有数组
- `arr.push(e1, e2, en);`--添加元素到数组的尾部，返回该数组的新长度。⚠️此方法**会**修改原有数组
- `arr.pop();`--删除数组尾部的元素。⚠️此方法**会**修改原有数组
- `arr.shift();`删除数组头部的元素。⚠️此方法**会**修改原有数组
- `arr.splice(index, count);`--删除任意位置元素的方法。⚠️此方法**会**修改原有数组
- `arr.reverse();`--将数组中元素的位置颠倒，并返回该数组。⚠️此方法**会**修改原有数组
- `arr.slice(start, end);`--包头不包尾的截取数组中的一段，并返回新数组。**不会**修改原有数组
- `arr.splice(index, count, e1, e2, en);`--添加元素到数组的任何位置。⚠️此方法**会**修改原有数组
- `arr.indexOf(searchElement，fromIndex);`--返回在数组中可以找到一个给定元素的**第一个索引**，如果不存在，则返回-1。
- `arr.includes(searchElement，fromIndex);` // ES6 --判断一个数组是否包含一个指定的值，根据情况，返回布尔值。
- `arr.map((currentValue,index,array) => {} ,this);`--创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。[⚠️此方法**会**修改原有数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- `arr.forEach((currentValue,index,array) => {} ,this);`--对数组的每个元素执行一次给定的函数。
- `arr.from(arrayLike,(currentValue) => {} ,this);`--从一个类似数组或可迭代对象创建一个新的数组，浅拷贝的数组实例。[⚠️此方法**会**修改原有数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- `arr.find((element,index,array) => {} ,this);`--返回数组中满足提供的测试函数的**第一个元素的值**。否则返回 *undefined*。
- `arr.findIndex((element,index,array) => {} ,this);`-- 返回数组中满足提供的测试函数的**第一个元素的索引**。若没有找到对应元素则返回-1。
- `arr.flat(depth);`--会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。[此方法**不会**修改原有数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- `arr.flatMap((currentValue,index,array) => {} ,this);`--首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。与 map 连着深度值为1的 flat几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。此方法**不会**修改原有数组

## 原生对象方法

- `Object.assign();` --将所有可枚举属性的值从一个或多个源对象分配到目标对象，它将[返回目标对象](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2Fassign)
- `Object.defineProperty() ;`--直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
- `Object.hasOwnProperty(prop);`--对象自身属性中是否具有指定的属性（返回布尔值）
- `Object.getOwnPropertyNames();`--返回一个由指定对象的所有自身属性的属性名组成的数组
- `Object.propertyIsEnumerable(prop);`--判断指定的属性是否可枚举（返回布尔值）
- `Object.valueOf();`--返回指定对象的原始值
- `Object.toString();`--返回一个表示该对象的字符串，**Object.prototype.toString.call()**
- `Object.create();`--创建一个新对象，使用现有的对象来提供新创建的对象的**proto**。
- `Class.prototype.isPropertyOf(object);`--测试一个对象是否存在于另一个对象的原型链上
- `Object.keys() ;`--方法会返回一个由一个给定对象的自身可枚举属性组成的数组
- `Object.values();`--方法返回一个给定对象自身的所有可枚举属性值的数组
- `Object.entries();`--方法返回一个给定对象自身可枚举属性的键值对数组
- `Object.setPrototypeOf() ;`--方法设置一个指定的对象的原型
- `Object.getPrototypeOf() ;`--方法返回指定对象的原型

## 快速的让一个数组乱序

```javascript
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
    return Math.random() - 0.5;
})
console.log(arr);
```

## 判断是否是数组

- `Array.isArray(arr）`
- `Object.prototype.toString.call(arr) === '[Object Array]'`
- `arr instanceof Array`
- `array.constructor === Array`

## Array.slice() 与 Array.splice() 的区别？

`arr.slice(开始位置（含）, 结束位置（不含）)：`“读取”数组指定的元素，**不会**对原数组进行修改；

`arr.splice(index, count, [insert Elements])：`操作”数组指定的元素，会修改原数组，返回被删除的元素；

- index ：`是操作的起始位置
- count = 0 ：`插入元素，`count > 0 ：`删除元素；
- [insert Elements] ：`向数组新插入的元素；

## 数组去重方法总结

- 利用ES6 Set去重（ES6中最常用）

```javascript
//ES6 中的 Set 去重
function unique(array) {
   return Array.from(new Set(array));
   // 或者 return [...new Set(array)]
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
//{}没有去重
```

- 利用for嵌套for，然后splice去重（ES5中最常用）

```javascript
//双层 for 循环
function unique(arr) {
   let len = arr.length;
   //双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减 1
                len--;
                j--;
            }
        }
    }
    return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
// [1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", Object {  }, Object {  }]
// NaN和{}没有去重，两个null直接消失了
```

- 利用indexOf去重

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
   //新数组
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        //去查找新数组中有没有这个值，如果没有，就推入到新数组，否则就跳出循环
        if (array.indexOf(arr[i]) === -1) { 
            array.push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]
//NaN、{} 没有去重
```

- 利用sort()

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[0, 1, 15, NaN, NaN, "NaN", {…}, {…}, "a", false, null, "true", true, undefined] 
//NaN、{} 没有去重
```

- 利用对象的属性不能相同的特点进行去重

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var arrry= [];
    var  obj = {};
    for (var i = 0; i < arr.length; i++) { 
        if (!obj[arr[i]]) {
            arrry.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return arrry;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, null, NaN, 0, "a",  {...}] 
// //两个true直接去掉了，NaN和{}去重
```

- 利用includes

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     
//{}没有去重
```

- 利用hasOwnProperty

```javascript
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]  
//所有的都去重了
```

- 利用filter

```javascript
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
//{}没有去重
```

- 利用递归去重

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     
//{}没有去重
```

- 利用Map数据结构去重

```javascript
function unique(arr) {
    let map = new Map();
        let array = new Array();  // 数组用于返回结果
        for (let i = 0; i < arr.length; i++) {
            if(map .has(arr[i])) {  // 如果有该key值
            map .set(arr[i], true);
        } else {
            map .set(arr[i], false);   // 如果没有该key值
            array .push(arr[i]);
        }
    }
    return array ;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a",  {...}, {...}]
//{}没有去重
```

- 利用reduce+includes

```javascript
function unique(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

- [...new Set(arr)]

```dart
[...new Set(arr)]
//代码就是这么少----（其实，严格来说并不算是一种，相对于第一种方法来说只是简化了代码）
```
