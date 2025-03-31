describe('visit auto kufar', () => {

    it('open auto kufar', () => {
      cy.visit('/')
      cy.get('[data-testid="user_profile_pic"]', { timeout: 10000 }).should('exist')
    })
  })