let introPbTime = "2:02.18";
let introBestSeg = "2:02.18";
let penguinPbTime = "5:18.89";
let penguinPbSeg = "3:16.71";
let penguinBestSeg = "3:16.71";
let eaglePbTime = "8:12.10";
let eaglePbSeg = "2:53.21";
let eagleBestSeg = "2:53.21";
let noumanderPbTime = "10:42.71";
let noumanderPbSeg = "2:30.61";
let noumanderBestSeg = "2:30.61";
let boomerPbTime = "13:35.90";
let boomerPbSeg = "2:53.19";
let boomerBestSeg = "2:53.19";
let mandrillPbTime = "16:07.69";
let mandrillPbSeg = "2:31.79";
let mandrillBestSeg = "2:31.79";
let dilloPbTime = "18:53.40";
let dilloPbSeg = "2:43.77";
let dilloBestSeg = null;
let octoPbTime = "21:37.17";
let octoPbSeg = "2:45.72";
let octoBestSeg = "2:45.72";
let lizardPbTime = "24:35.17";
let lizardPbSeg = "2:58.00";
let lizardBestSeg = "2:58.00";
let revisitsPbTime = "28:11.71";
let revistsPbSeg = "3:36.54";
let revisitsBestSeg = null;
let sigOnePbTime = "31:50.36";
let sigOnePbSeg = "3:38.65";
let sigOneBestSeg = "3:38.65";
let sigTwoPbTime = "34:05.91";
let sigTwoPbSeg = "2:15.48";
let sigTwoBestSeg = "2:15.48";
let sigThreePbTime = "37:12.49";
let sigThreePbSeg = "3:06.65";
let sigThreeBestSeg = "3:06.65";
let biggestBadPbTime = "38:44.13";
let biggestBadPbSeg = "1:31.63";
let biggestBadBestSeg = "1:31.63";

$("#intro-time").text(introPbTime);
$("#intro-seg").text(introPbTime);
$("#intro-best").text(introBestSeg);

$("#penguin-time").text(penguinPbTime);
$("#penguin-seg").text(penguinPbSeg);
$("#penguin-best").text(penguinBestSeg);

$("#eagle-time").text(eaglePbTime);
$("#eagle-seg").text(eaglePbSeg);
$("#eagle-best").text(eagleBestSeg);

$("#noumander-time").text(noumanderPbTime);
$("#noumander-seg").text(noumanderPbSeg);
$("#noumander-best").text(noumanderBestSeg);

$("#boomer-time").text(boomerPbTime);
$("#boomer-seg").text(boomerPbSeg);
$("#boomer-best").text(boomerBestSeg);

$("#mandrill-time").text(mandrillPbTime);
$("#mandrill-seg").text(mandrillPbSeg);
$("#mandrill-best").text(mandrillBestSeg);

$("#dillo-time").text(dilloPbTime);
$("#dillo-seg").text(dilloPbSeg);
$("#dillo-best").text(dilloBestSeg);

$("#octo-time").text(octoPbTime);
$("#octo-seg").text(octoPbSeg);
$("#octo-best").text(octoBestSeg);

$("#lizard-time").text(lizardPbTime);
$("#lizard-seg").text(lizardPbSeg);
$("#lizard-best").text(lizardBestSeg);

$("#revisit-time").text(revisitsPbTime);
$("#revisit-seg").text(revistsPbSeg);
$("#revisit-best").text(revisitsBestSeg);

$("#sig-one-time").text(sigOnePbTime);
$("#sig-one-seg").text(sigOnePbSeg);
$("#sig-one-best").text(sigOneBestSeg);

$("#sig-two-time").text(sigTwoPbTime);
$("#sig-two-seg").text(sigTwoPbSeg);
$("#sig-two-best").text(sigTwoBestSeg);

$("#sig-three-time").text(sigThreePbTime);
$("#sig-three-seg").text(sigThreePbSeg);
$("#sig-three-best").text(sigThreeBestSeg);

$("#biggest-bad-time").text(biggestBadPbTime);
$("#biggest-bad-seg").text(biggestBadPbSeg);
$("#biggest-bad-best").text(biggestBadBestSeg);

function addUpSegs(columnName) {
    let numbersToAdd = new Array(14);
    let arrayOfArrays = new Array(14);
    if (columnName === "best"){
        for(let i = 0; i < 14; i++){
            numbersToAdd[i] = $("#pb-table tr:nth-child(" + (i + 2) + ") td:last-child").text();
            arrayOfArrays.push(stringToTime(numbersToAdd[i]));
        }
    } else if (columnName === "pb"){
        for(let i = 0; i < 14; i++){
            numbersToAdd[i] = $("#pb-table tr:nth-child(" + (i + 2) + ") td:nth-child(3)").text();
            arrayOfArrays.push(stringToTime(numbersToAdd[i]));
        }
    }
    console.log(arrayOfArrays);
    console.log(addUpArrays(arrayOfArrays));
}

