module.exports = rawRequest => {
  const pattern = /(?<method>[A-Z]+)\s(?<path>.)/;

  const [, body] = rawRequest.split('\r\n\r\n');



  return { ...rawRequest.match(pattern).groups, body };
};

//  /(?<name>\w+)@(?<host>\w+\.\w+)/;
// (?<method>[A-Z]+)\s(?<path>.\S*).*\n(?<body>.+)
