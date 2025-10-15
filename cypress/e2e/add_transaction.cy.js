/* eslint-disable no-undef */
describe("Add transaction", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/transactions");
    cy.contains("Add transaction").click();
    cy.get('[name="description"]').should("be.visible").type("Salary");
  });
  it("user can register a new transaction", () => {
    cy.get('[name="category"]').select("Other");
    cy.get('[name="type"]').select("INCOME");
    cy.get('[name="amount"]').type("850");
    cy.get('button[type="submit"]').click();
  });
});
