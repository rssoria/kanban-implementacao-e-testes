/* global cy */

describe("kanban", () => {
  // eslint-disable-next-line no-undef
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have add card form", () => {
    cy.get('[data-test-id="add-card-form"]').should("be.visible");
  });

  it("should not create card if titulo field isn't filled", () => {
    cy.get('[data-test-id="field-titulo-input"]').clear();
    cy.get('[data-test-id="field-descricao-input"]').clear().type("teste");
    cy.get('[data-test-id="colunas-dropdownlist-select"]').select("To Do");
    cy.get('[data-test-id="create-card-button"]').click();
    cy.get('[data-test-id="cards-coluna-To Do"]').within(() => {
      cy.get("h5").should("not.exist", "teste");
    });
  });

  it("should not create card if descricao field isn't filled", () => {
    cy.get('[data-test-id="field-titulo-input"]').clear().type("card abc");
    cy.get('[data-test-id="field-descricao-input"]').clear();
    cy.get('[data-test-id="colunas-dropdownlist-select"]').select("To Do");
    cy.get('[data-test-id="create-card-button"]').click();
    cy.get('[data-test-id="cards-coluna-To Do"]').within(() => {
      cy.get("h4").should("not.exist", "card abc");
    });
  });

  it("should create card on To Do column", () => {
    cy.get('[data-test-id="field-titulo-input"]').clear().type("card 1");
    cy.get('[data-test-id="field-descricao-input"]').clear().type("teste");
    cy.get('[data-test-id="colunas-dropdownlist-select"]').select("To Do");
    cy.get('[data-test-id="create-card-button"]').click();
    cy.get('[data-test-id="cards-coluna-To Do"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get("h4").should("have.text", "card 1");
        cy.get("h5").should("have.text", "teste");
      });
    });
  });

  it("should move card from To Do to Developing", () => {
    cy.get('[data-test-id="cards-coluna-To Do"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get('[data-test-id="card-dropdownlist-select"]').select(
          "Developing"
        );
      });
    });
    cy.get('[data-test-id="cards-coluna-Developing"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get("h4").should("have.text", "card 1");
        cy.get("h5").should("have.text", "teste");
      });
    });
  });

  it("should move card from Developing to QA", () => {
    cy.get('[data-test-id="cards-coluna-Developing"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get('[data-test-id="card-dropdownlist-select"]').select("QA");
      });
    });
    cy.get('[data-test-id="cards-coluna-QA"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get("h4").should("have.text", "card 1");
        cy.get("h5").should("have.text", "teste");
      });
    });
  });

  it("should move card from QA to Done", () => {
    cy.get('[data-test-id="cards-coluna-QA"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get('[data-test-id="card-dropdownlist-select"]').select("Done");
      });
    });
    cy.get('[data-test-id="cards-coluna-Done"]').within(() => {
      cy.get('[data-test-id="card"]').within(() => {
        cy.get("h4").should("have.text", "card 1");
        cy.get("h5").should("have.text", "teste");
      });
    });
  });

  it("should delete card from Done", () => {
    cy.get('[data-test-id="cards-coluna-Done"]').within(() => {
      cy.get('[data-test-id="card-delete-button"]').click();
    });
  });
});
