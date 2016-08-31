var myobj =
[{name:"Saurabh", age: 30, occupation: "Team Leader"},
{name:"Anupriya", age: 32, occupation: "Team Leader"},
{name:'Kalyani', age: 25, occupation: "Programmer"},
{name:'Damodaran', age: 27, occupation: "Programmer"},
{name:'Krishnakath', age: 22, occupation: "Programmer"},
{name:'Venketraman', age: 28, occupation: "Programmer"}];

console.log("list program");
var obj1="Programmer";
program(obj1);
console.log("desc order");
sorting();
console.log(" program");
final();


function program(obj1)
{

  for(var i=0;i<myobj.length;i++)
  {
    if(myobj[i].occupation==obj1)
    {
      console.log(myobj[i]);
      console.log("haii");
    }
  }
}


function sorting()
{
  for(var i=0;i<myobj.length-1;i++)
  {
    for(var j=i+1;j<myobj.length;j++)
    {
      if(myobj[j].age>myobj[i].age )
      {
        var temp=myobj[i];
        myobj[i]=myobj[j];
        myobj[j]=temp;
      }
    }
  }
  for(var i=0;i<myobj.length;i++)
  {
    console.log(myobj[i]);
  }
}

function final()
{
  var array1=[];
  var array2=[];
  for(var i=0;i<myobj.length-1;i++)
  {
    if(myobj[i].occupation=="Team Leader" )
    {
      array1.push({name:myobj[i].name,age:myobj[i].age});
    }
    if(myobj[i].occupation=="Programmer" )
    {
      array2.push({name:myobj[i].name,age:myobj[i].age});
    }
  }
  var obj1={"Team Leader":array1,"Programmer":array2};
  console.log(obj1);
}
