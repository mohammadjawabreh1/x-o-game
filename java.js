const  squares = document.querySelectorAll('.square');
const theTitle = document.querySelector('h1');

let x=0 ;
const winner = ()=>{
    let squaresNew = [];
    for(let i=0; i< squares.length;i++){
        squaresNew [i]= squares[i].innerHTML;
    }

    if(squaresNew[0] != '' && squaresNew[0] == squaresNew[1] && squaresNew[1] == squaresNew[2] ){
        theTitle.innerHTML = ` ${squaresNew[0] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[0] != '' && squaresNew[0] == squaresNew[3] && squaresNew[0] == squaresNew[6] ){
        theTitle.innerHTML = ` ${squaresNew[0] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[0] != '' && squaresNew[0] == squaresNew[4] && squaresNew[0] == squaresNew[8] ){
        theTitle.innerHTML = ` ${squaresNew[0] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[1] != '' && squaresNew[1] == squaresNew[4] && squaresNew[1] == squaresNew[7] ){
        theTitle.innerHTML = ` ${squaresNew[1] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[2] != '' && squaresNew[2] == squaresNew[5] && squaresNew[2] == squaresNew[8] ){
        theTitle.innerHTML = ` ${squaresNew[2] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[2] != '' && squaresNew[2] == squaresNew[4] && squaresNew[2] == squaresNew[6] ){
        theTitle.innerHTML = ` ${squaresNew[2] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[3] != '' && squaresNew[3] == squaresNew[4] && squaresNew[3] == squaresNew[5] ){
        theTitle.innerHTML = ` ${squaresNew[3] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }else if (squaresNew[6] != '' && squaresNew[6] == squaresNew[7] && squaresNew[6] == squaresNew[8] ){
        theTitle.innerHTML = ` ${squaresNew[4] } winner`;
        setInterval(function(){theTitle.innerHTML += ' .'}, 1000);
        setTimeout(function(){window.location.reload();},3500);
    }
}
squares.forEach( e =>{
e.addEventListener('click', function(e){ 
    if(x == 0){
        
        e.target.textContent = 'x';
        theTitle.textContent = ' o turn';
        winner();
        x++;
    }else if (x == 1){
        e.target.textContent = 'o';
        theTitle.textContent = ' x turn';
        winner();
        x--;
    }
});
})