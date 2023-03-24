function layCampaignOut(campaignId)
{
    // possibly a new campaign if the campaignId is null
    if (campaignId === null)
    {
        campaignId = 1;
        // todo get incremented campaign id from server
        let campaign = new Campaign(campaignId, {});
        campaigns[campaignId] = campaign;
    }

    // campaign lay out
    campaigns[campaignId].layCampaignOut();
}

function promptEditCharacter(characterJson)
{
    // possibly a new character if the characterJson is null
}

function saveCampaign()
{
    // save the campaign to the server
    let campaignJson = {
        "name": "The Campaign",
    };
}