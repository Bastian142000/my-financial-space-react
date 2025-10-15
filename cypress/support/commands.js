/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { createClient } from "@supabase/supabase-js";

Cypress.Commands.add("login", () => {
  const supabaseUrl = Cypress.env("SUPABASE_URL");
  const supabaseKey = Cypress.env("SUPABASE_KEY");
  const email = Cypress.env("TEST_USER_EMAIL");
  const password = Cypress.env("TEST_USER_PASSWORD");

  const supabase = createClient(supabaseUrl, supabaseKey);

  return supabase.auth
    .signInWithPassword({ email, password })
    .then(({ data, error }) => {
      if (error) throw error;
    });
});
