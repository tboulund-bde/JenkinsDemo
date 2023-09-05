import { Selector } from "testcafe"

fixture`Demo website test`
    .page("./index.html");

test("Subpage navigation", async t => {
    await t
        // Pre-assertion
        .expect(Selector("#welcome").innerText).eql("Welcome to the frontpage")
        .expect(Selector("body").getStyleProperty("background-color")).eql("rgb(240, 128, 128)")
        // Act
        .click(Selector("#subpage-link"))
        // Assert
        .expect(Selector("#welcome").innerText).eql("Welcome to the subpage")
        .expect(Selector("body").getStyleProperty("background-color")).eql("rgb(173, 216, 230)")
});