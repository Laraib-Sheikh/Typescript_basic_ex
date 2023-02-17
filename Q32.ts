let current_users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
let new_users: string[] = ['Frank', 'Gina', 'alice', 'david', 'Hank'];

for (let new_user of new_users) {
  if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
    console.log(`The username '${new_user}' is not available. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
