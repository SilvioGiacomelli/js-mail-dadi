document.addEventListener('DOMContentLoaded', function() {
  // Lista delle email consentite
  const emailConsentite = [
      'werewolf.xy@email.com',
      'silvio.giacomelli@live.com',
      'marco.polo@email.com'
  ];

  // Chiedere all'utente la sua email
  let emailUtente = prompt("Inserisci la tua email:");

  // Controllare l'email è nella lista
  let trovato = false;
  for (let i = 0; i < emailConsentite.length; i++) {
      if (emailUtente === emailConsentite[i]) {
          trovato = true;
          break; 
      }
  }

  // Selezionare l'elemento HTML dove mostrare il messaggio
  let elementoMessaggio = document.getElementById('output');

  // Stampare un messaggio appropriato
  if (trovato) {
      elementoMessaggio.textContent = "Accesso consentito.";
  } else {
      elementoMessaggio.textContent = "Accesso negato."; 
  }
});

// Generare un numero casuale tra 1 e 6 per il giocatore
let dadoGiocatore = Math.floor(Math.random() * 6) + 1;

// Generare un numero casuale tra 1 e 6 per il pc
let dadoComputer = Math.floor(Math.random() * 6) + 1;

// Stampa i risultati
console.log("Giocatore lancia un dado: " + dadoGiocatore);
console.log("Computer lancia un dado: " + dadoComputer);

// Vincitore
if (dadoGiocatore > dadoComputer) {
  console.log("Il giocatore vince!");
} else if (dadoGiocatore < dadoComputer) {
  console.log("Il computer vince!");
} else {
  console.log("Pareggio!");
}

// Stampa i risultati dei dadi
