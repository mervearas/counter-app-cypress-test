 export class Buttons {
    getDecreaseButton() {
        return cy.get('[data-cy=decrease]')
    }

    getIncreaseButton() {
        return cy.get('[data-cy=increase]')
    }
    
    getResetButton() {
        return cy.get('[data-cy=reset]')
    }

    getValue() {
        return cy.get('[data-cy=value]')
    }
}



