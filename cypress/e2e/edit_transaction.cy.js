/* eslint-disable no-undef */
describe("Update transaction", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/transactions");
    cy.get('[data-cy="update-transaction"]').first().click();
    cy.get('[name="description"]')
      .should("be.visible")
      .clear()
      .type("Go to college");
  });
  it("user can update a transaction", () => {
    cy.get('[name="category"]').select("Transportation");
    cy.get('[name="type"]').select("EXPENSE");
    cy.get('[name="amount"]').clear().type("8.50");
    cy.get('button[type="submit"]').click();
  });
});
