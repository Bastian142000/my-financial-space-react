/* eslint-disable no-undef */
describe("User Registration", () => {
  it("user can register", () => {
    cy.visit("/register");
    cy.get('[name="email"]').type("cypressExample@test.com");
    cy.get('[name="password"]').type("Akalia1029");
    cy.get('button[type="submit"]').click();
  });
});
