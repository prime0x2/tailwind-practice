const toggleSidebar = window.document.getElementById('toggleSidebar');
const sidebar = window.document.getElementById('sidebar');
const main = window.document.getElementById('main');


toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    main.classList.toggle('left-[280px]');
    main.classList.toggle('w-[calc(100%-280px)]');
    main.classList.toggle('w-full');
});


const toggleDark = window.document.getElementById('toggleDark');
const body = window.document.documentElement;


toggleDark.addEventListener('click', () => {
    body.classList.toggle('dark');
})