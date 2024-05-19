import { Request, Response } from 'express';
import { OpenAIApi, Configuration } from 'openai';
import dotenv from 'dotenv';
import { getRecommendations } from './utils';

dotenv.config();

// OpenAIApi required config
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

// OpenAIApi initialization
const openai = new OpenAIApi(configuration);

//These arrays are to maintain the history of the conversation
const conversationContext = [];
const currentMessages = [];

// Controller function to handle chat conversation
export const generateResponse = async (req: Request, res: Response) => {
  const result = getRecommendations({ dishName: req.body.prompt });


  try {
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
