import LandingPage from "../../support/pages/landing.page";
import StaticText from "../../support/static/static-text";

describe("Deposit flow for mobile client", {
    viewportWidth: 390,
    viewportHeight: 844
  }, () => {

    beforeEach(() => {
        cy.setCookie('integrationtesting', "true");
        cy.setCookie('CookieConsent', 'true');
    })

    it("should go back to payment method selection after canceling bank Id loading", () => {
        
        const amount = '200';
        const paymentMethod = 'SWISH';
        const landingPage: LandingPage = new LandingPage();

        landingPage.clickDepositAndPlayButton();
        landingPage.sidebar.submitButton.should('be.disabled');

        landingPage.sidebar.submitAmount(amount);

        landingPage.sidebar.selectPaymentMethod(paymentMethod);
        landingPage.sidebar.bankIdLoaderContainer.should('be.visible');
        landingPage.sidebar.bankIdLogo.should('be.visible');
        landingPage.sidebar.bankIdLoaderHeader.should('have.text', StaticText.bankIdLoaderHeader);
        landingPage.sidebar.bankIdLoaderText.should('have.text', StaticText.bankIdLoaderText);

        landingPage.sidebar.loaderCancelButton.click();
        landingPage.sidebar.bankIdLoaderContainer.should('not.exist');
        landingPage.sidebar.getPaymentMethodButton(paymentMethod).should('be.visible');

    });
})