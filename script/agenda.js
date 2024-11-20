function ligaragenda() {
    var agendar = document.getElementById('agendarh');
    var botãoagendar = document.getElementById('widt')
    var agendamento = document.getElementById('agendamento')
    var botãon = document.getElementById('calenmark')

    botãon.innerText = ''
    agendamento.style.backgroundColor = '#eedb0c'
    botãoagendar.setAttribute('onclick', 'fecharagenda()')
    agendar.style.display = 'flex'
    agendar.style.height = '600px'
    agendamento.style.height = '700px'
    
    
}

function fecharagenda() {
    var agendar = document.getElementById('agendarh');
    var botãoagendar = document.getElementById('widt')
    var agendamento = document.getElementById('agendamento')

    agendamento.style.backgroundColor = 'transparent'
    botãoagendar.setAttribute('onclick', 'ligaragenda()')
    agendar.style.display = 'none'
    agendar.style.height = '10px'
    agendamento.style.height = '80px'
}