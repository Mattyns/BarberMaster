function cach() {
    var bcach = window.document.getElementById('bcach');
    var bliso = window.document.getElementById('bliso')

    bliso.style.backgroundColor = 'black'
    bcach.style.backgroundColor = 'rgb(238, 219, 12)'

    var ccach = window.document.getElementById('cacheado').style.display = 'block'
    var cliso = window.document.getElementById('liso').style.display = 'none'
    var aviso = window.document.getElementById('aviso').style.display = 'none'
}

function liso() {
    var bcach = window.document.getElementById('bliso')
    var bliso = window.document.getElementById('bcach')

    bcach.style.backgroundColor = 'rgb(238, 219, 12)'
    bliso.style.backgroundColor = 'black'

    var cliso = window.document.getElementById('liso').style.display = 'block'
    var ccach = window.document.getElementById('cacheado').style.display = 'none'
    var aviso = window.document.getElementById('aviso').style.display = 'none'
}