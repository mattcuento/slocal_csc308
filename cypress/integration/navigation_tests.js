/* eslint-disable no-undef */
 
describe('SLO Explore Login, Use Search', function () {
  it('Logs a user in, then uses the search bar to search for the \'Valencia\' hike', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login').click()
    cy.get(':nth-child(2) > .css-textinput-1cwyjr8').click().type('Testing')
    cy.get(':nth-child(3) > .css-textinput-1cwyjr8').click().type('test123')
    cy.get('.r-alignItems-obd0qt > .css-view-1dbjc4n').click()
    cy.get('[data-testid=searchInput]').click().type('Valencia')
    cy.contains('Valencia')
  })
})

describe('SLO Explore Login, Use Search, Select Hike, View Hike Details', function () {
  it('Logs a user in, then searches for the \'Valencia\' hike, then selects the hike to view details', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login').click()
    cy.get(':nth-child(2) > .css-textinput-1cwyjr8').click().type('Testing')
    cy.get(':nth-child(3) > .css-textinput-1cwyjr8').click().type('test123')
    cy.get('.r-alignItems-obd0qt > .css-view-1dbjc4n').click()
    cy.get('[data-testid=searchInput]').click().type('Valencia')
    cy.contains('Valencia').click()
  })
})

describe('SLO Explore Login, Select Profile, View Profile', function () {
  it('Logs a user in, then navigates to profile to view profile information and options', function () {
    cy.visit('http://10.0.0.246:19006/')
    cy.contains('Login').click()
    cy.get(':nth-child(2) > .css-textinput-1cwyjr8').click().type('Testing')
    cy.get(':nth-child(3) > .css-textinput-1cwyjr8').click().type('test123')
    cy.get('.r-alignItems-obd0qt > .css-view-1dbjc4n').click()
    cy.get('[aria-label="Profile, tab, 4 of 4"] > .r-flex-13awgt0 > .r-opacity-6dt33c > .css-text-901oao').click()
    cy.contains('Bio:')
  })
})

