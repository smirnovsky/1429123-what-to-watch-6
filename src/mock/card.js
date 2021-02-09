import {nanoid} from 'nanoid';

const ID_LENGTH = 10;

export const generateCard = () => {
  return {
    id: nanoid(ID_LENGTH),
    titleCard: `The Grand Budapest Hotel`,
    posterAltCard: `The Grand Budapest Hotel`,
    posterCard: `img/bohemian-rhapsody.jpg`
  };
};
