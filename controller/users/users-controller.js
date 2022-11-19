import people from "./users.js"  //importing the array of users  from the users.js file and call it people

let users = people //we store this data in the variable called users.


const UserController = (app) => {
    app.get('/api/users', findUsers)
    app.get('/api/users/:uid', findUserById); // map path pattern to handler function
    app.post('/api/users', createUser); // map URL pattern to handler function
    app.delete('/api/users/:uid', deleteUser); // map URL pattern to handler function
    app.put('/api/users/:uid', updateUser); //to update user

}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((usr) =>
                          usr._id === userId ?
                              {...usr, ...updates} :
                          usr
    );
    res.sendStatus(200);
}


const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>
                             usr._id !== userId);
    res.sendStatus(200);
}


const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}


// function called if URL matches pattern
// get uid from request parameter map
const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
        .find(u => u._id === userId); // find user in users array whose _id  matches userId retrieved from params

    res.json(user);  // respond to client with user found
}



// function runs when /api/users requested
// responds with array of users

const findUsers = (req, res) => {
    const type = req.query.type

    if(type) {

        const usersOfType = users
            .filter(u => u.type === type)
        res.json(usersOfType)
        return
    }

    res.json(users)
}
export default UserController



