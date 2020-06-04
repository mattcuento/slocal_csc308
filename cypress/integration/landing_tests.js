/* eslint-disable no-undef */

describe('SLO Explore View Welcome', function () {
  it('Visits SLO Explore and views landing page', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login')
    cy.contains('Sign Up')
  })
})

describe('SLO Explore View Login', function () {
  it('Visits SLO Explore and selects the login option from the landing page to view login screen', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login').click()
    cy.contains('SLO Explore Login')
  })
})

describe('SLO Explore View Sign Up', function () {
  it('Visits SLO Explore and selects the sign up option from the landing page to view registration screen', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Sign Up').click()
    cy.contains('SLO Explore Registration')
  })
})
