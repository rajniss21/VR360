describe("New user registration", async function() {
  it("Register Form: Email is delievered", function() {
    const test_id = new Date().getTime();
    const incoming_mailbox = `rajnishofficeuse@gmail.com`;
    cy
      .task("gmail:check", {
        from: "admin@betaspace.ltd",
        to: incoming_mailbox,
        subject: "Email Verification"
      })
      .then(email => {
        assert.isNotNull(email, `Email was not found`);
      });
  });
});