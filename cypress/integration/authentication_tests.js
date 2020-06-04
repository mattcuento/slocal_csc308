/* eslint-disable no-undef */
 
describe('SLO Explore Register User', function () {
  it('Registers a new user', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Sign Up').click()
    cy.get(':nth-child(2) > .css-textinput-1cwyjr8').click().type('testUser@gmail.com')
    cy.get(':nth-child(3) > .css-textinput-1cwyjr8').click().type('testUser')
    cy.get(':nth-child(4) > .css-textinput-1cwyjr8').click().type('testPass')
    cy.get(':nth-child(5) > .css-textinput-1cwyjr8').click().type('testPass')
    cy.get('.r-alignItems-obd0qt > .css-view-1dbjc4n').click()
  })
})

describe('SLO Explore Login User', function () {
  it('Logs in an existing user', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login').click()
    cy.get(':nth-child(2) > .css-textinput-1cwyjr8').click().type('Testing')
    cy.get(':nth-child(3) > .css-textinput-1cwyjr8').click().type('test123')
    cy.get('.r-alignItems-obd0qt > .css-view-1dbjc4n').click()
  })
})

describe('SLO Explore Login, Select Profile, Select Settings, View Settings, Log Out', function () {
  it('Logs a user in, navigates to profile, selects settings, and logs the user out', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login').click()
    cy.get(':nth-child(2) > .css-textinput-1cwyjr8').click().type('Testing')
    cy.get(':nth-child(3) > .css-textinput-1cwyjr8').click().type('test123')
    cy.get('.r-alignItems-obd0qt > .css-view-1dbjc4n').click()
    cy.get('[aria-label="Profile, tab, 4 of 4"] > .r-flex-13awgt0 > .r-opacity-6dt33c > .css-text-901oao').click()
    cy.get('.r-backgroundColor-1niwhzg > :nth-child(2) > :nth-child(3)').click()
    cy.get('.r-width-13qz1uu > :nth-child(4) > .css-view-1dbjc4n').click()
    cy.contains('Login')
  })
})
