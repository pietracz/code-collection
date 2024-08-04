const { Builder, By, until } = require("selenium-webdriver");
let driver;

describe("Form Tester", () => {
  test("titel des Tests", async () => {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    const title = await driver.getTitle();
    expect(title).toBe("React App");

    const inputName = await driver.findElement(By.id("inputName"));
    const inputEmail = await driver.findElement(By.id("inputEmail"));
    const submitButton = await driver.findElement(By.id("submitButton"));

    await inputName.click();
    await inputName.sendKeys("Hallo");

    await inputEmail.click();
    await inputEmail.sendKeys("Hallo@hallo.com");

    await submitButton.click();

    const elements = await driver.findElements(By.tagName("td"))

    let gefunden = false;
    for (let td of elements) {
      if(await td.getText() == "Sabine Müller"){
        gefunden = true;
      }
    }

    // await driver.wait(until.elementLocated(By.tagName("td")), 3000);
/*     const nameCell = await driver.findElement(By.className("nameCell"));
    const emailCell = await driver.findElement(By.className("emailCell"));

    expect(await nameCell.isDisplayed()).toBe(true);
    expect(await emailCell.isDisplayed()).toBe(true);

    const nameContent = await nameCell.getText();
    expect(nameContent).toBe("Hallo");
    console.log(nameContent);

    const emailContent = await emailCell.getText();
    expect(emailContent).toBe("Hallo@hallo.com");
    console.log(emailContent); */

    /*     const newClass = await button.getAttribute("class");

    expect(newClass).toBe("grey"); */

    await driver.quit();
  });
});
