$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Currency.feature");
formatter.feature({
  "line": 1,
  "name": "Testing of Currency in testing retail website",
  "description": "",
  "id": "testing-of-currency-in-testing-retail-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 46184564300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check diffrent currency in all product",
  "description": "",
  "id": "testing-of-currency-in-testing-retail-website;check-diffrent-currency-in-all-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@currency"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user should be able see price of my products in different currency",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User should see the default currency which is dollar sign",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on drop down on top left side of webpage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user select any other currency",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see items with diffrent currency",
  "keyword": "Then "
});
formatter.match({
  "location": "CurrencyStepDefination.user_should_be_able_see_price_of_my_products_in_different_currency()"
});
formatter.result({
  "duration": 10513249100,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepDefination.user_should_see_the_default_currency_which_is_dollar_sign()"
});
formatter.result({
  "duration": 55231900,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepDefination.user_click_on_drop_down_on_top_left_side_of_webpage()"
});
formatter.result({
  "duration": 112500,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepDefination.user_select_any_other_currency()"
});
formatter.result({
  "duration": 279872400,
  "status": "passed"
});
formatter.match({
  "location": "CurrencyStepDefination.user_should_be_able_to_see_items_with_diffrent_currency()"
});
formatter.result({
  "duration": 1376981800,
  "status": "passed"
});
formatter.after({
  "duration": 3847836900,
  "status": "passed"
});
});