const events = [
  { date: '2025-08-01', time: '10:00 AM', title: 'Orientation Day', desc: 'Welcome session for new members.' },
  { date: '2025-08-05', time: '02:00 PM', title: 'Guest Lecture: AI Trends', desc: 'Talk by industry expert Dr. Smith.' },
  { date: '2025-08-10', time: '04:00 PM', title: 'Workshop: Web Dev Basics', desc: 'Hands-on coding session.' },
  // Add more events as needed
];

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const container = document.querySelector('.events-grid');

events.forEach(ev => {
  const div = document.createElement('div');
  div.classList.add('event-card');
  div.innerHTML = `
    <p class="event-date">${formatDate(ev.date)} • ${ev.time}</p>
    <h3 class="event-title">${ev.title}</h3>
    <p class="event-desc">${ev.desc}</p>
  `;
  container.appendChild(div);
});
