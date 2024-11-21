function ligaragenda() {
    var agendar = document.getElementById('agendarh');
    var botãoagendar = document.getElementById('widt')
    var agendamento = document.getElementById('agendamento')
    

    botãoagendar.innerHTML = '<i class="bi-calendar2-check" id="calen"></i><i class="bi-calendar2-check-fill" id="calenmark"></i>'
    agendamento.style.backgroundColor = '#eedb0c'
    botãoagendar.setAttribute('onclick', 'fecharagenda()')
    agendar.style.opacity = '1'
    agendar.style.height = '600px'
    agendamento.style.height = '700px'
    
    
    
}

function fecharagenda() {
    var agendar = document.getElementById('agendarh');
    var botãoagendar = document.getElementById('widt')
    var agendamento = document.getElementById('agendamento')

    botãoagendar.innerHTML = '<i class="bi-calendar2-check" id="calen"></i><i class="bi-calendar2-check-fill" id="calenmark"></i>Marcar horário'
    agendamento.style.backgroundColor = 'transparent'
    botãoagendar.setAttribute('onclick', 'ligaragenda()')
    agendar.style.opacity = '0'
    agendar.style.height = '1px'
    agendamento.style.height = '80px'
}