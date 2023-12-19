// Scusate ragazzi ho dimenticato i commit

const inputName = document.getElementById('name')
const paragraph = document.getElementById('name-passenger')

const inputKm = document.getElementById('km')
const inputAge = document.getElementById('age')
const button = document.getElementById('button')

const tdType = document.getElementById('ticket-type')
const tdCarriage = document.getElementById('carriage')
const tdCode = document.getElementById('booking-code')
const tdPrice = document.getElementById ('price')


button.addEventListener('click', function () {

    let isValid = true

    if (isNaN(inputAge.value) || (isNaN(inputKm.value))) {
      isValid = false
      alert('Inserisci dei numeri')
    } else if (inputKm.value < 1) {
      isValid = false
      alert('inserisci una distanza valida')
    } else if ((inputName.value == '') || (inputName.value.lenght < 3) ) {
        isValid = false
        alert('Inserisci un Nome valido')
    }
    
    if (isValid){

      paragraph.innerText = inputName.value.trim()
      inputName.value = ''

      tdCarriage.innerText = Math.floor(Math.random()*12)+1
      tdCode.innerText = Math.floor(Math.random()*9999)+11111

      const ticketPrice = inputKm.value * 0.21
      inputKm.value = ''

        if (inputAge.value > 65) {
          discount = (ticketPrice /100) * 40
          finalPrice = ticketPrice - discount
          inputAge.value = ''
          tdType.innerText = 'Biglietto scontato'

        } else if (inputAge.value < 18) {
          discount = (ticketPrice /100) * 20
          finalPrice = ticketPrice - discount
          inputAge.value = ''
          tdType.innerText = 'Biglietto scontato'

        } else if ( 18 < inputAge.value < 65) {
          finalPrice = ticketPrice
          inputAge.value = ''
          tdType.innerText = 'Biglietto standard'
        }
        tdPrice.innerText = (finalPrice.toFixed(2)) + ' €'
    }
})
 