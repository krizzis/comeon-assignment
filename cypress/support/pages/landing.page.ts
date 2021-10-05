import { CyJElement } from "../../type-alias";
import SidebarComp from "../components/sidebar.component";
import StaticText from "../static/static-text";

class LandingPage {
    sidebar: SidebarComp

    constructor() {
        cy.visit('/');
        this.sidebar = new SidebarComp;
    }

    clickDepositAndPlayButton(): void {
        this.depositAndPlayButton.click();
        this.sidebar.guestDepositLoginHeader
           .should('have.text', StaticText.depositAndPlayHeader);

    }

    private get depositAndPlayButton(): CyJElement {
        return cy.get('button[data-at="deposit-and-play-homepage"]');
    }

}

export default LandingPage;