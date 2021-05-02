btn.addEventListener("click",f_out);

   function f_out (){
       q = Number(y.value) / Number(x.value);
       z = q*100;
       res.innerHTML = z;
   }
