async function getAllUsers(){
    const res = await fetch('/admin/users');
    const users = await res.json();
    console.table(users);
}
