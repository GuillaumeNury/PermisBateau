// Load image
const IMAGE_PATH = '../assets/memento-cotier-2.jpg';

const image = new Image();
/**
 * @type {HTMLDivElement}
 */
let imageDiv;

image.onload = function(event) {
    const file = event.path[0];

    imageDiv = document.createElement('div');
    imageDiv.style.width = `${file.width}px`;
    imageDiv.style.height = `${file.height}px`;
    imageDiv.style.background = `url("${IMAGE_PATH}")`;
    imageDiv.style.backgroundSize = 'contain';

    document.body.appendChild(imageDiv);
    handleSelection();
}

image.src = IMAGE_PATH;

function handleSelection() {
    const overlay = document.createElement('div');
    overlay.id = 'selection-overlay';
    document.body.appendChild(overlay);

    let point1, point2;
    let box;

    function onMousemove(evt) {
        if (!point1) return;

        point2 = { x: evt.clientX, y: evt.clientY };

        const left = Math.min(point1.x, point2.x);
        const top = Math.min(point1.y, point2.y);
        const bottom = Math.max(point1.y, point2.y);
        const right = Math.max(point1.x, point2.x);
        const width = right - left
        const height = bottom - top

        box = { left, top, bottom, right, width, height };

        overlay.style.display = 'block';
        overlay.style.top = top + 'px';
        overlay.style.left = left + 'px';
        overlay.style.width = width + 'px';
        overlay.style.height = height + 'px';
    }

    imageDiv.addEventListener('mousedown', evt => {
        point1 = { x: evt.clientX, y: evt.clientY };
    });

    overlay.addEventListener('mousemove', onMousemove);
    imageDiv.addEventListener('mousemove', onMousemove);

    document.addEventListener('mouseup', evt => {
        if (!box) return;

        const { left, top, width, height } = box;
        box = point1 = point2 = null;

        const scrollTop = sumElementToRootProperty(imageDiv, e => e.scrollTop);
        const scrollLeft = sumElementToRootProperty(imageDiv, e => e.scrollLeft);

        const solution = prompt('Réponse');

        if (solution) {
            console.log([width, height, scrollLeft + left, scrollTop + top, solution].join(';'));
        }

        overlay.style.display = 'none';
    });

    /**
     * 
     * @param {HTMLElement} element
     * @param {(element: HTMLElement) => number} getter
     */
    function sumElementToRootProperty(element, getter) {
        return (element.parentElement ? sumElementToRootProperty(element.parentElement, getter) : 0) + getter(element);
    }
}
