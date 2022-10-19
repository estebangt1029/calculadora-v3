const pantalla=document.querySelector('.pantalla')
const operador=document.querySelector('.operador')
const sumar=document.querySelector('#sumar')
const restar=document.querySelector('#restar')
const multiplicar=document.querySelector('#multiplicar')
const dividir=document.querySelector('#dividir')
const igual=document.querySelector('#igual')
const borrar=document.querySelector('#borrar')

const uno=document.querySelector('#uno')
const dos=document.querySelector('#dos')
const tres=document.querySelector('#tres')
const cuatro=document.querySelector('#cuatro')
const cinco=document.querySelector('#cinco')
const seis=document.querySelector('#seis')
const siete=document.querySelector('#siete')
const ocho=document.querySelector('#ocho')
const nueve=document.querySelector('#nueve')
const diez=document.querySelector('#diez')

let variable=document.getElementById('val1')

let numero2=0

for(let i=0; i<=9;i++){
    document.getElementById('num'+i).addEventListener('click',presion)
}

function presion(e){
    pantalla.innerText=pantalla.innerText+e.target.value
}

sumar.addEventListener('click',()=>{
    operador.innerHTML='+'
    variable=pantalla.textContent
    pantalla.innerText=''
})

restar.addEventListener('click',()=>{
    operador.innerHTML='-'
    variable=pantalla.textContent
    pantalla.innerText=''
})

multiplicar.addEventListener('click',()=>{
    operador.innerHTML='*'
    variable=pantalla.textContent
    pantalla.innerText=''
})

dividir.addEventListener('click',()=>{
    operador.innerHTML='/'
    variable=pantalla.textContent
    pantalla.innerText=''
})

borrar.addEventListener('click',()=>{
    operador.innerText='.'
    pantalla.innerText=' '
})

igual.addEventListener('click',()=>{
    if(operador.innerText==='+'){
        pantalla.innerText=(parseInt(variable)+ parseInt(pantalla.textContent))
    }else if(operador.innerText==='-'){
        pantalla.innerText=(parseInt(variable)- parseInt(pantalla.textContent))
    }else if(operador.innerText==='*'){
        pantalla.innerText=(parseInt(variable)* parseInt(pantalla.textContent))
    }else if(operador.innerText==='/'){
        pantalla.innerText=(parseInt(variable)/ parseInt(pantalla.textContent))
    }
})