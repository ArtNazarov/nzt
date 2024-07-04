/*  NAZAROV TESTING LIBRARY, Nazarov A.A., 2024 */
/* types */
/* boolean function type */
type TBF = () => boolean;
/* one test with description */
type TTest = { bF : TBF, message : string }
/* array of tests */
type TTests = TTest[];
type TTestResult = { message : string, t : boolean}
type TTestResults = TTestResult[];
type TTestReport = {
    about : string,
    failed : number,
    passed : number,
    total : number,
    details : TTestResults 
}

function createEmptyReport(): TTestReport {
    const report: TTestReport = {
        about: '',
        failed: 0,
        passed: 0,
        total: 0,
        details: []
    }
    return report
}

/* interfaces */
interface INZT {
    about: string;
    tests: TTests;
    report: TTestReport;
    put(bF: TBF, message: string): void;
    do(): void;
    out():void
}
/* classes */
class NZT implements INZT {
    public about: string;
    public tests:  TTests;
    public report: TTestReport;
    
    constructor(about: string) {
        this.report = createEmptyReport()
        this.about = about
        this.tests = []
    }
    public put(bF: TBF, message: string): void {
        this.tests = [...this.tests, { bF, message }]  
    }
    public do(): void {
        this.report.about = this.about
        let counter = { failed: 0, passed: 0 }
        for (const test of this.tests) {
            let res = test.bF();
            if (res) counter.passed++; else counter.failed++;
            this.report.details = [...this.report.details, {
                message: test.message,
                t: res
            }]
        }
        this.report.failed = counter.failed
        this.report.passed = counter.passed
        this.report.total = this.report.failed + this.report.passed
         
    }
    public out():void {
        console.log('nzt testsuite testing tool http://github.com/artnazarov/nzt')
        let r = this.report;
        console.log(`TEST SUIT DESCRIPTION: ${r.about}`)
        console.log(`total: ${r.total}`)
        console.log(`passed: ${r.passed}`)
        console.log(`failed: ${r.failed}`)
        for (const res of r.details) {
            console.log(`${res.message} ${res.t ? 'passed' : 'failed'}`);
                }
            console.log('VERDICT')
            if (r.failed == 0) {
                console.log('ALL GOOD')
            } else {
                console.log('FAILED, SEE DETAILS')
            }
        }
    }

    export default NZT
