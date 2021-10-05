import LandingPage from "../../support/pages/landing.page";
import StaticText from "../../support/static/static-text";

describe("Deposit flow for desktop client", () => {

    beforeEach(() => {
        cy.setCookie('integrationtesting', "true");
        cy.setCookie('CookieConsent', 'true');
    })

    it("should go back to personal number form after canceling bank Id loading", () => {
        
        // Arrange
        const amount = '200';
        const paymentMethod = 'SWISH';
        const personalNumber = '198608051903'

        // Act
        const landingPage: LandingPage = new LandingPage();

        landingPage.clickDepositAndPlayButton();
        landingPage.sidebar.submitButton.should('be.disabled');

        landingPage.sidebar.submitAmount(amount);
        landingPage.sidebar.selectPaymentHeader.should('have.text', StaticText.selectPaymentHeader);

        landingPage.sidebar.selectPaymentMethod(paymentMethod);
        landingPage.sidebar.selectPaymentHeader.should('have.text', StaticText.selectPaymentHeader);
        landingPage.sidebar.bankIdLoaderContainer.should('not.exist');
        
        landingPage.sidebar.submitPersonalNumber(personalNumber);
        landingPage.sidebar.bankIdLoaderContainer.should('be.visible');
        landingPage.sidebar.bankIdLogo.should('be.visible');
        landingPage.sidebar.bankIdLoaderHeader.should('have.text', StaticText.bankIdLoaderHeader);
        landingPage.sidebar.bankIdLoaderText.should('have.text', StaticText.bankIdLoaderText);

        landingPage.sidebar.loaderCancelButton.click();
        landingPage.sidebar.selectPaymentHeader.should('have.text', StaticText.selectPaymentHeader);
        landingPage.sidebar.bankIdLoaderContainer.should('not.exist');

    });
})