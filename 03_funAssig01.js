console.log('=======================================Steep1 Function with no argument===================================');
function magic(){
    console.log('Today is weekend day');
    console.log('Feeling Relaxing');
}
magic()
console.log('========================================Step2 Function with argument====================================');
function magic1(value,value1,value2){
console.log('First Name=>',value,'Last Name=>',value1,'College Name=>',value2);

}
magic1('Anil','Shingare','ISBM University');
console.log('========================================Step3 Function with argument====================================');
function swap() {
    var name1 = "anushka";
    var name2 = "virat";
    console.log("Before swaping name1 is=>", name1,'Name2is=>', name2);
    temp = name1;
    name1 = name2;
    name2 = temp;
    console.log("After swaping name1 is:", name1,'Name2is=>', name2)
    temp = name1;
    name1 = name2;
    name2 = temp;
  }
  swap();
  console.log("====================================step-4 =========================================");
  
  
  function swapValues() {
    var val1 = 1000;
    var val2 = 2000;
    console.log("Before swaping val1 -->", val1, "|| Before swaping val1 -->", val2);
    temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("after swaping val1 -->", val1, "After swaping val2 -->", val2);
  }
  swapValues();
  console.log("=======================================step-5 ==========================================");
  function addThreeValues(arg1, arg2, arg3) {
    console.log("values are:", arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
  }
  var res = addThreeValues(10.23, 600, 40);
  console.log("result is:", res);
  
  console.log("======================================= step-6 =============================================");
  
         function addition(){
          var text1 = "HELLO";
          var text2 = "GOOD";
          var text3 = "MORNING";
            
            console.log("the values are:",text1,text2,text3);
            console.log("the addition is:",text1+text2+text3);
         }
          
         addition();
         console.log("========================================== Bank Detaails ==============================");
            
                function bankDetails(bankName,accountNumber,location ,pincode){
  
                  console.log("bankName: CITI bank accontNumber : 3456782345 location:pune pinCode: 431202");
                  console.log("bankName: Axis bank accontNumber : 7856782345 location:pune pinCode: 441202");
                  console.log("bankName: HDFC bank accontNumber : 8956782345 location:pune pinCode: 631202");
                }
                bankDetails();


    