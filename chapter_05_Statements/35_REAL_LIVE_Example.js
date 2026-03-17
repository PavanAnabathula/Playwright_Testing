let loggedin = true

let userrole = "editor"

if (loggedin) {
  if (userrole === 'admin') {
    console.log('admin can do all the things')
  } else if (userrole === 'editor') {
    console.log('Welcome Editor — Edit access granted')
  } else if (userrole === 'viewer') {
    console.log('Welcome viewer — Read-only access')
  } else {
    console.log('No idea which role you are !')
  }
} else {
  console.log('You are not Logged in ')
}
