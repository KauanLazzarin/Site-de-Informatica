// Some basic scripts for the landing-page


// ================== MAKES THE H1 TITLE BLINK ==========

const title = document.querySelector('#header-title')
const style = document.createElement('STYLE')

window.onload = () => {
    function changeTitleColorToBlue () {
        title.style.color = '#000080'
    }

    function changeTitleColorToBlack () {
        title.style.color = 'black'
    }

    function changeTitleColor () {
        setInterval(() => {
            changeTitleColorToBlue()
            setInterval(() => {
                changeTitleColorToBlack()
                changeTitleColor()
            }, 2000);
        }, 2000);
    }

    changeTitleColor()


}

// ======================================================
