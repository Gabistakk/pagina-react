import React, { useState } from 'react';
import './App.css'

export default function App(){
  const imageArray = ["https://wallpapercave.com/wp/agLijth.jpg",
"https://wallpaper.dog/large/996034.jpg",
"https://i.pinimg.com/originals/21/39/e0/2139e0405ae392726363954e18afa342.jpg",
"https://wallpaper.dog/large/996034.jpg",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2c83e90-8d65-4ad5-8b1d-ad15feef3066/d7p3jel-4074ed41-d9c8-4ec9-b3f1-be69c8c15c3b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyYzgzZTkwLThkNjUtNGFkNS04YjFkLWFkMTVmZWVmMzA2NlwvZDdwM2plbC00MDc0ZWQ0MS1kOWM4LTRlYzktYjNmMS1iZTY5YzhjMTVjM2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qZ2byA4miSog1q8ZKQ15ueXid7QShCkPbGAjzUHaKbE",
"https://wallpaperaccess.com/full/53084.jpg",
"https://images.hdqwalls.com/wallpapers/nexus-space-digital-universe-4k-rt.jpg",];

  var contadorNovo;

  const [contador, setContador] = useState(0);


  const [image, setImage] = useState(imageArray[0]);


  function ChangePicForward(){
    if(contador < imageArray.length - 1){
      contadorNovo = contador + 1;
    }
    else{
      contadorNovo = 0;
    }
    setContador(contadorNovo);
    setImage(imageArray[contadorNovo]);
  }


  function ChangePicBackwards(){
    contadorNovo = imageArray.length - 1;
    if(contador > 0){
    contadorNovo = contador -1;
    }
    setContador(contadorNovo);
    setImage(imageArray[contadorNovo]);
  }


  return(
    <body>

    <div className='App'>
    <img src={image} />

<div className='button'>
  <div>
    <button onClick={ChangePicBackwards}>
      <span>
        Voltar
      </span>
    </button>
    </div>
    <div>
    <button onClick={ChangePicForward} >
      <span>
      Avançar
      </span>
    </button>
    </div>
    </div>
    </div>
    </body>    
  )
}