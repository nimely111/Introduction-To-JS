const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Samuel',
    myMiddleName: 'Emmanuel Happy',
    myLasttName: 'Nimely',
    myHeight: 5.2,
    myCountry: 'Liberia',
}

myScreenOutput.innerHTML = 'First Name: ' + myInfo.myFirstName + ' ' + 'Middle Name: ' + myInfo.myMiddleName + ' ' + ' Last Name: ' + myInfo.myLasttName + ' ' + 'Height: ' + myInfo.myHeight + ' ' + 'Country: '+ myInfo.myCountry;


console.log(myInfo);