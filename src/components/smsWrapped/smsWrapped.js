import "./smsWrapped.css"
import React, { useEffect, useState, useRef } from "react";
import { captainIDToName, sidekickIDToName, stadiumIDToName } from "./clientUtilities";
import smsWrapped from "../../assets/smsWrapped2024.json"
import citrusLogoGreyscale from "../../assets/citrus_logo_greyscale.png"
import { toBlob } from 'html-to-image';

const isChrome = navigator.userAgent.match(/chrome|chromium|crios/i);
const mainRef = useRef<HTMLDivElement>(null);

const DISCORD_ACC_KEY = "DISCORD_USER_ACCOUNT_OBJ";

const captainIDToColor = {
    "0": "#f86a2e",
    "1": "#feda00", // dk
    "2": "#41a732",
    "3": "#e03038",
    "4": "#d888a5",
    "5": "#540674",
    "6": "#f5da0f",
    "7": "#68d154", // yoshi
    "8": "#395a6b"
}

const sidekickIDToColor = {
    "0": "red", // toad,
    "1": "#ffce00",
    "2": "#ffce00",
    "3": "#fc51b5"
}

const stadiumIDToColor = {
    "0": "#7d6d5b",
    "1": "#80bc10", //
    "2": "#42361c",
    "3": "#105563",
    "4": "#23631f",
    "5": "#3a6375",
    "6": "#6f6d67"
}

const LogInForWrapped = () => {
    return (
        <div>
            <h1 className="notLoggedIn subtitle">Please log in with your Discord account to access your SMS Wrapped 2024</h1>
        </div>
    )
}

const NoUserDatafound = () => {
    return (
        <div className="lackingUserInformation">
            <h1 className="noUserData subtitle">We did not find any 2024 match information for you in the Citrus Database. Play some matches this year!</h1>
        </div>
    )
}

const buildStadiumWinComponent = ({ props }) => {
    const {
        stadiumColor,
        stadiumName,
        stadiumWinRate,
        globalWinPercentage,
    } = props
    if (globalWinPercentage == 0) {
        return (
            <div>
                <span className="citrusWrappedGeneralText">You didn't win any matches this year, but 2025 will be different! </span>
            </div>
        )
    } else {
        return (
            <div>
                <span className="citrusWrappedGeneralText">Your global win rate was </span>
                <span className="statistic">{globalWinPercentage}%</span>
                <span className="citrusWrappedGeneralText"> and you were most successful on </span>
                <span style={{ color: stadiumColor, fontWeight: "bold" }}>{stadiumName}</span>
                <span className="citrusWrappedGeneralText"> with a stage win rate of </span>
                <span className="statistic">{stadiumWinRate}%</span>
            </div>
        )
    }
}

const SMSWrappedBannerInfo = () => {
    return (
        <div className="columns">
            <div className="column">
                <div className="columns">
                    <div class="column is-2"></div>
                    <div class="column is-2">
                        <figure class="image">
                            <img src={citrusLogoGreyscale} />
                        </figure>
                    </div>
                    <div class="column is-6">
                        <section class="hero is-small is-link">
                            <div class="hero-body">
                                <p class="title">SMS Wrapped 2024</p>
                                <p class="subtitle">Re-visit your SMS 2024 gameplay — powered by Citrus!</p>
                            </div>
                        </section>
                    </div>
                    <div class="column is-2"></div>
                </div>
            </div>
        </div>
    )
}

const SMSWrappedUserInfo = ({ props }) => {
    const {
        discordName,
        totalGames,
        totalHours,
        stadiumColor,
        stadiumName,
        captainColor,
        captainName,
        sidekickColor,
        sidekickName,
        stadiumWinRate,
        globalWinPercentage,
        headToHeadObj
    } = props
    return (
        <div>
            <span className="citrusWrappedGeneralText">Hey </span>
            <span className="userName">{discordName}</span>
            <span className="citrusWrappedGeneralText">, in 2024, you played </span>
            <span className="statistic">{totalGames}</span>
            <span className="citrusWrappedGeneralText"> matches of Super Mario Strikers for a total of </span>
            <span className="statistic">{totalHours}</span>
            <span className="citrusWrappedGeneralText"> hours!</span>
            <br></br>
            <br></br>
            {buildStadiumWinComponent({
                props: {
                    stadiumColor,
                    stadiumName,
                    stadiumWinRate,
                    globalWinPercentage,
                }
            })}
            <br></br>
            <span className="citrusWrappedGeneralText">Your most used captain was </span>
            <span style={{ color: captainColor, fontWeight: "bold" }}>{captainName}</span>
            <span className="citrusWrappedGeneralText"> and your most used sidekick was </span>
            <span style={{ color: sidekickColor, fontWeight: "bold" }}>{sidekickName}</span>
            <br></br>
            <br></br>
            <span className="citrusWrappedGeneralText">Your most played against opponent was </span>
            <span style={{ color: "#62C6F2", fontWeight: "bold" }}>{headToHeadObj["OpponentDiscordGlobalName"]}</span>
            <span className="citrusWrappedGeneralText"> with </span>
            <span className="statistic">{headToHeadObj["TotalMatchesPlayedAgainstEachOther"]}</span>
            <span className="citrusWrappedGeneralText"> matches. You won </span>
            <span className="statistic">{headToHeadObj["WinsByUs"]} of the {headToHeadObj["TotalMatchesPlayedAgainstEachOther"]}</span>
            <span className="citrusWrappedGeneralText"> matches, coming in at a </span>
            <span className="statistic">{(parseFloat(headToHeadObj["WinsByUs"]) / parseFloat(headToHeadObj["TotalMatchesPlayedAgainstEachOther"]) * 100).toFixed(2)}%</span>
            <span className="citrusWrappedGeneralText"> win rate against them.</span>
        </div>
    )
}


