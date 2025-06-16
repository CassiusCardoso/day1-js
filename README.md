Meu Aprendizado em JavaScript: Conceitos Fundamentais
Neste projeto, explorei fundamentos de JavaScript por meio de dois exercícios práticos: um sistema para calcular médias de alunos e determinar seus status, e um jogo de adivinhação de números. Abaixo, compartilho os principais conceitos que aprendi, explicados de forma clara e com exemplos práticos, perfeitos para quem está começando na programação ou quer revisar esses tópicos.
Tópicos Estudados

Objetos e Arrays em JavaScript
Métodos de Arrays: reduce
Estruturas Condicionais: if/else
Laços de Repetição: for...of e while
Entrada de Usuário no Node.js com readline
Validação de Entrada
Template Literals
Controle de Fluxo: break e continue

Explicação dos Conceitos
1. Objetos e Arrays em JavaScript
O que é? Objetos são coleções de propriedades (chave-valor) usadas para armazenar dados estruturados. Arrays são listas ordenadas que armazenam múltiplos valores, como uma coleção de objetos.
Como usei? No primeiro exercício, criei um array de objetos chamado alunos, onde cada objeto representava um aluno com propriedades nome (string) e notas (array de números). Exemplo:

Um aluno: { nome: 'João', notas: [6, 7, 8] }
Array de alunos: [{ nome: 'João', notas: [6, 7, 8] }, { nome: 'Maria', notas: [10, 9, 8, 7] }, ...]

Por que é útil? Arrays de objetos permitem gerenciar múltiplos registros (como uma lista de alunos) de forma organizada, acessando propriedades com objeto.propriedade ou iterando com loops.
2. Métodos de Arrays: reduce
O que é? O método reduce percorre um array e acumula valores em um único resultado, como somar números ou concatenar strings.
Como usei? No exercício dos alunos, usei reduce para calcular a média das notas de cada aluno. Exemplo:

Para [6, 7, 8], o reduce soma os valores (6 + 7 + 8 = 21) e divido pelo tamanho do array (21 / 3 = 7).
Código: aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length

Por que é útil? reduce simplifica operações que acumulam valores, como somas ou médias, em uma única linha, tornando o código mais limpo.
3. Estruturas Condicionais: if/else
O que é? Estruturas if/else permitem executar diferentes blocos de código com base em condições.
Como usei? No exercício dos alunos, usei if/else para determinar o status de cada aluno com base na média:

Média ≥ 7: status = 'Aprovado'
Média ≥ 5 e < 7: status = 'Recuperação'
Média < 5: status = 'Reprovado'

Por que é útil? Permite tomar decisões no código, como classificar resultados ou direcionar o fluxo do programa com base em condições específicas.
4. Laços de Repetição: for...of e while
O que é? Laços permitem repetir um bloco de código várias vezes. O for...of itera sobre elementos de um array, enquanto o while repete enquanto uma condição for verdadeira.
Como usei?

No exercício dos alunos: Usei for...of para percorrer o array alunos, processando cada aluno (ex.: calcular média e definir status).
No jogo de adivinhação: Usei while para repetir até 5 tentativas ou até o usuário acertar o número secreto (while (tentativas < 5)).

Por que é útil? for...of é ideal para arrays, simplificando a iteração. while é útil quando o número de repetições depende de uma condição dinâmica, como tentativas do usuário.
5. Entrada de Usuário no Node.js com readline
O que é? No Node.js, o módulo readline permite capturar entrada do usuário no terminal, já que o prompt (usado em navegadores) não está disponível.
Como usei? No jogo de adivinhação, substituí o prompt por readline para pedir ao usuário um número entre 1 e 10. Usei async/await com rl.question para esperar a entrada do usuário no terminal.
Por que é útil? Permite criar programas interativos no Node.js, como jogos ou formulários, capturando entrada do usuário de forma robusta.
6. Validação de Entrada
O que é? Validação verifica se a entrada do usuário é válida antes de processá-la, evitando erros como NaN ou valores fora do intervalo esperado.
Como usei? No jogo de adivinhação, validei se o chute era um número entre 1 e 10 com isNaN(chute) || chute < 1 || chute > 10. Se inválido, exibia uma mensagem de erro e permitia tentar novamente sem contar como tentativa.
Por que é útil? Garante que o programa lide apenas com dados válidos, melhorando a robustez e a experiência do usuário.
7. Template Literals
O que é? Template literals (`texto ${variável} texto`) são uma forma moderna de concatenar strings em JavaScript, mais legível que usar +.
Como usei? Nos dois exercícios, usei template literals para formatar mensagens, como:

"O aluno ${aluno.nome} foi aprovado com média ${media.toFixed(2)}."
"Tente novamente! Você ainda tem ${5 - tentativas} tentativas restantes."

Por que é útil? Torna o código mais claro e fácil de manter, especialmente ao incluir variáveis em strings.
8. Controle de Fluxo: break e continue
O que é? break sai de um loop imediatamente, enquanto continue pula para a próxima iteração.
Como usei? No jogo de adivinhação:

Usei break para encerrar o loop quando o usuário acertava o número secreto.
Usei continue para voltar ao início do loop sem contar a tentativa quando o input era inválido.

Por que é útil? Permite controlar o fluxo de loops, interrompendo ou pulando iterações com base em condições específicas.
Como Executei os Exercícios

Ambiente: Usei o Visual Studio Code com Node.js (v20.9.0).
Execução: Para o jogo de adivinhação, configurei o módulo readline para capturar entrada no terminal. Para o exercício dos alunos, usei o terminal integrado do VS Code (node arquivo.js).
Desafios: Aprendi a lidar com erros como prompt is not defined no Node.js e a importância de validar entradas para evitar comportamentos inesperados.

Conclusão
Esses exercícios me ajudaram a solidificar conceitos fundamentais de JavaScript, desde estruturas de dados (objetos e arrays) até controle de fluxo e interação com o usuário. Estou animado para aplicar esses conhecimentos em projetos mais complexos e continuar aprendendo! 🚀
Se você está começando em JavaScript ou quer revisar esses conceitos, espero que este README tenha sido útil. Sinta-se à vontade para compartilhar suas dicas ou perguntas nos comentários no LinkedIn!
