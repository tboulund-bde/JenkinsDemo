import { Selector } from "testcafe"

fixture`Demo website test`
    .page("./index.html");

test("Subpage navigation", async t => {
    await t
        // Pre-assertion
        .expect(Selector("#welcome").innerText).eql("Welcome to the frontpage")
        .expect(Selector("body").getStyleProperty("background-color")).eql("rgb(240, 128, 128)")
        // Act
        .takeScreenshot()
        .click(Selector("#subpage-link"))
        .takeScreenshot()
        // Assert
        .expect(Selector("#welcome").innerText).eql("Welcome to the subpage")
        .expect(Selector("body").getStyleProperty("background-color")).eql("rgb(144, 238, 144)")
});