import { CopyBlock, dracula } from "react-code-blocks";

const pythonCode = {
  code: `# Assume openai>=1.0.0
from openai import OpenAI
# Create an OpenAI client with your KRUTRIM API KEY and endpoint
  
openai = OpenAI(
    api_key="<YOUR_KRUTRIM_API_KEY>",
    base_url="https://cloud.olakrutrim.com/v1",
)
  
chat_completion = openai.chat.completions.create(
    model="Krutrim-spectre-v2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello"}
    ]
)
print(chat_completion.choices[0].message.content)`,
};

const langchainCode = {
  code1: `# Importing OpenAIs chat capabilities from langchain_openai
  from langchain_openai import ChatOpenAI  
  
  # Importing the function to load environment variables
  from dotenv import load_dotenv  
  
  # Importing message classes for AI and human interactions
  from langchain_core.messages import HumanMessage  
  
  # Importing template and placeholder classes for chat prompts
  from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder  
  
  # Importing the os module for interacting with the operating system
  import os  
  
  # Importing json for parsing JSON strings
  import json`,

  code2: `
  load_dotenv()

  # Retrieve the API key
  api_key = os.getenv("API_KEY")  
  
  # Retrieve the base URL
  endpoint = os.getenv("BASE_URL")  
  
  # Retrieve the Model
  model_name=os.getenv("MODEL")`,

  code3: `chat = ChatOpenAI(api_key=api_key, base_url=endpoint, model=model_name)

# Set maximum token limit for the chat model
chat.max_tokens = 512

# Configure model-specific parameters
chat.model_kwargs = {"top_p": 0.8, "frequency_penalty": 0.0, "presence_penalty": 0.0, "stop":["<|eot_id|>","<|im_start|>","<|im_end|>"]}


# Define a chat prompt template with pre-defined system and human messages
prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a helpful assistant. Helps writing email in Hindi Language.",
        ),
        MessagesPlaceholder(variable_name="messages"),
    ]
)

# Chain the prompt and chat objects to form a processing pipeline
chain = prompt | chat

# Invoke the processing chain with specific messages
response = chain.invoke(
    {
        "messages": [
            HumanMessage(
                content="Please write email in proper format sender name is Virat Kohli and receipent name is Dhoni, about sad performance of RCB in IPL."
            )
        ],
    }
)

# Print the result of the chat processing
print(response.content)`,
};

const Integration = () => {
  return (
    <div>
      <div className="text-[#00C39C] text-lg md:text-xl font-semibold my-3">
        Integration
      </div>
      <div className="text-lg md:text-xl font-medium">OpenAI Compatibility</div>
      <div className="text-md md:text-lg">
        You can use the official OpenAI python SDK to run inferences:
      </div>
      <div className="max-w-full overflow-y-auto">
        <CopyBlock
          text={pythonCode.code}
          wrapLines
          showLineNumbers
          theme={dracula}
          language="python"
          codeBlock
        />
      </div>
      <div className="text-lg md:text-xl font-medium mt-3 md:mt-6">
        Langchain
      </div>
      <div className="text-sm my-2">Krutrim Sample Langchain Usage</div>
      <div className="max-w-full overflow-y-auto">
        <CopyBlock
          text={langchainCode.code1}
          wrapLines
          showLineNumbers
          theme={dracula}
          language="python"
          codeBlock
        />
      </div>
      <div className="my-3 max-w-full overflow-y-auto">
        <div className="text-sm my-2">Load Environment variables</div>
        <CopyBlock
          text={langchainCode.code2}
          wrapLines
          showLineNumbers
          theme={dracula}
          language="python"
          codeBlock
        />
      </div>
      <div className="my-3 max-w-full overflow-y-auto">
        <div className="ext-md md:text-lg">
          Chat Completion with Krutrim API
        </div>
        <div className="text-sm mb-2">
          Create a ChatOpenAI instance with specified parameters
        </div>
          <CopyBlock
            text={langchainCode.code3}
            wrapLines
            showLineNumbers
            theme={dracula}
            language="python"
            codeBlock
          />
      </div>
    </div>
  );
};

export default Integration;
