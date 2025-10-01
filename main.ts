import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/reset.css';


Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: true,
    transition: 'slide',
    plugins: [RevealNotes]
});