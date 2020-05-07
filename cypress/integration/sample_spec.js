/* eslint-disable no-undef */

describe('My First Test', function () {
  it('Does not do much', function () {
    expect(true).to.equal(true)
  })
})

describe('Visit test', function () {
  it('Visits a website', function () {
    cy.visit('https://twitter.com/')
  })
})
