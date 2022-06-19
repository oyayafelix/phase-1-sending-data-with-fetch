// Add your code here
const dataStuffs = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(dataStuffs),
};

function submitData(name, email) {
    return fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let userInfo = document.createElement('p')
        userInfo.innerHTML = `${data.id}`
        document.querySelector('body').appendChild(userInfo)
       
    })
    .catch(function (error){
        alert('Unauthorized Access')
        console.log(error.message)
        let errorMessageSpace = document.createElement('p')
        errorMessageSpace.innerHTML = `
        message: 'Unauthorized Access',
        code: '401'
        `
        document.querySelector('body').appendChild(errorMessageSpace)
    })
};


submitData('Felix', 'felixoyaya@gmail.com')