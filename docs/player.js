const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function countup() {
matches = matches + 1
return matches;
}

// チョキ大好きマンに対するアクション
function actionAgainstChokiDaisukiman() {
return GU;
}

// 表か裏かマンに対するアクション
function actionAgainstOmoteUra() {
const isEven = matches % 2 == 0;
let result = PA;
if (isEven) {
result = GU;
}
return result;
}

// 帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2() {
const isEven = matches % 3 == 0;
let result = GU;
if (isEven) {
result = CHOKI;
}
return result;
}

<<<<<<< Updated upstream
=======
// //順番に出して行くマン
// function actionAgainstrotation() {


>>>>>>> Stashed changes
/*
対戦相手名前まとめ
チョキ大好きマン： fighter::choki-lover
表か裏かマン：fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
<<<<<<< Updated upstream
*/

function action(oppornent) {
=======
順番に出して行くマン：fighter::rotation
*/

function action(oppornent){
>>>>>>> Stashed changes
console.log(oppornent);
let result = GU;
countup();
if (oppornent == "fighter::choki-lover") {
result = actionAgainstChokiDaisukiman();
<<<<<<< Updated upstream
} else {
=======
} 
else if(oppornent =="fighter::rotation"){
  result=actionAgainstrotation
}
else{
>>>>>>> Stashed changes
result = actionAgainstOmoteUra2();
}
return result;
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
