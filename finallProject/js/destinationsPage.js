import { destinations } from './destinationsData.js';
import { getFavorites, addToFavorites, removeFromFavorites, isFavorite, updateFavoriteButton } from './favorites.js';

let currentDestinations = [...destinations];

// Функция для создания HTML карточки с кнопкой избранного
function createDestinationCard(destination) {
    const isFav = isFavorite(destination.id);

    return `
        <div class="destination-card" data-id="${destination.id}">
            <div class="favorite-btn" data-id="${destination.id}">
                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
            </div>
            <div class="destination-image-container">
                <img src="${destination.imageUrl}" alt="${destination.name}, ${destination.country}" loading="lazy">
            </div>
            <div class="destination-details">
                <h3 class="destination-name">${destination.name}</h3>
                <div class="destination-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${destination.country}</span>
                </div>
                <div class="destination-info" style="margin: 10px 0; color: var(--text-secondary); font-size: 14px;">
                    <span>${destination.duration || '7 дней'}</span> • <span>${destination.type || 'Экскурсионный'}</span>
                </div>
                <div class="destination-pricing">
                    <div class="destination-price">$${destination.price.toLocaleString()}</div>
                    <div class="destination-rating">
                        <i class="fas fa-star"></i>
                        <span>${destination.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Функция для фильтрации направлений
function filterDestinations() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const country = document.getElementById('country').value;
    const type = document.getElementById('type').value;
    const priceMin = document.getElementById('priceMin').value;
    const priceMax = document.getElementById('priceMax').value;
    const duration = document.getElementById('duration').value;
    const rating = document.getElementById('rating').value;
    const favoriteOnly = document.getElementById('favoriteOnly').checked;

    return currentDestinations.filter(dest => {
        // Поиск по названию
        if (searchTerm && !dest.name.toLowerCase().includes(searchTerm)) {
            return false;
        }

        // Фильтр по стране
        if (country && dest.country !== country) {
            return false;
        }

        // Фильтр по типу
        if (type && dest.type !== type) {
            return false;
        }

        // Фильтр по цене (от)
        if (priceMin && dest.price < parseInt(priceMin)) {
            return false;
        }

        // Фильтр по цене (до)
        if (priceMax && dest.price > parseInt(priceMax)) {
            return false;
        }

        // Фильтр по длительности
        if (duration) {
            const destDuration = parseInt(dest.duration) || 7;
            if (duration === '6' && destDuration > 7) return false;
            if (duration === '8' && (destDuration < 7 || destDuration > 10)) return false;
            if (duration === '11' && destDuration < 11) return false;
        }

        // Фильтр по рейтингу
        if (rating && dest.rating < parseFloat(rating)) {
            return false;
        }

        // Фильтр только избранные
        if (favoriteOnly && !isFavorite(dest.id)) {
            return false;
        }

        return true;
    });
}

// Функция для обновления отображения
function renderFilteredDestinations() {
    const filtered = filterDestinations();
    const grid = document.getElementById('destinationsGrid');
    const resultsCount = document.querySelector('#resultsCount span');

    // Обновляем счетчик
    resultsCount.textContent = filtered.length;

    // Очищаем сетку
    grid.innerHTML = '';

    // Показываем результаты или сообщение
    if (filtered.length === 0) {
        const favoriteOnly = document.getElementById('favoriteOnly').checked;
        let message = 'По вашему запросу ничего не найдено.';
        if (favoriteOnly) {
            message = 'У вас пока нет избранных направлений. Добавьте направления в избранное, нажав на сердечко.';
        }
        grid.innerHTML = `<div class="no-results">${message}</div>`;
    } else {
        filtered.forEach(dest => {
            grid.innerHTML += createDestinationCard(dest);
        });

        // Добавляем обработчики на кнопки избранного
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const id = parseInt(btn.dataset.id);
                const destination = currentDestinations.find(d => d.id === id);

                if (isFavorite(id)) {
                    removeFromFavorites(id);
                } else {
                    addToFavorites(destination);
                }

                // Перерисовываем с учетом фильтра
                renderFilteredDestinations();
            });
        });
    }
}

// Функция для сброса фильтров
function resetFilters() {
    document.getElementById('search').value = '';
    document.getElementById('country').value = '';
    document.getElementById('type').value = '';
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('favoriteOnly').checked = false;

    renderFilteredDestinations();
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    // Первоначальная отрисовка всех направлений
    renderFilteredDestinations();

    // Навешиваем обработчики на кнопки
    document.getElementById('applyFilters').addEventListener('click', renderFilteredDestinations);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);

    // Фильтр избранного
    document.getElementById('favoriteOnly').addEventListener('change', renderFilteredDestinations);

    // Добавляем возможность фильтрации при нажатии Enter в полях ввода
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                renderFilteredDestinations();
            }
        });
    });
});