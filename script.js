const menu_button = document.getElementById('menu-button');
const back_button = document.getElementById('back-button');
const menu = document.getElementById('menu');
const cover = document.getElementById('cover');
const notes = document.getElementById('notes');

// const appHeight = () => {
//     const doc = document.documentElement
//     // console.log(window.innerHeight)
//     doc.style.setProperty(' - app-height', '${window.innerHeight}')
// }
// window.addEventListener('resize', appHeight)
// appHeight()

// menu_button.addEventListener('click', ev => {
//     menu.style.display = 'block'
// })
function display_menu() {
    menu_button.style.display='none'
    menu.style.display = 'block'
}
back_button.addEventListener('click', ev => {
    menu.style.display='none'
    menu_button.style.display='block'
})
function notes_link_on_click() {
    cover.style.display='none'
    menu.style.display='none'
    notes.style.display='block'
    menu_button.style.display='block'
}
function go_home() {
    menu_button.style.display='none'
    notes.style.display='none'
    menu.style.display='none'
    cover.style.display='block'
}
