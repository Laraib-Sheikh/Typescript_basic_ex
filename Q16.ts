let guestList: string[] = ["Ehsaan", "Laraib", "Sadia"];
let newGuests: string[] = ["Malala Yousafzai", "Stephen Hawking", "Ada Lovelace"];

// Add new guests to the guest list
guestList = guestList.concat(newGuests);

// Send out invitations to all guests
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place on Saturday evening.`);
}
