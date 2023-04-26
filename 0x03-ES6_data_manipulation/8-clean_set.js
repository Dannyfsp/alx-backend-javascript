const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((n) => {
    if (typeof n === 'string' && n.startsWith(startString)) {
      strings.push(n.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
