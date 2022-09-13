// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById('d1-speed').value;
  let d1Limit = +document.getElementById('d1-limit').value;
  let d2Speed = +document.getElementById('d2-speed').value;
  let d2Limit = +document.getElementById('d2-limit').value;
  let d3Speed = +document.getElementById('d3-speed').value;
  let d3Limit = +document.getElementById('d3-limit').value;

  // Calculate & Output Ticket Types
  document.getElementById('d1-ticket').innerHTML = Ticket(Ticket);
  document.getElementById('d2-ticket').innerHTML = Ticket(Ticket);
  document.getElementById('d3-ticket').innerHTML = Ticket(Ticket);
}
function Ticket(){
  let Ticket;
  if (Speed > Limit + 40) {
    Ticket = 'Really Big Ticket';
  } else if (Speed > Limit + 20) {
    Ticket = 'Big Ticket';
  } else if (Speed > Limit) {
    Ticket = 'Small Ticket';
  } else {
    Ticket = 'No Ticket';
  }
  return Ticket;
}