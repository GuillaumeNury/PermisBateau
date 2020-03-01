/**
 * 
 * @param {*} level
 * @returns {Promise<boolean>}
 */
function challengeLevel(level) {
    const imageEl = document.getElementById('image');
    const choicesEl = document.getElementById('choices');
    const categoryEl = document.getElementById('category');

    if (!level) {
        imageEl.style.display = 'none';
        choicesEl.style.display = 'none';
        categoryEl.style.display = 'none';
        return;
    }

    if (level.type === "image") {
        setupImageLevel(level, imageEl, categoryEl);
    } else if (level.type === "text") {
        setupTextLevel(level, imageEl, categoryEl);
    }

    const proposedChoices = level.type === "image"
        ? levels
            .filter(lvl => lvl !== level && lvl.category === level.category)
            .sort(() => Math.random() - Math.random())
            .slice(0, 3)
            .concat(level)
            .map(lvl => lvl.solution)
            .sort(() => Math.random() - Math.random())
        : level.type === "text"
            ? level.choices
            : [];

    return new Promise(resolve => {
        choices.style.display = 'block';
        choices.innerHTML = '';

        /**
         * @type {HTMLDivElement}
         */
        let correctEl = null;

        for (const proposedChoice of proposedChoices) {
            const choiceEl = document.createElement('button');
            const isCorrect = proposedChoice === level.solution;

            if (isCorrect) {
                correctEl = choiceEl;
            }

            choiceEl.textContent = proposedChoice;
            choiceEl.onclick = () => {
                if (isCorrect) {
                    choiceEl.style.backgroundColor = 'lightgreen';
                } else {
                    correctEl.style.backgroundColor = 'lightgreen';
                    choiceEl.style.backgroundColor = 'orangered';
                }

                resolve(isCorrect);
            }
            choicesEl.appendChild(choiceEl);
        }
    });
}

/**
 * 
 * @param {*} level
 * @param {HTMLDivElement} imageEl
 * @param {HTMLDivElement} categoryEl
 */
function setupTextLevel(level, imageEl, categoryEl) {
    imageEl.style.display = 'none';
    categoryEl.innerHTML = `<b>${level.question}</b>`;
}

/**
 * 
 * @param {*} level
 * @param {HTMLDivElement} imageEl
 * @param {HTMLDivElement} categoryEl
 */
function setupImageLevel(level, imageEl, categoryEl) {
    const { width, height, left, top } = level;
    imageEl.style.display = 'block';
    imageEl.style.width = `${width}px`;
    imageEl.style.height = `${height}px`;
    imageEl.style.backgroundImage = `url("../assets/${level.image}")`;
    imageEl.style.backgroundPosition = `left -${left}px top -${top}px`;
    categoryEl.innerHTML = `<b>${level.category}</b>`;
}

function setStats(index, total, correctLevels) {
    const stats = document.getElementById('stats');
    stats.innerHTML = `<h1>Level ${Math.min(index + 1, total)} / ${total} <small>Correct ${correctLevels} / ${index}</small></h1>`
}

const waitMs = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    let index = 0;
    let correctLevels = 0;
    let levelsToPlay = levels.sort(() => Math.random() - Math.random()).slice(0, 20);

    for (const level of levelsToPlay) {
        setStats(index, levelsToPlay.length, correctLevels);

        const isCorrect = await challengeLevel(level);
        correctLevels += isCorrect;
        await waitMs(isCorrect ? 300 : 2000);
        index++;
    }

    challengeLevel(null);
    document.getElementById('result').style.display = 'block';
    setStats(index, levelsToPlay.length, correctLevels);
}

main()
