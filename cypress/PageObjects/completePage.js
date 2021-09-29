class completePage{

    elements = {
        finalText: () => cy.get('h2[class="complete-header"]')
    }
}

module.exports = new completePage();