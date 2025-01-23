import OpenAI from "openai";
import { BudgetPlan, FormData } from "./types";
import.meta.env;

const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

class BudgetPlannerAI {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            baseURL: endpoint,
            apiKey: import.meta.env.VITE_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });
    }

    async generateBudgetPlan(formData: FormData): Promise<BudgetPlan> {
        const prompt = `
      You are a financial advisor. Based on the following user information, generate a personalized budget plan.

      User Information:
      - Monthly Salary: ${formData.salary}
      - Currency: ${formData.currency}
      - Monthly Spendings: ${formData.spendings}
      - Living Situation: ${formData.living}
      - Savings Goal: ${formData.goal}
      - Desired Savings Amount: ${formData.target}
      - Target Timeline: ${formData.timeline} months
      - Job Type: ${formData.job}
      - Preferences: ${formData.preferences}

      Output the budget plan in the following JSON format: (ONLY IN THIS FORMAT REGARDLESS OF ANY ISSUES)
      {
        "recommended_budget": {
            "essentials": "amount in currency",
            "savings": "amount in currency",
            "discretionary": "amount in currency"
        },
        "savings_plan": {
            "months": amount of months,
            "monthly_savings": amount in currency"
        },
        "tips": ["tip 1", "tip 2", "tip 3"],
        "action_plan": "A 200 words minimum paragraph describing the recommended action plan."
    }
        make sure to use the currency that is provided to you, so if its PLN use PLN, if USD use USD, and so on.
    `;

        try {
            const response = await this.client.chat.completions.create({
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: prompt },
                ],
                temperature: 0.7,
                top_p: 1.0,
                max_tokens: 500,
                model: modelName,
            });

            const result = response.choices[0]?.message?.content || "{}";
            const cleanedContent = result.replace(/```json|```/g, "").trim();

            const parsedResponse: BudgetPlan = JSON.parse(cleanedContent);


            // const recommendedBudget = parsedResponse.recommended_budget;
            // const tips = parsedResponse.tips;
            // const actionPlan = parsedResponse.action_plan;

            // console.log(cleanedContent);

            // console.log("Recommended Budget:", recommendedBudget);
            // console.log("Tips:", tips);
            // console.log("Action Plan:", actionPlan);

            return parsedResponse;
        } catch (err) {
            console.error("Error generating budget plan:", err);
            throw new Error("Failed to generate budget plan");
        }
    }
}

export default BudgetPlannerAI;