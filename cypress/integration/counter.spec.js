/// <reference types="cypress" />

import { Buttons } from "../pages/buttons-page";


const btns = new Buttons();

context("check the functionality of the counter app", () => {
    describe("check the functionality of the buttons", () => {
        beforeEach(() => {
            cy.visit('https://mervearas.github.io/counter-app-cypress-test/index.html');
            cy.contains('Counter')
        })

        it("check the functionality of the decrease button", () => {
            btns.getDecreaseButton()
            .click()
            btns.getValue()
            .contains(-1)
        })

        it("check the functionality of the reset button", () => {
            btns.getResetButton()
            .click()
            btns.getValue()
            .contains(0)
        })

        it("check the functionality of the increase button", () => {
            btns.getIncreaseButton()
            .click()
            btns.getValue()
            .contains(1)
        })
    })
})