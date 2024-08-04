const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");

describe("Book scrapen", () => {
  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://books.toscrape.com/index.html");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("scrape all categories", async () => {
    const categories = await driver.findElements(By.css(".nav li ul li a"));

    for (let category of categories) {
      const categoryTitle = await category.getText();

      try {
        const rawData = fs.readFileSync(
          `./json-files/${categoryTitle}.json`,
          "utf-8"
        );
        allBooks = JSON.parse(rawData);
      } catch (err) {
        if (err.code === "ENOENT") {
          fs.writeFileSync(
            `./json-files/${categoryTitle}.json`,
            JSON.stringify([], null, 4),
            "utf-8"
          );
        }
      }

      await category.click();

      const books = await driver.findElements(By.css(".product_pod"));

      let allBooks = [];
      for (let book of books) {
        try {
          const rawData = fs.readFileSync(
            `./json-files/${categoryTitle}.json`,
            "utf-8"
          );
          allBooks = JSON.parse(rawData);
        } catch (err) {
          if (err.code === "ENOENT") {
            fs.writeFileSync(
              `./json-files/${categoryTitle}.json`,
              JSON.stringify([], null, 4),
              "utf-8"
            );
          }
        }

        const title = await driver
          .wait(until.elementLocated(By.css("h3 a")), 5000)
          .getAttribute("title");
        const price = await driver
          .wait(until.elementLocated(By.css(".price_color")), 5000)
          .getText();
        const isInStock = await driver
          .wait(until.elementLocated(By.css(".instock")), 5000)
          .getText();
        allBooks.push({ title, price, isInStock });
        fs.writeFileSync(
          `./json-files/${categoryTitle}.json`,
          JSON.stringify(allBooks, null, 2)
        );
      }

      await driver.navigate().back();
      await driver.wait(until.elementLocated(By.css(".side_categories")), 5000);
    }
  }, 600000);
});

//get category list
//go into first category
//click on book
//scrape img, title, price, availability and description
//navigate back
//click on second book and so on
//check if there is a next page
//repeat for pages
//continue in new category
//
//
//
//
