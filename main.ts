import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.js';
import './style.css'

Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: true,
    transition: 'slide',
    plugins: [RevealNotes]
});