if (document.querySelector('audio')) {
    fetch('http://localhost:5000/mono/enable')
        .catch(error => console.error('Error enabling mono audio:', error));
    }

    document.querySelectorAll('audio').forEach(audio => {
        audio.addEventListener('play', () => {
            fetch('http://localhost:5000/mono/enable')
        .catch(error => console.error('Error enabling mono audio:', error));
    });

    audio.addEventListener('pause', () => {
        fetch('http://localhost:5000/mono/disable')
        .catch(error => console.error('Error disabling mono audio:', error));
    });
});