function stringToTime(timeString){
    let length = timeString.length;
    let minutesSecondsMs = new Array(3);
    if(length === 7){
        minutesSecondsMs[0] = parseFloat(timeString.substring(0, 1));
        minutesSecondsMs[1] = parseFloat(timeString.substring(2, 4));
        minutesSecondsMs[2] = parseFloat(timeString.substring(5));
    } else if(length === 8) {
        minutesSecondsMs[0] = parseFloat(timeString.substring(0, 2));
        minutesSecondsMs[1] = parseFloat(timeString.substring(3, 5));
        minutesSecondsMs[2] = parseFloat(timeString.substring(6));
    }

    return minutesSecondsMs;
}

function addUpArrays(arraysToAddUp){
    let tempTotal = [0, 0, 0];
    arraysToAddUp.forEach(function (oneArray) {
        tempTotal[0] += oneArray[0];
        tempTotal[1] += oneArray[1];
        tempTotal[2] += oneArray[2];
    });

    tempTotal[1] += Math.floor((tempTotal[2] / 100));
    tempTotal[2] = tempTotal[2] % 100;
    tempTotal[0] += Math.floor((tempTotal[1] / 60));
    tempTotal[1] = tempTotal[1] % 60;

    tempTotal[0] = "" + tempTotal[0];
    if (tempTotal[1] < 10){
        tempTotal = "0" + tempTotal [1];
    } else {
        tempTotal[1] = "" + tempTotal[1];
    }

    if(tempTotal[2] < 10){
        tempTotal[2] = "0" + tempTotal[2];
    } else {
        tempTotal[2] = "" + tempTotal[2];
    }

    return tempTotal[0] + ":" + tempTotal[1] + "." + tempTotal[2];
}

let startTime = 0;
let stageCount = -1;
let newIntroSeg = 0;
let newIntroTime = 0;
let newPenguinSeg = 0;
let newPenguinTime = 0;
let newEagleSeg = 0;
let newEagleTime = 0;
let newNoumanderSeg = 0;
let newNoumanderTime = 0;
let newBoomerSeg = 0;
let newBoomerTime = 0;
let newMandrillSeg = 0;
let newMandrillTime = 0;
let newDilloSeg = 0;
let newDilloTime = 0;
let newOctoSeg = 0;
let newOctoTime = 0;
let newLizardSeg = 0;
let newLizardTime = 0;
let newRevisitSeg = 0;
let newRevisitTime = 0;
let newSigOneSeg = 0;
let newSigOneTime = 0;
let newSigTwoSeg = 0;
let newSigTwoTime = 0;
let newSigThreeSeg = 0;
let newSigThreeTime = 0;
let newBiggestBadSeg = 0;
let newFinishTime = 0;

$(window).keypress(function(e) {
    if (e.which === 32) {
        switch (stageCount) {
            case -1:
                startTime = Date.now();
                stageCount++;
                break;
            case 0:
                newIntroTime = Date.now();
                newIntroSeg = (Date.now() - startTime);
                stageCount++;
                console.log(newIntroSeg);
                break;
            case 1:
                newPenguinSeg = (Date.now() - newIntroTime);
                newPenguinTime = Date.now();
                stageCount++;
                console.log(newPenguinSeg);
                break;
            case 2:
                newEagleSeg = (Date.now() - newPenguinTime);
                newEagleTime = Date.now();
                stageCount++;
                console.log(newEagleSeg);
                break;
            case 3:
                newNoumanderSeg = (Date.now() - newEagleTime);
                newNoumanderTime = Date.now();
                stageCount++;
                console.log(newNoumanderSeg);
                break;
            case 4:
                newBoomerSeg = (Date.now() - newNoumanderTime);
                newBoomerTime = Date.now();
                stageCount++;
                console.log(newBoomerSeg);
                break;
            case 5:
                newMandrillSeg = (Date.now() - newBoomerTime);
                newMandrillTime = Date.now();
                stageCount++;
                console.log(newMandrillSeg);
                break;
            case 6:
                newDilloSeg = (Date.now() - newMandrillTime);
                newDilloTime = Date.now();
                stageCount++;
                console.log(newDilloSeg);
                break;
            case 7:
                newOctoSeg = (Date.now() - newDilloTime);
                newOctoTime = Date.now();
                stageCount++;
                console.log(newOctoSeg);
                break;
            case 8:
                newLizardSeg = (Date.now() - newOctoTime);
                newLizardTime = Date.now();
                stageCount++;
                console.log(newLizardSeg);
                break;
            case 9:
                newRevisitSeg = (Date.now() - newLizardTime);
                newRevisitTime = Date.now();
                stageCount++;
                console.log(newRevisitSeg);
                break;
            case 10:
                newSigOneSeg = (Date.now() - newRevisitTime);
                newSigOneTime = Date.now();
                stageCount++;
                console.log(newSigOneSeg);
                break;
            case 11:
                newSigTwoSeg = (Date.now() - newSigOneTime);
                newSigTwoTime = Date.now();
                stageCount++;
                console.log(newSigTwoSeg);
                break;
            case 12:
                newSigThreeSeg = (Date.now() - newSigTwoTime);
                newSigThreeTime = Date.now();
                stageCount++;
                console.log(newSigThreeSeg);
                break;
            case 13:
                newBiggestBadSeg = (Date.now() - newSigThreeTime);
                newFinishTime = Date.now() - startTime;
                stageCount = 0;
                console.log(newBiggestBadSeg);
                console.log(newFinishTime);
                break;
        }
    }
});