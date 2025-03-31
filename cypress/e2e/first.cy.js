describe('visit kufar', () => {

  it('open kufar', () => {
    cy.visit('/l')
    cy.get('[data-testid="user_profile_pic"]', { timeout: 10000 }).should('exist')
  })
})