import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

export default class extends Controller {
  static values = {choice: Number}

  addModal() {
    const modal = document.getElementById("modal");
    modal.style.display = 'block';

    const choiceOutput = document.getElementById("choice-output");
    choiceOutput.classList.add("card-" + this.getStringByChoice(this.choiceValue));

    const modalWindow = new Modal(modal);
    modalWindow.show();

    setTimeout(() => {
      this.addResult(Math.floor(Math.random() * 3))
    }, 1000);
  }

  addResult(curbChoice) {
    const curbChoiceString = this.getStringByChoice(curbChoice);

    let intResult = curbChoice - this.choiceValue;
    if (intResult < 0) {
      intResult += 3;
    }

    switch (intResult) {
      case 0: {
        this.outputDraw(curbChoiceString);
        break;
      }
      case 1: {
        this.outputLose(curbChoiceString);
        break;
      }
      case 2: {
        this.outputWin(curbChoiceString);
      }
    }
  }

  getStringByChoice(choice) {
    switch (choice) {
      case 0: {
        return 'rock';
      }
      case 1: {
        return 'paper';
      }
      case 2: {
        return 'scissors';
      }
    }
  }

  outputWin(curbChoiceString) {
    const title = document.getElementById("output-title");
    title.innerText = "YOU WON!";

    const description = document.getElementById("output-description");
    description.innerText = "Curb with " + curbChoiceString + " lost";

    const modal = document.getElementById("output");
    modal.style.display = 'block';

    const choiceOutput = document.getElementById("output-image");
    choiceOutput.classList.add("card-" + curbChoiceString);

    const modalWindow = new Modal(modal);
    modalWindow.show();
  }

  outputLose(curbChoiceString) {
    const title = document.getElementById("output-title");
    title.innerText = "YOU LOST!";

    const description = document.getElementById("output-description");
    description.innerText = "Curb with " + curbChoiceString + " won";

    const modal = document.getElementById("output");
    modal.style.display = 'block';

    const choiceOutput = document.getElementById("output-image");
    choiceOutput.classList.add("card-" + curbChoiceString);

    const modalWindow = new Modal(modal);
    modalWindow.show();
  }

  outputDraw(curbChoiceString) {
    const title = document.getElementById("output-title");
    title.innerText = "IT'S DRAW!";

    const description = document.getElementById("output-description");
    description.innerText = "Curb has chosen " + curbChoiceString;

    const modal = document.getElementById("output");
    modal.style.display = 'block';

    const choiceOutput = document.getElementById("output-image");
    choiceOutput.classList.add("card-" + curbChoiceString);

    const modalWindow = new Modal(modal);
    modalWindow.show();
  }
}