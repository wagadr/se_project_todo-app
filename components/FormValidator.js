class FormValidator {
    constructor (settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formElement = formElement;
    }

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
    showInputError(
      this._formElement,
      inputElement,
      inputElement.validationMessage,
      this._settings,
    );
  } else {
    hideInputError(formElement, inputElement, this._settings);
  }
    }

    _setEventListeners () {
        this._inputList = Array.from(
        this._formElement.querySelectorAll(this._inputSelector),
  );
        const buttonElement = this._formElement.querySelector(
        this._settings._submitButtonSelector,
  );

  toggleButtonState(this._inputList, buttonElement, settings);

  this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      toggleButtonState(this._inputList, buttonElement, settings);
    });
  });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
  });
        this._setEventListeners();
    }

    resetValidation() {
        this._inputElement.reset();
        this._buttonElement.disabled = true;
    }
}

export default FormValidator;
