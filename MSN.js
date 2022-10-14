var Link = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
   }
  }
}
  var Body = {
    setColor:function(color){
      document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black'); //target.style.backgroundColor = 'black';
        Body.setColor('powderblue');  //target.style.color='white';
        self.value = 'day';

        Link.setColor('powderblue')
      } else {
        Body.setBackgroundColor('white'); //target.style.backgroundColor='white';
        Body.setColor('black');  //target.style.color='black';
        self.value = 'night';

        Link.setColor('black')
    }
  }
