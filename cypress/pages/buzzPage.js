class BuzzPage {

    selectorsList() {
        const selectors = {
            buzzPostField: ".oxd-buzz-post-input",
            buzzSubmitButton: '.oxd-buzz-post-slot > .oxd-button',
        }

        return selectors

    }

    fillBuzzDetails() {
        cy.get(this.selectorsList().buzzPostField).click().type('This is a buzz post from cypress automation test')
        cy.get(this.selectorsList().buzzSubmitButton).click()
    }

    buzzPostCheck() {
        cy.get('.oxd-toast').should('contain', 'Successfully Saved')
    }

}

export default BuzzPage