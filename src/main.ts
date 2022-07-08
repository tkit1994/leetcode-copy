import axios from "axios";

async function getActiveSessionID() {
    let data = JSON.stringify({
        operationName: "userStatusGlobal",
        variables: {},
        query: "query userStatusGlobal {\n  userStatus {\n    isSignedIn\n    isAdmin\n    isStaff\n    isSuperuser\n    isTranslator\n    isVerified\n    isPhoneVerified\n    isWechatVerified\n    checkedInToday\n    username\n    realName\n    userSlug\n    groups\n    avatar\n    optedIn\n    requestRegion\n    region\n    socketToken\n    activeSessionId\n    permissions\n    completedFeatureGuides\n    useTranslation\n    accountStatus {\n      isFrozen\n      inactiveAfter\n      __typename\n    }\n    __typename\n  }\n}\n",
    });
    let resp = await axios.post("https://leetcode.cn/graphql/noj-go", data, {
        withCredentials: true,
        headers: {
            "content-type": "application/json",
        },
    });
    return resp.data["data"]["userStatus"]["activeSessionId"];
}

async function getQuestionID() {
    let div = document.querySelector("div.active__2qli")!;
    let id = div.getAttribute("data-question-id");
    return id;
}
async function ButtonClickAction() {
    let sessionID = await getActiveSessionID();
    let questionID = await getQuestionID();
    let lang_key = `${sessionID}_${questionID}_lang`;
    let lang: String = JSON.parse(localStorage.getItem(lang_key)!) || "cpp";
    let code_key = `${sessionID}_${questionID}_${lang}_code`;
    let code = JSON.parse(localStorage.getItem(code_key)!);

    navigator.clipboard.writeText(code);
}

function addBtn() {
    let zNode = document.createElement("div");
    zNode.innerHTML =
        '<button id="myButton" type="button">' + "CopyCode</button>";
    zNode.setAttribute("id", "myContainer");
    let tmp = document.querySelector("div.second-section-container__2cAh")!;
    tmp.appendChild(zNode);
    //--- Activate the newly added button.
    document
        .getElementById("myButton")!
        .addEventListener("click", ButtonClickAction, false);
}
window.addEventListener(
    "load",
    function () {
        addBtn();
    },
    false
);
export {};
