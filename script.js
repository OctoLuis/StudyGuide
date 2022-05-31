const menu_button = document.getElementById('menu-button');
const back_button = document.getElementById('back-button');
const menu = document.getElementById('menu');
const cover = document.getElementById('cover');
const notes = document.getElementById('notes');

menu_button.addEventListener('click', ev => {
    menu.style.display = 'block'
})
back_button.addEventListener('click', ev => {
    menu.style.display='none'
})
function notes_link_on_click() {
    cover.style.display='none'
    notes.style.display='block'
}
function go_home() {
    notes.style.display='none'
    menu.style.display='none'
    cover.style.display='block'
}
