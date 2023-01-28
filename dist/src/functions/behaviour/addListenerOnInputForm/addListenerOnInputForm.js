export function addListenerOnInputForm({ form, input, event, onEventFunction }) {
    form === null || form === void 0 ? void 0 : form.addEventListener(event, function (e) {
        // prevent the normal submission of the form
        e.preventDefault();
        onEventFunction(input === null || input === void 0 ? void 0 : input.value);
    });
}
