describe('visit kufar', () => {

  it('open kufar', () => {
    cy.visit('/l')
    cy.get('[data-testid="user_profile_pic"]').should('exist')
  })
})