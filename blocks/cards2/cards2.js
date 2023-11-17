
export default function decorate(block) {

    const row = block.firstElementChild;
    const bg = row.querySelector('picture');
    const bgP = bg.closest('p');
    block.append(bg);
    if (bgP) bgP.remove();
    row.classList.add('cards-card-body');

}