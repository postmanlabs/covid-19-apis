# COVID-19 Testing Locations Website
This is a website built by the Postman team to help crowd-source COVID-19 testing sites and locations. We do our best to verify all information, but standard indemnifications apply.

The website for this project can be found at: https://covid-19-apis.postman.com/covid-19-testing-locations/

## Contribution guidelines

We would love for you to contribute to the COVID-19 Testing Locations Website! To contribute to this project, please read:

* The [Code of Conduct](https://www.postman.com/code-of-conduct)
* The [Contribution Guidelines](CONTRIBUTING.md)

**NOTE:** We have added a new Markdown linter with GitHub Actions. When making a pull request, it will run against this linter. Your changed files are required to pass linting before they will be merged. More information on this can be found in the [contribution guidelines](CONTRIBUTING.md).

## Build locally
This assumes you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [npm](https://www.npmjs.com/get-npm) installed.
```
   $ git clone https://github.com/postmanlabs/covid-19-apis.git
   $ cd covid-19-apis
   $ npm install
   $ npm install -g gatsby-cli
   $ npm run dev
```

## COVID-19 Testing Location Information
This crowdsourced, regularly-updated listing of COVID-19 testing locations leverages two common services to make data more manageable and accessible:
* Postman Collections: Using a Postman collection, data is pulled from Google using the Google Sheets API and then updates an API, documentation, and publishes data to GitHub for display to end users. (New to Postman Collections? See our [Introduction to Postman Collections](https://learning.postman.com/docs/postman/collections/intro-to-collections/) documentation.)
* GitHub: used to publish machine-readable open data for wider consumption, and is also used for the hosting of web and mobile applications. See [parent folder](https://github.com/postmanlabs/covid-19-apis/) in this project repo for more information.
