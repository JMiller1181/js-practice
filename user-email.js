let EmailService = {
  Boxes: {
    Primary: [
      {
        Title: "A recieved E-mail",
        Sender: "You",
        Content: "Words on a page",
        Recipient: "Me",
      },
    ],
    Draft: [
      {
        Title: "A draft E-mail",
        Sender: "Me",
        Content: "Some words in an e-mail.",
        Recipient: "You",
      },
    ],
    Sent: [
      {
        Title: "A sent E-mail",
        Sender: "Me",
        Content: "Lorem Ipsum",
        Recipient: "You",
      },
    ],
    Spam: [
      {
        Title: "A spam E-mail",
        Sender: "U",
        Content: "Words in an E-mail",
        Recipient: "Me",
      },
    ],
    Trash: [
      {
        Title: "A junk E-mail",
        Sender: "You",
        Content: "Words I don't need",
        Recipient: "Me",
      },
    ],
  },
  DisplayBoxes: function Show() {
    console.log(Object.keys(EmailService.Boxes));
  },
  MoveMail: function Move() {
    EmailService.Boxes.Sent.push(EmailService.Boxes.Draft.pop());
  },
  GetMail: function List() {
    for (Index of EmailService.Boxes.Sent) {
      console.log(Index.Title);
    }
  },
  ReadMail: function Read() {
    console.log(EmailService.Boxes.Sent[1].Content)
  },
};
console.log("Here is a list of mailbox names:")
EmailService.DisplayBoxes();
console.log("");
console.log("Here is the list of E-mails in the Sent mailbox");
EmailService.GetMail();
console.log("");
EmailService.MoveMail();
console.log("Here is the list of E-mails in the Sent mailbox after sending an E-mail:");
EmailService.GetMail();
console.log("");
console.log("Here is the content of the second E-mail in the Sent mailbox:");
EmailService.ReadMail();