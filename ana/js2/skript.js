bttn.addEventListener("click", f_out);
bttn1.addEventListener("click", f_out1);
  function f_out (){
    console.log(x1.checked);
    console.log(x2.checked);
    console.log(x3.checked);
    console.log(x4.checked);

    if (x3.checked){
      right.classList.remove("hidden");
      wrong_hidden.classList.add("hidden");
    }else{
      right.classList.add("hidden");
      wrong_hidden.classList.remove("hidden");
    }
   
    
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    bttn1.classList.toggle("opend");
  }
