const jogador1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const jogador2 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const jogador3 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const jogador4 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const jogador5 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const jogador6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

async function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

async function declareWinner(character1, character2) {
  console.log("Resultado final: ");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`${character1.NOME} venceu a corrida! Parabéns!🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`${character2.NOME} venceu a corrida! Parabéns!🏆`);
  } else {
    console.log("A corrida terminou em empate !");
  }
}

async function getPistaCorrida() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

async function logRollResult(characterName, block, resultadoDado, attribute) {
  console.log(
    `${characterName} rolou um dado de ${block} ${resultadoDado} + ${attribute} = ${
      resultadoDado + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  try {
    for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Rodada ${round}`);
      //Sortear Pista
      let block = await getPistaCorrida();
      console.log(`Bloco: ${block}`);
      // Rolar Dados
      let resultadoDado1 = await rolarDado();
      let resultadoDado2 = await rolarDado();

      //teste de habilidade
      let totalSkill1 = 0;
      let totalSkill2 = 0;
      let powerResult1 = 0;
      let powerResult2 = 0;

      if (block === "RETA") {
        totalSkill1 = resultadoDado1 + character1.VELOCIDADE;
        totalSkill2 = resultadoDado2 + character2.VELOCIDADE;

        await logRollResult(
          character1.NOME,
          "velocidade",
          resultadoDado1,
          character1.VELOCIDADE
        );

        await logRollResult(
          character2.NOME,
          "velocidade",
          resultadoDado2,
          character2.VELOCIDADE
        );
      }
      if (block === "CURVA") {
        totalSkill1 = resultadoDado1 + character1.MANOBRABILIDADE;
        totalSkill2 = resultadoDado2 + character2.MANOBRABILIDADE;

        await logRollResult(
          character1.NOME,
          "manobrabilidade",
          resultadoDado1,
          character1.MANOBRABILIDADE
        );

        await logRollResult(
          character2.NOME,
          "manobrabilidade",
          resultadoDado2,
          character2.MANOBRABILIDADE
        );
      }
      if (block === "CONFRONTO") {
        powerResult1 = resultadoDado1 + character1.PODER;
        powerResult2 = resultadoDado2 + character2.PODER;

        console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

        await logRollResult(
          character1.NOME,
          "poder",
          resultadoDado1,
          character1.PODER
        );

        await logRollResult(
          character2.NOME,
          "poder",
          resultadoDado2,
          character2.PODER
        );

        if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
          console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
          );
          character2.PONTOS--;
        }

        if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
          console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
          );
          character1.PONTOS--;
        }

        if (powerResult2 === powerResult1) {
          ("Confronto empatado! Nenhum ponto foi perdido.");
        }
      }

      if (totalSkill1 > totalSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if (totalSkill2 > totalSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      }

      console.log("__________________________________________");
    }
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  console.log(
    `🏁 Começando corrida entre  ${jogador3.NOME} e ${jogador2.NOME} 🏁\n `
  );
  await playRaceEngine(jogador3, jogador2);
  await declareWinner(jogador3, jogador2);
  
  process.exit(0);
}

main();
