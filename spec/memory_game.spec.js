describe('tests for memory game', () => {
    const html = require('./testing.js')
    const jsdom = require('jsdom')
    const {JSDOM} = jsdom;


const flipCard = () => {
    let event = new dom.window.EventListener('click', ()=>{
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
        board();
        count++;
    })

    let element = document.getElementsByTagName('img')[arg];
    element.dispatchEvent(event);
};

beforeEach(()=>{

    dom = new JSDOM(html,{
        runScripts: "dangerously",
        resources: "usable"
    });
    document = dom.window.document;
    game = require("../src/script");
})

    it("should flip a card everytime it is clicked", ()=>{
        flipCard(0)
        expect(document.getElementsByClassName('flip').length).toBe(flipped)
    })

    it("must consists of 12 cards", ()=> {
        expect(game.cards.length).toEqual(12)
    })

    it("should show a victory message when all cards match", () => {
        expect(script.flipCard(count == 6)).toBe("NAILED IT!");
    });

})
