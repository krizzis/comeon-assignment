# ComeOn Assignment

Assignment have been fulfilled with using Cypress and TypeScript (but easily can be rewritten to JavaScript). 

To implement runs both for desktop and mobile clients separate spec files have been created. 
As viewpoint for mobile device have been chosen viewport of iphone 12 pro. It can be changed in spec file. If different devices need to be tested it can be managed through cypress environments (not a part of this solution).

To run tests for both sites have been created different npm scripts (also to run mobile/desktop tests or both):
```
cy:hajper-run-all
cy:hajper-run-mobile
cy:hajper-run-desktop
cy:snabbare-run-all
cy:snabbare-run-mobile
cy:snabbare-run-desktop
```
as default baseUrl 'snabbare.com' have been chosen. It can be managed in cypress.config file

As reporting tool 'cypress-mochawesome-reporter' have been chosen.

<a href="https://drive.google.com/file/d/1oZHdzl3AFPBeTcar7whSUKpWcAIxSkkH/view?usp=sharing" target="_blank">Example of generated report</a>

Time spent on this assignment about 5-6 hours

