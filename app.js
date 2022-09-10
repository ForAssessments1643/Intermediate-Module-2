
class App{
run() {
 console.log("My name is Hrithik, I have no institution, My GitHub username is ForAssessments1643.")

 function generateTxtFile(text){
  var textFile = null;
  var data = new Blob([text], {type: 'text/plain'}); 
  if (textFile !== null) {  
    window.URL.revokeObjectURL(textFile);  
  }  
  textFile = window.URL.createObjectURL(data);  
  return textFile; 
}
(function () {  
  var btnCreateFile = document.getElementById('btnCreateFile'),  
  dummyText = document.getElementById('dummyText');  
  btnCreateFile.addEventListener('click', function () {
    var link = document.getElementById('downloadFile');  
    link.href = generateTxtFile(dummyText.innerText);  
    link.style.display = 'inline-block';  
  }, false);
})(); 

 var dice = {
  sides: 13,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

const Winner = dice.roll()
  

  function printWinner(string) {
    var WinnerCategory = document.getElementById('WinnerCategory');
    WinnerCategory.innerHTML = string;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    
        if(Winner == 1) {
          printWinner("Best Consumer Solution")
        }
        else if (Winner == 2) {
          printWinner("Best Enterprise Solution")
        }
        else if (Winner == 3) {
          printWinner("Most Innovative Solution")
        }
        else if (Winner == 4) {
          printWinner("Best Gaming Solution")
        }
        else if (Winner == 5) {
          printWinner("Best Health Solution")
        }
        else if (Winner == 6) {
          printWinner("Best Agricultural Solution")
        }
        else if (Winner == 7) {
          printWinner("Best Educational Solution")
        }
        else if (Winner == 8) {
          printWinner("Best Financial Solution")
        }
        else if (Winner ==9) {
          printWinner("Best Hackathon Solution")
        }
        else if (Winner == 10) {
          printWinner("Best 'South African' Solution")
        }
        else if (Winner == 11) {
          printWinner("Best Campus Cup Solution")
        }
        else if (Winner == 12) {
          printWinner("Best African Solution")
        }
        else if (Winner == 13) {
          printWinner("Huawei Category 15")
        }       
      }     
}
}


window.app = new App();
window.app.run();





