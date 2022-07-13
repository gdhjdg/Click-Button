const btn = document.getElementById('thebutton');
var changecolor=0;
thebutton.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  if(changecolor==0)
  {
    document.body.style.backgroundColor="black";
    changecolor=1;
  }
  else
  {
    document.body.style.backgroundColor="white";
    changecolor=0;
  }
});