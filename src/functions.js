let fetch = require("node-fetch");
/**
 * Getting a bot from api
 * @param botID - Bot Client ID
 * @returns {Promise<{message: string, status: number}|{verifiedBot: *, server: string, inMain: *, testedBy: *, prefix: *, submittedOn: *, inTesting: *, totalUpvotes: *, tags: *, approvedOn: *, createdAt: *, bwebsite: *, shortDesc: *, guildsCount: *, invite: *, isApproved: *, longDesc: *, serverRaw: *, updatedAt: *}>}
 */
let getBot = async (botID) => {
    let req = await fetch(`https://botlista.pl/api/bots/${botID}`);
    req = await req.json()
    if (req.status === 404) return { status: 404, message: "Not Found" };
    req = req[0];
    if (!req) return { status: 404, message: "Not Found" };
    let bot = {
        prefix: req.prefix,
        shortDesc: req.shortDesc,
        longDesc: req.longDesc,
        server: `http://discord.gg/${req.botServer}`,
        serverRaw: req.botServer,
        bwebsite: req.botWebsite,
        invite: req.customInvite,
        tags: req.botTags,
        inTesting: req.inTesting,
        isApproved: req.isApproved,
        inMain: req.inMain,
        testedBy: req.testedBy,
        submittedOn: req.submittedOn,
        approvedOn: req.approvedOn,
        totalUpvotes: req.totalUpvotes,
        guildsCount: req.guildsCount,
        verifiedBot: req.verifiedBot,
        createdAt: req.createdAt,
        updatedAt: req.updatedAt
    };
    return bot;
};
module.exports = {
    getBot
};