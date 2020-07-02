let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};


let informations = {
  1: {
    id: '1',
    label: 'Purificateur d air connecté',
    mac_address: 'AC-16-2D-02-C8-19',
    serial_number: "577683763836",
    model: "PR700KL",
  },
};

let alertes = {
  1: {
    id: '3',
    label: 'Batterie detériorée',
  },
};

let batterie = {
  1: {
    id: '1',
    level: '97%',
  },
};

let task = {
  1: {
    id: '2',
    label: '1H30 restante dans la Piece "SALON"',
  },
};


let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};


export default {
  users,
  messages,
  informations,
  batterie,
  task,
  alertes,
};
