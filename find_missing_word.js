#!/usr/bin/env node

var bip39 = require('bip39')
var wordlist = require('./wordlists/en.json')

var words = process.argv.slice()
words.shift()
words.shift()

for (var position = 0; position <= words.length; position++) {
    for (var wordnumber = 0; wordnumber < wordlist.length; wordnumber++) {
    	var candidate_words = words.slice()
    	candidate_words.splice(position, 0, wordlist[wordnumber])
    	var candidate = candidate_words.join(" ")
    	var valid = bip39.validateMnemonic(candidate)

    	if (valid) {
    		console.log("Valid reconstructed mnemonic: " + candidate)
    	}
    }
}