import NZT from "./nzt";

let TestSuit: NZT = new NZT("My first test suite")

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