import { InputForm } from '../../../interfaces/InputForm/InputForm'

export function addListenerOnInputForm({form, input, event, onEventFunction}: InputForm) {

    form?.addEventListener(event, function (e) {

        // prevent the normal submission of the form
        e.preventDefault()

        onEventFunction(input?.value)
    })
}