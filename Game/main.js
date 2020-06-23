window.onload = function(){
    for (let  i=0; i<9; i++){
        document.getElementById('field').innerHTML+=' <div class="cell"></div> ';
    }
    let step = 0;
    document.getElementById('field').onclick = function(event){
        console.log(event);
        if (event.target.className == 'cell'){
            if (step%2==0){
                event.target.innerHTML = '♦';
            }
            else { 
               event.target.innerHTML = '♠';   
            }
            step++;
            results();
        }
    }
    function results(){
        let cells = document.getElementsByClassName('cell');
        // console.log(cell);
        if (cells[0].innerHTML=='♦' && cells[1].innerHTML=='♦' && cells[2].innerHTML=='♦') alert('Tambourines won ♦');
        if (cells[3].innerHTML=='♦' && cells[4].innerHTML=='♦' && cells[5].innerHTML=='♦') alert('Tambourines won ♦');
        if (cells[6].innerHTML=='♦' && cells[7].innerHTML=='♦' && cells[8].innerHTML=='♦') alert('Tambourines won ♦');
        //vertical
        if (cells[0].innerHTML=='♦' && cells[3].innerHTML=='♦' && cells[6].innerHTML=='♦') alert('Tambourines won ♦');
        if (cells[1].innerHTML=='♦' && cells[4].innerHTML=='♦' && cells[7].innerHTML=='♦') alert('Tambourines won ♦');
        if (cells[2].innerHTML=='♦' && cells[5].innerHTML=='♦' && cells[8].innerHTML=='♦') alert('Tambourines won ♦');
        //diagonal
        if (cells[0].innerHTML=='♦' && cells[4].innerHTML=='♦' && cells[8].innerHTML=='♦') alert('Tambourines won ♦');
        if (cells[2].innerHTML=='♦' && cells[4].innerHTML=='♦' && cells[6].innerHTML=='♦') alert('Tambourines won ♦');
        //PEAKS
        if (cells[0].innerHTML=='♠' && cells[1].innerHTML=='♠' && cells[2].innerHTML=='♠') alert('Peaks won ♠');
        if (cells[3].innerHTML=='♠' && cells[4].innerHTML=='♠' && cells[5].innerHTML=='♠') alert('Peaks won ♠');
        if (cells[6].innerHTML=='♠' && cells[7].innerHTML=='♠' && cells[8].innerHTML=='♠') alert('Peaks won ♠');
        //vertical
        if (cells[0].innerHTML=='♠' && cells[3].innerHTML=='♠' && cells[6].innerHTML=='♠') alert('Peaks won ♠');
        if (cells[1].innerHTML=='♠' && cells[4].innerHTML=='♠' && cells[7].innerHTML=='♠') alert('Peaks won ♠');
        if (cells[2].innerHTML=='♠' && cells[5].innerHTML=='♠' && cells[8].innerHTML=='♠') alert('Peaks won ♠');
        //diagonal
        if (cells[0].innerHTML=='♠' && cells[4].innerHTML=='♠' && cells[8].innerHTML=='♠') alert('Peaks won ♠');
        if (cells[2].innerHTML=='♠' && cells[4].innerHTML=='♠' && cells[6].innerHTML=='♠') alert('Peaks won ♠');
    }
}
