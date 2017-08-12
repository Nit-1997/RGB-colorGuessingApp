var colors = generateRandomColors(numsq);
 var numsq=6;
  var squares = document.querySelectorAll(".square");
  var rgbDisp = document.querySelector("#rgb");
  var message = document.querySelector("#message");
  var pickedColor=randomIndex();
  var h1=document.querySelector("h1");
  var easybtn=document.querySelector("#easybtn");
  var hardbtn=document.querySelector("#hardbtn");

   nit();



   function nit(){
         this.textContent="New Game";
      colors = generateRandomColors(numsq);
      hardbtn.classList.add("selected");
      pickedColor=randomIndex();
      rgbDisp.textContent=pickedColor;
      h1.style.backgroundColor="steelblue";
      message.textContent=" ";

      for(var i=0;i<squares.length;i++)
      	 {
      	 	 squares[i].style.backgroundColor=colors[i];
      	 }

   } 




   rgbDisp.textContent=pickedColor;
for(var i = 0;i<squares.length;i++)
   {
      squares[i].style.backgroundColor=colors[i];
      squares[i].addEventListener("click", function(){
              var clickedColor=this.style.backgroundColor; 
                if(clickedColor===pickedColor)
                	 {
                	 	changeColors(clickedColor);
                	 	message.textContent="Well Played";
                	 	h1.style.backgroundColor=pickedColor;
                	 	reset.textContent="Play Again ";
                	 }
                else{
                   this.style.backgroundColor= "#232323";
                   message.textContent="Try Again";
                } 
     }); 

   }   

     function changeColors(color){
       for(var i=0;i<squares.length;i++)
       	  {
       	  	  squares[i].style.backgroundColor=color;
       	  }
   }

    function generateRandomColors(num){

    	var arr=[];
      for(var i=0;i<num;i++)
      	 {
             arr.push(generateColor());
      	 }
     		return arr;
    }

    function generateColor(){
    	var r =Math.floor(Math.random()*256);
    	var g =Math.floor(Math.random()*256);
    	var b =Math.floor(Math.random()*256);

    	return "rgb("+r+", "+g+", "+b+")";
    } 
 
    function randomIndex(){
       var c = Math.floor(Math.random()*colors.length);
       return colors[c];
    }

  
 var reset = document.querySelector("#newgame");
 

 reset.addEventListener("click", function(){
      
      this.textContent="New Game";
      colors = generateRandomColors(numsq);
      pickedColor=randomIndex();
      rgbDisp.textContent=pickedColor;
      h1.style.backgroundColor="steelblue";
      message.textContent=" ";

      for(var i=0;i<squares.length;i++)
      	 {
      	 	 squares[i].style.backgroundColor=colors[i];
      	 }
 });

 
  

  easybtn.addEventListener("click",function(){
       hardbtn.classList.remove("selected");
       easybtn.classList.add("selected");
       h1.style.backgroundColor="steelblue";
   
      numsq=3;
      colors = generateRandomColors(numsq);
      pickedColor=randomIndex();
      rgbDisp.textContent=pickedColor;

      for(var i=0;i<squares.length;i++){
      	if(colors[i]){
           squares[i].style.backgroundColor=colors[i];
      	}
      	else{
           squares[i].style.display="none";
      	}
      }

  });

  hardbtn.addEventListener("click",function(){
      easybtn.classList.remove("selected");
      hardbtn.classList.add("selected");
      h1.style.backgroundColor="steelblue";
      numsq=6;
      colors = generateRandomColors(numsq);
      pickedColor=randomIndex();
      rgbDisp.textContent=pickedColor;

        for(var i=0;i<squares.length;i++){
           squares[i].style.backgroundColor=colors[i];
           squares[i].style.display="block";
      }

  });
