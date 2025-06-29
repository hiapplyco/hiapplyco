
export interface AIPartner {
  name: string;
  logo: string;
  delay: number;
  orbit: number;
  speed: number;
}

export const aiPartnersData: AIPartner[] = [
  { name: "OpenAI", logo: "/OpenAI_dark.svg", delay: 0, orbit: 160, speed: 1.2 },
  { name: "Anthropic Claude", logo: "/claude-ai-icon.svg", delay: 0.1, orbit: 220, speed: 0.9 },
  { name: "Gemini", logo: "/gemini.svg", delay: 0.2, orbit: 300, speed: 0.65 },
  { name: "Midjourney", logo: "/midjourney.svg", delay: 0.3, orbit: 260, speed: 0.7 },
  { name: "Mistral AI", logo: "/mistral-ai_logo.svg", delay: 0.4, orbit: 190, speed: 1.3 },
  { name: "Perplexity", logo: "/perplexity.svg", delay: 0.5, orbit: 340, speed: 0.45 },
  { name: "Hugging Face", logo: "/hugging_face.svg", delay: 0.6, orbit: 240, speed: 0.8 },
  { name: "Cohere", logo: "/cohere.svg", delay: 0.7, orbit: 380, speed: 0.35 },
  { name: "xAI", logo: "/xAI (Grok)_dark.svg", delay: 0.8, orbit: 320, speed: 0.55 },
  { name: "Groq", logo: "/groq.svg", delay: 0.9, orbit: 180, speed: 1.4 },
  { name: "Deepseek", logo: "/deepseek.svg", delay: 1.0, orbit: 280, speed: 0.75 },
  { name: "Mermaid", logo: "/Mermaid_dark.svg", delay: 1.1, orbit: 400, speed: 0.4 },
  { name: "AWS", logo: "/Amazon Web Services_dark.svg", delay: 1.2, orbit: 230, speed: 0.85 },
  { name: "Google Vertex AI", logo: "/vertexai-color.svg", delay: 1.3, orbit: 360, speed: 0.5 },
  { name: "GitHub", logo: "/Github_dark.svg", delay: 1.4, orbit: 250, speed: 0.8 },
  { name: "Bedrock", logo: "/bedrock-color.svg", delay: 1.5, orbit: 310, speed: 0.6 }
];
