import Screen from "./screen.js";

/* global $ */

class MainMenu extends Screen {
    constructor(onJoin, onNew) {
        super();

        this.id = "#mainmenu";
        this.joinButton = $("#joinbtn");
        this.newButton = $("#newbtn");
        this.archiveButton = $("#archivebtn");
        this.howButton = $("#howbtn");
        this.onJoin = onJoin;
        this.onNew = onNew;

        this.setDefaultTitles();
    }

    initialize(props) {
        super.initialize(props);

        this.joinButton.on("click", this.onJoin);
        this.newButton.on("click", this.onNew);
        this.archiveButton.on("click", () => {
            window.location.href = "/archive";
        });
        this.howButton.on("click", () => {
            window.location.href = "/how-to-play";
        });
    }
}

export default MainMenu;
