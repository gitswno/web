(() => {
  let cl = console.log,
  dw = x => document.write(x);
  let i = 5;
  switch (i) {
    case 5:
      cl(i);
      break;
    default:
      cl('..');
    }
  })()