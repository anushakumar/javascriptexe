function Pyramid() {
    var row = 5;
   var d;
    for (var i = 0; i<=row; i++)
     {
       d=" ";

        for (var j = i; j <=row-1; j++)
     {
       d=d+" ";

     }
     for(var k=0;k<i;k++)
     {

       d=d+" *";

     }
      console.log(d);
   }

}



Pyramid();
