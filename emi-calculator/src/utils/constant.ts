export const INPUT_FIELDS = {
    principle : {
        lable : "Loan Amount",
        min : 10000,
        max : 10000000,
        defaultValue : 100000,
    }, 
    rateOfInterest : {
        lable : "Rate of Interest (p.a)",
        min : 1,
        max : 100,
        defaultValue : 10,
    }, 
    tenure : {
        lable : "Loan Tenure",
        min : 1,
        max : 30,
        defaultValue : 1,
    }
}

export const COLORS = ["#36A2EB", "#FF6384"];