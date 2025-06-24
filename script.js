document.getElementById('unlock-btn').addEventListener('click', function() {
  const code = prompt('Enter the Morse code translation:');
  if (!code) return;
  if (code.trim().toUpperCase() === 'SLICKER') {
    // reveal the audio section
    document.getElementById('audio-log').style.display = 'block';
    this.style.display = 'none';
    alert('Access granted. Listen carefully.');
  } else {
    alert('Incorrect code. The lights are still blinking…');
  }
});
