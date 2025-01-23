// types.ts 

export interface NavItems {
    name: string,
    path: string
}

export interface FormData {
    salary: string;
    currency: string;
    spendings: string;
    living: string;
    goal: string;
    target: string;
    timeline: string;
    job: string;
    preferences: string;
}

export interface BudgetPlan {
    recommended_budget: {
        essentials: string;
        savings: string;
        discretionary: string; // Flexible spending, rename if needed
    };
    savings_plan: {
        months: number;
        monthly_savings: number;
    };
    tips: string[];
    action_plan: string;
}