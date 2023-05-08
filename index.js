var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
document.addEventListener('keypress',function(res){
    if(a.includes(res.key)){
        Pressed(res.key);
        sound(res.key);
    }
})

function Pressed(currentkey){
    let u= document.querySelector('.'+currentkey);

    u.classList.add('pressed')

    setTimeout(function(){
        u.classList.remove('pressed')
    },150);
}

function go(key){
    sound(key);
}

function sound(key){
    let b = a.indexOf(key)+1;
    var rout = 'sounds/key'+b+'.mp3';
    var x = new Audio(rout);
    x.play();
}
