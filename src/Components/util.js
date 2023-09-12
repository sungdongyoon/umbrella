import MainWelcome1 from "../img/main_welcome_1.jpg";
import MainWelcome2 from "../img/main_welcome_2.jpg";
import MainWelcome3 from "../img/main_welcome_3.jpg";
import MainIssue1 from "../img/main_issue_1.jpg";
import MainIssue2 from "../img/main_issue_2.jpg";
import MainSolution1 from "../img/main_solution_1.jpg";
import MainSolution2 from "../img/main_solution_2.jpg";
import MainSolution3 from "../img/main_solution_3.jpg";
import MainLast1 from "../img/main_last_1.png";
import MainLast2 from "../img/main_last_2.png";

export const getMainImg = (mainId) => {
  const targetMainImg = String(mainId);
  switch(targetMainImg) {
    case "1":
      return MainWelcome1;
    case "2":
      return MainWelcome2;
    case "3":
      return MainWelcome3;
    case "4":
      return MainIssue1;
    case "5":
      return MainIssue2;
    case "6":
      return MainSolution1;
    case "7":
      return MainSolution2;
    case "8":
      return MainSolution3;
    case "9":
      return MainLast1;
    case "10":
      return MainLast2;
    default:
      return null;
  }
}