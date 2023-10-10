import MainWelcome1 from "../img/main_welcome_1.jpg";
import MainWelcome2 from "../img/main_welcome_2.jpg";
import MainWelcome3 from "../img/main_welcome_3.jpg";
import MainIssue1 from "../img/main_issue_1.jpg";
import MainIssue2 from "../img/main_issue_2.jpg";
import MainIssue3 from "../img/main_issue_3.jpg";
import MainSolution1 from "../img/main_solution_1.jpg";
import MainSolution2 from "../img/main_solution_2.jpg";
import MainSolution3 from "../img/main_solution_3.jpg";
import MainLast1 from "../img/main_last_1.png";
import MainLast2 from "../img/main_last_2.png";
import Kakaotalk from "../img/kakao-talk.png";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Google from "../img/google.png";
import KakaoPay from "../img/kakaoPay.png";
import NaverPay from "../img/naverPay.png";


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
      return MainIssue3;
    case "7":
      return MainSolution1;
    case "8":
      return MainSolution2;
    case "9":
      return MainSolution3;
    case "10":
      return MainLast1;
    case "11":
      return MainLast2;
    default:
      return null;
  }
}

export const getSNSImg = (snsId) => {
  const targetSNSImg = String(snsId);
  switch(targetSNSImg) {
    case "1":
      return Kakaotalk;
    case "2":
      return Facebook;
    case "3":
      return Twitter;
    case "4":
      return Google;
    case "5":
      return KakaoPay
    case "6":
      return NaverPay
    default:
      return null;
  }
}