// Ripped directly from Slippi Wrapped
const copyToClipboard = (contentRef, isChrome) =>
    toBlob(contentRef)
        .then(blob => {
            if (!blob) return null;
            const type = blob.type;
            if (isChrome) {
                navigator.clipboard.write([
                    new window.ClipboardItem({ [type]: blob })
                ]);
            }
            return blob;
        })
        .catch((err) => {
            console.log('Error rendering image:', err);
            return null;
        });

const downloadImage = (contentRef) => {
    toBlob(contentRef)
        .then(blob => {
            if (!blob) return null;
            const screenshotURL = URL.createObjectURL(blob);
            let tempLink = document.createElement('a');
            tempLink.href = screenshotURL;
            tempLink.setAttribute('download', 'smsWrapped2024.png');
            tempLink.click();
        })
        .catch((err) => {
            console.log('Error rendering image:', err);
            return null;
        });
}

const doStuff = (context) => {
    setTimeout(() => {
        document.getElementById("copyToClipboardButton").innerText = "Copied!"
    }, 100)
    copyToClipboard(document.getElementById("screenshotDiv"), isChrome)
    setTimeout(() => {
        document.getElementById("copyToClipboardButton").innerText = "Copy to Clipboard"
    }, 5000)
}

const SMSWrapped = () => {
    const [discordAccountInfo, setDiscordAccountInfo] = useState(undefined);
    const [discordId, setDiscordId] = useState("");
    const [discordName, setDiscordName] = useState("");
    const [userData, setUserData] = useState(undefined);
    const [captainName, setCaptainName] = useState("");
    const [captainColor, setCaptainColor] = useState("white");
    const [sidekickName, setSidekickName] = useState("");
    const [sidekickColor, setSidekickColor] = useState("white");
    const [stadiumName, setStadiumName] = useState("")
    const [stadiumColor, setStadiumColor] = useState("white");
    const [stadiumWinRate, setStadiumWinRate] = useState(0);
    const [totalGames, setTotalGames] = useState(0);
    const [totalGamesWon, setTotalGamesWon] = useState(0);
    const [globalWinPercentage, setGlobalWinPercentage] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [totalHours, setTotalHours] = useState(0);
    const [headToHeadObj, setHeadToHeadObj] = useState({})

    useEffect(() => {
        setDiscordAccountInfo(JSON.parse(localStorage.getItem(DISCORD_ACC_KEY)));
        //setDiscordId("756535384686461008")
        setDiscordId(discordAccountInfo ? discordAccountInfo["id"].toString() : undefined)
        if (discordId) {
            setDiscordName(discordAccountInfo["global_name"])
            setUserData(Object.entries(smsWrapped).find((entry) => entry[0] === discordId)[1]);
            if (userData) {
                setCaptainName(captainIDToName(userData["mostUsedCaptainId"][0]));
                setCaptainColor(captainIDToColor[userData["mostUsedCaptainId"][0]]);
                setSidekickName(sidekickIDToName(userData["mostUsedSidekick"][0]));
                setSidekickColor(sidekickIDToColor[userData["mostUsedSidekick"][0]]);
                setStadiumName(stadiumIDToName(userData["stadiumWinningResult"][0]));
                setStadiumColor(stadiumIDToColor[userData["stadiumWinningResult"][0]]);
                setTotalGames(parseInt(userData["totalGames"]));
                setTotalGamesWon(parseInt(userData["totalGamesWon"]));
                setStadiumWinRate((parseFloat(userData["stadiumWinningResult"][1]) / parseFloat(totalGames) * 100).toFixed(2))
                setGlobalWinPercentage(((totalGamesWon / totalGames) * 100).toFixed(2));
                setTotalSeconds(parseFloat(userData["totalSeconds"]));
                setTotalHours((totalSeconds / 3600).toFixed(2));
                setHeadToHeadObj(userData["headToHeadResult"][1])
            }
        }
    }, [discordId, userData, totalHours])

    return (
        <div>
            <SMSWrappedBannerInfo></SMSWrappedBannerInfo>
            <div className="columns">
                <div className="column is-12">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-half" id="screenshotDiv">
                                <div className="box has-text-centered" id="citrusWrappedInfoBox" style={{ borderRadius: '15px', border: '2px solid white' }}>
                                    <h1 className="title" id="citrusWrappedHeader">SMS Wrapped 2024</h1>
                                    {discordId ? (
                                        userData ? (
                                            <SMSWrappedUserInfo props={{
                                                discordName,
                                                totalGames,
                                                totalHours,
                                                stadiumColor,
                                                stadiumName,
                                                captainColor,
                                                captainName,
                                                sidekickColor,
                                                sidekickName,
                                                stadiumWinRate,
                                                globalWinPercentage,
                                                headToHeadObj
                                            }}></SMSWrappedUserInfo>
                                        ) : (
                                            <NoUserDatafound></NoUserDatafound>
                                        )
                                    ) : (<LogInForWrapped></LogInForWrapped>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {discordId && userData ? (
                <div className="columns">
                    <div className="column is-12">
                        <div className="columns is-centered">
                            <div className="column is-4"></div>
                            <div className="column is-4">
                                <div className="imageButtonActionContainer">
                                    <button className="button" id="copyToClipboardButton" onClick={() => doStuff(this)}>Copy to Clipboard</button>
                                    <button className="button" onClick={() => downloadImage(document.getElementById("screenshotDiv"))}>Download Image</button>
                                </div>
                            </div>
                            <div className="column is-4"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>

    )
};

export default SMSWrapped;