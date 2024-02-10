// Show score on page


    /*
    let falsy_value = -1;
    if (falsy_value){
      console.log(`${falsy_value} behaves as truthy value in JavaScript!`)
    }
    */
    let score = (JSON.parse(localStorage.getItem('score'))) || ({
      'win': 0,
      'lose': 0,
      'draw': 0
    });
    /*
  if (!score){
    score = {
      'win': 0,
      'lose': 0,
      'draw': 0};
  }
  */

    function scoreOnPage() {
      const pageScore = document.querySelector('.js-score');
      pageScore.innerHTML = `Wins: ${score.win} | Losses: ${score.lose} | Draws: ${score.draw}`;
    }

    function get_current_score() {
      console.log(score);
    }

    function reset_score() {
      score.win = 0;
      score.lose = 0;
      score.draw = 0;
      console.log(`Score has been reset.`);
      console.log(score);
    }

    function decideComputerChoice() {
      let computerMove = Math.random();
      computerMove = decideComputerMove(computerMove);
      return computerMove;
    }

    function showMovesOnPage(computerMove, playerMove) {
      const currentScorePage = document.querySelector('.js-moveset');

      let yourMoveImagePath = `images/${playerMove}-emoji.png`;
      let computerMoveImagePath = `images/${computerMove}-emoji.png`;

      currentScorePage.innerHTML = `
      You chose <img class="move-icon" src=${yourMoveImagePath}>
    Computer chose <img class="move-icon" src=${computerMoveImagePath}>
      `;

    }

    function decideOutcome(playerMove, computerMove) {

      if (playerMove === computerMove) {

        result = 'It was a draw.';
      }

      else if (playerMove == 'rock') {

        if (computerMove == 'scissors') {

          result = 'You win!';
        }
        else {

          result = 'You lost.';
        }

      }

      else if (playerMove == 'paper') {
        if (computerMove === 'rock') {

          result = 'You win!';
        }
        else {

          result = 'You lost.';
        }

      }
      else {
        if (computerMove == 'paper') {

          result = 'You win!';
        }
        else {

          result = 'You lost.';
        }
      }

      console.log(result);

      const currentResultPage = document.querySelector('.js-result');
      currentResultPage.innerHTML = result;


      if (result === 'You win!') {
        score.win += 1;
      }
      else if (result === 'You lost.') {
        score.lose += 1;
      }
      else {
        score.draw += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));
    }


    function decideComputerMove(computerMove) {
      if (computerMove >= 0 && computerMove < 1 / 3) {
        computerMove = 'rock';
      }
      else if ((computerMove >= 1 / 3) && (computerMove < 2 / 3)) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissors';
      }
      return computerMove;
    }
