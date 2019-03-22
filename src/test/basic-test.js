describe("angularjs homepage tests", function() {
  beforeEach(function() {
    browser.get("https://angularjs.org");
  });

  it('should have title header', function(){
    let header = $('.hero h2');
    expect(header.getText()).toEqual('AngularJS');
  });

  it('should greet', function(){
    element(by.model("yourName")).sendKeys("Stranger");
    expect(element(by.binding('yourName')).getText()).toEqual("Hello Stranger!");
  });

  it("should filter element", function() {
    let el = $$(".text-display-1")
      .filter((element) => {
        return element.getText().then(text => {
          return text === "Alternatives";
        });
      });
      expect(el.getText()).toContain("Alternatives");
  });

  it("should add a todo", function() {
    element(by.model("todoList.todoText")).sendKeys(
      "write first protractor test"
    );
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater("todo in todoList.todos"));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual("write first protractor test");

    // You wrote your first test, cross it off the list
    todoList
      .get(2)
      .element(by.css("input"))
      .click();
    var completedAmount = element.all(by.css(".done-true"));
    expect(completedAmount.count()).toEqual(2);
  });
});
