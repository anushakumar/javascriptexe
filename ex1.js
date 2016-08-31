<!--var count=process.arg[2]-->
function anu(count){
  var n1=0;
  var n2=1;
  var n3;
  var i;
  console.log(n1);
  console.log(n2);
  for(i=2;i<count;i++)
  {
    n3=n1+n2;
console.log(n3);
    n1=n2;
    n2=n3;
  }

}

anu(6);
