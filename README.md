# SLO Explore
CSC 308/309 Mobile Application project. SLO County hike, beach, and viewpoint guide.

Link to Figma UI Prototype V2: https://www.figma.com/file/JJYmZaMw0HWyms2Dm2xp73/SLOcal?node-id=1%3A9

Link to style guide: https://github.com/standard/standard

Style guide will be implemented using ESLint through Github Actions.

# Application Setup

Note: This application only works on Android and iOS devices with proper internet connections.

1) Download the Expo App on your phone
2) go to https://expo.io/@mcuento/outdoorApp
3) Scan the QR code with your camera
4) Start the application. Valid registration required.

ALTERNATIVE

1) Visit https://expo.io/appetize-simulator?url=https://expo.io/@mcuento/outdoorApp

# TESTING

## Unit/Integration

1) Clone the back end repository here https://github.com/mattcuento/slo_explore_backend
2) Ensure you have Node Package Manager
3) cd into the outermost directory
4) Enter the command "npm run test" and mocha tests will run.

![Integration Tests](/controllers.png)

Since our application does no heavy calculations but relies heavily on connections to the database, we created mainly integration tests with Mocha and used NYC for a report. You can see here that the HikeController file has 58% covered and listController at 77.5%. While some other files are lower than this, we justify it for a couple reasons. The main application logic lies within the listController primarily and Hike/Beach/Lookout secondarily. Hike/Beach/Lookout controllers all have the same functionality just copied over different types so it was only necessary to fully test one, which was hikes. Additionally we tested the UserController at 42%. This is because we did not want to 'test' the deletion and alteration of some users.

## Acceptance Testing

Checkout cypress-testing branch and run the following code in your terminal:

npm run cypress:open
     
  The Cypress app will then open. Click on the test file in Cypress and allow the tests to run
      
          or 
          
npx cypress run
      
   The test results will then appear in your terminal
     

Below are the Gherkin Language of each scenario that we tested

https://docs.google.com/document/d/10YGkEBrYtVoi8otoQB1qvO0E4qMtMo_NWBCawcyytlw/edit


# Static Code Analyis

## Front End

![Front Static Report](/frontend.png)

## Back End

![Back Static Report](/back.png)
