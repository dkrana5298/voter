var BJP=document.getElementById('bjpCount');
var CONG=document.getElementById('congressCount');
var APP=document.getElementById('mnsCount');
var RESULT=document.getElementById('Res');

var bjp=document.getElementById('bjp');
var cong=document.getElementById('congress');
var mns=document.getElementById('mns');
var result=document.getElementById('result');
var bjpcnt=0;
BJP.onclick=function(){
    bjpcnt++;;
   
}
var cngcnt=0; 
CONG.onclick=function(){
    cngcnt++;
    
}
var mnscnt=0;
APP.onclick=function(){
    mnscnt++;
   
}
RESULT.onclick=function(){
    if(bjpcnt===0 && cngcnt===0 && mnscnt==0){
        result.innerHTML="Please take a vote first ";
        
    }
    else if(bjpcnt===cngcnt && cngcnt===mnscnt){
        result.innerHTML=" All got Same Vote Please reVote again!!!"
    }
   else if(bjpcnt > cngcnt && bjpcnt >mnscnt){
        result.innerHTML="BJP won" ;
    }
    else if(cngcnt > bjpcnt && cngcnt > mnscnt){
        result.innerHTML="CONGRESS won" ;
    }
    
    else if(bjpcnt===cngcnt){
        if(bjpcnt < mnscnt){
           result.innerHTML="AAP won"
        }
        else {
            result.innerHTML=" bjp and congress won "
        }
    }
    else if(cngcnt==mnscnt){
      if(cngcnt < bjpcnt){
        result.innerHTML="BJP won" ;
      }
      else{
        result.innerHTML=" AAP and congress won "
      }
    }
    else {
        result.innerHTML="AAP won" ;
    }
    bjp.innerHTML="BJP got: " + bjpcnt;
    cong.innerHTML="Congress got: " + cngcnt ;
    mns.innerHTML="AAP got: " + mnscnt;
}