/// <reference types="cypress"/>

describe("my example project", () => {

  it("crate task", () => {
    cy.visit("http://localhost:4200/task-list");
    cy.location("pathname").should("equal", "/task-list");

    cy.get("[id=createButtonId]").click();

    cy.get("[formControlName=label]").type("label-value");
    cy.get("[formControlName=label]").should("contain.text", "label-value");

    cy.get("[formControlName=description]").type("description-value");
    cy.get("[formControlName=description]").should("contain.text", "description-value");

    cy.get("[formControlName=category]").type("label-category");
    cy.get("[formControlName=category]").should("contain.text", "label-category");

    cy.get("[data-buttonId=createEdittestButton]").click();
  })

  it("task-list", () => {

    cy.location("pathname").should("equal", "/task-list");

    cy.get("[data-testId=checkboxInputId]").last().click();
    cy.get("[class=task-actions__edit]").last().click();
    cy.get("[class=task-actions__delete]").last().click();
  })

})