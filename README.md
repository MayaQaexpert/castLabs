$"# castLabs"
Cypress is an end-to-end JavaScript testing framework that provides a visual interface to indicate which tests and which commands are taking place, passed, or failed. It is fast, and easy to set up and run

# Installing Cypress requires:

Install Cypress via npm:
>_npm install

editor terminal & run command npm init -y  : package.json file is created
cd /your/project/path
npm install cypress --save-dev

npx cypress -v
Cypress package version: 10.10.0
npx cypress open
npm install --save-dev cypress@10.10.0npm install --save-dev cypress@10.10.0
node_modules/.bin/cypress open 

# Running the cypress test

To run cypress in the cypress CI dashboard,  email id need to added in the CI admin page before execution.

https://dashboard.cypress.io/projects/1u7r74/runs/1/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D&testingTypesEnum=%5B%5D

 ## Following command to run in the cypress CI project.

  npx cypress run --record --key 86fe6321-2445-47c4-a684-e6996e736cae --spec <Projectpath>\cypress\e2e\demo.cy.js
  
##  following command to run the local system

npx cypress run  --spec <Projectpath>\cypress\e2e\demo.cy.js
