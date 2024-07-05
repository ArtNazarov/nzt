import { NZT, createTestEngine } from "./index";

let TestSuit: NZT = createTestEngine("My first test suite")

TestSuit.put(
    ()=> {
        return 2+2 === 1
    }, 'Test addition'
);

TestSuit.put(
    ()=> {
        return 2*2 === 4
    }, 'Test multiplication'
);

TestSuit.do();

TestSuit.out();