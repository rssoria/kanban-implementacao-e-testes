/* global cy */
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("kanban", () => {
  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  // eslint-disable-next-line no-undef
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have add card form", () => {
    cy.get('[data-test-id="add-card-form"]').should("be.visible");
  });

  it("should create card on To Do column", () => {
    cy.get('[data-test-id="field-titulo-input"]').clear().type("oi");
    cy.get('[data-test-id="field-descricao-input"]').clear().type("teste");
    cy.get('[data-test-id="colunas-dropdownlist-select"]').select("To Do");
    cy.get('[data-test-id="create-card-button"]').click();
    cy.get('[data-test-id="cards-coluna-To Do"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get("h4").should("have.text", "oi");
        cy.get("h5").should("have.text", "teste");
      });
    });
  });

  it("should move card from todo to developing", () => {
    cy.get('[data-test-id="cards-coluna-To Do"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get('[data-test-id="card-dropdownlist-select"]').select(
          "Developing"
        );
      });
    });
    cy.get('[data-test-id="cards-coluna-Developing"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get("h4").should("have.text", "oi");
        cy.get("h5").should("have.text", "teste");
      });
    });
  });
});
