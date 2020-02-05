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
let octoPbSeg = "2:43.77";
let octoBestSeg = "2:43.77";
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
    if (columnName === "best"){
        let introToAdd = $("#pb-table tr:nth-child(2) td:last-child").text();

        console.log(introToAdd);
    }
}

addUpSegs("best");