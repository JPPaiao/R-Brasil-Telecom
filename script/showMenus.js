let handleMenu = document.getElementById('menu-hamburguer')
let showMenu = document.getElementById('list-menu')
let active = true

function showMenus(add, remove) {
    showMenu.classList.add(add)
    showMenu.classList.remove(remove)
    active = !active
}

handleMenu.addEventListener('click', (e) => (!active) ? showMenus('hidden', 'show-nav') : showMenus('show-nav', 'hidden'))

for (let menu in showMenu.children) {
    menu.addEventListener('click', (e) => showMenus('hidden', 'show-nav'))
}
