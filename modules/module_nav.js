let navList = document.querySelectorAll('.nav-list');
navList.forEach((i) => {
    i.addEventListener('mouseover', () => {
        i.style.setProperty('--greenline-position', '0%');
        i.style.setProperty('--purpleline-position', '-100%');
        // let flag = false;
    });

    i.addEventListener('mouseout', () => {
        i.style.setProperty('--greenline-position', '100%');
        i.style.setProperty('--purpleline-position', '100%');
        // flag = true;
        // if(flag === true) {
        //     i.style.setProperty('--greenline-position', '-100%');
        //     i.style.transition = 'all 0 ease 0';
        // }
    });
});
