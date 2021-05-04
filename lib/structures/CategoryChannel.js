"use strict";

const Collection = require("../util/Collection");
const GuildChannel = require("./GuildChannel");

/**
* Represents a guild category channel. See GuildChannel for more properties and methods.
* @extends GuildChannel
* @prop {Collection<GuildChannel>} channels A collection of guild channels that are part of this category
*/
class CategoryChannel extends GuildChannel {
    get channels() {
        throw new Error('Not implemented');
    }
}

module.exports = CategoryChannel;
