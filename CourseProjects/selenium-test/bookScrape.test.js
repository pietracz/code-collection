const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");
let driver;

describe("Book Scraper", () => {
  beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://books.toscrape.com/index.html");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test.only("scrape all categories", async () => {
    await driver.wait(until.elementsLocated(By.css(".nav li ul li a")), 5000);
    const categories = await driver.findElements(By.css(".nav li ul li a"));
    let categoryUrls = []; // leeres Array anlegen
    for (let category of categories) {
      // für jedes Element in categories, den Namen und den Link filtern
      const url = await category.getAttribute("href");
      const categoryName = await category.getText();
      categoryUrls.push({ url, categoryName }); // Object in das leere Array schieben
    }
    for (let { url, categoryName } of categoryUrls) {
      // für jedes Object aus dem Array soll:
      let booksInformations = []; //ein leeres Array angelegt werden
      await driver.get(url); //die jeweilige Seite von dem Object geöffnet werden
      await driver.wait(until.elementLocated(By.css(".product_pod")), 5000);
      let books = await driver.findElements(By.css(".product_pod")); //die Bücher-Elemente finden > wird zu einer Liste
      for (let i = 0; i < books.length; i++) {
        // Index auf 0 setzen, prüfen ob der Index kleiner ist, als die Listenlänge, wenn der Index kleiner ist, soll der Index +1 gerechnet werden
        await driver.wait(until.elementLocated(By.css(".product_pod")), 5000);
        books = await driver.findElements(By.css(".product_pod")); // wenn Bedinungung oben wahr ist, soll für jedes Element folgendes gemacht werden:
        const book = books[i]; // erstellen einer Variable mit dem jeweiligen Index aus der for-Schleife
        await driver.wait(until.elementLocated(By.css("h3 a")), 5000);
        const titleElement = await book.findElement(By.css("h3 a"));
        const title = await titleElement.getAttribute("title");
        await driver.wait(until.elementLocated(By.css(".price_color")), 5000);
        const price = await book.findElement(By.css(".price_color")).getText();
        const availability = await book
          .findElement(By.css(".availability"))
          .getText();
        await titleElement.click();
        await driver.wait(until.elementLocated(By.css(".item img")), 5000);
        img = await driver.findElement(By.css(".item img")).getAttribute("src");
        await driver.wait(
          until.elementLocated(By.css("#product_description + p")),
          5000
        );
        description = await driver
          .findElement(By.css("#product_description + p"))
          .getText();
        booksInformations.push({
          title,
          price,
          availability,
          img,
          description,
        });
        await driver.navigate().back();
        await driver.wait(until.elementLocated(By.css(".product_pod")), 5000);
      }
      fs.writeFileSync(
        `json-files/${categoryName}.json`,
        JSON.stringify(booksInformations, null, 2)
      );
    }
  }, 6000000);
});
