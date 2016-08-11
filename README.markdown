# bip39_missing_word

Reconstructs a seed from a backup mnemonic with ONE missing word, assuming the other words are in the correct order.

For example, with the following mnemonic:

    regret stay visit pride feel whip

this command:

    ./find_missing_word.js regret stay pride feel whip

produces this output:

    Valid reconstructed mnemonic: abandon regret stay pride feel whip
    Valid reconstructed mnemonic: ability regret stay pride feel whip
    Valid reconstructed mnemonic: absorb regret stay pride feel whip
    Valid reconstructed mnemonic: abstract regret stay pride feel whip
    Valid reconstructed mnemonic: achieve regret stay pride feel whip
    Valid reconstructed mnemonic: acoustic regret stay pride feel whip
    Valid reconstructed mnemonic: acquire regret stay pride feel whip
    Valid reconstructed mnemonic: action regret stay pride feel whip
    Valid reconstructed mnemonic: actor regret stay pride feel whip
    Valid reconstructed mnemonic: addict regret stay pride feel whip
    Valid reconstructed mnemonic: address regret stay pride feel whip
    Valid reconstructed mnemonic: advance regret stay pride feel whip
    Valid reconstructed mnemonic: affair regret stay pride feel whip
    Valid reconstructed mnemonic: age regret stay pride feel whip
    Valid reconstructed mnemonic: agree regret stay pride feel whip
    ...

The number of valid seeds with vary depending on the length of the mnemonic an the specific word omitted.