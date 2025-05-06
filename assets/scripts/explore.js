// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('#explore img');

  let voices = [];

  function populateVoices() {
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  window.speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();

  speakButton.addEventListener('click', () => {
    const text = textArea.value;
    if (!text || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];

  
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };


    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    window.speechSynthesis.speak(utterance);
  });
}