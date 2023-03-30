var calledTicketsSection = document.getElementById('calledTickets');
var lastTicketCalled = document.getElementById('lastTicketCalled');

var tickets = [
    { "service": "Caisse", "ticket": "1" },
    { "service": "Caisse", "ticket": "2" },
    { "service": "Caisse", "ticket": "3" },
    { "service": "Caisse", "ticket": "4" },
    { "service": "Caisse", "ticket": "5" },
    { "service": "Caisse", "ticket": "6" },
    { "service": "Caisse", "ticket": "7" },
    { "service": "Caisse", "ticket": "8" },
    { "service": "Caisse", "ticket": "9" }
];

var ticket = { "service": "Caisse", "ticket": "10" };

var index = 10;

setTickets();
setActualTicket();

function setTickets() {
    tickets.forEach(t => {
        calledTicketsSection.innerHTML += setTicketTemplate(t.service, t.ticket, "old");
    });
}

function setActualTicket() {
    lastTicketCalled.innerHTML = setTicketTemplate(ticket.service, ticket.ticket, "actual");
    lastTicketCalled.classList.add('text-white');
    setBackground().then(() => {
        document.getElementById('actual').style.backgroundColor = "#FFFFFF";
        lastTicketCalled.classList.remove('text-white');
    }
    );
}

function setTicketTemplate(service, number, actual) {
    return `<div class="card p-1 border-0" id="${actual}">
    <div class="card-body border rounded row p-0 m-0 text-center">
      <div class="col-6 p-0">
        <b>Service:</b><br /> ${service}
      </div>
      <div class="col-6 p-0">
        <b>Clients:</b><br /> ${number}
      </div>
    </div>
    </div>`;
}

async function setBackground() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('actual').style.backgroundColor = "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
        await delay(i == 1 ? 0 : 1000)
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}