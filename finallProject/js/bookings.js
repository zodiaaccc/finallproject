const BOOKINGS_KEY = 'traveland_bookings';

// Получить все бронирования
export function getBookings() {
    const bookings = localStorage.getItem(BOOKINGS_KEY);
    return bookings ? JSON.parse(bookings) : [];
}

// Сохранить бронирования
export function saveBookings(bookings) {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}

// Добавить бронирование
export function addBooking(booking) {
    const bookings = getBookings();
    const newBooking = {
        id: Date.now(),
        tourId: booking.tourId,
        tourName: booking.tourName,
        cityName: booking.cityName,
        countryName: booking.countryName,
        price: booking.price,
        duration: booking.duration,
        imageUrl: booking.imageUrl,
        peopleCount: booking.peopleCount,
        totalPrice: booking.totalPrice,
        date: new Date().toISOString(),
        userId: booking.userId,
        comment: booking.comment || ''
    };
    bookings.push(newBooking);
    saveBookings(bookings);
    return newBooking;
}

// Получить бронирования пользователя
export function getUserBookings(userId) {
    const bookings = getBookings();
    return bookings.filter(booking => booking.userId === userId);
}

// Отменить бронирование
export function cancelBooking(bookingId, userId) {
    let bookings = getBookings();
    bookings = bookings.filter(booking => !(booking.id === bookingId && booking.userId === userId));
    saveBookings(bookings);
    return true;
}