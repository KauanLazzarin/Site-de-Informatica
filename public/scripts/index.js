// Some basic scripts for the landing-page


// ================== MAKES THE H1 TITLE BLINK ==========

const title = document.querySelector('#header-title')
const style = document.createElement('STYLE')

window.onload = () => {
    title.style.color = 'black'

    function changeTitleColorToBlue () {
        title.style.color = '#000080'
    }

    function changeTitleColorToBlack () {
        title.style.color = 'black'
    }

    setInterval(() => {
        changeTitleColorToBlue()
    }, 2000);

    setInterval(() => {
        changeTitleColorToBlack()
    }, 4000);
}

// ======================================================
