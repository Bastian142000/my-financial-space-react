/* eslint-disable no-undef */
describe("Delete category", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/categories");
  });
  it("user can delete a category", () => {
    cy.get('[data-cy="category-dynamic-input"]').within(() => {
      cy.get('button[type="submit"]').click();
    });
  });
});
