// todo: detect if the user is logged in or not
// if not, prompt them to log in
// if so, load the user's data
// player will be able to pick a campaign
// player will be able to create a new campaign

let userId = null;
let campaigns = {};
let activeCampaign = null;

class Campaign {
    constructor(campaignId, campaignJson) {
        this.campaignId = campaignId;
        this.campaignJson = campaignJson;
    }

    layCampaignOut() {
        // possibly a new campaign if the campaignId is null
        if (this.campaignId === null)
        {
            this.campaignId = 1;
            // todo get incremented campaign id from server
            campaigns[this.campaignId] = 22
        }
    }

    promptEditCharacter(characterJson) {
        // possibly a new character if the characterJson is null
        this.characterJson = characterJson;
    }

    saveEditCharacter() {
        // save edit character to the object property and then trigger saveCampaign()
        this.saveCampaign();
    }

    saveCampaign() {
        // save the campaign to the server
        let campaignJson = {
            "name": "The Campaign",
        };
    }

    loadCampaign() {
        // load the campaign from the server
    }


}