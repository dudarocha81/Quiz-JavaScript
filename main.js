const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um estilo de design web",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a principal finalidade do JavaScript no desenvolvimento web?",
        respostas: [
            "Estilização de páginas",
            "Manipulação de banco de dados",
            "Adicionar interatividade às páginas",
        ],
        correta: 2
    },
    {
        pergunta: "Como declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "variable myVar = 10;",
            "const myVar = 10;",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Um objeto global",
            "Um bloco de código reutilizável",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "Não há diferença",
            "let é usado para variáveis mutáveis, const para variáveis imutáveis",
            "const é usado para variáveis mutáveis, let para variáveis imutáveis",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Um padrão de design",
            "A representação da estrutura da página na memória",
        ],
        correta: 2
    },
    {
        pergunta: "Como é feita a inclusão de um arquivo JavaScript em uma página HTML?",
        respostas: [
            "<script src='meuarquivo.js'></script>",
            "<javascript include='meuarquivo.js'></javascript>",
            "<link rel='javascript' href='meuarquivo.js'>",
        ],
        correta: 0
    },
    {
        pergunta: "O que é 'hoisting' em JavaScript?",
        respostas: [
            "Uma técnica de otimização de código",
            "O processo de elevação de variáveis e funções durante a fase de compilação",
            "Um erro comum de sintaxe",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um callback em JavaScript?",
        respostas: [
            "Uma função que chama outra função",
            "Uma função passada como argumento para outra função",
            "Um tipo especial de variável",
        ],
        correta: 1
    },
    {
        pergunta: "Como verificar o tipo de uma variável em JavaScript?",
        respostas: [
            "typeof minhaVariavel;",
            "typeOf(minhaVariavel);",
            "typeCheck(minhaVariavel);",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz');
//querySelector seleciona o primeiro elemento dentro do documento correspondente ao grupo especificado de seletores.
const template = document.querySelector('template');

//para cada item na Variavel perguntas
for(const item of perguntas){
    //quizItem = O conteúdo dentro do elemento template é copiado pelo cloneNode. true significa que todo o conteúdo deve ser copiado para quizItem.
    const quizItem = template.content.cloneNode(true); 

    //Dentro de quizItem é chamado o texto do primeiro elemento h3, que é atribuído para a propriedade pergunta do objeto item. Atualiza o conteúdo de <h3> dentro do quizItem com o valor da propriedade pergunta do objeto item. 
    item.pergunta = quizItem.querySelector('h3').textContent;

    for( let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);//cria uma cópia do nó, incluindo o <dt> e seu conteúdo.
       dt.querySelector('span').textContent = resposta;
    
        quizItem.querySelector('dl').appendChild(dt); //O <dt> é anexado como um novo filho ao elemento <dl>. Agora o conteúdo clonado de <dt> está dentro da <dl>
      }
    
      quizItem.querySelector('dl dt').remove();
      //remove o dt que está em dl, deletando o texto "pergunta 01"
      
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }

