describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq','http://bdd.atlasid.tech/');
        cy.url().then((url) => {
            expect(url).to.be.equal('http://bdd.atlasid.tech/');
        })
    })

    it('Type a Quote', () => {
        cy.get('#inputQuote').type('Ayumu Tenanan Ora Editan');
    })

    it('Click Colour', () => {
        cy.get('#colorSelect').select('Blue');
    })

    it('Select Colour', () => {
        cy.get('#buttonAddQuote').click();
        cy.contains('Ayumu').should('exist');
    })

    it('Clear Spesific Quote', () => {
        //cy.wait(2000);
        cy.contains('Ayumu Tenanan').click().should('not.exist');
        //cy.contains('Ayumu Tenanan').then(($elm) => {
           // cy.get($elm).click();
           // cy.get($elm).should('not.exist');
        //})
        //cy.wait(2000);
    })
})