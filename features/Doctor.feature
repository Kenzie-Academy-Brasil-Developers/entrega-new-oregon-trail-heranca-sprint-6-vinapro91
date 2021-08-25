# language: pt

    Funcionalidade: Doctor
        Como um Doctor eu devo curar outro viajante
        Para que ele possa ficar saudavel 

    Contexto: 
        Dado um Doctor de nome "Felipe"
        E tem a habilidade de curar

    Cenário: curou outro viajante
        Quando o Doctor cura 1 vez
        Então o viajante fica saudave
    
    Cenário: o Doctor comeu e ficou saudavel
        Quando o Doctor comer 1 vezes 
        E a comida foi maior que 1
        Então o Doctor segue saudavel