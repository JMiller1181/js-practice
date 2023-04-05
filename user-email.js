let EmailService = {
  Boxes: {
    Primary: [
      {
        Subject: "A recieved E-mail",
        Sender: "You",
        Content: "Words on a page",
        Recipient: "Me",
      },
    ],
    Draft: [
      {
        Subject: "A draft E-mail",
        Sender: "Me",
        Content: "Some words in an e-mail.",
        Recipient: "You",
      },
    ],
    Sent: [
      {
        Subject: "A sent E-mail",
        Sender: "Me",
        Content: "Lorem Ipsum, coding is hard.",
        Recipient: "You",
      },
      {
        Subject: "Another sent E-mail",
        Sender: "Me",
        Content: "Lorem Ipsum, coding is fun.",
        Recipient: "You",
      },
    ],
    Spam: [
      {
        Subject: "A spam E-mail",
        Sender: "U",
        Content: "Words in an E-mail",
        Recipient: "Me",
      },
    ],
    Trash: [
      {
        Subject: "A junk E-mail",
        Sender: "You",
        Content: "Words I don't need",
        Recipient: "Me",
      },
    ],
  },
  DisplayBoxes: function Show() {
    for (index in EmailService.Boxes) {
      console.log(index);
    }
    //Here is a different way to do it. I thought the above looked neater and was more applicable to the lesson.
    // console.log(Object.keys(EmailService.Boxes));
  },
  MoveMail: function Move() {
    EmailService.Boxes.Sent.push(EmailService.Boxes.Draft.pop());
  },
  GetMail: function List() {
    for (Index of EmailService.Boxes.Sent) {
      console.log(Index.Subject);
    }
  },
  ReadMail: function Read() {
    console.log(EmailService.Boxes.Sent[1].Content);
  },
  DraftEmail: function Draft() {
    EmailService.Boxes.Draft.push({
      Subject: "Another draft E-mail",
      Sender: "Me",
      Content: "These are words in an E-mail. Drafty draft draft.",
      Recipient: "You",
    });
  }
};
console.log("Here is a list of mailbox names:");
EmailService.DisplayBoxes();
console.log("");
console.log("Here is the list of E-mails in the Sent mailbox");
EmailService.GetMail();
console.log("");
EmailService.MoveMail();
console.log(
  "Here is the list of E-mails in the Sent mailbox after sending an E-mail:"
);
EmailService.GetMail();
console.log("");
console.log("Here is the content of the second E-mail in the Sent mailbox:");
EmailService.ReadMail();
EmailService.DraftEmail();
console.log("");
console.log("Here is our newly drafted E-mail:")
console.log(EmailService.Boxes.Draft[0]);