function generateRandomQuote() {
    let quotes = {
        "Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "Albert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        "Lana Del Rey": '"Who are you? Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them ? I have.I am fucking crazy. But I am free. "',
        "Carrie Bradshaw": '"Maybe some women aren\'t meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
        "Pierce Brown": '"Man cannot be freed by the same injustice that enslaved it."',
        "Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
    };

    let authors = Object.keys(quotes);
    let randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[randomAuthor];
    document.querySelector('.quote').innerHTML = quote;
    document.querySelector('.author').innerHTML = randomAuthor;
}