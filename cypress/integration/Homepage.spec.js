const Homepage = require('../support/pages/Homepage');
let homepage = new Homepage();

describe('BDD Atlas', () => {
    it('Visit BDD Atalas Web', () => {
        homepage.visit('http://bdd.atlasid.tech/');
    })

    it('Type a Quote', () => {
        homepage.type_quote('Ayumu Tenann Ora Editan');
    })

    it('Select Colour', () => {
        homepage.choose_colour('Blue');
    })

    it('Submit a Quote', () => {
        homepage.submit_quote();
    })

    it('Clear Spesific Quote', () => {
        homepage.clear_quote('Ayumu');

    })
})