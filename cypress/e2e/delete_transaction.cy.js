/* eslint-disable no-undef */
describe("Delete transaction", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/transactions");
  });
  it("user can delete a transaction", () => {
    cy.get('[data-cy="delete-transaction"]').first().click();
    cy.get('button[type="submit"]').click();
  });
});
