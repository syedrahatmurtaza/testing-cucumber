const { Given, When, Then, Before } = require("@cucumber/cucumber");
const pactum = require("pactum");

let spec = pactum.spec();

Before(function () {
  spec = pactum.spec();
});

Given("I make a GET request to {string}", function (url) {
  spec.get(url);
});

When("I recieve a response", async function () {
  await spec.toss();
});

Then("I should see {string}", function (body) {
  spec.response().should.have.body(body);
});
