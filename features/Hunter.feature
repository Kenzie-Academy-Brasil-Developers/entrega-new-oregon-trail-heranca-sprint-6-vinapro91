# language: pt

Funcionalidade: Hunter
    Como um Hunter eu devo pegar mais mantimentos
    Para que eu possa dar comida para outro viajante.

    Contexto: 
        Dado um Hunter de nome "Thomas"
        E sua comida começa em 2

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a comida deve ser 7

    Cenário: comeu e ficou sem comida
        Quando o Hunter parar para comer 1 vezes
        Então a comida decai para 0
        
    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a comida deve ser 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter parar para comer 2 vezes
        Então a comida deve ser 3
    
    Cenário: Tentou dar 2 comida para outro viajante e deu certo
        Quando o Hunter der 2 comida para outro viajante 
        E a comida for maior que 2 
        Então o viajante fica com 3 de comida
        Então o Hunter fica com 0 de comida
    
    Cenário: Tentou dar 3 comida para outro viajante e não deu certo
        Quando o Hunter der 3 comida para outro viajante 
        E a comida for igual a 2
        Então a comida do Hunter permanece igual a 2
