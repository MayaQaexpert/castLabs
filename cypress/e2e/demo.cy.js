    describe('Test suite', function () {
    // Test case steps or testcase flow
      it(' Go to castlabs.com', function (){
          // test step for URL launching
          cy.visit("https://demo.castlabs.com/");
                });
       it(' Play HLS - HLS Clear by clicking on the stream.', function (){
          cy.contains('HLS').click();
                 });
       it(' Validate the “Player state change” in the console logs.', function (){
          cy.get(':nth-child(2) > .value').should('have.text','PREPARING');
          cy.wait(1000)
          cy.get(':nth-child(2) > .value').should('have.text','BUFFERING-[NO-DATA]');
          cy.wait(6000)
          cy.get(':nth-child(2) > .value').should('have.text','PLAYING');
          cy.wait(4000)
          cy.get('.clpp-fill').click();
          cy.wait(1000)
          cy.get(':nth-child(2) > .key').should('have.text','State');
          cy.get(':nth-child(2) > .value').should('have.text','PAUSED');
                     });
       it(' Select any video value and Validate the selection', function (){
          cy.get('.pp-ui-button-options > svg').click();
          cy.get(':nth-child(3) > :nth-child(1) > .pp-ui-options-subtitle').click();
         cy.get(':nth-child(3) > .pp-ui-options-selection > .pp-ui-options-selected').click();
         cy.get(':nth-child(1) > .value').should('have.text','640x360@614.10Kbps');
         cy.get('.pp-ui-options-selection > :nth-child(4)').click();
         cy.wait(40000)
         cy.get(':nth-child(2) > .value').should('have.text','PAUSED');
         cy.get(':nth-child(1) > .value').should('have.text','960x540@2.48Mbps');
                       });

    });
