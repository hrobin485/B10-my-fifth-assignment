function addDateTime() {
    const newElement = document.createElement('div');
    const now = new Date();
    const dateTimeString = `Date and Time: ${now.toLocaleString()} (Bangladesh Standard Time)`;
    newElement.textContent = dateTimeString;
    newElement.classList.add('bg-gray-200', 'p-2', 'rounded', 'shadow-sm', 'text-gray-700');
    document.getElementById('history-container').appendChild(newElement);
  }

  document.getElementById('donate-now-btn').addEventListener('click', addDateTime);
  document.getElementById('donate-now-btn-1').addEventListener('click', addDateTime);
  document.getElementById('donate-now-btn-2').addEventListener('click', addDateTime);

