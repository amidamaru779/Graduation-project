import orderCall from './modules/orderCall'
import scroll from './modules/scroll'
import form from './modules/forms'
import calculator from './modules/calculator'
import timer from './modules/timer'
import slider from './modules/slider'
import sertificate from './modules/sertificate'
import sendForms from './modules/sendForms'

orderCall()
scroll()
form()
calculator()
timer('30 october 2024 12:45:00')
slider()
sertificate()
sendForms({
    formName: 'form[name="action-form"]',
    someElem: [{
        type: 'block',
        id: 'calc-total'
    }]
})
sendForms({
    formName: '[name="action-form2"]',
    someElem: [{
        type: 'block',
        id: 'calc-total'
    }]
})