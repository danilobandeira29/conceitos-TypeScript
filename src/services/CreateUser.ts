/**
 * Aprendi:
 * 1. Tipagem de parâmetros de funções
 * 2. Tipagem de um conjunto de dados ou objeto(principalmente)
 *     - utilizando o interface
 * 
 * 3. Tipagem variada
 *     - posso ter um array que pode receber string ou number Array<string | number>
 * 
 * 4. Tipagem de variável que não é obrigatória
 *     - name?: string
 * 
 */
interface TechObj{
  title: string;
  experience: number;
}

interface CreateUserData{
  name: string;
  email: string;
  password: string;
  techs: Array<string | TechObj>;
}

export default function createUser({name, email, password, techs}: CreateUserData){
  const user = {
    name,
    email,
    password,
    techs,
  }

  return user;
}