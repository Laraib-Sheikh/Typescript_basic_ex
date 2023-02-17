let guestList: string[] = ["Ehsaan", "Laraib", "Sadia"];
// One of the guests can't make it
let unableToAttend = "Ehsaan";
let indexOfGuest = guestList.indexOf(unableToAttend);

if (indexOfGuest !== -1) {
  guestList[indexOfGuest] = "Sadia";
}

// Send out new invitations
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner at my place on Saturday evening.`);
}
