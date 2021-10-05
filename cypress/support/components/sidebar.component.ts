import { CyJElement } from "../../type-alias";

class SidebarComp {

    get guestDepositLoginHeader(): CyJElement {

        console.log(Cypress.config("viewportWidth"));

        if (Cypress.config("viewportWidth") >= 765 )
            return cy.get('h1[data-at="title-header-guest-deposit-login"]');
        else
            return cy.get('.amount__content-wrapper h4');
    }

    get selectPaymentHeader(): CyJElement {
        return cy.get('h1[data-at="title-header-select-payment"');
    }

    get amountField(): CyJElement {
        return cy.get('#amount')
    }

    get submitButton(): CyJElement {
        return cy.get("button[data-at='deposit-login-submit-button-noaccount']");
    }

    get personalNumberField(): CyJElement {
        return cy.get("fieldset[data-at='fieldset-personalNumber'] input");
    }

    get bankIdButton(): CyJElement {
        return cy.get("button[data-at='register-login-bankid-button'");
    }

    get bankIdLoaderContainer(): CyJElement {
        return cy.get("div[class*='bankid-loader-new__BankIDContainer']");
    }

    get bankIdLogo(): CyJElement {
        return this.bankIdLoaderContainer.get('.bankid-logo-container svg');
    }

    get bankIdLoaderHeader(): CyJElement {
        return this.bankIdLoaderContainer.find("h2");
    }

    get bankIdLoaderText(): CyJElement {
        return this.bankIdLoaderContainer.find("p");
    }

    get loaderCancelButton(): CyJElement {
        return cy.get("button[data-at='bankid-loader-cancel'");
    }

    selectPaymentMethod(method: string): void {
        this.getPaymentMethodButton(method).click();
    }

    submitAmount(amount: string): void {
        this.amountField.clear();
        this.amountField.type(amount);
        this.submitButton.click();
    }

    submitPersonalNumber(personalNumber: string): void {
        this.personalNumberField.clear();
        this.personalNumberField.type(personalNumber);
        this.bankIdButton.click();
    }

    getPaymentMethodButton(method: string): CyJElement {
        return cy.get(`button[data-at='${method}-paymentmethod-deposit-and-play'`);
    }


}

export default SidebarComp;