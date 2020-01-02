// ----- Imports ----- //

import setup from 'client/setup';
import { nativeClient } from 'native/nativeApi';


// ----- Run ----- //

interface AdSlot {
    x: number;
    y: number;
    width: number;
    height: number;
}

function getAdSlots(): AdSlot[] {
    const advertSlots = document.getElementsByClassName('ad-slot');
    const scrollLeft = document.scrollingElement 
        ? document.scrollingElement.scrollLeft : document.body.scrollLeft;
    const scrollTop = document.scrollingElement 
        ? document.scrollingElement.scrollTop : document.body.scrollTop;

    return Array.from(advertSlots).map(adSlot => {
        const slotPosition = adSlot.getBoundingClientRect();
        return {
            x: slotPosition.left + scrollLeft,
            y: slotPosition.top + scrollTop,
            width: slotPosition.width,
            height: slotPosition.height
        }
    });
}

setup();
let adSlots = getAdSlots();

// TODO: this can be removed after adding a min-height to images
setTimeout(() => {
    adSlots = getAdSlots();
    nativeClient.insertAdverts(adSlots)
}, 2000)

const targetNode = document.querySelector('body') as Node;
const config = { attributes: true, childList: true, subtree: true };
const callback = function(): void {
    const currentAdSlots = getAdSlots();
    if (JSON.stringify(adSlots) !== JSON.stringify(currentAdSlots)) {
        // TODO: insert adverts needs refactoring to reposition ads
        // Or we may need a new function to reposition adverts
        nativeClient.insertAdverts(currentAdSlots);
        adSlots = currentAdSlots;
    }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);