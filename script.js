// Sprawdzenie czy użytkownik jest zalogowany
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Jeśli nie jest zalogowany i nie jest na stronie logowania
    if (!isLoggedIn && currentPage !== 'login.html') {
        window.location.href = 'login.html';
    }
}

// Funkcja logowania
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            // Tutaj możesz zdefiniować swoje dane logowania
            // Przykład: admin/admin123
            if (username === 'admin' && password === 'admin123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Nieprawidłowa nazwa użytkownika lub hasło';
            }
        });
    }
    
    // Sprawdź autoryzację na każdej stronie
    checkAuth();
});

// Funkcja wylogowania
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}