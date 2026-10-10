const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AQ.Ab8RN6LFEsJr31TWWMMED8sPPuueW86wQXKHG4Yyr6WeXDQn3w';
const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-3.8-flash'];

app.use(express.json());

function buildGeminiPrompt(topicName) {
  return `Create a comprehensive learning roadmap for ${topicName}. Return ONLY valid JSON with this exact schema:\n{\n  "courseTitle": "<Course Title>",\n  "category": "<Category>",\n  "modules": [\n    {\n      "phase": "Week 1: Fundamentals",\n      "day": "Day 1",\n      "topic": "<Topic>",\n      "objective": "<Learning objective>",\n      "codeDeliverable": "<Practical coding task>"\n    }\n  ]\n}\nRules:\n- Use 10 to 14 daily modules.\n- Include a realistic progression from beginner to project-ready.\n- Every module must contain phase, day, topic, objective, and codeDeliverable.\n- The course title should include the topic name.\n- The category should be concise, such as Programming, Data, Cloud & DevOps, Security, AI, Automation, or UX.\n- Output parseable JSON only.\n- Do not wrap the response in markdown fences.`;
}

function normalizeModule(moduleData) {
  return {
    phase: moduleData.phase || 'Week 1: Fundamentals',
    day: moduleData.day || 'Day 1',
    topic: moduleData.topic || 'Custom topic',
    objective: moduleData.objective || 'Complete the learning objective for this module.',
    codeDeliverable: moduleData.codeDeliverable || moduleData.deliverable || 'Build a small practical code artifact.'
  };
}

app.post('/api/generate-course', async (req, res) => {
  const topicName = String(req.body?.topicName || '').trim();

  if (!topicName) {
    return res.status(400).json({ error: 'Please enter a skill name before generating the syllabus.' });
  }

  let lastError = null;

  for (const modelName of GEMINI_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{ text: buildGeminiPrompt(topicName) }]
          }],
          generationConfig: {
            responseMimeType: 'application/json'
          }
        })
      });

      const rawText = await response.text();

      if (response.ok) {
        const payload = JSON.parse(rawText);
        const generatedText = payload?.candidates?.[0]?.content?.parts?.map(part => part.text).join('') || '';
        const cleanJson = generatedText.replace(/```json|```/gi, '').trim();

        if (!cleanJson) {
          return res.status(500).json({ error: 'The Gemini API returned no valid course data.' });
        }

        const parsed = JSON.parse(cleanJson);
        if (!parsed || !Array.isArray(parsed.modules) || parsed.modules.length === 0) {
          return res.status(500).json({ error: 'Invalid syllabus structure returned by Gemini.' });
        }

        const modules = parsed.modules.map(normalizeModule);
        const course = {
          title: parsed.courseTitle || parsed.title || `${topicName} Mastery (Zero to Pro)`,
          category: parsed.category || 'Technology',
          modules
        };

        return res.json(course);
      }

      lastError = rawText || `Gemini request failed for ${modelName}.`;
    } catch (error) {
      lastError = error.message || 'Gemini request failed.';
    }
  }

  return res.status(500).json({ error: lastError || 'Unable to generate the course right now.' });
});

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Skills Learning Tracker is running on http://localhost:${PORT}`);
});
