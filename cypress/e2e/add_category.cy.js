/* eslint-disable no-undef */
describe("Add category", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/app/categories");
    cy.get('[name="category"]').should("be.visible").type("Rent");
  });
  it("user can register a new category", () => {
    cy.get('button[type="submit"]').click();
  });
});
