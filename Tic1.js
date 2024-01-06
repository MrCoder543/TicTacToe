var turn = 0;
var turn1 = 0;
var turn2 = 0;
var turn3 = 0;
var turn4 = 0;
var turn5 = 0;
var turn6 = 0;
var turn7 = 0;
var turn8 = 0;
var f  = "z";
var f1 = "z";
var f2 = "z";
var f3 = "z";
var f4 = "z";
var f5 = "z";
var f6 = "z";
var f7 = "z";
var f8 = "z";
var wi = false;
var tick = new Audio("tick.mp3");
var wins = new Audio("win.mp3");
var t = document.getElementById('turn');
var val = 0;
//Reset
function reset(){
    document.getElementsByClassName("boxtext")[0].innerHTML=" ";
    document.getElementsByClassName("boxtext")[1].innerHTML=" ";
    document.getElementsByClassName("boxtext")[2].innerHTML=" ";
    document.getElementsByClassName("boxtext")[3].innerHTML=" ";
    document.getElementsByClassName("boxtext")[4].innerHTML=" ";
    document.getElementsByClassName("boxtext")[5].innerHTML=" ";
    document.getElementsByClassName("boxtext")[6].innerHTML=" ";
    document.getElementsByClassName("boxtext")[7].innerHTML=" ";
    document.getElementsByClassName("boxtext")[8].innerHTML=" ";
    document.getElementById('turn').innerHTML="Turn for X";
    document.getElementById('win').innerHTML="No winners";
    if(turn==1){
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    }
    wi = false;
    f  = "z";
    f1 = "z";
    f2 = "z";
    f3 = "z";
    f4 = "z";
    f5 = "z";
    f6 = "z";
    f7 = "z";
    f8 = "z";
}
function type1 (){
    for(var o = 0;o<1;o++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f == "X"){
        alert("You can't enter two times!");
        break;
        }
        if(f == "0"){
            alert("You can't enter two times!");
            break;
            }   
    if(turn == 0){
    document.getElementsByClassName("boxtext")[0].innerHTML="X";
    val++;
    f  = "X";
    t.innerHTML="Turn for 0";  
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    tick.play();
    win();
    break;
    }
   /* if(val==0){
        if(turn==f){
            turn++;
            f++;
            }
        }*/
        
    if(turn == 1){
    document.getElementsByClassName("boxtext")[0].innerHTML="0";
    val--;
    f="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X"; 
    tick.play();
    win();
    break;
    }
}
    }
 
function type2 (){
    for(var o1 = 0;o1<1;o1++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f1=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f1=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn1 == 0){
    document.getElementsByClassName("boxtext")[1].innerHTML="X";
    val++;
    f1="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0"; 
    tick.play();
    win();
    break;
    }

    if(turn1 == 1){
    document.getElementsByClassName("boxtext")[1].innerHTML="0";
    val--;
    f1="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X"; 
    tick.play();
    win();
    break;
    }
}
}

function type3 (){
    for(var o2 = 0;o2<1;o2++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f2=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f2=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn2 == 0){
    document.getElementsByClassName("boxtext")[2].innerHTML="X";
    val++;
    f2="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0"; 
    tick.play();
    win();
    break;
    }
    
    if(turn2 == 1){
    document.getElementsByClassName("boxtext")[2].innerHTML="0";
    val--;
    f2="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X"; 
    tick.play();
    win();
    break;
    }
}
}

function type4 (){
    for(var o3 = 0;o3<1;o3++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f3=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f3=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn3 == 0){
    document.getElementsByClassName("boxtext")[3].innerHTML="X";
    val++;
    f3="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0";
    tick.play();
    win(); 
    break;
    }
    
    if(turn3 == 1){
    document.getElementsByClassName("boxtext")[3].innerHTML="0";
    val--;
    f3="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X"; 
    tick.play();
    win();
    break;
    }
}
}

function type5 (){
    for(var o4 = 0;o4<1;o4++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f4=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f4=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn4 == 0){
    document.getElementsByClassName("boxtext")[4].innerHTML="X";
    val++;
    f4="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0"; 
    tick.play();
    win();
    break;
    }
    
    if(turn4 == 1){
    document.getElementsByClassName("boxtext")[4].innerHTML="0";
    val--;
    f4="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X"; 
    tick.play();
    win();
    break;
    }
}
}

