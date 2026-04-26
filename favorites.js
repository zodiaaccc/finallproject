const FAVORITES_KEY = 'traveland_favorites_tours';

let currentNotification = null;

export function getFavoriteTours() {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

export function saveFavoriteTours(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function addToFavorites(tour) {
    const favorites = getFavoriteTours();

    if (!favorites.some(item => item.id === tour.id)) {
        favorites.push({
            id: tour.id,
            name: tour.name,
            price: tour.price,
            rating: tour.rating,
            duration: tour.duration,
            imageUrl: tour.imageUrl,
            cityName: tour.cityName,
            countryName: tour.countryName
        });
        saveFavoriteTours(favorites);
        updateFavoriteButton(tour.id, true);
        showNotification('Тур добавлен в избранное!', 'success');
        return true;
    }
    return false;
}

export function removeFromFavorites(tourId) {
    let favorites = getFavoriteTours();
    favorites = favorites.filter(item => item.id !== tourId);
    saveFavoriteTours(favorites);
    updateFavoriteButton(tourId, false);
    showNotification('Тур удален из избранного', 'info');
    return true;
}

export function isFavorite(tourId) {
    const favorites = getFavoriteTours();
    return favorites.some(item => item.id === tourId);
}

export function updateFavoriteButton(tourId, isFav) {
    const buttons = document.querySelectorAll(`.favorite-btn[data-id="${tourId}"]`);
    buttons.forEach(btn => {
        const icon = btn.querySelector('i');
        if (isFav) {
            icon.className = 'fas fa-heart';
            icon.style.color = '#ff4757';
        } else {
            icon.className = 'far fa-heart';
            icon.style.color = '#ddd';
        }
    });
}

export function showNotification(message, type = 'success') {
    // Удаляем предыдущее уведомление, если оно есть
    if (currentNotification) {
        currentNotification.remove();
        currentNotification = null;
    }

    const notification = document.createElement('div');
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-heart-broken'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#ff4757'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: 'Inter', sans-serif;
    `;

    document.body.appendChild(notification);
    currentNotification = notification;

    setTimeout(() => {
        if (currentNotification === notification) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
                if (currentNotification === notification) {
                    currentNotification = null;
                }
            }, 300);
        }
    }, 2500);
}

export function getAllFavorites() {
    return getFavoriteTours();
}