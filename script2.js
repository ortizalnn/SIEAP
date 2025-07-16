const aside = document.getElementById('aside'),
      menu = document.getElementById('menu-outline')

menu.onclick = () => {
    aside.classList.toggle('active');
}