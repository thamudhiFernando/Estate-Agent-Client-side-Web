function redirectTab(idValue,elmnt) {
    var i, tabPaneContent, tabBtn;
    tabPaneContent = document.getElementsByClassName("tab-pane-content");
    for (i = 0; i < tabPaneContent.length; i++) {
        tabPaneContent[i].style.display = "none";
    }
    document.getElementById(idValue).style.display = "block";
}

document.getElementById("defaultTab").click();

