let guestList: string[] = ["Ehsaan", "Laraib", "Sadia"];
// Remove guests from the guest list
let removedGuests: string[] = guestList.splice(2, 4);

// Send out invitations to remaining guests
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are still invited to dinner at my place on Saturday evening.`);
}

// Send apologies to removed guests
for (let i = 0; i < removedGuests.length; i++) {
  console.log(`Dear ${removedGuests[i]}, unfortunately the dinner table is smaller than anticipated and we are unable to accommodate all of our guests. We hope to have the pleasure of your company at a future event.`);
}
