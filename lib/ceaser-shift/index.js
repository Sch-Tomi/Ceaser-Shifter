'use strict';

class ceaserShift {
    constructor() {
        this._keys = {}
        this._shifts = {}
    }

    find(key) {
        if (key in this._keys) {
            return this._shifts[this._keys[key]]
        } else {
            return this._generate(key)
        }
    }

    _generate(key) {
        this._keys[key] = parseInt(this._key_hash(key))
        this._shifts[this._keys[key]] = this._shift(this._keys[key])

        return this._shifts[this._keys[key]]
    }

    _key_hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += i + key.charCodeAt(i);
        }
        return hash
    }

    _shift(key) {

        // you can comment this line
        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        for (var i = 0; i < parseInt(key) % 26; i++) {
            var last = abc.pop()
            abc.unshift(last)
        }

        return abc;

    }

}

module.exports = ceaserShift
