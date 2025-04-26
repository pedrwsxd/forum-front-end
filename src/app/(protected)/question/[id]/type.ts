interface Question {
    id: number;
    title: string;
    content: string;
    user: { name: string };
    answers: { id: number; content: string; user: { name: string } }[];
  }
  
  interface Props {
    question: Question;
    param: string;
  } 
