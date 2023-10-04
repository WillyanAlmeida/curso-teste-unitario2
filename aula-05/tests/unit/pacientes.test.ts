import { v4 as uuidv4 } from 'uuid';
import { generateProtocolForPacient } from 'protocols-generator';
import { PacientInput } from 'validator';
import { Faker, faker } from '@faker-js/faker';
import httpStatus from 'http-status';

jest.mock("uuid", () => {
  return {
    v4: () => { return "valor simulado no mock" }
  }
});


describe(" tests", () => {
 
    it("should generate a successfull protocol for a pacient", async () => {
      const pacientData: PacientInput = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        document: faker.finance.accountNumber(),
      }
  
      const {priority, date, pacient, protocol} = generateProtocolForPacient(pacientData.firstName, pacientData.lastName, true)
   
      expect(protocol).toEqual('valor simulado no mock')
       
   
  });

})