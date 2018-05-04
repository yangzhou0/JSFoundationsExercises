function sum(...args){
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
