/* eslint-disable no-undef */

describe('My First Test', function () {
  it('Does not do much', function () {
    expect(true).to.equal(true)
  })
})

describe('Visit test', function () {
  it('Visits a website', function () {
    cy.visit('http://localhost:19006')
  })
})

describe('SLO Explore', function () {
  it('Visits SLO Explore', function () {
    //cy.visit('http://192.168.1.19:19012/')
    cy.visit('http://192.168.0.16:19006/')
  })
})

/*describe('Visit Login', function () {
  it('Visits Login Page', function () {
    cy.visit('/')
  })
})*/
