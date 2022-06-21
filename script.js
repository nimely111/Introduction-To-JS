const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Samuel',
    myMiddleName: 'Emmanuel Happy',
    myLasttName: 'Nimely',
    myHeight: 5.2,
    myCountry: 'Liberia',
}

myScreenOutput.innerHTML = 'First Name: ' + myInfo.myFirstName + '<br> ' + 'Middle Name: ' + myInfo.myMiddleName + ' <br>' + ' Last Name: ' + myInfo.myLasttName + '<br> ' + 'Height: ' + myInfo.myHeight + '<br> ' + 'Country: '+ myInfo.myCountry;


console.log(myInfo);