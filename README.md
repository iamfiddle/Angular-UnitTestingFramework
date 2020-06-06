# Angular UnitTesting Framework and Code Coverage Reporting

This project is designed and developed to demonstrate angular TDD feature and to show how we can configure our angular project for code coverage through angular CLI, as part of this demonstrate following has been covered:

1) Unit Test framework using Jasmine and Test Runner via Karma 
2) Spec files with generic unit test cases for following-
    -Services
    -HTPT API's 
    -Class's including abstract class's, functions and properties
    -Generic Components having reactive forms approach
3) Code Coverage reports for Teamcity using Istanbull

## About TDD Framework:

Two such tools and frameworks that are used when testing Angular is Jasmine and Karma. Jasmine is a JavaScript testing framework that supports a software development practice called Behaviour-Driven Development(BDD). It’s a specific flavour of Test-Driven Development (TDD).

There are 3 types of tests:
-Unit tests
-Integration tests
-End-to-End (e2e) tests

In this demonstration, I have focused on unit testing with Jasmine and Karma.Jasmine provides several valuable functions to write tests. The backbone or main Jasmine methods are:

It(): Declaration of a particular test
describe(): It’s a suite of tests
expect(): Expect some value in true form

I have used the following standard steps while wriing UT cases using Jasmine:

1. Tear-Up and Tear-Down
   -This is also called setup and teardown (for cleaning up), Jasmine has few functions to make this easier-

    beforeAll
      This function is called once, before all the specs in a test suite (describe function) are run.
    beforeEach
      This function is called before each test specification (it function) is run.      
    afterAll
      This function is called once after all the specs in a test suite are finished.
    afterEach
      This function is called after each test specification is run.

2. Arrange Act and Assert
    Using standard assertion functions like toBeTruthy(), toBeFalsy() and Spies like spyOn(), and.callThrough(), 
    and.returnValue(), and.callFake()

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
