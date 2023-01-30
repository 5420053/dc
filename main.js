const time = document.getElementById('time');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const sumtime = document.getElementById('sumtime');

// 開始時間
let startTime;
// 終了時間
let endTime;
// タイムアウトID
let timeoutID;
//計測した時間の配列
var nowArray = [];

//目標時間
var targetHours=1;

//合計時間(キャラ獲得により，目標時間分減る)
var sum=0;

//合計時間(表示用)
var sumDisplay=0;

// 時間を表示する関数
function displayTime() {
  const currentTime = new Date(Date.now() - startTime);
  const h = String(currentTime.getHours()-9).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  time.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

//合計時間を表示する関数
function displaySum(sumTime) {
  const h = String(Math.floor(sumTime/1000/60/60)%24).padStart(2, '0');
  const m = String(Math.floor(sumTime/1000/60)%60).padStart(2, '0');
  const s = String(Math.floor(sumTime/1000)%60).padStart(2, '0');
  const ms = String(Math.floor(sumTime%1000)).padStart(3, '0');

  sumtime.textContent = `${h}:${m}:${s}.${ms}`;
}

// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  resetButton.disabled = false;
  startTime = Date.now();
  displayTime();
});


// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  resetButton.disabled = true;
  //時間を取得
  endTime=Date.now();
  var diff = endTime - startTime;
  diffInt = parseInt(diff);
  console.log(startTime,endTime,"経過時間(ミリ秒):", diff);
  //ローカルストレージから取得
  if (window.localStorage) {
    var json1 = localStorage.getItem('key_name');
    var json2 = localStorage.getItem('sum_count');
    var json3 = localStorage.getItem('sum_display');
    var json4 = localStorage.getItem('target_hours');
    if(json1){
      nowArray = JSON.parse(json1);
    }
    if(json2){
      sum = JSON.parse(json2);
    }
    if(json3){
      sumDisplay = JSON.parse(json3);
    }
    if(json4){
      targetHours = JSON.parse(json4);
    }
  }
  nowArray.push(diffInt);
  sum += diffInt;
  sumDisplay += diffInt;
  displaySum(sumDisplay);
  //ローカルストレージに保存
  if (window.localStorage) {
    var json1 = JSON.stringify(nowArray);
    var json2 = JSON.stringify(sum);
    var json3 = JSON.stringify(sumDisplay);
    var json4 = JSON.stringify(targetHours);
    localStorage.setItem('key_name',json1);
    localStorage.setItem('sum_count',json2);
    localStorage.setItem('sum_display',json3);
    localStorage.setItem('target_hours',json4);
  }
  console.log(nowArray);
  //表示をリセット
  clearTimeout(timeoutID);
  time.textContent = '00:00:00.000';

});

//目標に設定ボタンが押された時に，入力内容をローカルストレージに保存する
function AddStringToTextarea() {
  if(window.localStorage){
    targetHours = document.querySelector('#sampleUserInput').value;
    var json4 = JSON.stringify(targetHours)
    localStorage.setItem('target_hours',json4);
  }
}

//ページ読み込み時に実行する処理
window.onload = function(){
  if (window.localStorage) {
    var json3 = localStorage.getItem('sum_display');
    var json4 = localStorage.getItem('target_hours');
    if(json3){
      sumDisplay = JSON.parse(json3);
    }
    if(json4){
      targetHours = JSON.parse(json4);
      var Myelement = document.querySelector('#sampleUserInput');
      Myelement.value = targetHours;
    }
  }

  displaySum(sumDisplay);
}



//画像の表示!!!!!!!!!!!!!!!

//グローバル変数
var num = 50;
var cnt = num;
var goal = 1;
var total = 0;

//画像のリンクを配列に格納する
var link = [
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152441.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152446.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152450.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152500.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152505.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152510.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152516.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152521.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152526.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152531.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152535.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152541.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152546.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152551.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152555.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152600.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152605.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152610.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152615.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152619.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152625.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152629.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152634.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152639.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152645.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152650.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152655.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152701.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152706.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152710.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152715.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152725.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152730.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152735.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152740.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152746.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152751.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152757.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152803.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152808.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152814.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230106/20230106152820.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230115/20230115225850.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230115/20230115225859.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230115/20230115225907.png"},
    {url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230116/20230116002033.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230116/20230116002039.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230116/20230116002044.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230116/20230116002049.png"},{url:"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yucky78687601/20230116/20230116002054.png"}
];

//処理用のグローバル変数
var g=0;


window.addEventListener('DOMContentLoaded', function(){
  
  // 1秒ごとに実行
  setInterval(() => {
    if(g == 1){
      if(cnt == num){
        cnt = 0;
      }
      changeIMG();
      cnt++;
      g=0;
    }
  }, 1000);

});

//画像切り替え関数
function changeIMG(){
  //画像を切り替える
  document.getElementById("gazo").src=link[cnt].url;
}

//画像切り替えボタン
function clickBtn1() {
  if(window.localStorage){
    var json2 = localStorage.getItem('sum_count');
    var json4 = localStorage.getItem('target_hours');
    if(json2){
      sum = JSON.parse(json2);
    }
    if(json4){
      targetHours = JSON.parse(json4);
    }
  }
  targetHours *= 60000;
  if(sum >= targetHours){
    g = 1;
    sum = sum-targetHours;
    console.log(sum,targetHours);
  }
  targetHours /= 60000;
  if(window.localStorage){
    var json2 = JSON.stringify(sum);
    var json4 = JSON.stringify(targetHours);
    localStorage.setItem('sum_count',json2);
    localStorage.setItem('target_hours',json4);
  }
}

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

link = shuffle(link);

/*function downloadImg(){
  const URL = link[cnt].url;
  const fileName = 'img.png';
  
  let LINK = document.getElementById("download");
  LINK.href= URL;
  LINK.download = fileName;
}*/


$(function() {
  $(".D").click(function() {
      $(".E").slideToggle("");
  });
});
