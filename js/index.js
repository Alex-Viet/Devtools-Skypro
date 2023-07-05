let gameComps = {
    difficultyLevel: '',
};

const goButton = document.getElementById('button-go');
const difLevelBtnElems = document.querySelectorAll('input');

for (const difLevelBtnElem of difLevelBtnElems) {
    difLevelBtnElem.addEventListener('click', () => {
        gameComps.difficultyLevel = difLevelBtnElem.value;

        goButton.addEventListener('click', () => {
            alert(
                `Далее будет запускаться игра в зависимости от уровня сложности: ${gameComps.difficultyLevel}`,
            );
        });
    });
}
