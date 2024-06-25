function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
}
