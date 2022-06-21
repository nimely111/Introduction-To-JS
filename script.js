const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Samuel',
    myMiddleName: 'Emmanuel Happy',
    myLasttName: 'Nimely',
    myHeight: 5.2,
    myCountry: 'Liberia',
}

myScreenOutput.innerHTML = myInfo.myFirstName + ' ' + myInfo.myMiddleName + ' ' + myInfo.myLasttName + ' ' + myInfo.myHeight + ' ' + myInfo.myCountry;


console.log(myInfo);