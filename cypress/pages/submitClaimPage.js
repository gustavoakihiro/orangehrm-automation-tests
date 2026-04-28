class SubmitClaimPage {

    selectorsList() {
        const selectors = {

            claimSubmitButton: "[type='submit']",
            genericDropDown: ".oxd-select-text--arrow",
            genericNavigation: ".oxd-topbar-body-nav-tab-item",
            dropdownOptions: ".oxd-select-option",
            remarksTextArea: ".oxd-textarea"

        }

        return selectors

    }

    fillClaimDetails() {
        cy.get(this.selectorsList().genericNavigation).eq(1).click()
        cy.get(this.selectorsList().genericDropDown).eq(0).click()
        cy.get(this.selectorsList().dropdownOptions).eq(1).click()
        cy.get(this.selectorsList().genericDropDown).eq(1).click()
        cy.get(this.selectorsList().dropdownOptions).eq(18).click()
        cy.get(this.selectorsList().remarksTextArea).type("BR Testes")
        cy.get(this.selectorsList().claimSubmitButton).click()
    }

    claimPostCheck() {
        cy.get('.oxd-toast').should('contain', 'Successfully Saved')
    }

}

export default SubmitClaimPage