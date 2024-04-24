const treeImg = document.getElementById('tree_img')
let image1 = true;

treeImg.addEventListener('click', () => {
    if (image1) {
        treeImg.src = 'dark_tree.jpg';
        image1 = false;
    } else {
        treeImg.src = 'light_tree.jpeg';
        image1 = true;
    }
});