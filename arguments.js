function sumup(...args){
  return args.reduce(function(accu,curr){
    return accu + curr;
  })
}

Function.prototype.myBind = function(firstArg,...args){
  let fn = this;
  let outterArgs = args;
  return function(...args){
    let combined = outterArgs.concat(args);
    fn.apply(firstArg,combined);
  }
}

function curriedSum(numArgs){
  let nums = [];
  return function _curriedSum(num){
    nums.push(num);
    if (nums.length === numArgs){return sumup(...nums);}
    return _curriedSum;
  }
}
