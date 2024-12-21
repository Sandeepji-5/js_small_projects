const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop the default first

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  // using parse what values you get will  convert in integer value
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please Give a Valid Height ${height}`;

  }else if  (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid Weight ${weight}`;
}
else{
  const BMI = (weight / ((height)*(height)/10000)).toFixed(2);
  // show the result
 
  let msg  = "";
  const  guide1  = " Under eight";
  const guide2 = "Normal Range";
  const guide3 = "Overweight";

  if( BMI <= 18.6){
   msg = guide1;
  }
  else if( BMI > 18.6 && BMI < 24.9)
  {
     msg  = guide2;


  }else{
    msg = guide3;
  }

  results.innerHTML = `<span>${BMI}  <br> You are ${msg}</span>`;
}
});
