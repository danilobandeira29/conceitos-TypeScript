import { Request, Response} from 'express';

import createUser from './services/CreateUser';

const user = createUser({
  name: "Danilo Bandeira",
  email: "danilobandeira29@gmail.com",
  password: "4444",
  techs: [
    "NodeJS",
    "ReactJS",
    "React Native",
    {
      title: "Javascript",
      experience: 100
    }
  ],
});

export function helloWorld(request: Request, response: Response){
  return response.json(user);
}
