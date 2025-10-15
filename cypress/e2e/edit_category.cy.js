/* eslint-disable no-undef */
describe("Update category", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/categories");
    cy.get('[data-cy="update-category"]').first().click();
  });
  it("user can update a transaction", () => {
    cy.get('[data-cy="category-dynamic-input"]').within(() => {
      cy.get('[name="category"]').clear().type("Test");
      cy.get('[data-cy="confirm-update-category"]').click();
    });
  });
});
