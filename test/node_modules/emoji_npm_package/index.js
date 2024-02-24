import emojiDictionary from 'emoji-dictionary';

export function generateEmoji() {
    const emojis = emojiDictionary.names;
    const randomIndex = Math.floor(Math.random() * emojis.length);
    
    return emojiDictionary.getUnicode(emojis[randomIndex])

}

