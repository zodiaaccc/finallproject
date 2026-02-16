// Memory Game - Полный рабочий код
document.addEventListener('DOMContentLoaded', function() {
    console.log('Игра Memory загружается...');

    // Элементы DOM
    const elements = {
        board: document.getElementById('game-board'),
        timer: document.getElementById('timer'),
        moves: document.getElementById('moves'),
        pairs: document.getElementById('pairs'),
        startBtn: document.getElementById('start-btn'),
        resetBtn: document.getElementById('reset-btn'),
        difficulty: document.getElementById('difficulty'),
        theme: document.getElementById('theme'),
        leaderboard: document.getElementById('leaderboard'),
        winModal: document.getElementById('win-modal'),
        finalTime: document.getElementById('final-time'),
        finalMoves: document.getElementById('final-moves'),
        playerName: document.getElementById('player-name'),
        saveScoreBtn: document.getElementById('save-score-btn'),
        closeModal: document.getElementById('close-modal')
    };

    // Проверка, что все элементы найдены
    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Элемент не найден: ${key}`);
        }
    }

    // Конфигурация игры
    const config = {
        easy: { pairs: 6, cols: 4, rows: 3 },
        medium: { pairs: 8, cols: 4, rows: 4 },
        hard: { pairs: 12, cols: 6, rows: 4 }
    };

    const themes = {
        emoji: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'],
        animals: ['🐕', '🐈', '🐁', '🐹', '🐇', '🦊', '🐻', '🐼', '🦁', '🐯', '🐮', '🐷'],
        flags: ['🇷🇺', '🇺🇸', '🇬🇧', '🇩🇪', '🇫🇷', '🇯🇵', '🇨🇳', '🇰🇷', '🇧🇷', '🇮🇳', '🇮🇹', '🇪🇸']
    };

    // Состояние игры
    let gameState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        moves: 0,
        time: 0,
        timer: null,
        isPlaying: false,
        canFlip: true,
        currentDifficulty: 'medium',
        currentTheme: 'emoji'
    };

    // Инициализация игры
    function init() {
        console.log('Инициализация игры...');

        // Установка обработчиков событий
        elements.startBtn.addEventListener('click', startGame);
        elements.resetBtn.addEventListener('click', resetGame);
        elements.difficulty.addEventListener('change', handleDifficultyChange);
        elements.theme.addEventListener('change', handleThemeChange);
        elements.saveScoreBtn.addEventListener('click', saveScore);
        elements.closeModal.addEventListener('click', hideModal);

        // Загрузка рекордов
        loadLeaderboard();

        // Первоначальная настройка доски
        setupBoard();

        console.log('Игра готова!');
    }

    // Настройка игрового поля
    function setupBoard() {
        console.log('Настройка доски...');

        const difficulty = gameState.currentDifficulty;
        const theme = gameState.currentTheme;
        const gameConfig = config[difficulty];
        const themeIcons = themes[theme];

        // Очистка доски
        elements.board.innerHTML = '';
        elements.board.className = 'game-board';
        if (difficulty === 'hard') {
            elements.board.classList.add('hard');
        }

        // Создание карточек
        const icons = themeIcons.slice(0, gameConfig.pairs);
        const pairs = [...icons, ...icons]; // Дублируем для пар

        // Перемешивание карточек
        shuffleArray(pairs);

        // Создание DOM элементов карточек
        gameState.cards = [];

        pairs.forEach((icon, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;
            card.dataset.icon = icon;

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-back">?</div>
                    <div class="card-front">${icon}</div>
                </div>
            `;

            card.addEventListener('click', () => handleCardClick(card));
            elements.board.appendChild(card);

            gameState.cards.push({
                element: card,
                icon: icon,
                isFlipped: false,
                isMatched: false
            });
        });

        // Обновление статистики
        elements.pairs.textContent = `0/${gameConfig.pairs}`;
        resetGameState();

        console.log(`Доска настроена: ${difficulty} уровень, ${gameConfig.pairs} пар`);
    }

    // Перемешивание массива (алгоритм Фишера-Йетса)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Начало игры
    function startGame() {
        if (gameState.isPlaying) {
            pauseGame();
            return;
        }

        console.log('Начало новой игры');

        gameState.isPlaying = true;
        gameState.canFlip = true;
        gameState.moves = 0;
        gameState.time = 0;
        gameState.matchedPairs = 0;
        gameState.flippedCards = [];

        // Сброс всех карточек
        gameState.cards.forEach(card => {
            card.element.classList.remove('flipped', 'matched');
            card.isFlipped = false;
            card.isMatched = false;
        });

        // Обновление UI
        elements.moves.textContent = '0';
        elements.pairs.textContent = `0/${config[gameState.currentDifficulty].pairs}`;

        // Запуск таймера
        startTimer();

        // Обновление кнопки
        elements.startBtn.innerHTML = '<i class="fas fa-pause"></i> Пауза';
        elements.startBtn.classList.remove('btn-primary');
        elements.startBtn.classList.add('btn-secondary');
    }

    // Пауза игры
    function pauseGame() {
        console.log('Игра на паузе');

        clearInterval(gameState.timer);
        gameState.isPlaying = false;
        gameState.canFlip = false;

        elements.startBtn.innerHTML = '<i class="fas fa-play"></i> Продолжить';
        elements.startBtn.classList.remove('btn-secondary');
        elements.startBtn.classList.add('btn-primary');
    }

    // Сброс игры
    function resetGame() {
        console.log('Сброс игры');

        clearInterval(gameState.timer);
        resetGameState();
        setupBoard();
    }

    // Сброс состояния игры
    function resetGameState() {
        gameState.isPlaying = false;
        gameState.canFlip = true;
        gameState.moves = 0;
        gameState.time = 0;
        gameState.matchedPairs = 0;
        gameState.flippedCards = [];

        clearInterval(gameState.timer);
        elements.timer.textContent = '00:00';
        elements.moves.textContent = '0';

        elements.startBtn.innerHTML = '<i class="fas fa-play"></i> Новая игра';
        elements.startBtn.classList.remove('btn-secondary');
        elements.startBtn.classList.add('btn-primary');
    }

    // Запуск таймера
    function startTimer() {
        clearInterval(gameState.timer);
        gameState.time = 0;
        updateTimerDisplay();

        gameState.timer = setInterval(() => {
            gameState.time++;
            updateTimerDisplay();
        }, 1000);
    }

    // Обновление отображения таймера
    function updateTimerDisplay() {
        const minutes = Math.floor(gameState.time / 60);
        const seconds = gameState.time % 60;
        elements.timer.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Обработка клика по карточке
    function handleCardClick(cardElement) {
        if (!gameState.isPlaying || !gameState.canFlip) {
            return;
        }

        const cardIndex = parseInt(cardElement.dataset.index);
        const card = gameState.cards[cardIndex];

        // Проверка, можно ли перевернуть карточку
        if (card.isFlipped || card.isMatched || gameState.flippedCards.length >= 2) {
            return;
        }

        console.log(`Переворот карточки ${cardIndex}: ${card.icon}`);

        // Переворот карточки
        cardElement.classList.add('flipped');
        card.isFlipped = true;
        gameState.flippedCards.push({
            index: cardIndex,
            element: cardElement
        });

        // Если перевернуты 2 карточки
        if (gameState.flippedCards.length === 2) {
            gameState.moves++;
            elements.moves.textContent = gameState.moves;
            checkMatch();
        }
    }

    // Проверка совпадения карточек
    function checkMatch() {
        gameState.canFlip = false;

        const [card1, card2] = gameState.flippedCards;
        const icon1 = gameState.cards[card1.index].icon;
        const icon2 = gameState.cards[card2.index].icon;

        console.log(`Проверка совпадения: ${icon1} vs ${icon2}`);

        if (icon1 === icon2) {
            // Совпадение
            setTimeout(() => {
                card1.element.classList.add('matched');
                card2.element.classList.add('matched');

                gameState.cards[card1.index].isMatched = true;
                gameState.cards[card2.index].isMatched = true;

                gameState.matchedPairs++;
                elements.pairs.textContent =
                    `${gameState.matchedPairs}/${config[gameState.currentDifficulty].pairs}`;

                gameState.flippedCards = [];
                gameState.canFlip = true;

                // Проверка завершения игры
                if (gameState.matchedPairs === config[gameState.currentDifficulty].pairs) {
                    endGame();
                }
            }, 500);
        } else {
            // Не совпали
            setTimeout(() => {
                card1.element.classList.remove('flipped');
                card2.element.classList.remove('flipped');

                gameState.cards[card1.index].isFlipped = false;
                gameState.cards[card2.index].isFlipped = false;

                gameState.flippedCards = [];
                gameState.canFlip = true;
            }, 1000);
        }
    }

    // Завершение игры
    function endGame() {
        console.log('Игра завершена!');

        clearInterval(gameState.timer);
        gameState.isPlaying = false;

        // Показ модального окна
        elements.finalTime.textContent = elements.timer.textContent;
        elements.finalMoves.textContent = gameState.moves;
        showModal();
    }

    // Показ модального окна
    function showModal() {
        elements.winModal.style.display = 'flex';
        elements.playerName.value = '';
        elements.playerName.focus();
    }

    // Скрытие модального окна
    function hideModal() {
        elements.winModal.style.display = 'none';
    }

    // Сохранение результата
    function saveScore() {
        const playerName = elements.playerName.value.trim() || 'Аноним';
        const score = {
            name: playerName,
            time: gameState.time,
            moves: gameState.moves,
            difficulty: gameState.currentDifficulty,
            date: new Date().toISOString()
        };

        console.log('Сохранение результата:', score);
        saveToLeaderboard(score);
        hideModal();
    }

    // Сохранение в таблицу рекордов
    function saveToLeaderboard(score) {
        let leaderboard = JSON.parse(localStorage.getItem('memoryGameLeaderboard')) || [];
        leaderboard.push(score);

        // Сортировка по времени и сложности
        leaderboard.sort((a, b) => {
            if (a.difficulty !== b.difficulty) {
                const difficultyOrder = { hard: 3, medium: 2, easy: 1 };
                return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
            }
            return a.time - b.time;
        });

        // Ограничение топ-10
        leaderboard = leaderboard.slice(0, 10);

        localStorage.setItem('memoryGameLeaderboard', JSON.stringify(leaderboard));
        loadLeaderboard();
    }

    // Загрузка таблицы рекордов
    function loadLeaderboard() {
        const leaderboard = JSON.parse(localStorage.getItem('memoryGameLeaderboard')) || [];
        elements.leaderboard.innerHTML = '';

        if (leaderboard.length === 0) {
            elements.leaderboard.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Пока нет рекордов. Будьте первым!</p>';
            return;
        }

        leaderboard.forEach((score, index) => {
            const scoreElement = document.createElement('div');
            scoreElement.className = 'score-item';

            const minutes = Math.floor(score.time / 60);
            const seconds = score.time % 60;
            const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            const difficultyName = getDifficultyName(score.difficulty);

            scoreElement.innerHTML = `
                <span class="score-rank">${index + 1}</span>
                <span class="score-name">${score.name}</span>
                <span class="score-time">${timeStr}</span>
                <span class="score-moves">${score.moves}</span>
                <span class="score-difficulty">${difficultyName}</span>
            `;

            elements.leaderboard.appendChild(scoreElement);
        });
    }

    // Получение названия уровня сложности
    function getDifficultyName(difficulty) {
        const names = {
            easy: 'Легкий',
            medium: 'Средний',
            hard: 'Сложный'
        };
        return names[difficulty] || difficulty;
    }

    // Обработчик изменения уровня сложности
    function handleDifficultyChange(event) {
        gameState.currentDifficulty = event.target.value;
        console.log('Изменен уровень сложности на:', gameState.currentDifficulty);
        setupBoard();
    }

    // Обработчик изменения темы
    function handleThemeChange(event) {
        gameState.currentTheme = event.target.value;
        console.log('Изменена тема на:', gameState.currentTheme);
        setupBoard();
    }

    // Запуск игры
    init();

    // Для отладки в консоли
    window.gameState = gameState;
    window.elements = elements;
    console.log('Игра Memory полностью загружена! Удачи! 🎮');
});