function type6 (){
    for(var o5 = 0;o5<1;o5++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f5=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f5=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn5 == 0){
    document.getElementsByClassName("boxtext")[5].innerHTML="X";
    val++;
    f5="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0";
    tick.play();
    win(); 
    break;
    }
    
    if(turn5 == 1){
    document.getElementsByClassName("boxtext")[5].innerHTML="0";
    val--;
    f5="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X";
    tick.play();
    win(); 
    break;
    }
}
}

function type7 (){
    for(var o6 = 0;o6<1;o6++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f6=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f6=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn6 == 0){
    document.getElementsByClassName("boxtext")[6].innerHTML="X";
    val++;
    f6="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0"; 
    tick.play();
    win();
    break;
    }
    
    if(turn6 == 1){
    document.getElementsByClassName("boxtext")[6].innerHTML="0";
    val--;
    f6="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X";
    tick.play();
    win(); 
    break;
    }
}
}

function type8 (){
    for(var o7 = 0;o7<1;o7++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f7=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f7=="0"){
        alert("You can't enter two times!");
        break;    
        }
        
    if(turn7 == 0){
    document.getElementsByClassName("boxtext")[7].innerHTML="X";
    val++;
    f7="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0"; 
    tick.play();
    win();
    break;
    }
    
    if(turn7 == 1){
    document.getElementsByClassName("boxtext")[7].innerHTML="0";
    val--;
    f7="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X";
    tick.play();
    win(); 
    break;
    }
}
}

function type9 (){
    for(var o8= 0;o8<1;o8++){
        if(wi){
            alert("The match has ended");
            break;
            }
        if(f8=="X"){
        alert("You can't enter two times!");
        break;
        }
        if(f8=="0"){
        alert("You can't enter two times!");
        break;    
        }
    if(turn8 == 0){
    document.getElementsByClassName("boxtext")[8].innerHTML="X";
    val++;
    f8="X";
    turn++;turn1++;turn2++;turn3++;turn4++;turn5++;turn6++;turn7++;turn8++;
    t.innerHTML="Turn for 0"; 
    tick.play();
    win();
    break;
    }
    
    if(turn8 == 1){
    document.getElementsByClassName("boxtext")[8].innerHTML="0";
    val--;
    f8="0";
    turn--;turn1--;turn2--;turn3--;turn4--;turn5--;turn6--;turn7--;turn8--;
    t.innerHTML="Turn for X";
    tick.play(); 
    win();
    break;
    }
}
}

//Winning statement
function win(){
// X wins
// Hor
if(f=="X"&&f1=="X"&&f2=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
if(f3=="X"&&f4=="X"&&f5=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
if(f6=="X"&&f7=="X"&&f8=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
// Ver
if(f=="X"&&f3=="X"&&f6=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
if(f1=="X"&&f4=="X"&&f7=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
if(f2=="X"&&f5=="X"&&f8=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
// Dio
if(f=="X"&&f4=="X"&&f8=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}
if(f2=="X"&&f4=="X"&&f6=="X"){
document.getElementById('win').innerHTML="X won";
document.getElementById('turn').innerHTML="The Match has ended";
wins.play();
wi = true;
}

// 0 wins
// Hor
if(f=="0"&&f1=="0"&&f2=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    document.getElementsByClassName('boxtext')[0].innerHTML=innerHTML+'<hr>';
    wins.play();
    wi = true;
    }
    if(f3=="0"&&f4=="0"&&f5=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    wins.play();
    wi = true;
    }
    if(f6=="0"&&f7=="0"&&f8=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    wins.play();
    wi = true;
    }
    // Ver
    if(f=="0"&&f3=="0"&&f6=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    wins.play();
    wi = true;
    }
    if(f1=="0"&&f4=="0"&&f7=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    win.play();
    wi = true;
    }
    if(f2=="0"&&f5=="0"&&f8=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    wins.play();
    wi = true;
    }
    // Dio
    if(f=="0"&&f4=="0"&&f8=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    wins.play();
    wi = true;
    }
    if(f2=="0"&&f4=="0"&&f6=="0"){
    document.getElementById('win').innerHTML="0 won";
    document.getElementById('turn').innerHTML="The Match has ended";
    wins.play();
    wi = true;
    }
}

 