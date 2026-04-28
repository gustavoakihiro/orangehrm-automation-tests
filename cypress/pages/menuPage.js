class MenuPage {
    
    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
        }

        return selectors
    }

    accessMyinfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzButton).click()
    }

    accessClaim() {
        cy.get(this.selectorsList().claimButton).click()
    }

}

export default MenuPage