
async function scrapeCharacterData(characterName, realm, region) {
    try
    {
        const url = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}&fields=gear%2Cmythic_plus_scores_by_season:current`;
        const response = await fetch(url);

        const data = await response.json();
        const gear = data.gear.items;
        const mplus = data.mythic_plus_scores_by_season;
        console.log(url);

        console.log("***");
        //console.log(data);
        console.log(mplus);
        console.log("***");
        const score = mplus[0].scores.dps;
        console.log('Score: ', score)
    } catch (err) {
        console.error('Error', err.message);
    }
}

scrapeCharacterData('Corriana', 'dathremar','us');