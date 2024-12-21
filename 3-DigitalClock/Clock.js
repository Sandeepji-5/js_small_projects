const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')
// either use getElementByID or U can Use document.querySelector()   both will work;

// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();

  clock.style.color = 'black';
  clock.style.fontFamily = "bold,Times New Roman, Times, serif";

},1000);