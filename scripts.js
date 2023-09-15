// let isRed= 'true';

// function clicou(){
//     const h1 = document.querySelector('h1');
    

//     if(isRed){
//         h1.style.backgroundColor ='#00F';
//     }else{
//         h1.style.backgroundColor='#F00';
//     }
//     isRed = !isRed;
// }



// /** ADICIONANDO ITENS NUMA LISTA IMPORTANTE */

// /* pegando os elementos*/
// const ul = document.querySelector('ul');
// const input = document.querySelector('input');

// /* criando evento para pegar a tecla*/
// input.addEventListener('keyup', handleKeyUp);

// /* criando função para adicioanr iten na lista*/
// function handleKeyUp(e){
//     if(e.key === 'Enter'){
//     /*cria variavel para o elemento*/
//     const newli = document.createElement('li');
//     /*pega a variavel e faz receber o que tem no input */
//     newli.innerHTML = input.value;
//     /* adiciona oque pegou no input na variavel da lista newli*/
//     ul.appendChild(newli);

//     /*apaga oque foi digitado no input */
//     input.value='';
//     }      

// }


// function clica(){
    
//     const input = document.querySelector('.senha');

//     if(input.getAttribute('type') == 'text'){
//         input.setAttribute('type', 'password');
//     }else{
//         input.setAttribute('type', 'text');
//     }

// }


// class Person {

//     steps = 0;


//     constructor(name){
//         this.name = name;
//     }
    
//     takeAStep(){
//         this.steps++;
//     }
// }

// let p1 = new Person ('Leo');


// p1.takeAStep()
// p1.takeAStep()
// p1.takeAStep()
// console.log(`Passo de ${p1.name}: ${p1.steps}`);



const char = createKnight('Leo');
const monster  =  createLittleMonster ('Monstro');

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    
)