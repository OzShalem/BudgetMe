import OpenAI from "openai";

// Define environment variables or use a hardcoded token for testing
// const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

// Define the form data type for consistency
interface FormData {
    salary: string;
    spendings: string;
    living: string;
    goal: string;
    target: string;
    timeline: string;
    job: string;
    preferences: string;
}

// Define the budget planner class
class BudgetPlannerAI {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            baseURL: endpoint,
            apiKey: "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",
            dangerouslyAllowBrowser: true
        });
    }

    async generateBudgetPlan(formData: FormData): Promise<any> {
        const prompt = `
      You are a financial advisor. Based on the following user information, generate a personalized budget plan.

      User Information:
      - Monthly Salary: ${formData.salary}
      - Monthly Spendings: ${formData.spendings}
      - Living Situation: ${formData.living}
      - Savings Goal: ${formData.goal}
      - Desired Savings Amount: ${formData.target}
      - Target Timeline: ${formData.timeline} months
      - Job Type: ${formData.job}
      - Preferences: ${formData.preferences}

      Output the budget plan in the following JSON format:
      {
        "recommended_budget": {
          "essentials": "amount in currency",
          "savings": "amount in currency",
          "discretionary": "amount in currency"
        },
        "tips": ["tip 1", "tip 2", "tip 3"],
        "action_plan": "A short paragraph describing the recommended action plan."
      }
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
            console.log(result);// Parse and return the JSON result
        } catch (err) {
            console.error("Error generating budget plan:", err);
            throw new Error("Failed to generate budget plan");
        }
    }
}

export default BudgetPlannerAI;